// Kaizen Sushi · menú digital. Aquí solo van los datos del negocio; el funcionamiento está en ../comun.js.
const NEGOCIO = {
  nombre: 'Kaizen Sushi',
  whatsapp: '520000000000',
  abre: 13, // 1:00 PM
  cierra: 23, // 11:00 PM
  wifi: { red: 'Kaizen-Invitados', clave: 'rollito123' },
  entrega: ['mesa', 'llevar'],
  emoji: '🍣',
  clave: 'kaizen-pedido',
  efectos: { reveal: '.build, .foot' },
};

const FILTROS = [['top', '⭐ Favoritos'], ['frito', '🍤 Empanizado'], ['pica', '🌶️ Picante'], ['veg', '🌱 Vegetariano']];

const EXTRAS = { id: 'extra', nombre: 'Extras', tipo: 'varios', items: [['queso', 'Queso crema extra', 12], ['aguacate', 'Aguacate extra', 15], ['anguila', 'Salsa de anguila', 10], ['tampico', 'Tampico por fuera', 20]] };
const FUERA = { id: 'fuera', nombre: 'Por fuera', tipo: 'uno', items: [['natural', 'Natural (ajonjolí)', 0], ['empanizado', 'Empanizado', 15], ['aguacate', 'Forrado de aguacate', 25]] };

const CATEGORIAS = [
  ['entradas', 'Entradas'],
  ['arma', 'Arma tu rollo'],
  ['rollos', 'Rollos de la casa'],
  ['especiales', 'Especiales'],
  ['bebidas', 'Bebidas'],
];

const PLATILLOS = [
  { id: 'edamames', cat: 'entradas', nombre: 'Edamames', precio: 75, tags: ['veg'], desc: 'Con sal de mar o enchilados.', opciones: [{ id: 'estilo', nombre: 'Estilo', tipo: 'uno', items: [['sal', 'Con sal de mar', 0], ['enchilados', 'Enchilados', 0]] }] },
  { id: 'gyozas', cat: 'entradas', nombre: 'Gyozas (5)', precio: 95, tags: ['top', 'frito'], desc: 'De cerdo, doradas y con salsa ponzu.' },
  { id: 'kushiage', cat: 'entradas', nombre: 'Kushiage de queso', precio: 85, tags: ['frito'], desc: 'Brochetas empanizadas de queso crema.' },

  { id: 'arma-tu-rollo', cat: 'arma', nombre: 'Arma tu rollo', precio: 125, desde: true, tags: ['top'], desc: 'Tú eliges qué lleva por dentro y por fuera.', opciones: [
    { id: 'base', nombre: 'Proteína', tipo: 'uno', items: [['camaron', 'Camarón', 0], ['salmon', 'Salmón', 30], ['res', 'Res', 15], ['pollo', 'Pollo teriyaki', 0], ['veg', 'Solo verduras', 0]] },
    { id: 'dentro', nombre: 'Por dentro', tipo: 'varios', items: [['queso', 'Queso crema', 0], ['aguacate', 'Aguacate', 0], ['pepino', 'Pepino', 0], ['mango', 'Mango', 10]] },
    FUERA,
    { id: 'banado', nombre: 'Bañado en', tipo: 'uno', items: [['nada', 'Nada', 0], ['anguila', 'Salsa de anguila', 0], ['spicy', 'Spicy mayo', 0], ['chipotle', 'Chipotle', 0]] },
  ] },

  { id: 'california', cat: 'rollos', nombre: 'California', precio: 115, tags: [], desc: 'Kanikama, pepino, aguacate y queso crema.', opciones: [FUERA, EXTRAS] },
  { id: 'philadelphia', cat: 'rollos', nombre: 'Philadelphia', precio: 135, tags: ['top'], desc: 'Salmón, queso crema y aguacate.', opciones: [FUERA, EXTRAS] },
  { id: 'kaizen', cat: 'rollos', nombre: 'Kaizen roll', precio: 155, tags: ['top', 'frito', 'pica'], desc: 'Camarón empanizado por dentro, tampico y spicy mayo por fuera.', opciones: [EXTRAS] },
  { id: 'mar-tierra', cat: 'rollos', nombre: 'Mar y tierra', precio: 160, tags: ['frito'], desc: 'Res y camarón, empanizado, con salsa de anguila.', opciones: [EXTRAS] },
  { id: 'veggie', cat: 'rollos', nombre: 'Veggie roll', precio: 110, tags: ['veg'], desc: 'Aguacate, pepino, zanahoria y queso crema.', opciones: [FUERA, EXTRAS] },

  { id: 'yakimeshi', cat: 'especiales', nombre: 'Yakimeshi', precio: 120, tags: [], desc: 'Arroz frito con verduras, huevo y tu proteína.', opciones: [{ id: 'base', nombre: 'Con', tipo: 'uno', items: [['pollo', 'Pollo', 0], ['res', 'Res', 15], ['camaron', 'Camarón', 25], ['mixto', 'Mixto', 30]] }] },
  { id: 'ramen', cat: 'especiales', nombre: 'Ramen picante', precio: 165, tags: ['pica'], desc: 'Caldo de cerdo, huevo marinado y chile.' },
  { id: 'nigiri', cat: 'especiales', nombre: 'Nigiri de salmón (4)', precio: 140, tags: [], desc: 'Salmón fresco sobre arroz.' },

  { id: 'te', cat: 'bebidas', nombre: 'Té verde', precio: 45, tags: ['veg'], desc: 'Caliente o frío.', opciones: [{ id: 'temp', nombre: 'Temperatura', tipo: 'uno', items: [['caliente', 'Caliente', 0], ['frio', 'Frío', 0]] }] },
  { id: 'limonada', cat: 'bebidas', nombre: 'Limonada de jengibre', precio: 55, tags: ['veg'], desc: 'Con un toque de miel.' },
  { id: 'sake', cat: 'bebidas', nombre: 'Sake', precio: 120, tags: [], desc: 'Botellita de 180 ml, caliente o frío.' },
];

// «Armar mi rollo» abre directo el platillo para armarlo (sin JavaScript, el enlace baja a la sección)
document.querySelector('[data-armar]')?.addEventListener('click', e => { e.preventDefault(); abrirPlatillo('arma-tu-rollo'); });
