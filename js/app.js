/* Pinta los servicios, la ventana emergente de cada uno y los datos del sitio (js/servicios.js). */
(function () {
  "use strict";

  var TRAZO = 'fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"';

  var ICONOS = {
    web: '<svg viewBox="0 0 48 48" ' + TRAZO + '><rect x="5" y="8" width="38" height="32" rx="5"/><line x1="5" y1="17" x2="43" y2="17"/><circle cx="10.5" cy="12.5" r=".9" fill="#fff"/><circle cx="15" cy="12.5" r=".9" fill="#fff"/><circle cx="19.5" cy="12.5" r=".9" fill="#fff"/><rect x="10" y="22" width="12" height="11" rx="2"/><line x1="27" y1="23" x2="38" y2="23"/><line x1="27" y1="28" x2="36" y2="28"/><line x1="27" y1="33" x2="33" y2="33"/></svg>',
    resenas: '<svg viewBox="0 0 48 48" ' + TRAZO + '><rect x="5" y="10" width="38" height="28" rx="5"/><polygon points="24,16 26.6,21.4 32.5,22.2 28.2,26.2 29.3,32 24,29.2 18.7,32 19.8,26.2 15.5,22.2 21.4,21.4" fill="#fff" stroke="none"/></svg>',
    panel: '<svg viewBox="0 0 48 48" ' + TRAZO + '><rect x="10" y="5" width="28" height="31" rx="4"/><rect x="17" y="20" width="14" height="11" rx="1.5"/><line x1="24" y1="36" x2="24" y2="43"/><line x1="16" y1="43" x2="32" y2="43"/><g fill="#fff" stroke="none"><circle cx="16" cy="13" r="2"/><circle cx="24" cy="13" r="2"/><circle cx="32" cy="13" r="2"/></g></svg>',
    contacto: '<svg viewBox="0 0 48 48" ' + TRAZO + '><rect x="5" y="10" width="38" height="28" rx="5"/><circle cx="16" cy="21" r="4"/><path d="M9.5 32c0-4.4 13-4.4 13 0"/><line x1="27" y1="19" x2="38" y2="19"/><line x1="27" y1="25" x2="36" y2="25"/><line x1="27" y1="31" x2="33" y2="31"/></svg>',
    menu: '<svg viewBox="0 0 48 48" ' + TRAZO + '><rect x="10" y="4" width="28" height="40" rx="4"/><line x1="17" y1="12" x2="31" y2="12"/><line x1="16" y1="20" x2="32" y2="20"/><line x1="16" y1="27" x2="32" y2="27"/><line x1="16" y1="34" x2="27" y2="34"/></svg>',
    reserva: '<svg viewBox="0 0 48 48" ' + TRAZO + '><rect x="6" y="9" width="36" height="32" rx="5"/><line x1="6" y1="19" x2="42" y2="19"/><line x1="15" y1="5" x2="15" y2="13"/><line x1="33" y1="5" x2="33" y2="13"/><polyline points="17,30 22,35 31,26"/></svg>',
    producto: '<svg viewBox="0 0 48 48" ' + TRAZO + '><path d="M6 24V8a2 2 0 0 1 2-2h16l18 18-18 18z"/><circle cx="16" cy="16" r="3"/></svg>',
    movil: '<svg viewBox="0 0 48 48" ' + TRAZO + '><rect x="13" y="4" width="22" height="40" rx="5"/><line x1="21" y1="38" x2="27" y2="38"/><path d="M5 18c-2 4-2 8 0 12M43 18c2 4 2 8 0 12"/></svg>',
    generico: '<svg viewBox="0 0 48 48" ' + TRAZO + '><path d="M24 6l4.5 12.5L41 23l-12.5 4.5L24 40l-4.5-12.5L7 23l12.5-4.5z"/></svg>'
  };

  var dialogo = document.getElementById("detalle");
  var contenedorDetalle = document.getElementById("detalle-contenido");

  function el(etiqueta, clase, texto) {
    var nodo = document.createElement(etiqueta);
    if (clase) { nodo.className = clase; }
    if (texto) { nodo.textContent = texto; }
    return nodo;
  }

  function icono(s, clase) {
    var caja = el("div", "icono " + (clase || ""));
    caja.setAttribute("aria-hidden", "true");
    caja.innerHTML = ICONOS[s.icono] || ICONOS.generico;
    return caja;
  }

  function enlaceCorreo(asunto) {
    return "mailto:" + SITIO.correo + "?subject=" + encodeURIComponent(asunto);
  }

  function enlaceWhatsapp(texto) {
    return "https://wa.me/" + SITIO.whatsapp + "?text=" + encodeURIComponent(texto);
  }

  /* ---------- Ventana emergente ---------- */

  function bloqueLista(titulo, items) {
    if (!items || !items.length) { return null; }
    var bloque = el("div", "detalle-bloque");
    bloque.appendChild(el("h4", "", titulo));
    var ul = el("ul", "checks");
    items.forEach(function (t) { ul.appendChild(el("li", "", t)); });
    bloque.appendChild(ul);
    return bloque;
  }

  function bloqueNiveles(niveles) {
    var caja = el("div", "niveles");
    niveles.forEach(function (n) {
      var fila = el("div", "nivel");
      var cab = el("div", "nivel-cab");
      cab.appendChild(el("strong", "", n.nombre));
      cab.appendChild(el("span", "nivel-precio", n.precio));
      fila.appendChild(cab);
      fila.appendChild(el("p", "", n.texto));
      caja.appendChild(fila);
    });
    return caja;
  }

  function visual(s) {
    var fig = el("figure", "detalle-visual");
    if (s.foto) {
      var img = document.createElement("img");
      img.src = s.foto;
      img.alt = s.fotoAlt || s.nombre;
      fig.appendChild(img);
      return fig;
    }
    var dibujo = (typeof ILUSTRACIONES !== "undefined") ? ILUSTRACIONES[s.ilustracion] : null;
    if (dibujo) {
      var caja = el("div", "ilustracion");
      caja.innerHTML = dibujo;
      fig.appendChild(caja);
      fig.appendChild(el("figcaption", "", "Ilustración orientativa"));
    } else {
      fig.appendChild(icono(s, "icono--grande"));
    }
    return fig;
  }

  function contenidoDetalle(s) {
    var d = s.detalle || {};
    var caja = el("div", "detalle-caja");

    var cerrar = el("button", "detalle-cerrar");
    cerrar.type = "button";
    cerrar.setAttribute("aria-label", "Cerrar");
    cerrar.setAttribute("autofocus", "");
    cerrar.innerHTML = "&times;";
    cerrar.addEventListener("click", function () { dialogo.close(); });
    caja.appendChild(cerrar);

    caja.appendChild(visual(s));

    var texto = el("div", "detalle-texto");
    var titulo = el("h3", "", s.nombre);
    titulo.id = "detalle-titulo";
    texto.appendChild(titulo);
    if (!d.niveles) { texto.appendChild(el("div", "detalle-precio", s.precio || "Consultar")); }
    texto.appendChild(el("p", "detalle-que", d.que || s.descripcion));
    if (d.niveles) { texto.appendChild(bloqueNiveles(d.niveles)); }

    var cliente = bloqueLista("Qué gana tu cliente", d.cliente);
    var negocio = bloqueLista("Qué gana tu negocio", d.negocio);
    if (cliente) { texto.appendChild(cliente); }
    if (negocio) { texto.appendChild(negocio); }

    var hayWhatsapp = !!SITIO.whatsapp;
    var hayTelefono = !!(SITIO.telefono && SITIO.telefonoEnlace);
    var hayCorreo = !!SITIO.correo;
    if (hayWhatsapp || hayTelefono || hayCorreo) {
      var acciones = el("div", "detalle-acciones");
      if (hayWhatsapp) {
        var wa = el("a", "boton boton--primario", "Pedir información");
        wa.href = enlaceWhatsapp("Hola, me interesa: " + s.nombre + ". ¿Me das más información?");
        wa.target = "_blank";
        wa.rel = "noopener";
        acciones.appendChild(wa);
      }
      if (hayTelefono) {
        var tel = el("a", "boton boton--oscuro", "Llamar al " + SITIO.telefono);
        tel.href = "tel:" + SITIO.telefonoEnlace;
        acciones.appendChild(tel);
      }
      if (hayCorreo) {
        var mail = el("a", "boton boton--oscuro", "Escribir un correo");
        mail.href = enlaceCorreo("Información sobre: " + s.nombre);
        acciones.appendChild(mail);
      }
      texto.appendChild(acciones);
    }

    caja.appendChild(texto);
    return caja;
  }

  function abrir(s) {
    if (!dialogo || typeof dialogo.showModal !== "function") { return; }
    contenedorDetalle.textContent = "";
    contenedorDetalle.appendChild(contenidoDetalle(s));
    document.body.classList.add("sin-scroll");
    dialogo.showModal();
  }

  if (dialogo) {
    // Un clic fuera de la ventana (en el fondo oscuro) la cierra.
    dialogo.addEventListener("click", function (e) { if (e.target === dialogo) { dialogo.close(); } });
    dialogo.addEventListener("close", function () { document.body.classList.remove("sin-scroll"); });
  }

  /* ---------- Tarjetas de servicio ---------- */

  function hacerClicable(art, s) {
    art.setAttribute("tabindex", "0");
    art.setAttribute("role", "button");
    art.setAttribute("aria-haspopup", "dialog");
    art.setAttribute("aria-label", "Ver cómo es: " + s.nombre);
    art.addEventListener("click", function () { abrir(s); });
    art.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); abrir(s); }
    });
  }

  function tarjetaDestacada(s) {
    var art = el("article", "servicio servicio--destacado color-" + (s.color || "coral"));
    art.appendChild(icono(s));

    var cuerpo = el("div", "cuerpo");
    if (s.etiqueta) { cuerpo.appendChild(el("span", "insignia", s.etiqueta)); }
    cuerpo.appendChild(el("h3", "", s.nombre));
    cuerpo.appendChild(el("p", "", s.descripcion));
    cuerpo.appendChild(el("span", "ver-mas ver-mas--claro", "Ver cómo es"));
    art.appendChild(cuerpo);

    var caja = el("div", "precio-caja");
    caja.appendChild(el("b", "", s.precio || "Consultar"));
    if (s.nota) { caja.appendChild(el("small", "", s.nota)); }
    art.appendChild(caja);
    hacerClicable(art, s);
    return art;
  }

  function tarjeta(s) {
    var clases = "servicio color-" + (s.color || "teal");
    if (s.estado === "proximamente") { clases += " servicio--proximamente"; }
    var art = el("article", clases);

    var cab = el("div", "servicio-cabecera");
    cab.appendChild(icono(s));
    cab.appendChild(el("h3", "", s.nombre));
    cab.appendChild(el("div", "precio", s.precio || "Consultar"));
    art.appendChild(cab);

    if (s.estado === "proximamente") { art.appendChild(el("span", "insignia insignia--suave", "Próximamente")); }
    art.appendChild(el("p", "", s.descripcion));

    var pie = el("div", "servicio-pie");
    pie.appendChild(el("div", "para", s.paraQuien || ""));
    pie.appendChild(el("span", "ver-mas", "Ver cómo es"));
    art.appendChild(pie);
    hacerClicable(art, s);
    return art;
  }

  function pintarServicios() {
    var lista = document.getElementById("lista-servicios");
    if (!lista || typeof SERVICIOS === "undefined") { return; }
    SERVICIOS.forEach(function (s) {
      if (s.estado === "oculto") { return; }
      lista.appendChild(s.destacado ? tarjetaDestacada(s) : tarjeta(s));
    });
  }

  /* Un enlace como index.html#servicio-tarjeta-menu abre directamente esa ventana. */
  function abrirDesdeEnlace() {
    var m = /^#servicio-(.+)$/.exec(window.location.hash);
    if (!m || typeof SERVICIOS === "undefined") { return; }
    SERVICIOS.forEach(function (s) { if (s.id === m[1] && s.estado !== "oculto") { abrir(s); } });
  }

  /* ---------- Datos del sitio ---------- */

  function pintarSitio() {
    if (typeof SITIO === "undefined") { return; }
    document.querySelectorAll("[data-sitio]").forEach(function (nodo) {
      var valor = SITIO[nodo.getAttribute("data-sitio")];
      if (valor) { nodo.textContent = valor; }
    });

    // Teléfono y WhatsApp solo se muestran si están rellenados en SITIO (js/servicios.js).
    var hayTelefono = !!(SITIO.telefono && SITIO.telefonoEnlace);
    var hayCorreo = !!SITIO.correo;
    var hayWhatsapp = !!SITIO.whatsapp;
    document.querySelectorAll("[data-requiere]").forEach(function (nodo) {
      var tipo = nodo.getAttribute("data-requiere");
      var visible = tipo === "telefono" ? hayTelefono : (tipo === "whatsapp" ? hayWhatsapp : (tipo === "correo" ? hayCorreo : (hayTelefono || hayWhatsapp || hayCorreo)));
      nodo.hidden = !visible;
    });
    document.querySelectorAll("[data-sin=contacto]").forEach(function (nodo) {
      nodo.hidden = hayTelefono || hayWhatsapp || hayCorreo;
    });
    if (hayTelefono) {
      document.querySelectorAll("[data-enlace=telefono]").forEach(function (a) {
        a.setAttribute("href", "tel:" + SITIO.telefonoEnlace);
      });
    }
    if (hayCorreo) {
      document.querySelectorAll("[data-enlace=correo]").forEach(function (a) {
        a.setAttribute("href", enlaceCorreo("Información sobre vuestros servicios"));
      });
    }
    if (hayWhatsapp) {
      document.querySelectorAll("[data-enlace=whatsapp]").forEach(function (a) {
        a.setAttribute("href", enlaceWhatsapp(SITIO.mensajeWhatsapp));
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener");
      });
    }
    var anio = document.getElementById("anio");
    if (anio) { anio.textContent = new Date().getFullYear(); }
  }

  pintarServicios();
  pintarSitio();
  abrirDesdeEnlace();
})();
