document.getElementById('login-button').addEventListener('click', validarFormulario);

function validarFormulario() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let captchaCheckbox = document.getElementById('captcha-checkbox');

    if (email === "" || password === "") {
        mostrarAlerta("Por favor, ingresa tanto el email como la contraseña.");
        return;
    }

    if (!captchaCheckbox.checked) {
        mostrarAlerta("Por favor, marca la casilla 'No soy un robot'.");
        return;
    }

    if (verificarUsuario(email, password)) {
        mostrarAlerta("Inicio de sesión exitoso. Redireccionando a la página de inventario...");

        
        //setTimeout establece el tiempo de espera para redireccionar a paginaInventario
        setTimeout(function() {
            window.location.href = "inventario.html";
        }, 2000);
    } else {
        mostrarAlerta("Credenciales de inicio de sesión incorrectas.");
    }
}

function mostrarAlerta(mensaje) {
    alert(mensaje);
}

function verificarUsuario(email, contraseña) {
    let usuariosPermitidos = [
        { email: "angelaballestero19@gmail.com", contraseña: "2908ab" },
        { email: "candelanatale78@gmail.com", contraseña: "1305cn" }
    ];

    for (let i = 0; i < usuariosPermitidos.length; i++) {
        if (usuariosPermitidos[i].email === email && usuariosPermitidos[i].contraseña === contraseña) {
            return true;
        }
    }

    return false;
}