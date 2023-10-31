document.getElementById("contactForm").addEventListener("submit", function (e) {
    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email");
    var mensaje = document.getElementById("mensaje");
    var nombreError = document.getElementById("nombreError");
    var emailError = document.getElementById("emailError");
    var mensajeError = document.getElementById("mensajeError");

    // Restablece los mensajes de error
    nombreError.textContent = "";
    emailError.textContent = "";
    mensajeError.textContent = "";

    // Valida el campo de nombre
    if (nombre.value === "") {
        e.preventDefault(); // Evita el envío del formulario
        nombreError.textContent = "El nombre es obligatorio.";
        nombre.focus();
        return false;
    }

    // Valida el campo de correo electrónico
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email.value)) {
        e.preventDefault();
        emailError.textContent = "El correo electrónico no es válido.";
        email.focus();
        return false;
    }

    // Valida el campo de mensaje
    if (mensaje.value === "") {
        e.preventDefault();
        mensajeError.textContent = "El mensaje es obligatorio.";
        mensaje.focus();
        return false;
    }
});
