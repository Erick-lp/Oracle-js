let amigos = [];
let longitudArray;


function agregarAmigo(){
    amigoNuevo = document.getElementById("amigo").value;
    if(amigoNuevo.trim() !== ""){
        amigos.push(amigoNuevo);
        longitudArray = amigos.length;
        console.log(longitudArray);
        asignarTextoElemento("#listaAmigos", amigos.join(", "));
    } else {
        alert("Debes ingresar un nombre");
    }
}




function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}