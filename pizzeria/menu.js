// Forno Nove · menú digital. Aquí solo van los datos del negocio; el funcionamiento está en ../comun.js.
const NEGOCIO = {
  nombre: 'Forno Nove',
  whatsapp: '520000000000',
  abre: 13, // 1:00 PM
  cierra: 23, // 11:00 PM
  wifi: { red: 'FornoNove', clave: 'margarita9' },
  entrega: ['mesa', 'llevar'],
  emoji: '🍕',
  clave: 'forno-pedido',
  efectos: { reveal: '.oven, .foot' },
};

const FILTROS = [['top', '⭐ Favoritas'], ['veg', '🌱 Vegetariana'], ['picante', '🌶️ Picante']];

// Opciones de pizza (precio extra sobre la individual)
const PIZZA = [
  { id: 'tamano', nombre: 'Tamaño', tipo: 'uno', items: [['individual', 'Individual (4 reb.)', 0], ['mediana', 'Mediana (6 reb.)', 90], ['familiar', 'Familiar (8 reb.)', 160]] },
  { id: 'orilla', nombre: 'Orilla', tipo: 'uno', items: [['normal', 'Normal', 0], ['rellena', 'Rellena de queso', 35]] },
  { id: 'extras', nombre: 'Extras', tipo: 'varios', items: [['queso', 'Queso extra', 25], ['champi', 'Champiñones', 20], ['pepperoni', 'Pepperoni', 25], ['jalapeno', 'Jalapeño', 15]] },
];

const CATEGORIAS = [
  ['pizzas', 'Pizzas'],
  ['rebanada', 'Por rebanada'],
  ['entradas', 'Entradas'],
  ['postres', 'Postres'],
  ['bebidas', 'Bebidas'],
];

const PLATILLOS = [
  { id: 'margarita', cat: 'pizzas', nombre: 'Margarita', precio: 159, desde: true, img: 'margarita.jpg', tags: ['top', 'veg'], desc: 'Jitomate San Marzano, mozzarella y albahaca.', opciones: PIZZA },
  { id: 'pepperoni', cat: 'pizzas', nombre: 'Pepperoni', precio: 169, desde: true, img: 'pepperoni.jpg', tags: ['top'], desc: 'Doble pepperoni que se dora en el horno.', opciones: PIZZA },
  { id: 'napolitana', cat: 'pizzas', nombre: 'Napolitana', precio: 175, desde: true, img: 'napolitana.jpg', tags: [], desc: 'Jitomate, ajo, orégano y aceitunas negras.', opciones: PIZZA },
  { id: 'quesos', cat: 'pizzas', nombre: 'Cuatro quesos', precio: 189, desde: true, tags: ['veg'], desc: 'Mozzarella, gorgonzola, parmesano y queso de cabra.', opciones: PIZZA },
  { id: 'diavola', cat: 'pizzas', nombre: 'Diávola', precio: 185, desde: true, tags: ['picante'], desc: 'Salami picante, chile de árbol y miel.', opciones: PIZZA },
  { id: 'pastor', cat: 'pizzas', nombre: 'Al pastor', precio: 189, desde: true, tags: ['top', 'picante'], desc: 'La de la casa: pastor, piña, cebolla y salsa verde.', opciones: PIZZA },
  { id: 'hawaiana', cat: 'pizzas', nombre: 'Hawaiana', precio: 169, desde: true, tags: [], desc: 'Sí, con piña. Y jamón de pierna.', opciones: PIZZA },

  { id: 'rebanada', cat: 'rebanada', nombre: 'Rebanada del día', precio: 49, img: 'rebanada.jpg', tags: [], desc: 'Pregunta cuál salió del horno. Solo de 1 a 5 PM.' },

  { id: 'ajo', cat: 'entradas', nombre: 'Pan de ajo', precio: 65, tags: ['veg'], desc: 'Con mantequilla de hierbas y parmesano.' },
  { id: 'caprese', cat: 'entradas', nombre: 'Ensalada caprese', precio: 110, tags: ['veg'], desc: 'Jitomate, mozzarella fresca, albahaca y aceite de oliva.' },
  { id: 'alitas', cat: 'entradas', nombre: 'Alitas al horno', precio: 145, tags: ['picante'], desc: '10 piezas con apio y aderezo.', opciones: [{ id: 'salsa', nombre: 'Salsa', tipo: 'uno', items: [['bufalo', 'Búfalo', 0], ['bbq', 'BBQ', 0], ['mango', 'Mango habanero', 0]] }] },

  { id: 'tiramisu', cat: 'postres', nombre: 'Tiramisú', precio: 85, tags: ['top'], desc: 'Con café de olla y cacao.' },
  { id: 'cannoli', cat: 'postres', nombre: 'Cannoli', precio: 60, tags: [], desc: 'Dos piezas, rellenos de ricota y pistache.' },

  { id: 'limonada', cat: 'bebidas', nombre: 'Limonada', precio: 45, tags: ['veg'], desc: 'Natural o mineral.', opciones: [{ id: 'tipo', nombre: 'Tipo', tipo: 'uno', items: [['natural', 'Natural', 0], ['mineral', 'Mineral', 0]] }] },
  { id: 'refresco', cat: 'bebidas', nombre: 'Refresco', precio: 35, tags: [], desc: 'De lata.' },
  { id: 'cerveza', cat: 'bebidas', nombre: 'Cerveza artesanal', precio: 75, tags: [], desc: 'Pregunta por las de temporada.' },
  { id: 'vino', cat: 'bebidas', nombre: 'Copa de vino tinto', precio: 110, tags: [], desc: 'Montepulciano de la casa.' },
];
