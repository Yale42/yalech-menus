// El Muelle · menú digital. Aquí solo van los datos del negocio; el funcionamiento está en ../comun.js.
const NEGOCIO = {
  nombre: 'El Muelle',
  whatsapp: '520000000000',
  abre: 11, // 11:00 AM
  cierra: 19, // 7:00 PM
  wifi: { red: 'ElMuelle', clave: 'camaron2027' },
  entrega: ['mesa'],
  emoji: '🦐',
  clave: 'muelle-pedido',
  efectos: { reveal: '.catch, .foot' },
};

const FILTROS = [['top', '⭐ Los favoritos'], ['picante', '🌶️ Picante'], ['crudo', '🧊 Crudos']];

// Qué tan picoso (sin costo extra)
const PICOR = { id: 'picor', nombre: '¿Qué tan picoso?', tipo: 'uno', items: [['normal', 'Normal', 0], ['medio', 'Medio', 0], ['llore', 'Que llore', 0]] };

const CATEGORIAS = [
  ['aguachiles', 'Aguachiles'],
  ['cocteles', 'Cocteles y ceviches'],
  ['tostadas', 'Tostadas'],
  ['tacos', 'Tacos'],
  ['calientes', 'Platos calientes'],
  ['bebidas', 'Bebidas'],
];

const PLATILLOS = [
  { id: 'verde', cat: 'aguachiles', nombre: 'Aguachile verde', precio: 185, img: 'aguachile.jpg', tags: ['top', 'picante', 'crudo'], desc: 'Camarón crudo en limón y chile serrano, con pepino y cebolla morada.', opciones: [PICOR] },
  { id: 'negro', cat: 'aguachiles', nombre: 'Aguachile negro', precio: 195, tags: ['picante', 'crudo'], desc: 'Con salsa negra, chiltepín y aguacate.', opciones: [PICOR] },
  { id: 'rojo', cat: 'aguachiles', nombre: 'Aguachile rojo', precio: 185, tags: ['picante', 'crudo'], desc: 'Chile de árbol tostado y un toque de naranja.', opciones: [PICOR] },

  { id: 'coctel', cat: 'cocteles', nombre: 'Coctel de camarón', precio: 145, tags: ['top'], desc: 'Camarón cocido en su caldo, aguacate y galletas saladas.', opciones: [{ id: 'tamano', nombre: 'Tamaño', tipo: 'uno', items: [['chico', 'Chico', 0], ['grande', 'Grande', 60]] }] },
  { id: 'campechana', cat: 'cocteles', nombre: 'Campechana', precio: 175, tags: [], desc: 'Camarón, pulpo y ostión en salsa de la casa.' },
  { id: 'ceviche', cat: 'cocteles', nombre: 'Ceviche de pescado', precio: 135, tags: ['crudo'], desc: 'Sierra en limón con jitomate, cilantro y chile.' },

  { id: 'tceviche', cat: 'tostadas', nombre: 'Tostada de ceviche', precio: 65, tags: ['crudo'], desc: 'La clásica, con mayonesa y salsa.' },
  { id: 'tatun', cat: 'tostadas', nombre: 'Tostada de atún', precio: 85, tags: ['top', 'crudo'], desc: 'Atún fresco, salsa de soya, aguacate y poro frito.' },
  { id: 'tmarlin', cat: 'tostadas', nombre: 'Tostada de marlin', precio: 70, tags: [], desc: 'Marlin ahumado guisado con verduras.' },

  { id: 'gobernador', cat: 'tacos', nombre: 'Tacos gobernador (3)', precio: 140, img: 'gobernador.jpg', tags: ['top'], desc: 'Camarón con queso gratinado, chile poblano y cebolla.' },
  { id: 'baja', cat: 'tacos', nombre: 'Tacos de pescado (3)', precio: 125, img: 'pescado.jpg', tags: [], desc: 'Estilo Baja: capeado, col, crema de chipotle.' },
  { id: 'capeado', cat: 'tacos', nombre: 'Taco de camarón capeado', precio: 48, tags: [], desc: 'Uno, pero bien servido.' },

  { id: 'diabla', cat: 'calientes', nombre: 'Camarones a la diabla', precio: 220, img: 'camarones.jpg', tags: ['picante'], desc: 'En salsa de chiles secos, con arroz y ensalada.' },
  { id: 'mojo', cat: 'calientes', nombre: 'Camarones al mojo de ajo', precio: 220, tags: ['top'], desc: 'Dorados en mantequilla y ajo, con arroz.' },
  { id: 'filete', cat: 'calientes', nombre: 'Filete zarandeado', precio: 210, tags: [], desc: 'A las brasas, con tortillas y frijoles.' },

  { id: 'michelada', cat: 'bebidas', nombre: 'Michelada', precio: 75, tags: ['picante'], desc: 'Escarchada con chamoy y tajín.', opciones: [{ id: 'tipo', nombre: 'Estilo', tipo: 'uno', items: [['clamato', 'Con clamato', 0], ['tradicional', 'Tradicional (limón y sal)', 0]] }] },
  { id: 'cerveza', cat: 'bebidas', nombre: 'Cerveza', precio: 45, tags: [], desc: 'Bien helada.' },
  { id: 'coco', cat: 'bebidas', nombre: 'Agua de coco', precio: 50, tags: [], desc: 'Natural, servida en el coco.' },
  { id: 'mineral', cat: 'bebidas', nombre: 'Limonada mineral', precio: 40, tags: [], desc: 'Con hielo frapé.' },
];
