// La Lumbre · menú digital. Aquí solo van los datos del negocio; el funcionamiento está en ../comun.js.
const NEGOCIO = {
  nombre: 'La Lumbre',
  whatsapp: '520000000000', // a dónde llegan los pedidos y los llamados al mesero
  abre: 13, // 1:00 PM
  cierra: 2, // 2:00 AM del día siguiente
  wifi: { red: 'LaLumbre-Clientes', clave: 'tacos2027' },
  entrega: ['mesa'],
  emoji: '🔥',
  clave: 'lumbre-pedido', // dónde se guarda el pedido mientras la pestaña está abierta
  efectos: { reveal: '.salsas, .foot' },
};

// Filtros arriba del menú (también son las etiquetas de cada platillo)
const FILTROS = [['top', '⭐ Más pedidos'], ['veg', '🌱 Vegetariano'], ['picante', '🌶️ Picante']];

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
