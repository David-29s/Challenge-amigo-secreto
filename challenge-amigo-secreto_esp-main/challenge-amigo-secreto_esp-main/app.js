// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//lista de amigos ingresados


let amigos = [];
let lista = document.getElementById('listaAmigos');

//agregar amigos al pulsar botón añadir
function agregarAmigo(){
let input = document.getElementById("amigo").value.trim();
        //validación.
    if (input === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    // Verificar si el amigo ya está en la lista
    if (amigos.includes(input)) {
        alert("Este amigo ya está en la lista.");
        return;
    }

    amigos.push(input); //Agrega el amigo a la lista
    console.log(amigos);
    // console.log(amigos[amigos.length - 1]); para mirar la ultima persona añadida.

    actualizarLista();
//limpia el texto del input después de añadirlo a la lista.
document.getElementById("amigo").value = '';
document.getElementById("amigo").focus();

}

function actualizarLista(){
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
function sortearAmigo(){
    if(amigos.length === 0){
        alert("No hay amigos para sortear");
        return;
    }
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
        let limpiarLista = document.getElementById("listaAmigos");
        limpiarLista.innerHTML = '';

}