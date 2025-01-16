//Declaracion de variables a utilizar
let amigos = [];
let longitudArray;
let amigoSeleccionado;
let nombreseleccionado;

function agregarAmigo(){

    //Se limpia el texto del resultado
    asignarTextoElemento("#resultado", " ");

    //Se obtiene el valor del input
    amigoNuevo = document.getElementById("amigo").value;

    //Consdicional para saber que no ingresen un valor vacio o espacios
    if(amigoNuevo.trim() !== ""){

        //Se agregan nuevos elementos al array
        amigos.push(amigoNuevo);

        //Se obtiene la longitud del array
        longitudArray = amigos.length;

        //Limpia el imput
        document.querySelector('#amigo').value = '';

        //Agrega los nombres a la lista
        let listaAmigos = document.querySelector("#listaAmigos");
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigoNuevo;
        listaAmigos.appendChild(nuevoElemento);

        //Habilita el botón para sortear
        document.getElementById('sortear').removeAttribute('disabled');
    } else {
        //Muestra la alerta cuando se intenta ingresar un valor vacio o espacios
        alert("Debes ingresar un nombre");
    }
}

function sortearAmigo(){
    //Se obtiene un número al azar que se utilizara como indice en el array
    amigoSeleccionado = Math.floor(Math.random()*longitudArray);

    //Se obtiene el valor del array según el indice escogido al azar
    nombreseleccionado = amigos[amigoSeleccionado];

    //Se limpia la lista de amigos
    asignarTextoElemento("#listaAmigos", " ");

    //Se anuncia el nombre ganador
    asignarTextoElemento("#resultado", `El amigo secreto sorteado es: ${nombreseleccionado}`);

    //Se vacia el array
    amigos = [];

    //Se desabilita el boton de sortear
    document.querySelector('#sortear').setAttribute('disabled','true');
}


//Funcion para asignar textos
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}