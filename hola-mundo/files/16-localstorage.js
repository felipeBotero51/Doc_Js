'use strict'

//LocalStorage

//Comprobar compatibilidad del local storage con el navegador
if(typeof(Storage) !== 'undefined'){
    console.log("LocalStorage Disponible");
}
else{
    console.log("incompatible");
}


//Guardar Datos

localStorage.setItem("Titulo","El libro del abuelo")

//recuperar elemento 


console.log(localStorage.getItem("Titulo"));

document.querySelector("#peliculas").innerHTML = localStorage.getItem("Titulo")

//guardar Objetos

let usuario = {
    nombre:"Felipe",
    email: 'Anfebo12@gmail.com',
    web:"no tiene"
}


//PARA GUARDAR UN OBJETO HAY QUE CONVERTIRLO A STRING
localStorage.setItem("usuario",JSON.stringify(usuario))

let userjs = JSON.parse(localStorage.getItem("usuario"))

console.log(userjs);
document.querySelector("#peliculas").append(" "+userjs.nombre+" - "+userjs.web)