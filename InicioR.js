const loginForm = document.querySelector("form");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const contraseña = document.getElementById("contraseña");
const direccion = document.getElementById("direccion");
const submit = document.getElementById("crearCuenta");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombreVal = nombre.value.trim();
    const correoVal = correo.value.trim();
    const contraseñaVal = contraseña.value.trim();
    const direccionVal = direccion.value.trim();

    if (!nombreVal || !correoVal || !contraseñaVal || !direccionVal) {
        alert("Por favor, rellena todos los campos obligatorios");
        return;
    }

    if (!correoVal.includes("@")) {
        alert("Por favor, introduce un correo electrónico válido");
        return;
    }
    const nuevoUsuario = {
        nombre: nombreVal,
        correo: correoVal,
        contraseña: contraseñaVal, 
        direccion: direccionVal
    }

    localStorage.setItem("usuarioRegistrado", JSON.stringify(nuevoUsuario));

    alert("Usuario registrado con éxito");

    window.location.href = "login.html"; 
});