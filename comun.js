// Funciones que comparten todos los menús. Cada menú define antes (en su menu.js):
//   NEGOCIO     → nombre, whatsapp, abre/cierra (horas 0-23; si cierra < abre, cruza la medianoche),
//                 wifi {red, clave} (opcional), entrega: ['mesa'] o ['mesa', 'llevar'],
//                 emoji (para el mensaje), clave (dónde se guarda el pedido), efectos {reveal, stagger}
//   FILTROS     → [['top', '⭐ Más pedidos'], ['veg', '🌱 Vegetariano'], …] (también son las etiquetas)
//   CATEGORIAS  → [['tacos', 'Tacos'], …]
//   PLATILLOS   → { id, cat, nombre, precio, desc, img?, tags: [], desde?: true, opciones?: [grupo] }
//   grupo       → { id, nombre, tipo: 'uno' | 'varios', items: [[valor, texto, precioExtra], …] }
//
// La página usa atributos data-… (ver menus/taqueria/index.html). El QR de cada mesa lleva ?mesa=7.

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const pesos = n => '$' + n.toLocaleString('es-MX');
const porId = id => PLATILLOS.find(p => p.id === id);
const sinAcentos = t => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const hora12 = h => `${h % 12 || 12}:00 ${h < 12 ? 'AM' : 'PM'}`;
const entregas = NEGOCIO.entrega || ['mesa'];
const etiquetas = Object.fromEntries(FILTROS);
const toast = texto => {
  const t = $('[data-toast]');
  t.textContent = texto;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 2400);
};

// ---------- Mesa (viene en el QR: ?mesa=7) ----------
const pedida = parseInt(new URLSearchParams(location.search).get('mesa'), 10);
let mesa = pedida >= 1 && pedida <= 999 ? pedida : null;
if (mesa && $('[data-mesa]')) {
  $('span', $('[data-mesa]')).textContent = `Mesa ${mesa}`;
  $('[data-mesa]').hidden = false;
}

// ---------- Abierto / cerrado ----------
(() => {
  const el = $('[data-status]');
  if (!el) return;
  const h = new Date().getHours();
  const { abre, cierra } = NEGOCIO;
  const abierto = abre < cierra ? h >= abre && h < cierra : h >= abre || h < cierra;
  el.textContent = abierto ? `Abierto · cierra ${hora12(cierra)}` : `Cerrado · abre ${hora12(abre)}`;
  el.classList.toggle('is-closed', !abierto);
})();

// ---------- Botones rápidos ----------
const mesero = () => `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(mesa ? `Hola, en la mesa ${mesa} necesitamos al mesero 🙋` : 'Hola, necesitamos al mesero 🙋')}`;
if ($('[data-mesero]')) $('[data-mesero]').href = mesero();
$('[data-wifi]')?.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(NEGOCIO.wifi.clave); toast(`Contraseña copiada · Red: ${NEGOCIO.wifi.red}`); }
  catch { toast(`Red: ${NEGOCIO.wifi.red} · Contraseña: ${NEGOCIO.wifi.clave}`); }
});

// ---------- Pintar el menú (datos fijos de menu.js, no de lo que escribe el cliente) ----------
const menu = $('[data-menu]');
const precioTexto = p => (p.desde ? 'Desde ' : '') + pesos(p.precio);
const etiquetasHTML = tags => tags.filter(t => etiquetas[t]).map(t => `<i class="tag tag--${t}">${etiquetas[t]}</i>`).join('');
menu.innerHTML = CATEGORIAS.map(([cat, titulo]) => {
  const items = PLATILLOS.filter(p => p.cat === cat);
  return `<section class="cat" id="${cat}" data-cat>
    <h2 class="cat-title">${titulo}</h2>
    <ul class="dishes">${items.map(p => `
      <li class="dish${p.img ? ' dish--photo' : ''}" data-dish="${p.id}" data-tags="${p.tags.join(' ')}" data-text="${sinAcentos(p.nombre + ' ' + p.desc)}">
        <button class="dish-btn" type="button" aria-label="Ver ${p.nombre}">
          ${p.img ? `<img src="assets/${p.img}" alt="" loading="lazy" width="600" height="600" />` : ''}
          <span class="dish-text">
            <strong>${p.nombre}</strong>
            <small>${p.desc}</small>
            <span class="dish-meta"><b>${precioTexto(p)}</b>${etiquetasHTML(p.tags)}</span>
          </span>
          <span class="dish-add" aria-hidden="true"><i class="fa-solid fa-plus"></i></span>
        </button>
      </li>`).join('')}
    </ul>
  </section>`;
}).join('');

const tabs = $('[data-tabs]');
tabs.innerHTML = CATEGORIAS.map(([cat, titulo]) => `<a href="#${cat}" data-tab="${cat}">${titulo}</a>`).join('');
$('[data-filters]').innerHTML = [['todos', 'Todo'], ...FILTROS]
  .map(([f, t], i) => `<button type="button" class="filter${i ? '' : ' is-on'}" data-filter="${f}" aria-pressed="${!i}">${t}</button>`).join('');

// ---------- Buscar y filtrar ----------
let filtro = 'todos';
const aplicar = () => {
  const q = sinAcentos($('[data-search]').value.trim());
  let total = 0;
  $$('[data-cat]').forEach(sec => {
    let visibles = 0;
    $$('[data-dish]', sec).forEach(li => {
      const ok = (filtro === 'todos' || li.dataset.tags.split(' ').includes(filtro)) && (!q || li.dataset.text.includes(q));
      li.hidden = !ok;
      if (ok) visibles++;
    });
    sec.hidden = !visibles;
    $(`[data-tab="${sec.id}"]`).hidden = !visibles;
    total += visibles;
  });
  $('[data-empty]').hidden = total > 0;
};
$('[data-search]').addEventListener('input', aplicar);
$$('[data-filter]').forEach(b => b.addEventListener('click', () => {
  filtro = b.dataset.filter;
  $$('[data-filter]').forEach(x => { x.classList.toggle('is-on', x === b); x.setAttribute('aria-pressed', x === b); });
  aplicar();
}));

// Pestaña activa según la sección que se está viendo
const activa = id => {
  $$('[data-tab]').forEach(a => a.classList.toggle('is-on', a.dataset.tab === id));
  const a = $(`[data-tab="${id}"]`);
  if (a) tabs.scrollTo({ left: a.offsetLeft - 16, behavior: 'smooth' });
};
const vigia = () => {
  const linea = $('.bar').getBoundingClientRect().bottom + 20;
  let actual = CATEGORIAS[0][0];
  $$('[data-cat]:not([hidden])').forEach(sec => { if (sec.getBoundingClientRect().top <= linea) actual = sec.id; });
  if (actual !== vigia.ultima) { vigia.ultima = actual; activa(actual); }
};
addEventListener('scroll', vigia, { passive: true });
vigia();

// ---------- Pedido (se guarda mientras la pestaña esté abierta) ----------
// Cada línea: { id, qty, opc: { grupo: valor | [valores] }, nota }. El precio siempre se calcula aquí.
const CLAVE = NEGOCIO.clave || 'menu-pedido';
const limpiarOpc = (p, opc) => {
  const out = {};
  (p.opciones || []).forEach(g => {
    const validos = g.items.map(i => i[0]);
    const v = opc?.[g.id];
    if (g.tipo === 'uno') out[g.id] = validos.includes(v) ? v : validos[0];
    else out[g.id] = Array.isArray(v) ? v.filter(x => validos.includes(x)) : [];
  });
  return out;
};
let pedido = [];
try { pedido = JSON.parse(sessionStorage.getItem(CLAVE)) || []; } catch {}
if (!Array.isArray(pedido)) pedido = [];
pedido = pedido.filter(l => l && porId(l.id)).map(l => ({
  id: l.id,
  qty: Math.min(Math.max(Math.floor(Number(l.qty)) || 1, 1), 50),
  opc: limpiarOpc(porId(l.id), l.opc),
  nota: typeof l.nota === 'string' ? l.nota.slice(0, 80) : '',
}));
const guardar = () => { try { sessionStorage.setItem(CLAVE, JSON.stringify(pedido)); } catch {} };

const unitario = (p, opc) => p.precio + (p.opciones || []).reduce((s, g) => {
  const elegidos = g.tipo === 'uno' ? [opc[g.id]] : opc[g.id] || [];
  return s + g.items.filter(i => elegidos.includes(i[0])).reduce((a, i) => a + i[2], 0);
}, 0);
// Texto de las opciones: la primera opción de un grupo «uno» es la normal y no se menciona
const detalle = (p, opc) => (p.opciones || []).flatMap(g => {
  const elegidos = g.tipo === 'uno' ? [opc[g.id]] : opc[g.id] || [];
  return g.items.filter(i => elegidos.includes(i[0]) && (g.tipo === 'varios' || i !== g.items[0])).map(i => (g.tipo === 'varios' ? '+ ' : '') + i[1]);
}).join(', ');
const total = () => pedido.reduce((s, l) => s + unitario(porId(l.id), l.opc) * l.qty, 0);
const piezas = () => pedido.reduce((s, l) => s + l.qty, 0);

const pintarBarra = () => {
  $('[data-open-order]').hidden = !pedido.length;
  $('[data-count]').textContent = piezas();
  $('[data-total]').textContent = pesos(total());
  document.body.classList.toggle('has-order', pedido.length > 0);
};

// ---------- Hoja de platillo ----------
const dish = $('#dish');
const dishForm = $('[data-dish-form]');
let actual = null;
let qty = 1;

const leerOpc = () => {
  const opc = {};
  (actual.opciones || []).forEach(g => {
    opc[g.id] = g.tipo === 'uno'
      ? dishForm.querySelector(`[name="o-${g.id}"]:checked`)?.value
      : $$(`[name="o-${g.id}"]:checked`, dishForm).map(i => i.value);
  });
  return limpiarOpc(actual, opc);
};
const pintarPrecio = () => {
  $('[data-qty]', dish).textContent = qty;
  $('[data-dish-total]', dish).textContent = pesos(unitario(actual, leerOpc()) * qty);
};

const abrirPlatillo = id => {
  actual = porId(id);
  qty = 1;
  const img = $('[data-dish-img]', dish);
  img.hidden = !actual.img;
  if (actual.img) img.src = `assets/${actual.img}`;
  $('[data-dish-name]', dish).textContent = actual.nombre;
  $('[data-dish-desc]', dish).textContent = actual.desc;
  $('[data-dish-tags]', dish).innerHTML = etiquetasHTML(actual.tags);
  $('[data-dish-options]', dish).innerHTML = (actual.opciones || []).map(g => `
    <fieldset class="opts">
      <legend>${g.nombre}${g.tipo === 'varios' ? ' <small>(opcional)</small>' : ''}</legend>
      ${g.items.map(([v, n, extra], i) => `
        <label class="opt">
          <input type="${g.tipo === 'uno' ? 'radio' : 'checkbox'}" name="o-${g.id}" value="${v}" ${g.tipo === 'uno' && i === 0 ? 'checked' : ''} />
          <span>${n}</span><em>${extra ? '+' + pesos(extra) : ''}</em>
        </label>`).join('')}
    </fieldset>`).join('');
  dishForm.nota.value = '';
  pintarPrecio();
  dish.showModal();
};

menu.addEventListener('click', e => {
  const li = e.target.closest('[data-dish]');
  if (li) abrirPlatillo(li.dataset.dish);
});
dishForm.addEventListener('change', pintarPrecio);
$$('[data-step]', dish).forEach(b => b.addEventListener('click', () => {
  qty = Math.min(Math.max(qty + Number(b.dataset.step), 1), 50);
  pintarPrecio();
}));
$('[data-add]', dish).addEventListener('click', ev => {
  ev.preventDefault();
  const linea = { id: actual.id, qty, opc: leerOpc(), nota: dishForm.nota.value.trim().slice(0, 80) };
  // Si ya hay uno igual (mismas opciones y nota), solo suma la cantidad
  const igual = pedido.find(l => l.id === linea.id && JSON.stringify(l.opc) === JSON.stringify(linea.opc) && l.nota === linea.nota);
  if (igual) igual.qty = Math.min(igual.qty + qty, 50);
  else pedido.push(linea);
  guardar();
  pintarBarra();
  dish.close();
  toast(`Agregado: ${qty} × ${actual.nombre}`);
});
// Cerrar al tocar fuera de la hoja
[dish, $('#order')].forEach(d => d.addEventListener('click', e => { if (e.target === d) d.close(); }));

// ---------- Hoja del pedido ----------
const order = $('#order');
const orderForm = $('[data-order-form]');

// ¿Comer aquí o para llevar? (solo si el negocio ofrece las dos)
const cajaEntrega = $('[data-entrega]', order);
if (cajaEntrega && entregas.length > 1) {
  cajaEntrega.innerHTML = `<div class="choice">
    <label><input type="radio" name="entrega" value="mesa" checked /><span><i class="fa-solid fa-chair"></i> Comer aquí</span></label>
    <label><input type="radio" name="entrega" value="llevar" /><span><i class="fa-solid fa-bag-shopping"></i> Para llevar</span></label>
  </div>`;
} else if (cajaEntrega) cajaEntrega.remove();
const modo = () => orderForm.entrega?.value || entregas[0];
const pintarModo = () => {
  const llevar = modo() === 'llevar';
  orderForm.mesa.closest('.field').hidden = llevar;
  orderForm.nombre.placeholder = llevar ? 'Para llamarte cuando esté listo' : 'Opcional';
};
orderForm.addEventListener('change', e => { if (e.target.name === 'entrega') { pintarModo(); $('.form-error', order).hidden = true; } });

const pintarPedido = () => {
  const ul = $('[data-lines]', order);
  ul.replaceChildren(...pedido.map((l, i) => {
    const p = porId(l.id);
    const li = document.createElement('li');
    li.className = 'line';
    li.innerHTML = `
      <div class="line-text"><strong></strong><small></small></div>
      <div class="stepper stepper--sm">
        <button type="button" data-q="-1" aria-label="Uno menos"><i class="fa-solid fa-minus"></i></button>
        <output></output>
        <button type="button" data-q="1" aria-label="Uno más"><i class="fa-solid fa-plus"></i></button>
      </div>
      <b class="line-price"></b>`;
    // Texto escrito por el cliente (la nota) va como texto, nunca como HTML
    $('strong', li).textContent = p.nombre;
    $('small', li).textContent = [detalle(p, l.opc), l.nota && `“${l.nota}”`].filter(Boolean).join(' · ');
    $('output', li).textContent = l.qty;
    $('.line-price', li).textContent = pesos(unitario(p, l.opc) * l.qty);
    $$('[data-q]', li).forEach(b => b.addEventListener('click', () => {
      l.qty += Number(b.dataset.q);
      if (l.qty <= 0) pedido.splice(i, 1);
      l.qty = Math.min(l.qty, 50);
      guardar();
      pintarBarra();
      if (!pedido.length) { order.close(); return; }
      pintarPedido();
    }));
    return li;
  }));
  $('[data-order-total]', order).textContent = pesos(total());
};
$('[data-open-order]').addEventListener('click', () => {
  pintarPedido();
  if (mesa && !orderForm.mesa.value) orderForm.mesa.value = mesa;
  pintarModo();
  $('.form-error', order).hidden = true;
  order.showModal();
});
$('[data-close]', order).addEventListener('click', () => order.close());

orderForm.addEventListener('submit', ev => {
  ev.preventDefault();
  const error = $('.form-error', order);
  const nombre = orderForm.nombre.value.trim().slice(0, 40);
  const llevar = modo() === 'llevar';
  const m = parseInt(orderForm.mesa.value, 10);
  if (!llevar && !(m >= 1 && m <= 999)) {
    error.textContent = 'Escribe tu número de mesa (viene en la etiqueta del QR).';
    error.hidden = false;
    orderForm.mesa.focus();
    return;
  }
  if (llevar && !nombre) {
    error.textContent = 'Escribe tu nombre para llamarte cuando esté listo.';
    error.hidden = false;
    orderForm.nombre.focus();
    return;
  }
  if (!llevar) {
    mesa = m;
    if ($('[data-mesero]')) $('[data-mesero]').href = mesero();
  }
  const lineas = pedido.map(l => {
    const p = porId(l.id);
    const extra = detalle(p, l.opc);
    return `• ${l.qty} × ${p.nombre}${extra ? ` (${extra})` : ''} — ${pesos(unitario(p, l.opc) * l.qty)}${l.nota ? `\n   Nota: ${l.nota}` : ''}`;
  });
  const partes = [`${NEGOCIO.emoji || '🧾'} Pedido ${NEGOCIO.nombre} · ${llevar ? 'Para llevar' : `Mesa ${mesa}`}`, '', ...lineas, '', `Total: ${pesos(total())}`];
  if (nombre) partes.push(`Nombre: ${nombre}`);
  window.open(`https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(partes.join('\n'))}`, '_blank', 'noopener');
  toast(llevar ? '¡Listo! Envía el mensaje en WhatsApp y te avisamos cuando esté.' : '¡Listo! Envía el mensaje en WhatsApp y te lo llevamos a la mesa.');
});

pintarBarra();
if (window.motion && NEGOCIO.efectos) {
  if (NEGOCIO.efectos.reveal) motion.reveal(NEGOCIO.efectos.reveal);
  if (NEGOCIO.efectos.stagger) motion.stagger(NEGOCIO.efectos.stagger);
}
