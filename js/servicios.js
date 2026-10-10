/*
 * DATOS DE LA WEB: aquí se cambia el contenido sin tocar el diseño.
 *
 * CÓMO AÑADIR UN SERVICIO NUEVO
 * 1. Copia uno de los bloques de SERVICIOS (entre llaves { ... },) y pégalo donde quieras que salga.
 * 2. Cambia sus campos:
 *      id           texto corto sin espacios, único (por ejemplo "reservas")
 *      nombre       título de la tarjeta
 *      precio       "40 €". Si lo dejas vacío, muestra «Consultar»
 *      nota         (solo en el servicio destacado) texto pequeño bajo el precio
 *      descripcion  qué es y en qué ayuda al negocio (texto corto de la tarjeta)
 *      paraQuien    para qué negocios sirve (línea con ✔ al final de la tarjeta)
 *      icono        uno de: web, resenas, panel, contacto, menu, reserva, producto, movil, generico
 *      color        uno de: coral, teal, violeta, ambar, rojo, azul
 *      estado       "activo" (se muestra normal) | "proximamente" (sale con etiqueta «Próximamente»)
 *                   | "oculto" (no se muestra, pero queda guardado aquí)
 *      destacado    true solo para el servicio grande de arriba (solo uno)
 *
 *    Ventana emergente (opcional; sale al pulsar la tarjeta):
 *      foto         ruta de una foto real, por ejemplo "img/tarjeta-resenas.jpg" (ponla en la carpeta img/)
 *      fotoAlt      descripción de la foto para personas con lector de pantalla
 *      ilustracion  dibujo que se usa si no hay foto: resenas, panel, contacto, menu o web
 *                   (los dibujos están en js/ilustraciones.js; si no hay ni foto ni dibujo sale el icono)
 *      detalle      { que: "qué es", cliente: ["qué gana el cliente", ...], negocio: ["qué gana el negocio", ...],
 *                     niveles: [{ nombre, precio, texto }] }   <- «niveles» solo si hay varias tarifas
 * 3. Guarda el archivo y recarga la página. No hace falta nada más.
 *
 * Ejemplo de bloque (cópialo dentro de SERVICIOS, después de la última llave y con una coma):
 *
 *   {
 *     id: "reservas",
 *     nombre: "Reservas y citas online",
 *     precio: "",
 *     descripcion: "Tus clientes reservan solos desde el móvil, sin llamadas.",
 *     paraQuien: "Restaurantes, talleres y peluquerías",
 *     icono: "reserva",
 *     color: "azul",
 *     estado: "proximamente",
 *     detalle: { que: "Un calendario donde el cliente elige día y hora.", cliente: ["Reserva sin llamar"], negocio: ["Menos llamadas"] }
 *   },
 */

var SITIO = {
  marca: "Toca y Listo",              // nombre del negocio: cabecera, pie y título
  nombre: "Sergio Fernández Robledo", // persona de contacto (sección de contacto)
  lema: "NFC y webs para negocios",
  // CONTACTO OCULTO a propósito hasta que la web esté lista: con estos tres campos vacíos no se muestra
  // ningún teléfono, ni botones de llamar o de WhatsApp, ni la pregunta «¿Cómo pido información?».
  // Para activarlo, rellena los tres (el número está anotado en el README del repositorio interno):
  //   telefono        como se ve en pantalla, por ejemplo "600 000 000"
  //   telefonoEnlace  con prefijo y sin espacios, por ejemplo "+34600000000"
  //   whatsapp        solo cifras con prefijo, por ejemplo "34600000000" (déjalo vacío si no usa WhatsApp)
  telefono: "",
  telefonoEnlace: "",
  whatsapp: "",
  mensajeWhatsapp: "Hola, he visto la web de Toca y Listo y me gustaría saber más sobre vuestros servicios."
};

var SERVICIOS = [
  {
    id: "web",
    nombre: "Página web profesional",
    precio: "desde 300 €",
    nota: "web completa: 350–400 €",
    etiqueta: "Lo más completo",
    descripcion: "Desde cero o modernizando la que ya tienes. Moderna, perfecta en el móvil, con horarios, ubicación, carta y botón de WhatsApp. Que te encuentren y te elijan a ti.",
    paraQuien: "Negocios nuevos o con la web anticuada",
    icono: "web",
    color: "coral",
    estado: "activo",
    destacado: true,
    ilustracion: "web",
    detalle: {
      que: "Una web profesional para tu negocio, adaptada al móvil, con horarios, ubicación, carta o catálogo y botón de WhatsApp.",
      niveles: [
        { nombre: "Modernizamos tu web", precio: "desde 300 €", texto: "Si ya lo tienes todo (textos, fotos y contenido) pero se ve anticuada, la ponemos al día con un diseño moderno." },
        { nombre: "Web completa", precio: "350–400 €", texto: "La creamos desde cero. El precio depende de lo que nos pidas." }
      ],
      cliente: ["Se ve bien en el móvil", "Encuentra horarios, ubicación y carta", "Te escribe por WhatsApp con un toque"],
      negocio: ["Una imagen moderna y profesional", "Que te encuentren y te elijan a ti"]
    }
  },
  {
    id: "tarjeta-resenas",
    nombre: "Tarjeta de reseñas",
    precio: "15 €",
    descripcion: "Tarjeta NFC: el cliente acerca el móvil y se abre directo tu página de reseñas de Google. Sin apps, sin buscar. Más reseñas, más confianza, más clientes.",
    paraQuien: "Restaurantes, tiendas, talleres y ocio",
    icono: "resenas",
    color: "teal",
    estado: "activo",
    ilustracion: "resenas",
    detalle: {
      que: "Una tarjeta blanca con el logo de Google y el mensaje «Déjanos tu valoración», que lleva un chip NFC. El cliente solo tiene que acercar el móvil.",
      cliente: ["Se abre directamente tu página de reseñas de Google", "Sin descargar nada y sin buscar tu negocio", "Deja su opinión en segundos"],
      negocio: ["Más reseñas en Google", "Más confianza para quien te busca", "Lleva código de seguridad: nadie puede cambiar el enlace"]
    }
  },
  {
    id: "panel-resenas",
    nombre: "Panel de reseñas",
    precio: "25 €",
    descripcion: "Panel NFC para el mostrador o la mesa: acercan el móvil y te dejan la reseña en segundos. Sin pedirla, cuando están contentos.",
    paraQuien: "Mostradores, mesas y recepciones",
    icono: "panel",
    color: "violeta",
    estado: "activo",
    ilustracion: "panel",
    detalle: {
      que: "Un panel para el mostrador o la mesa, con el chip NFC y un mensaje visible que invita a dejar la reseña.",
      cliente: ["Ve el panel y acerca el móvil", "Llega directo a tu página de reseñas", "Sin tener que buscarte en Google"],
      negocio: ["Pides la opinión sin decir ni una palabra", "Justo cuando el cliente está contento", "Siempre a la vista en el mostrador, la mesa o la recepción"]
    }
  },
  {
    id: "tarjeta-personalizada",
    nombre: "Tarjeta personalizada",
    precio: "25 €",
    descripcion: "Tarjeta NFC que abre una página de contacto a tu medida: horarios, teléfono, redes, WhatsApp… Se actualiza sin cambiar la tarjeta.",
    paraQuien: "Cualquier negocio con trato directo",
    icono: "contacto",
    color: "ambar",
    estado: "activo",
    ilustracion: "contacto",
    detalle: {
      que: "Una tarjeta blanca que personalizamos con el logo y los colores de tu negocio. Al acercar el móvil se abre una página de contacto hecha a tu medida, con lo que quieras añadir.",
      cliente: ["Llama o escribe por WhatsApp con un toque", "Ve horarios, ubicación y redes en un solo sitio", "Todo lo que decidas poner en la página"],
      negocio: ["Una tarjeta de visita que no se pierde en un cajón", "La información se actualiza sin cambiar la tarjeta", "Una página creada a tu medida"]
    }
  },
  {
    id: "tarjeta-menu",
    nombre: "Tarjeta de menú",
    precio: "15 €",
    descripcion: "Tarjeta NFC en la mesa que abre tu carta o menú del día en el móvil. Siempre al día: un cambio de plato o de precio y sin reimprimir nada.",
    paraQuien: "Bares, restaurantes y cafeterías",
    icono: "menu",
    color: "rojo",
    estado: "activo",
    ilustracion: "menu",
    detalle: {
      que: "Una tarjeta para la mesa que abre tu carta o tu menú del día en el móvil del cliente.",
      cliente: ["Ve la carta o el menú del día al instante", "Siempre encuentra la versión actual"],
      negocio: ["Cambias un plato o un precio y no hay que reimprimir nada", "Una carta cuidada, con la imagen de tu negocio"]
    }
  }
];
