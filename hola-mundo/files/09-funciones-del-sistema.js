'use strict'
//calcular longitud

var texto = 'buenos dias dias perro';

var busqueda = texto.lastIndexOf('dias');
console.log('lastindexof = '+busqueda);

busqueda = texto.match(/dias/g);
console.log(busqueda); // devuelve un vector

busqueda = texto.substring(7,11);
console.log(busqueda);

busqueda = texto.charAt(12);
console.log(busqueda);

busqueda = texto.slice(7,11);
console.log(busqueda);

busqueda = texto.trim();
console.log(busqueda);


//Includes
busqueda = texto.includes('perro'); // sensible a las mayusculas
console.log(busqueda);

//replace
busqueda = texto.replace('perro','gato');
console.log(busqueda);

//indexOf
busqueda = texto.indexOf('dias');
console.log('indexof = '+busqueda);

//que vaina tan espectacular
var generarArray = texto.split(' ');//el metodo split genera un array separandolo con lo que indiquemos
console.log(generarArray);

var nombre = 'andres';
var apellido= 'botero';
var concatenar = `
<h1>Ni nombre es</h1>
<strong>${nombre} ${apellido}</strong>
`;

document.write(concatenar)
