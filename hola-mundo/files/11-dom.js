'use strict'

// DOM - DOCUMENT OBJECT MODEL
function cambiarColor(element,color){
    element.style.color = color;
}

//GET ELEMENT BY ID - conseguir elemento por id

// var caja = document.getElementById('micaja');
var caja = document.querySelector('#micaja')
caja.innerHTML = 'texto en la caja desde js';
caja.style.background = 'red';
caja.style.padding = '20px';
caja.style.color = 'green';

//petacular
caja.className = "hola hola2"; // con el espacio se le puede dar una subclase a la clase principal en este caso la subclase es hola2

cambiarColor(caja,'white');
console.log(caja);

// conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);

var div2 = todosLosDivs[2]//.textcontent guarda un string del texto que contiene este div;
div2.innerHTML = 'Segundo Div act';
console.log(div2);

// todosLosDivs.array.forEach(element => {
//     var parrafo = document.createElement('p');
//     var texto = document.createTextNode(element);
//     parrafo.appendChild(texto);
//     document.querySelector('#miseccion').appendChild(parrafo);
// });
var seccion = document.querySelector('#miseccion');
for(var element in todosLosDivs){
    if (typeof todosLosDivs[element].textContent == 'string') {
        var parrafo = document.createElement('p');
        var texto = document.createTextNode(todosLosDivs[element].textContent);
        parrafo.append(texto);
        seccion.append(parrafo); // prepend agrega antes de las etiquetas
    }   
}

var hr = document.createElement('hr')
seccion.append(hr);
seccion.style.background = '#43DBD4';


// conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName('rojo');
console.log(divsRojos)
divsRojos = document.querySelectorAll('.rojo'); // otra manera de hacerlo
console.log(divsRojos);
for(var div in divsRojos) if(divsRojos[div].className == 'rojo') divsRojos[div].style.background = '#7AEF79';


var divsAmarillo = document.getElementsByClassName('amarillo');
console.log(divsAmarillo);

console.log('longitud '+ divsAmarillo.length);
for(let i = 0; i <  divsAmarillo.length; i++) divsAmarillo[i].style.background = 'blue';// me gusta mas esta manera


//Query selector mas recomendable cuando se trabaja con ID 
var encabezado = document.querySelector('#encabezado');
encabezado.innerHTML = 'Cabeceamelo desde Js'
encabezado.style.background = '#2E9A9D';

