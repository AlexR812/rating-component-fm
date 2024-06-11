const case1 = document.querySelector("#caso1");
const case2 = document.querySelector("#caso2");
const case3 = document.querySelector("#caso3");
const case4 = document.querySelector("#caso4");
const case5 = document.querySelector("#caso5");
const boton = document.querySelector(".boton");

case1.addEventListener("click", click);
case2.addEventListener("click", click);
case3.addEventListener("click", click);
case4.addEventListener("click", click);
case5.addEventListener("click", click);
boton.addEventListener("click", click);

function click(e) {
    e.preventDefault();
    if(e.target.nodeName == "DIV") {
        activo(e.target.innerText);
    } else if(e.target.nodeName == "A"){
        mostrar()
    }
}

function activo(valor) {

    const nota = document.querySelector(`#caso${valor}`);
    const notas = document.querySelectorAll(".calificaciones__valor");
    const mensaje = document.querySelector(".gracias__mensaje span");
    
    if(nota.classList.contains("calificaciones__valor--activo")) {
        nota.classList.remove("calificaciones__valor--activo")
                
    } else {
        notas.forEach( elemento => {
            elemento.classList.remove("calificaciones__valor--activo");
        })
        nota.classList.add("calificaciones__valor--activo");
        mensaje.innerText = valor;
        
    }    
}

function mostrar() {
    const normal = document.querySelector(".normal");
    const imagen_normal = document.querySelector(".imagen");
    const gracias = document.querySelector(".gracias")

    normal.classList.add("oculto");
    imagen_normal.classList.add("oculto");
    gracias.classList.remove("oculto");

}