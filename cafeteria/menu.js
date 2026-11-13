// Brisa Café · menú digital. Aquí solo van los datos del negocio; el funcionamiento está en ../comun.js.
const NEGOCIO = {
  nombre: 'Brisa Café',
  whatsapp: '520000000000',
  abre: 7, // 7:00 AM
  cierra: 21, // 9:00 PM
  wifi: { red: 'Brisa-Invitados', clave: 'cafecito' },
  entrega: ['mesa', 'llevar'], // en mesa o para llevar
  emoji: '☕',
  clave: 'brisa-pedido',
  efectos: { reveal: '.story, .foot' },
};

const FILTROS = [['top', '⭐ Favoritos'], ['frio', '🧊 Fríos'], ['veg', '🌱 Vegetariano']];

// Opciones (precio extra en pesos)
const TAMANO = { id: 'tamano', nombre: 'Tamaño', tipo: 'uno', items: [['chico', 'Chico (8 oz)', 0], ['grande', 'Grande (12 oz)', 15]] };
const LECHE = { id: 'leche', nombre: 'Leche', tipo: 'uno', items: [['entera', 'Entera', 0], ['deslactosada', 'Deslactosada', 0], ['avena', 'Avena', 12], ['almendra', 'Almendra', 12]] };
const EXTRA = { id: 'extra', nombre: 'Extras', tipo: 'varios', items: [['shot', 'Shot extra', 15], ['vainilla', 'Jarabe de vainilla', 10], ['caramelo', 'Jarabe de caramelo', 10]] };

const CATEGORIAS = [
  ['caliente', 'Café caliente'],
  ['frios', 'Fríos'],
  ['desayunos', 'Desayunos'],
  ['pan', 'Pan y postres'],
];

const PLATILLOS = [
  { id: 'espresso', cat: 'caliente', nombre: 'Espresso', precio: 38, tags: [], desc: 'Doble, de nuestro grano de Chiapas.', opciones: [EXTRA] },
  { id: 'americano', cat: 'caliente', nombre: 'Americano', precio: 42, tags: [], desc: 'Espresso alargado con agua caliente.', opciones: [TAMANO, EXTRA] },
  { id: 'latte', cat: 'caliente', nombre: 'Latte', precio: 55, img: 'latte.jpg', tags: ['top'], desc: 'Espresso con leche cremosa y arte latte.', opciones: [TAMANO, LECHE, EXTRA] },
  { id: 'capuchino', cat: 'caliente', nombre: 'Capuchino', precio: 55, tags: [], desc: 'Más espuma, más cuerpo.', opciones: [TAMANO, LECHE, EXTRA] },
  { id: 'chai', cat: 'caliente', nombre: 'Chai latte', precio: 60, tags: ['veg'], desc: 'Té negro con especias y leche.', opciones: [TAMANO, LECHE] },
  { id: 'chocolate', cat: 'caliente', nombre: 'Chocolate de Oaxaca', precio: 50, tags: ['veg'], desc: 'Batido con canela, como en casa.', opciones: [TAMANO, LECHE] },

  { id: 'coldbrew', cat: 'frios', nombre: 'Cold brew', precio: 58, img: 'coldbrew.jpg', tags: ['top', 'frio'], desc: '18 horas en frío. Suave y sin amargor.', opciones: [TAMANO, EXTRA] },
  { id: 'iced', cat: 'frios', nombre: 'Iced latte', precio: 62, img: 'iced.jpg', tags: ['frio'], desc: 'Espresso, leche y mucho hielo.', opciones: [TAMANO, LECHE, EXTRA] },
  { id: 'frappe', cat: 'frios', nombre: 'Frappé de caramelo', precio: 72, tags: ['frio'], desc: 'Con crema batida y caramelo salado.', opciones: [LECHE] },
  { id: 'limonada', cat: 'frios', nombre: 'Limonada de pepino', precio: 45, tags: ['frio', 'veg'], desc: 'Con hierbabuena y un toque de chía.' },

  { id: 'aguacate', cat: 'desayunos', nombre: 'Toast de aguacate', precio: 110, img: 'aguacate.jpg', tags: ['top', 'veg'], desc: 'Pan de masa madre, aguacate, limón y semillas.', opciones: [{ id: 'extra', nombre: 'Agrégale', tipo: 'varios', items: [['huevo', 'Huevo pochado', 18], ['queso', 'Queso de cabra', 20]] }] },
  { id: 'huevo', cat: 'desayunos', nombre: 'Toast con huevo pochado', precio: 125, img: 'huevo.jpg', tags: [], desc: 'Dos huevos pochados, aguacate y chile quebrado.' },
  { id: 'plato', cat: 'desayunos', nombre: 'Plato Brisa', precio: 145, img: 'plato.jpg', tags: ['top'], desc: 'Huevos al gusto, aguacate, fruta de temporada y pan.', opciones: [{ id: 'huevos', nombre: 'Huevos', tipo: 'uno', items: [['revueltos', 'Revueltos', 0], ['estrellados', 'Estrellados', 0], ['pochados', 'Pochados', 0]] }] },
  { id: 'chilaquiles', cat: 'desayunos', nombre: 'Chilaquiles', precio: 120, tags: [], desc: 'Con crema, queso fresco y cebolla morada.', opciones: [{ id: 'salsa', nombre: 'Salsa', tipo: 'uno', items: [['verde', 'Verde', 0], ['roja', 'Roja', 0]] }, { id: 'extra', nombre: 'Agrégale', tipo: 'varios', items: [['pollo', 'Pollo', 25], ['huevo', 'Huevo estrellado', 18]] }] },
  { id: 'yogurt', cat: 'desayunos', nombre: 'Yogurt con granola', precio: 85, tags: ['veg'], desc: 'Granola de la casa, miel y frutos rojos.' },

  { id: 'concha', cat: 'pan', nombre: 'Concha', precio: 32, tags: ['top', 'veg'], desc: 'Recién salida del horno.', opciones: [{ id: 'sabor', nombre: 'Sabor', tipo: 'uno', items: [['vainilla', 'Vainilla', 0], ['chocolate', 'Chocolate', 0]] }] },
  { id: 'croissant', cat: 'pan', nombre: 'Croissant de almendra', precio: 55, tags: ['veg'], desc: 'Hojaldrado, relleno de crema de almendra.' },
  { id: 'galleta', cat: 'pan', nombre: 'Galleta de chispas', precio: 35, tags: ['veg'], desc: 'Grande, suave por dentro.' },
  { id: 'zanahoria', cat: 'pan', nombre: 'Pastel de zanahoria', precio: 75, tags: ['veg'], desc: 'Con nuez y betún de queso crema.' },
];
