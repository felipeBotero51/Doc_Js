'use strict'

//Eventos del raton

var boton = document.querySelector('#boton')
boton.style.background='red';
function cambiarColor(){
    var bg = boton.style.background;
    if(bg != 'blue') boton.style.background='blue';    
    else boton.style.background='green';   
    boton.style.padding = '10px';
    boton.style.border = '1px solid #ccc';    
}

// Click
boton.addEventListener('click',() => cambiarColor());

//Mouse Over
boton.addEventListener('mouseover',() =>{
    boton.style.background = '#123';
})

//mouse out
boton.addEventListener('mouseout',() =>{
    boton.style.background = 'white';
})

//focus
var input = document.querySelector('#campo_nombre');
input.addEventListener('focus',() =>{
    console.log('(focus) estas dentro del input');
})

//Blur
input.addEventListener('blur',() =>{
    console.log('(blur) estas fuera del input');
})

//Keydown
input.addEventListener('keydown',(event) =>{
    console.log('pulsando tecla', String.fromCharCode(event.keyCode));
})

//keypress
input.addEventListener('keypress',(event) =>{
    console.log('tecla presionada', String.fromCharCode(event.keyCode));
})

//keyup
input.addEventListener('keyup',(event) =>{
    console.log('tecla soltada', String.fromCharCode(event.keyCode));
})