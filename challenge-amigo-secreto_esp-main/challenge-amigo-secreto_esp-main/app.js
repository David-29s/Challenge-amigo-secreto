// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//lista de amigos ingresados
let amigos = [];

//agregar amigos al pulsar botón añadir
function agregarAmigo(){
let input = document.getElementById("amigo").value;
        // Si está vacío o solo tiene espacios
    if (input.trim() === "") {
        alert("Por favor, inserte un nombre.");
    }
else{
    amigos.push(input);
    console.log(amigos);
    // console.log(amigos[amigos.length - 1]); para mirar la ultima persona añadida.



    }
//Esto limpia el texto del input despues de añadirlo a la lista.
document.getElementById("amigo").value = '';


}
