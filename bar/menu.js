// La Cantinita · menú digital. Aquí solo van los datos del negocio; el funcionamiento está en ../comun.js.
const NEGOCIO = {
  nombre: 'La Cantinita',
  whatsapp: '520000000000',
  abre: 14, // 2:00 PM
  cierra: 2, // 2:00 AM (cruza la medianoche)
  wifi: { red: 'Cantinita-Clientes', clave: 'salud2027' },
  entrega: ['mesa'],
  emoji: '🍻',
  clave: 'cantinita-pedido',
  efectos: { reveal: '.happy, .foot' },
};

// Hora feliz: 2×1 en cervezas y micheladas de 6:00 a 8:00 PM, de lunes a jueves
const HORA_FELIZ = { desde: 18, hasta: 20, dias: [1, 2, 3, 4] };

const FILTROS = [['top', '⭐ Favoritos'], ['pica', '🌶️ Picante'], ['sin', '🚫 Sin alcohol']];

const CHELA = { id: 'chela', nombre: 'Cerveza', tipo: 'uno', items: [['clara', 'Clara', 0], ['oscura', 'Oscura', 0], ['artesanal', 'Artesanal de la casa', 25]] };
const ESCARCHA = { id: 'escarcha', nombre: 'Escarchado', tipo: 'uno', items: [['chile', 'Chile y sal', 0], ['sal', 'Solo sal', 0], ['sin', 'Sin escarchar', 0]] };
const MEZCAL = { id: 'mezcal', nombre: 'Mezcal', tipo: 'uno', items: [['espadin', 'Espadín', 0], ['tobala', 'Tobalá', 45], ['cuish', 'Cuishe', 35]] };

const CATEGORIAS = [
  ['cocteles', 'Cócteles'],
  ['cervezas', 'Cervezas y micheladas'],
  ['mezcal', 'Mezcal y tequila'],
  ['botanas', 'Botanas'],
  ['sin-alcohol', 'Sin alcohol'],
];

const PLATILLOS = [
  { id: 'margarita', cat: 'cocteles', nombre: 'Margarita de tamarindo', precio: 120, tags: ['top', 'pica'], desc: 'Tequila, tamarindo natural y chamoy.', opciones: [ESCARCHA] },
  { id: 'paloma', cat: 'cocteles', nombre: 'Paloma de la casa', precio: 110, tags: [], desc: 'Tequila, toronja fresca y un toque de sal de gusano.' },
  { id: 'carajillo', cat: 'cocteles', nombre: 'Carajillo', precio: 130, tags: ['top'], desc: 'Licor 43 con espresso recién hecho.' },
  { id: 'mezcalita', cat: 'cocteles', nombre: 'Mezcalita de jamaica', precio: 125, tags: ['pica'], desc: 'Mezcal espadín, jamaica y chile de árbol.', opciones: [ESCARCHA] },

  { id: 'cerveza', cat: 'cervezas', nombre: 'Cerveza', precio: 55, tags: [], desc: 'Bien fría. Pregunta por las de temporada.', opciones: [CHELA] },
  { id: 'michelada', cat: 'cervezas', nombre: 'Michelada', precio: 80, tags: ['top', 'pica'], desc: 'Limón, sal, salsas y chile en polvo.', opciones: [CHELA, { id: 'estilo', nombre: 'Estilo', tipo: 'uno', items: [['clasica', 'Clásica', 0], ['clamato', 'Con clamato', 15], ['camaron', 'Con camarón', 45]] }] },
  { id: 'cubeta', cat: 'cervezas', nombre: 'Cubeta (6 cervezas)', precio: 290, tags: [], desc: 'Para compartir. Pueden ser surtidas.', opciones: [CHELA] },

  { id: 'mezcal-copa', cat: 'mezcal', nombre: 'Copita de mezcal', precio: 85, tags: ['top'], desc: 'Servido con naranja y sal de gusano.', desde: true, opciones: [MEZCAL] },
  { id: 'tequila', cat: 'mezcal', nombre: 'Caballito de tequila', precio: 75, tags: [], desc: 'Reposado, con sangrita de la casa.' },
  { id: 'flight', cat: 'mezcal', nombre: 'Degustación de mezcales', precio: 220, tags: [], desc: 'Tres copitas: espadín, tobalá y cuishe.' },

  { id: 'totopos', cat: 'botanas', nombre: 'Totopos con tres salsas', precio: 75, tags: ['top', 'pica'], desc: 'Verde, roja y de cacahuate. Hechos aquí.' },
  { id: 'esquites', cat: 'botanas', nombre: 'Esquites', precio: 65, tags: ['pica'], desc: 'Con mayonesa, queso y chile piquín.', opciones: [{ id: 'extra', nombre: 'Agrégale', tipo: 'varios', items: [['tuetano', 'Tuétano', 35], ['chicharron', 'Chicharrón', 20]] }] },
  { id: 'chicharron', cat: 'botanas', nombre: 'Chicharrón de queso', precio: 95, tags: [], desc: 'Crujiente, para compartir.' },
  { id: 'tacos-cantina', cat: 'botanas', nombre: 'Tacos de cantina (3)', precio: 110, tags: [], desc: 'Pregunta los guisos de hoy.', opciones: [{ id: 'guiso', nombre: 'Guiso', tipo: 'uno', items: [['chicharron', 'Chicharrón en salsa verde', 0], ['papa', 'Papa con chorizo', 0], ['rajas', 'Rajas con crema', 0]] }] },

  { id: 'agua', cat: 'sin-alcohol', nombre: 'Agua del día', precio: 40, tags: ['sin'], desc: 'Jamaica, horchata o tamarindo.', opciones: [{ id: 'sabor', nombre: 'Sabor', tipo: 'uno', items: [['jamaica', 'Jamaica', 0], ['horchata', 'Horchata', 0], ['tamarindo', 'Tamarindo', 0]] }] },
  { id: 'virgen', cat: 'sin-alcohol', nombre: 'Michelada virgen', precio: 60, tags: ['sin', 'pica'], desc: 'Agua mineral preparada, igual de rica.' },
  { id: 'refresco', cat: 'sin-alcohol', nombre: 'Refresco de vidrio', precio: 35, tags: ['sin'], desc: 'Bien frío.' },
];

// Aviso de la hora feliz (se calcula con la hora del teléfono del cliente)
(() => {
  const el = document.querySelector('[data-happy]');
  if (!el) return;
  const ahora = new Date();
  const h = ahora.getHours();
  const hoy = HORA_FELIZ.dias.includes(ahora.getDay());
  const fmt = x => `${x % 12 || 12}:00 ${x < 12 ? 'AM' : 'PM'}`;
  let texto;
  if (hoy && h >= HORA_FELIZ.desde && h < HORA_FELIZ.hasta) {
    texto = `¡Es hora feliz! 2×1 en cervezas y micheladas hasta las ${fmt(HORA_FELIZ.hasta)}`;
    el.classList.add('is-on');
  } else if (hoy && h < HORA_FELIZ.desde) texto = `Hoy hay hora feliz de ${fmt(HORA_FELIZ.desde)} a ${fmt(HORA_FELIZ.hasta)}: 2×1 en cervezas`;
  else texto = `Hora feliz de lunes a jueves, de ${fmt(HORA_FELIZ.desde)} a ${fmt(HORA_FELIZ.hasta)}: 2×1 en cervezas`;
  el.querySelector('span').textContent = texto;
})();
