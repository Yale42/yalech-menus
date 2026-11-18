# yalech · menús digitales QR

Muestrario de menús digitales de Yael González (@yalech). Cada ejemplo es un negocio ficticio, vive en su carpeta y
se puede probar en vivo: el cliente escanea el QR de su mesa, elige y manda el pedido por WhatsApp.

| Carpeta | Negocio | Lo especial |
| --- | --- | --- |
| `taqueria/` | Taquería | Estilo propio (no usa `base.css`), Wi‑Fi, llamar mesero |
| `cafeteria/` | Cafetería | En mesa o para llevar, leche y tamaño a elegir |
| `fonda/` | Fonda | Menú del día que cambia según el día de la semana, pizarrón «Hoy hay» |
| `pizzeria/` | Pizzería | Tamaños, orilla rellena, precio «desde» |
| `sushi/` | Sushi bar | «Arma tu rollo» paso a paso, para llevar |
| `mariscos/` | Marisquería | Pesca del día, nivel de picor |
| `bar/` | Bar / cantina | Letrero de neón, aviso de hora feliz que se prende solo |

## Cómo funciona

- **`comun.js`** pinta el menú y maneja buscar, filtros, la hoja de cada platillo, el pedido (se guarda mientras la
  pestaña esté abierta) y el mensaje de WhatsApp. **`base.css`** tiene la estructura; cada menú cambia colores y
  portada en su `styles.css`.
- **`menu.js`** de cada carpeta tiene solo datos: negocio, horario, WhatsApp, Wi‑Fi, filtros, categorías y platillos
  con sus opciones. Al inicio de `comun.js` está la lista de lo que acepta.
- **QR por mesa:** cada QR lleva su número (`taqueria/?mesa=7`). `qr.html` genera e imprime los de todas las mesas
  (usa `assets/qrcode.min.js`, copia local de qrcode-generator, licencia MIT).
- **WhatsApp:** los pedidos llegan a `NEGOCIO.whatsapp` (en los ejemplos es `520000000000`).

## Otros archivos

- `index.html` y `estilos.css` — portada con los ejemplos (mismo estilo que el catálogo principal).
- `assets/cotizar.js` / `cotizar.css` — cotizador en 1 minuto. `assets/carrusel.js` / `carrusel.css` — señales del carrusel.
- `assets/plantillas/` — capturas que usa la portada (si cambias un menú, vuelve a tomar la suya).
- `404.html` — página de error. `_headers` — encabezados de seguridad (Netlify o Cloudflare Pages).

El catálogo completo y el link en bio están en el repositorio `yalech-web-link-in-bio`. Los enlaces hacia allá usan
`https://yale42.github.io/yalech-web-link-in-bio/`: cámbialos por tu dominio cuando lo tengas.

Hecho a mano: HTML, CSS y JavaScript, sin herramientas de compilación. Para verlo, sirve la carpeta con
`python3 -m http.server` y abre `http://localhost:8000`.
