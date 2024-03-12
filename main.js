const resultado = document.querySelector(".resultado");
const botones = document.querySelectorAll(".btn");
const toggle = document.getElementById("toggle_container");
const body = document.querySelector("body");

botones.forEach(boton => {
    boton.addEventListener("click", () =>{
        const botonApretado = boton.textContent;
        
        if (boton.id === "c") {
            resultado.textContent = "0"
            return;
        }

        if (boton.id === "borrar") {
            if (resultado.textContent.length === 1 || resultado.textContent === "Error!") {
                resultado.textContent = "0";
            } else {
                resultado.textContent = resultado.textContent.slice(0, -1);
            }
            return
        }

        if (boton.id == "igual") {
            try {
                resultado.textContent = eval(resultado.textContent);
            } catch  {
                resultado.textContent = "Error!"
            }
            return;
        }

        if (resultado.textContent === "0" || resultado.textContent === "Error!") {
            resultado.textContent = botonApretado
        } else {
        resultado.textContent += botonApretado;
        }
    })
});

toggle.addEventListener('click', function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
})

