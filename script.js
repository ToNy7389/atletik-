// SECCIONES
const inicio = document.getElementById("inicio");
const notificaciones = document.getElementById("notificaciones");
const carrito = document.getElementById("carrito");
const catalogo = document.getElementById("catalogo");

const btnCarrito = document.getElementById("btnCarrito");
const btnNotificaciones = document.getElementById("btnNotificaciones");
const btnCatalogo = document.getElementById("btnCatalogo");

const btnVolverNotificaciones = document.getElementById("btnVolverNotificaciones");
const btnVolverCarrito = document.getElementById("btnVolverCarrito");
const btnVolverCatalogo = document.getElementById("btnVolverCatalogo");

const responder = document.getElementById("responder");
const mensajes = document.getElementById("mensajes");

// NAVEGACIÓN ENTRE SECCIONES
btnCarrito?.addEventListener("click", () => {
  inicio.classList.remove("active");
  carrito.classList.add("active");
});
btnNotificaciones?.addEventListener("click", () => {
  inicio.classList.remove("active");
  notificaciones.classList.add("active");
});
btnCatalogo?.addEventListener("click", () => {
  inicio.classList.remove("active");
  catalogo.classList.add("active");
});
btnVolverNotificaciones?.addEventListener("click", () => {
  notificaciones.classList.remove("active");
  inicio.classList.add("active");
});
btnVolverCarrito?.addEventListener("click", () => {
  carrito.classList.remove("active");
  inicio.classList.add("active");
});
btnVolverCatalogo?.addEventListener("click", () => {
  catalogo.classList.remove("active");
  inicio.classList.add("active");
});

// ENVIO DE MENSAJE EN NOTIFICACIONES
responder?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const texto = responder.value.trim();
    if (texto) {
      // Mensaje enviado
      const mensajeEnviado = document.createElement("div");
      mensajeEnviado.classList.add("mensaje", "enviado");
      mensajeEnviado.textContent = texto;

      mensajes.appendChild(mensajeEnviado);

      // Respuesta simulada
      setTimeout(() => {
        const mensajeRecibido = document.createElement("div");
        mensajeRecibido.classList.add("mensaje", "recibido");
        mensajeRecibido.textContent = "Recibido: " + texto;
        mensajes.appendChild(mensajeRecibido);
        mensajes.scrollTop = mensajes.scrollHeight;
      }, 1000);

      responder.value = ""; 
      mensajes.scrollTop = mensajes.scrollHeight;
    }
  }
});

// MOSTRAR INICIO
inicio.classList.add("active");