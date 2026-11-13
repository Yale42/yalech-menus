// La Lumbre · menú digital. Todo lo que cambia de un negocio a otro está en esta primera parte.
const NEGOCIO = {
  nombre: 'La Lumbre',
  whatsapp: '520000000000', // a dónde llegan los pedidos y los llamados al mesero
  abre: 13, // 1:00 PM
  cierra: 2, // 2:00 AM del día siguiente
  wifi: { red: 'LaLumbre-Clientes', clave: 'tacos2027' },
};

// Opciones que comparten los tacos (precio extra en pesos)
const TACO = [
  { id: 'tortilla', nombre: 'Tortilla', tipo: 'uno', items: [['maiz', 'Maíz', 0], ['harina', 'Harina', 4]] },
  { id: 'extras', nombre: 'Extras', tipo: 'varios', items: [['queso', 'Queso', 12], ['aguacate', 'Aguacate', 15], ['pina', 'Piña', 5]] },
];
const AGUA = [{ id: 'tamano', nombre: 'Tamaño', tipo: 'uno', items: [['medio', 'Medio litro', 0], ['litro', 'Litro', 20]] }];

const CATEGORIAS = [
  ['tacos', 'Tacos'],
  ['especiales', 'Especialidades'],
  ['compartir', 'Para compartir'],
  ['bebidas', 'Bebidas'],
  ['postres', 'Postres'],
];

// tags: top = más pedido · veg = vegetariano · picante
const PLATILLOS = [
  { id: 'pastor', cat: 'tacos', nombre: 'Taco al pastor', precio: 28, img: 'pastor.jpg', tags: ['top'], desc: 'Del trompo, con piña, cebolla y cilantro.', opciones: TACO },
  { id: 'suadero', cat: 'tacos', nombre: 'Taco de suadero', precio: 30, img: 'suadero.jpg', tags: ['top'], desc: 'Suave y doradito en su jugo, con salsa roja.', opciones: TACO },
  { id: 'bistec', cat: 'tacos', nombre: 'Taco de bistec', precio: 32, img: 'bistec.jpg', tags: [], desc: 'Res a la plancha con cebolla asada.', opciones: TACO },
  { id: 'campechano', cat: 'tacos', nombre: 'Taco campechano', precio: 34, img: 'campechanos.jpg', tags: [], desc: 'Bistec con longaniza y chicharrón.', opciones: TACO },
  { id: 'costra', cat: 'tacos', nombre: 'Costra de queso', precio: 55, tags: ['top'], desc: 'Queso dorado y crujiente como tortilla, relleno de pastor.' },
  { id: 'diabla', cat: 'tacos', nombre: 'Taco a la diabla', precio: 34, tags: ['picante'], desc: 'Pastor bañado en salsa de chile de árbol. Pica de verdad.', opciones: TACO },
  { id: 'nopal', cat: 'tacos', nombre: 'Taco de nopal asado', precio: 26, tags: ['veg'], desc: 'Nopal con queso fresco y pico de gallo.', opciones: TACO },
  { id: 'champi', cat: 'tacos', nombre: 'Champiñones con queso', precio: 32, tags: ['veg'], desc: 'Salteados con epazote y chile serrano.', opciones: TACO },

  { id: 'orden', cat: 'especiales', nombre: 'Orden de 5 al pastor', precio: 130, img: 'pastor.jpg', tags: ['top'], desc: 'Cinco tacos con su piña, cebollitas asadas y frijoles.' },
  { id: 'gringa', cat: 'especiales', nombre: 'Gringa', precio: 75, tags: [], desc: 'Tortilla de harina con pastor y mucho queso gratinado.' },
  { id: 'quesadilla', cat: 'especiales', nombre: 'Quesadilla con carne', precio: 70, tags: [], desc: 'De maíz, con queso Oaxaca y la carne que elijas.', opciones: [{ id: 'carne', nombre: 'Carne', tipo: 'uno', items: [['pastor', 'Pastor', 0], ['bistec', 'Bistec', 0], ['suadero', 'Suadero', 0]] }] },
  { id: 'volcan', cat: 'especiales', nombre: 'Volcán', precio: 45, tags: ['picante'], desc: 'Tostada con queso fundido, carne y salsa macha.' },

  { id: 'totopos', cat: 'compartir', nombre: 'Totopos con guacamole', precio: 95, img: 'totopos.jpg', tags: ['veg', 'top'], desc: 'Guacamole hecho al momento, salsas y totopos de la casa.' },
  { id: 'elote', cat: 'compartir', nombre: 'Elote asado', precio: 45, img: 'elote.jpg', tags: ['veg'], desc: 'Con mayonesa, queso cotija, chile y limón.' },
  { id: 'charros', cat: 'compartir', nombre: 'Frijoles charros', precio: 50, tags: [], desc: 'Con tocino, chorizo y chile jalapeño.' },
  { id: 'cebollitas', cat: 'compartir', nombre: 'Cebollitas asadas', precio: 35, tags: ['veg'], desc: 'Con limón y sal de grano.' },

  { id: 'fresa', cat: 'bebidas', nombre: 'Agua de fresa con crema', precio: 40, img: 'fresa.jpg', tags: ['top'], desc: 'Fresa natural licuada con un toque de crema.', opciones: AGUA },
  { id: 'horchata', cat: 'bebidas', nombre: 'Agua de horchata', precio: 35, tags: [], desc: 'De arroz con canela.', opciones: AGUA },
  { id: 'jamaica', cat: 'bebidas', nombre: 'Agua de jamaica', precio: 35, tags: [], desc: 'Natural, poco dulce.', opciones: AGUA },
  { id: 'refresco', cat: 'bebidas', nombre: 'Refresco de vidrio', precio: 30, tags: [], desc: 'Pregunta por los sabores.' },
  { id: 'margarita', cat: 'bebidas', nombre: 'Margarita', precio: 95, img: 'margarita.jpg', tags: ['picante'], desc: 'De limón, con escarchado de chile.' },
  { id: 'cerveza', cat: 'bebidas', nombre: 'Cerveza', precio: 45, tags: [], desc: 'Clara u oscura, bien fría.' },

  { id: 'flan', cat: 'postres', nombre: 'Flan napolitano', precio: 45, tags: [], desc: 'Como el de la abuela, con cajeta.' },
  { id: 'churros', cat: 'postres', nombre: 'Churros con cajeta', precio: 55, tags: [], desc: 'Tres churros recién hechos con azúcar y canela.' },
];

// ===================================================================================
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const pesos = n => '$' + n.toLocaleString('es-MX');
const porId = id => PLATILLOS.find(p => p.id === id);
const sinAcentos = t => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const toast = texto => {
  const t = $('[data-toast]');
  t.textContent = texto;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 2200);
};

// ---------- Mesa (viene en el QR: ?mesa=7) ----------
const pedida = parseInt(new URLSearchParams(location.search).get('mesa'), 10);
let mesa = pedida >= 1 && pedida <= 999 ? pedida : null;
if (mesa) {
  const chip = $('[data-mesa]');
  $('span', chip).textContent = `Mesa ${mesa}`;
  chip.hidden = false;
}

// ---------- Abierto / cerrado (cruza la medianoche) ----------
(() => {
  const h = new Date().getHours();
  const abierto = h >= NEGOCIO.abre || h < NEGOCIO.cierra;
  const el = $('[data-status]');
  el.textContent = abierto ? `Abierto · cierra ${NEGOCIO.cierra}:00 AM` : `Cerrado · abre ${NEGOCIO.abre - 12}:00 PM`;
  el.classList.toggle('is-closed', !abierto);
})();

// ---------- Botones rápidos ----------
const mesero = () => `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(mesa ? `Hola, en la mesa ${mesa} necesitamos al mesero 🙋` : 'Hola, necesitamos al mesero 🙋')}`;
$('[data-mesero]').href = mesero();
$('[data-wifi]').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(NEGOCIO.wifi.clave); toast(`Contraseña copiada · Red: ${NEGOCIO.wifi.red}`); }
  catch { toast(`Red: ${NEGOCIO.wifi.red} · Contraseña: ${NEGOCIO.wifi.clave}`); }
});

// ---------- Pintar el menú ----------
const etiquetas = { top: '⭐ Más pedido', veg: '🌱 Vegetariano', picante: '🌶️ Picante' };
const menu = $('[data-menu]');
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
            <span class="dish-meta"><b>${pesos(p.precio)}</b>${p.tags.map(t => `<i class="tag tag--${t}">${etiquetas[t]}</i>`).join('')}</span>
          </span>
          <span class="dish-add" aria-hidden="true"><i class="fa-solid fa-plus"></i></span>
        </button>
      </li>`).join('')}
    </ul>
  </section>`;
}).join('');

const tabs = $('[data-tabs]');
tabs.innerHTML = CATEGORIAS.map(([cat, titulo]) => `<a href="#${cat}" data-tab="${cat}">${titulo}</a>`).join('');

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
// Cada línea: { id, qty, opc: { tortilla: 'maiz', extras: ['queso'] }, nota }. El precio siempre se calcula aquí.
const CLAVE = 'lumbre-pedido';
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
const detalle = (p, opc) => (p.opciones || []).flatMap(g => {
  const elegidos = g.tipo === 'uno' ? [opc[g.id]] : opc[g.id] || [];
  return g.items.filter(i => elegidos.includes(i[0]) && (g.tipo === 'varios' || i !== g.items[0])).map(i => (g.tipo === 'varios' ? '+ ' : '') + i[1]);
}).join(', ');
const total = () => pedido.reduce((s, l) => s + unitario(porId(l.id), l.opc) * l.qty, 0);
const piezas = () => pedido.reduce((s, l) => s + l.qty, 0);

const pintarBarra = () => {
  const bar = $('[data-open-order]');
  bar.hidden = !pedido.length;
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
  $('[data-dish-tags]', dish).innerHTML = actual.tags.map(t => `<i class="tag tag--${t}">${etiquetas[t]}</i>`).join('');
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
  $('.form-error', order).hidden = true;
  order.showModal();
});
$('[data-close]', order).addEventListener('click', () => order.close());

orderForm.addEventListener('submit', ev => {
  ev.preventDefault();
  const error = $('.form-error', order);
  const m = parseInt(orderForm.mesa.value, 10);
  if (!(m >= 1 && m <= 999)) {
    error.textContent = 'Escribe tu número de mesa (viene en la etiqueta del QR).';
    error.hidden = false;
    orderForm.mesa.focus();
    return;
  }
  mesa = m;
  $('[data-mesero]').href = mesero();
  const nombre = orderForm.nombre.value.trim().slice(0, 40);
  const lineas = pedido.map(l => {
    const p = porId(l.id);
    const extra = detalle(p, l.opc);
    return `• ${l.qty} × ${p.nombre}${extra ? ` (${extra})` : ''} — ${pesos(unitario(p, l.opc) * l.qty)}${l.nota ? `\n   Nota: ${l.nota}` : ''}`;
  });
  const partes = [`🔥 Pedido ${NEGOCIO.nombre} · Mesa ${mesa}`, '', ...lineas, '', `Total: ${pesos(total())}`];
  if (nombre) partes.push(`Nombre: ${nombre}`);
  const msg = partes.join('\n');
  window.open(`https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  toast('¡Listo! Envía el mensaje en WhatsApp y te lo llevamos a la mesa.');
});

pintarBarra();
motion.reveal('.salsas, .foot');
