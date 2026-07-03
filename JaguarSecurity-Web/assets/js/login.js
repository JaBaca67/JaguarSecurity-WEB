document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const loginError = document.getElementById("loginError");
    const nombreInput = document.getElementById("nombre");
    const apellidoInput = document.getElementById("apellido");
    const usuarioInput = document.getElementById("usuario");
    const contrasenaInput = document.getElementById("contrasena");
    const toggleContrasena = document.getElementById("toggleContrasena");
    let errorTimeoutId = null;

    const nombreValido = (valor) => /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/.test(valor);

    const mostrarError = (mensaje) => {
        if (errorTimeoutId) {
            clearTimeout(errorTimeoutId);
            errorTimeoutId = null;
        }

        loginError.textContent = mensaje;
        loginError.classList.remove("hidden");

        errorTimeoutId = setTimeout(() => {
            ocultarError();
        }, 3000);
    };

    const ocultarError = () => {
        if (errorTimeoutId) {
            clearTimeout(errorTimeoutId);
            errorTimeoutId = null;
        }

        loginError.textContent = "";
        loginError.classList.add("hidden");
    };

    toggleContrasena.addEventListener("click", () => {
        const mostrar = contrasenaInput.type === "password";
        contrasenaInput.type = mostrar ? "text" : "password";
        toggleContrasena.setAttribute("aria-label", mostrar ? "Ocultar contraseña" : "Mostrar contraseña");
        toggleContrasena.innerHTML = mostrar
            ? `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3.98 8.223A10.477 10.477 0 001.5 12c1.274 4.057 5.064 7 9.542 7 1.518 0 2.964-.323 4.27-.907m2.31-1.425A10.45 10.45 0 0022.5 12c-1.274-4.057-5.064-7-9.542-7-1.33 0-2.609.246-3.799.695M9.88 9.88a3 3 0 104.243 4.243" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M14.12 14.12 9.88 9.88" />
                </svg>
              `
            : `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7Z" />
                </svg>
              `;
    });

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        ocultarError();

        const nombre = nombreInput.value.trim();
        const apellido = apellidoInput.value.trim();
        const usuario = usuarioInput.value.trim();
        const contrasena = contrasenaInput.value.trim();

        if (!nombre || !apellido || !usuario || !contrasena) {
            mostrarError("ACCESO DENEGADO: Todos los campos son obligatorios.");
            return;
        }

        if (!nombreValido(nombre) || !nombreValido(apellido)) {
            mostrarError("ACCESO DENEGADO: Nombre y apellido solo pueden contener letras y espacios.");
            return;
        }

        const randomNum = Math.floor(Math.random() * 9000) + 1000;

        const guardiaData = {
            id: `SEC-${randomNum}`,
            nombre,
            apellido,
            usuarioRed: usuario,
            rol: 'Operador',
            horaInicio: new Date().toISOString(),
            loginTime: new Date().toISOString()
        };

        localStorage.setItem("JaguarSession", JSON.stringify(guardiaData));
        window.location.href = "index.html";
    });
});