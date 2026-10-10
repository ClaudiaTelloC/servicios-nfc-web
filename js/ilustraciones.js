/*
 * Ilustraciones de los productos (se muestran en la ventana emergente de cada servicio).
 * Son dibujos orientativos. Cuando tengas fotos reales, ponlas en la carpeta img/ y
 * escribe su ruta en el campo «foto» del servicio (js/servicios.js): la foto sustituye al dibujo.
 */
var ILUSTRACIONES = (function () {
  "use strict";

  var SOMBRA = '<defs><filter id="sombra" x="-20%" y="-20%" width="140%" height="165%"><feDropShadow dx="0" dy="14" stdDeviation="12" flood-color="#000" flood-opacity=".35"/></filter></defs>';
  var FUENTE = 'font-family="Poppins, sans-serif"';

  /* Símbolo NFC: tres arcos que se abren hacia la derecha. */
  function nfc(x, y, escala, color) {
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + escala + ')" fill="none" stroke="' + color + '" stroke-width="4" stroke-linecap="round">' +
      '<path d="M0 -6a8 8 0 0 1 0 12"/><path d="M0 -14a16 16 0 0 1 0 28"/><path d="M0 -22a24 24 0 0 1 0 44"/></g>';
  }

  /* «G» estilizada en cuatro colores (dibujo orientativo, no el logo oficial). */
  function g(x, y, escala) {
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + escala + ')">' +
      '<circle r="24" fill="none" stroke="#ea4335" stroke-width="9" stroke-dasharray="37.7 113.1" transform="rotate(210)"/>' +
      '<circle r="24" fill="none" stroke="#fbbc05" stroke-width="9" stroke-dasharray="33.5 117.3" transform="rotate(130)"/>' +
      '<circle r="24" fill="none" stroke="#34a853" stroke-width="9" stroke-dasharray="37.7 113.1" transform="rotate(40)"/>' +
      '<circle r="24" fill="none" stroke="#4285f4" stroke-width="9" stroke-dasharray="16.8 134" transform="rotate(0)"/>' +
      '<rect x="0" y="-4.5" width="28.5" height="9" fill="#4285f4"/></g>';
  }

  function estrellas(x, y, n, tam, paso, color) {
    var s = "";
    for (var i = 0; i < n; i++) {
      s += '<use href="#estrella" x="' + (x + i * paso) + '" y="' + y + '" width="' + tam + '" height="' + tam + '" fill="' + color + '"/>';
    }
    return s;
  }

  function svg(etiqueta, cuerpo) {
    return '<svg viewBox="0 0 400 300" role="img" aria-label="' + etiqueta + '">' + SOMBRA + cuerpo + '</svg>';
  }

  /* Un móvil con una pantalla clara y un contenido que se pasa como cadena SVG. */
  function movil(x, y, ancho, alto, contenido) {
    return '<g filter="url(#sombra)"><rect x="' + x + '" y="' + y + '" width="' + ancho + '" height="' + alto + '" rx="24" fill="#0f1a31" stroke="#fff" stroke-width="3"/></g>' +
      '<rect x="' + (x + 9) + '" y="' + (y + 22) + '" width="' + (ancho - 18) + '" height="' + (alto - 38) + '" rx="13" fill="#fff8ee"/>' +
      '<rect x="' + (x + ancho / 2 - 17) + '" y="' + (y + 8) + '" width="34" height="7" rx="3.5" fill="#243556"/>' + contenido;
  }

  var resenas =
    svg("Tarjeta NFC blanca con una G de Google y el mensaje Déjanos tu valoración",
      '<g transform="rotate(-5 200 150)">' +
      '<rect x="40" y="44" width="320" height="208" rx="22" fill="#fff" filter="url(#sombra)"/>' +
      g(98, 108, 1.1) +
      '<text x="142" y="104" ' + FUENTE + ' font-weight="800" font-size="24" fill="#14213d">Déjanos tu</text>' +
      '<text x="142" y="132" ' + FUENTE + ' font-weight="800" font-size="24" fill="#14213d">valoración</text>' +
      estrellas(68, 156, 5, 30, 35, "#fbbc05") +
      '<text x="68" y="226" ' + FUENTE + ' font-size="12" font-weight="500" fill="#5b6475">Acerca tu móvil</text>' +
      nfc(300, 214, 1.1, "#ff6b4a") +
      '</g>');

  var panel =
    svg("Panel de mostrador con el mensaje Déjanos tu valoración y un símbolo NFC",
      '<g filter="url(#sombra)"><path d="M104 262h192l-14 22H118z" fill="#d7dde8"/>' +
      '<rect x="112" y="28" width="176" height="240" rx="18" fill="#fff"/></g>' +
      g(200, 78, .9) +
      '<text x="200" y="130" text-anchor="middle" ' + FUENTE + ' font-weight="800" font-size="19" fill="#14213d">Déjanos tu</text>' +
      '<text x="200" y="153" text-anchor="middle" ' + FUENTE + ' font-weight="800" font-size="19" fill="#14213d">valoración</text>' +
      estrellas(140, 164, 5, 24, 24, "#fbbc05") +
      '<circle cx="200" cy="224" r="28" fill="#e8f8f6" stroke="#14b8a6" stroke-width="3"/>' +
      nfc(190, 224, .6, "#0d9488"));

  var contacto =
    svg("Tarjeta blanca personalizable junto a un móvil con una página de contacto",
      '<g transform="rotate(-8 130 140)">' +
      '<rect x="22" y="66" width="214" height="138" rx="16" fill="#fff" filter="url(#sombra)"/>' +
      '<circle cx="62" cy="106" r="20" fill="#ff6b4a"/>' +
      '<text x="62" y="112" text-anchor="middle" ' + FUENTE + ' font-weight="800" font-size="12" fill="#fff">Logo</text>' +
      '<text x="92" y="104" ' + FUENTE + ' font-weight="800" font-size="15" fill="#14213d">Tu negocio</text>' +
      '<rect x="92" y="114" width="80" height="6" rx="3" fill="#cbd5e1"/>' +
      '<rect x="44" y="146" width="140" height="7" rx="3.5" fill="#e5e9f2"/>' +
      '<rect x="44" y="162" width="104" height="7" rx="3.5" fill="#e5e9f2"/>' +
      nfc(204, 178, .8, "#14b8a6") +
      '</g>' +
      movil(238, 26, 138, 250,
        '<rect x="247" y="48" width="120" height="48" rx="13" fill="#ff6b4a"/>' +
        '<circle cx="307" cy="104" r="15" fill="#fff" stroke="#ff8f5a" stroke-width="3"/>' +
        '<text x="307" y="130" text-anchor="middle" ' + FUENTE + ' font-weight="700" font-size="10" fill="#14213d">Tu negocio</text>' +
        '<rect x="259" y="140" width="96" height="24" rx="12" fill="#ff6b4a"/>' +
        '<rect x="259" y="170" width="96" height="24" rx="12" fill="#14b8a6"/>' +
        '<rect x="259" y="200" width="96" height="24" rx="12" fill="#7c5cff"/>' +
        '<rect x="259" y="230" width="96" height="24" rx="12" fill="#f59e0b"/>' +
        '<g ' + FUENTE + ' font-weight="700" font-size="10" fill="#fff" text-anchor="middle">' +
        '<text x="307" y="156">Llamar</text><text x="307" y="186">WhatsApp</text><text x="307" y="216">Cómo llegar</text><text x="307" y="246">Instagram</text></g>'));

  var menu =
    svg("Tarjeta de menú blanca junto a un móvil que muestra la carta",
      '<g transform="rotate(-7 130 150)">' +
      '<rect x="22" y="56" width="212" height="170" rx="16" fill="#fff" filter="url(#sombra)"/>' +
      '<text x="128" y="90" text-anchor="middle" ' + FUENTE + ' font-weight="800" font-size="19" fill="#14213d">Menú</text>' +
      '<line x1="96" y1="100" x2="160" y2="100" stroke="#ff6b4a" stroke-width="3" stroke-linecap="round"/>' +
      '<g ' + FUENTE + ' font-size="11" font-weight="600" fill="#5b6475">' +
      '<text x="44" y="126">Entrantes</text><text x="44" y="148">Platos</text><text x="44" y="170">Postres</text></g>' +
      '<g stroke="#cbd5e1" stroke-width="2" stroke-dasharray="2 4" stroke-linecap="round">' +
      '<line x1="104" y1="122" x2="206" y2="122"/><line x1="90" y1="144" x2="206" y2="144"/><line x1="96" y1="166" x2="206" y2="166"/></g>' +
      nfc(190, 204, .8, "#ff6b4a") +
      '</g>' +
      movil(238, 26, 138, 250,
        '<rect x="247" y="48" width="120" height="34" rx="13" fill="#ff6b4a"/>' +
        '<text x="307" y="70" text-anchor="middle" ' + FUENTE + ' font-weight="800" font-size="13" fill="#fff">Nuestra carta</text>' +
        '<rect x="257" y="94" width="100" height="26" rx="10" fill="#fff" stroke="#e5e9f2"/>' +
        '<rect x="257" y="128" width="100" height="26" rx="10" fill="#fff" stroke="#e5e9f2"/>' +
        '<rect x="257" y="162" width="100" height="26" rx="10" fill="#fff" stroke="#e5e9f2"/>' +
        '<rect x="257" y="196" width="100" height="26" rx="10" fill="#fff" stroke="#e5e9f2"/>' +
        '<g ' + FUENTE + ' font-weight="600" font-size="10" fill="#14213d">' +
        '<text x="266" y="111">Entrantes</text><text x="266" y="145">Principales</text><text x="266" y="179">Postres</text><text x="266" y="213">Bebidas</text></g>'));

  var web =
    svg("Una página web moderna en un ordenador y en un móvil",
      '<g filter="url(#sombra)"><rect x="24" y="40" width="290" height="206" rx="14" fill="#fff"/></g>' +
      '<path d="M24 54a14 14 0 0 1 14-14h262a14 14 0 0 1 14 14v12H24z" fill="#e5e9f2"/>' +
      '<circle cx="42" cy="53" r="4" fill="#ff6b4a"/><circle cx="56" cy="53" r="4" fill="#ffc23d"/><circle cx="70" cy="53" r="4" fill="#14b8a6"/>' +
      '<rect x="38" y="78" width="262" height="72" rx="10" fill="#ff6b4a"/>' +
      '<rect x="54" y="94" width="120" height="10" rx="5" fill="#fff"/>' +
      '<rect x="54" y="112" width="90" height="7" rx="3.5" fill="#fff" opacity=".7"/>' +
      '<rect x="54" y="128" width="54" height="14" rx="7" fill="#14213d"/>' +
      '<rect x="38" y="162" width="82" height="66" rx="10" fill="#e8f8f6"/>' +
      '<rect x="128" y="162" width="82" height="66" rx="10" fill="#f1ecff"/>' +
      '<rect x="218" y="162" width="82" height="66" rx="10" fill="#fff1d6"/>' +
      '<g fill="#cbd5e1"><rect x="48" y="176" width="52" height="6" rx="3"/><rect x="48" y="190" width="38" height="6" rx="3"/>' +
      '<rect x="138" y="176" width="52" height="6" rx="3"/><rect x="138" y="190" width="38" height="6" rx="3"/>' +
      '<rect x="228" y="176" width="52" height="6" rx="3"/><rect x="228" y="190" width="38" height="6" rx="3"/></g>' +
      movil(286, 96, 100, 188,
        '<rect x="293" y="118" width="86" height="46" rx="9" fill="#ff6b4a"/>' +
        '<rect x="299" y="128" width="46" height="6" rx="3" fill="#fff"/>' +
        '<rect x="299" y="140" width="34" height="5" rx="2.5" fill="#fff" opacity=".7"/>' +
        '<rect x="293" y="172" width="86" height="30" rx="8" fill="#e8f8f6"/>' +
        '<rect x="293" y="208" width="86" height="30" rx="8" fill="#f1ecff"/>' +
        '<rect x="300" y="246" width="72" height="18" rx="9" fill="#14b8a6"/>'));

  return { resenas: resenas, panel: panel, contacto: contacto, menu: menu, web: web };
})();
