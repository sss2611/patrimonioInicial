function login(event) {
    event.preventDefault();
    var username = document.getElementById("usuario").value;
    var password = document.getElementById("contraseña").value;

    if (username === "historia" && password === "histo") {
        window.location.href = "historia.html";
    } else if (username === "bellasartes" && password === "bellas") {
        window.location.href = "bellasartes.html";
    } else if (username === "antropologia" && password === "antro") {
        window.location.href = "antropologia.html";
    } else {
        alert("Usuario o Contraseña inválido");
    }
}

function buscar(event) {
    event.preventDefault();
    var search = document.getElementById("search").value.toLowerCase(); // Convertir el valor a minúsculas
    if (search === "colecciones") {
        window.location.href = "colecciones.html";
    } else if (search === "monedas") {
        window.location.href = "monedas.html";
    } else if (search === "esculturas") {
        window.location.href = "esculturas.html";
    } else if (search === "pinturas") {
        window.location.href = "pinturas.html";
    } else {
        alert("No es posible mostrar lo que busca");
    }
}
