// Fonda Doña Mari · menú digital. Aquí solo van los datos del negocio; el funcionamiento está en ../comun.js.
const NEGOCIO = {
  nombre: 'Fonda Doña Mari',
  whatsapp: '520000000000',
  abre: 13, // 1:00 PM
  cierra: 18, // 6:00 PM
  entrega: ['mesa', 'llevar'],
  emoji: '🍲',
  clave: 'donamari-pedido',
  efectos: { reveal: '.board, .foot' },
};

// Menú del día: cambia solo según el día de la semana (0 = domingo). Doña Mari solo edita esta lista.
const SEMANA = [
  { dia: 'domingo', sopa: [['consome', 'Consomé de borrego']], guisado: [['mole', 'Mole poblano con pollo'], ['barbacoa', 'Barbacoa con su salsa']] },
  { dia: 'lunes', sopa: [['fideo', 'Sopa de fideo'], ['arroz', 'Arroz rojo']], guisado: [['bistec', 'Bistec a la mexicana'], ['tinga', 'Tinga de pollo'], ['chiles', 'Chiles rellenos de queso']] },
  { dia: 'martes', sopa: [['lentejas', 'Sopa de lentejas'], ['arroz', 'Arroz blanco']], guisado: [['milanesa', 'Milanesa de res'], ['albondigas', 'Albóndigas en chipotle'], ['calabacitas', 'Calabacitas con elote']] },
  { dia: 'miércoles', sopa: [['codito', 'Sopa de codito'], ['arroz', 'Arroz rojo']], guisado: [['pipian', 'Pollo en pipián'], ['costilla', 'Costilla en salsa verde'], ['nopales', 'Nopales con huevo']] },
  { dia: 'jueves', sopa: [['tortilla', 'Sopa de tortilla'], ['arroz', 'Arroz verde']], guisado: [['chiles-carne', 'Chiles rellenos de picadillo'], ['pollo-naranja', 'Pollo a la naranja'], ['rajas', 'Rajas con crema']] },
  { dia: 'viernes', sopa: [['pescado', 'Caldo de pescado'], ['arroz', 'Arroz rojo']], guisado: [['tortitas', 'Tortitas de camarón'], ['pescado-empanizado', 'Filete empanizado'], ['romeritos', 'Romeritos']] },
  { dia: 'sábado', sopa: [['pozole', 'Pozole rojo (taza)'], ['arroz', 'Arroz blanco']], guisado: [['chicharron', 'Chicharrón en salsa verde'], ['pancita', 'Pancita'], ['enfrijoladas', 'Enfrijoladas']] },
];
const HOY = SEMANA[new Date().getDay()];
const AGUA = { id: 'agua', nombre: 'Agua', tipo: 'uno', items: [['jamaica', 'Jamaica', 0], ['horchata', 'Horchata', 0], ['limon', 'Limón con chía', 0]] };

const FILTROS = [['hoy', '📅 Del día'], ['top', '⭐ Lo más pedido'], ['veg', '🌱 Sin carne']];

const CATEGORIAS = [
  ['corrida', `Comida corrida · ${HOY.dia}`],
  ['carta', 'A la carta'],
  ['antojitos', 'Antojitos'],
  ['bebidas', 'Aguas y postres'],
];

const PLATILLOS = [
  { id: 'corrida', cat: 'corrida', nombre: 'Comida corrida completa', precio: 95, tags: ['hoy', 'top'], desc: 'Sopa, guisado con arroz y frijoles, tortillas y agua del día.', opciones: [
    { id: 'sopa', nombre: 'Sopa', tipo: 'uno', items: HOY.sopa.map(([v, n]) => [v, n, 0]) },
    { id: 'guisado', nombre: 'Guisado', tipo: 'uno', items: HOY.guisado.map(([v, n]) => [v, n, 0]) },
    AGUA,
    { id: 'postre', nombre: 'Agrégale', tipo: 'varios', items: [['postre', 'Postre del día', 20]] },
  ] },
  { id: 'medio', cat: 'corrida', nombre: 'Media corrida', precio: 70, tags: ['hoy'], desc: 'Guisado con arroz y frijoles, tortillas y agua.', opciones: [
    { id: 'guisado', nombre: 'Guisado', tipo: 'uno', items: HOY.guisado.map(([v, n]) => [v, n, 0]) },
    AGUA,
  ] },

  { id: 'pechuga', cat: 'carta', nombre: 'Pechuga asada', precio: 110, tags: [], desc: 'Con ensalada, arroz y frijoles.' },
  { id: 'enchiladas', cat: 'carta', nombre: 'Enchiladas', precio: 90, tags: ['top'], desc: 'Cuatro, rellenas de pollo, con crema y queso.', opciones: [{ id: 'salsa', nombre: 'Salsa', tipo: 'uno', items: [['verdes', 'Verdes', 0], ['rojas', 'Rojas', 0], ['mole', 'De mole', 10]] }] },
  { id: 'huevos', cat: 'carta', nombre: 'Huevos al gusto', precio: 70, tags: ['veg'], desc: 'Con frijoles y tortillas.', opciones: [{ id: 'estilo', nombre: 'Estilo', tipo: 'uno', items: [['mexicana', 'A la mexicana', 0], ['rancheros', 'Rancheros', 0], ['jamon', 'Con jamón', 0]] }] },

  { id: 'quesadillas', cat: 'antojitos', nombre: 'Quesadillas de comal (3)', precio: 60, tags: ['top'], desc: 'De masa azul, hechas al momento.', opciones: [{ id: 'relleno', nombre: 'Relleno', tipo: 'uno', items: [['queso', 'Queso', 0], ['flor', 'Flor de calabaza', 0], ['huitlacoche', 'Huitlacoche', 10], ['chicharron', 'Chicharrón prensado', 0]] }] },
  { id: 'molotes', cat: 'antojitos', nombre: 'Molotes (3)', precio: 55, tags: [], desc: 'De papa con chorizo, como en Puebla.' },
  { id: 'sopes', cat: 'antojitos', nombre: 'Sopes (2)', precio: 55, tags: ['veg'], desc: 'Con frijoles, salsa, crema y queso.' },

  { id: 'agua-litro', cat: 'bebidas', nombre: 'Agua de sabor (1 litro)', precio: 35, tags: ['veg'], desc: 'Hecha hoy.', opciones: [AGUA] },
  { id: 'cafe', cat: 'bebidas', nombre: 'Café de olla', precio: 25, tags: ['veg'], desc: 'Con canela y piloncillo.' },
  { id: 'arroz-leche', cat: 'bebidas', nombre: 'Arroz con leche', precio: 30, tags: ['veg'], desc: 'Con canela y pasas.' },
  { id: 'gelatina', cat: 'bebidas', nombre: 'Gelatina de mosaico', precio: 25, tags: ['veg'], desc: 'La que les gusta a los niños.' },
];

// Pizarrón de «Hoy hay» (texto fijo de esta lista, no de lo que escribe el cliente)
(() => {
  const el = document.querySelector('[data-hoy]');
  if (!el) return;
  el.querySelector('[data-hoy-dia]').textContent = HOY.dia;
  el.querySelector('[data-hoy-sopa]').textContent = HOY.sopa.map(s => s[1]).join(' o ');
  el.querySelector('[data-hoy-guisado]').innerHTML = HOY.guisado.map(g => `<li>${g[1]}</li>`).join('');
})();
