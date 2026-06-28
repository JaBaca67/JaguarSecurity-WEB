// Atrapamos el formulario y el cuadro de error
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');

// Escuchamos el evento de enviar el formulario
loginForm.addEventListener('submit', function(event) {
    // Evita que la página se recargue (comportamiento por defecto del HTML)
    event.preventDefault();

    // Capturamos los valores de los inputs
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const usuario = document.getElementById('usuario').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();

    // 1. VALIDACIÓN: ¿Están vacíos?
    if (nombre === "" || apellido === "" || usuario === "" || contrasena === "") {
        mostrarError("ACCESO DENEGADO: Todos los campos son obligatorios.");
        return; // Detiene la ejecución aquí
    }

    // 2. CREACIÓN DEL OBJETO GUARDIA (Simulando el Struct de C#)
    // Generamos un ID aleatorio como en tu proyecto original
    const randomNum = Math.floor(Math.random() * 9000) + 1000; 
    
    const guardiaData = {
        id: `SEC-${randomNum}`,
        nombre: nombre,
        apellido: apellido,
        usuarioRed: usuario,
        horaInicio: new Date().toLocaleTimeString('es-NI')
    };

    // 3. GUARDAR EN MEMORIA LOCAL
    localStorage.setItem('JaguarSession', JSON.stringify(guardiaData));

    // 4. REDIRECCIÓN EXITOSA AL DASHBOARD
    window.location.href = 'index.html';
});

// Función auxiliar para mostrar errores
function mostrarError(mensaje) {
    loginError.textContent = mensaje;
    loginError.classList.remove('hidden');
    
    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
        loginError.classList.add('hidden');
    }, 3000);
}