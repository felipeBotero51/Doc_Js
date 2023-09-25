'use strict'

//BOM - browser object model

function getBom (){
    console.log(window.innerHeight);
    console.log(window.innerWidth); 
    console.log(window.location)
}
getBom()

function getScreenBom (){
    console.log(screen.innerHeight);
    console.log(screen.innerWidth); 
}

function redirect(){
    window.location.href = 'http://google.com';
}

function abrirVentana(url){
    window.open(url);
}