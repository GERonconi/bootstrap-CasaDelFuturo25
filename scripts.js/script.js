// script.js

// Función para cargar contenido dinámicamente en un elemento por ID
function loadHTML(id, file) {
    console.log(`Intentando cargar: ${file} en ${id}`);
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar ${file}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            console.log("Carga exitosa", data);
            document.getElementById(id).innerHTML = data;
        })
        .catch(err => console.error("Error en fetch:", err));
}

// Función para manejar el login (ejemplo básico)
function handleLogin(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Simulación de autenticación
    if (username === "admin" && password === "1234") {
        alert("Inicio de sesión exitoso");
        window.location.href = "dashboard.html"; // Redirigir a otra página
    } else {
        alert("Credenciales incorrectas");
    }
}

// Función para manejar eventos de botones
function setupEventListeners() {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", handleLogin);
    }
}

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    console.log("Documento cargado");
    setupEventListeners();
});


