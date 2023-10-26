const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");
let borrarPantalla = false;
const historialResultados = [];
const historialUl = document.getElementById("historial");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;
        if (borrarPantalla) {
            pantalla.textContent = "";
            borrarPantalla = false;
        }
        if(boton.id === "c"){
            pantalla.textContent = "0";
            return;
        }
        if (boton.id === "delete") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Sintax Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
        if(boton.id === "igual"){
            try{
                const resultado = eval(pantalla.textContent);
                pantalla.textContent = resultado;
                historialResultados.push(resultado);
                const li = document.createElement("li");
                li.textContent = resultado;
                historialUl.appendChild(li);
                console.log("Historial completo:", historialResultados);
            } catch{
                pantalla.textContent = "Sintax Error!";
            }
            borrarPantalla = true;
            return;
        }
        if (pantalla.textContent === "0" || pantalla.textContent === "Sintax Error!"){
            pantalla.textContent = botonApretado;
        } else{
            pantalla.textContent += botonApretado;
        }
    });
});




document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem("userData")) {
        window.location.href = "registro.html";
    }
});