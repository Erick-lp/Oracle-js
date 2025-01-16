let amigos = [];
let longitudArray;
let amigoSeleccionado;
let nombreseleccionado;

function agregarAmigo(){
    asignarTextoElemento("#resultado", " ");
    amigoNuevo = document.getElementById("amigo").value;
    if(amigoNuevo.trim() !== ""){
        amigos.push(amigoNuevo);
        longitudArray = amigos.length;
        document.querySelector('#amigo').value = '';
        asignarTextoElemento("#listaAmigos", amigos.join(", "));
        document.getElementById('sortear').removeAttribute('disabled');
    } else {
        alert("Debes ingresar un nombre");
    }
}

function sortearAmigo(){
    amigoSeleccionado = Math.floor(Math.random()*longitudArray);
    nombreseleccionado = amigos[amigoSeleccionado];
    asignarTextoElemento("#listaAmigos", " ");
    asignarTextoElemento("#resultado", `El amigo secreto sorteado es: ${nombreseleccionado}`);
    amigos = [];
    document.querySelector('#sortear').setAttribute('disabled','true');
}


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}