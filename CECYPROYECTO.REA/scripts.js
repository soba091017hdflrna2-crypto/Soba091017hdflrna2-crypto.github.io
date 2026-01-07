document.getElementById("entrar").onclick = function () {
    const nombre = document.getElementById("nombre").value.trim();

    if(nombre === ""){
        alert("Por favor, ingresa tu nombre");
        return;
    }

    // Ocultar login
    document.getElementById("login").style.display = "none";

    // Mostrar contenido
    document.getElementById("contenido").style.display = "block";

    // Mensaje de bienvenida
    document.getElementById("info").innerText = "Bienvenido, " + nombre;
};
