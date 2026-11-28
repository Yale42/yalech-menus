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

## Al usar un ejemplo con un cliente real

1. Copia la carpeta del ejemplo a un repositorio nuevo, junto con lo que use de `assets/`.
2. Borra lo que solo sirve para mostrar el ejemplo (la barra y el script traen un comentario que lo indica):
   - el bloque `<div class="mu-barra">` del inicio del `<body>` (barra «Ejemplo ficticio · ← Más ejemplos · Quiero uno así»);
   - la línea `<script src="…/assets/muestra.js…">` y el `<link>` a `muestra.css` del `<head>`. Sin ellas, los botones de
     WhatsApp, llamar y correo vuelven a abrir de verdad.
3. Deja `assets/errores.js`: hace que los errores de los formularios se vean igual en todos lados (el campo se marca en
   rojo, el cursor salta a él, los lectores de pantalla anuncian el aviso y se quita en cuanto la persona lo corrige).
4. Cambia los datos del negocio: WhatsApp, teléfonos, correo, dirección y horario. Las etiquetas `og:` de la vista previa
   necesitan la dirección completa del sitio (`https://…/assets/og.jpg`).
5. Si agregas íconos o tipografías, corre los programas de `assets/iconos/` y `assets/fuentes/` (abajo).

## Archivos compartidos (iguales en los 7 repos)

- `assets/muestra.js` y `muestra.css` — modo muestra: en vez de abrir WhatsApp, llamar o mandar correo al número de prueba,
  enseña lo que pasaría de verdad y ofrece «Quiero uno así». También acomoda los encabezados fijos debajo de la barra de
  ejemplo. Se configura en la etiqueta `<script>` de cada ejemplo (`data-servicio`, `data-ejemplo`, `data-para`).
- `assets/errores.js` — mismo comportamiento de errores en todos los formularios (ver el paso 3).
- `assets/iconos/actualizar.py` — recorta Font Awesome a los íconos que usa este repo (de unos 400 KB a menos de 15 KB).
  Córrelo si agregas un ícono y sale un cuadrito vacío; las instrucciones están al inicio del archivo.
- `assets/fuentes/actualizar.py` — sirve las tipografías de Google desde este mismo sitio y precarga las del texto, para que
  la página no brinque al cambiar de letra. Córrelo si una página nueva trae un `<link>` a `fonts.googleapis.com`.

## Otros archivos

- `index.html` y `estilos.css` — portada con los ejemplos (mismo estilo que el catálogo principal).
- `assets/cotizar.js` / `cotizar.css` — cotizador en 1 minuto. `assets/carrusel.js` / `carrusel.css` — señales del carrusel.
- `assets/plantillas/` — capturas que usa la portada (si cambias un menú, vuelve a tomar la suya).
- `404.html` — página de error. `_headers` — encabezados de seguridad (Netlify o Cloudflare Pages).

El catálogo completo y el link en bio están en el repositorio `yalech-web-link-in-bio`. Los enlaces hacia allá son
relativos (`../yalech-web-link-in-bio/`): funcionan igual en tu compu y en GitHub Pages mientras todos los repos vivan bajo
la misma dirección. Solo `404.html` usa la dirección completa, porque se muestra desde cualquier ruta.

Hecho a mano: HTML, CSS y JavaScript, sin herramientas de compilación. Para verlo, sirve la carpeta con
`python3 -m http.server` y abre `http://localhost:8000`.
