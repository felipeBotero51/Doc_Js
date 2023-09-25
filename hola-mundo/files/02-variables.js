'use strict'

//VARIABLES
// una variable es un contenedor de informacion

var pais = 'colombia';
var continente = 'America';
var antiguedad = 2023;
var pays_y_continente = pais + ' ' + continente;

pais = 'mexico';
continente = 'latinoamerica';

console.log(pais,continente,antiguedad);
console.log(pays_y_continente);

//let y var
//VAR es para el ambito global se puede acceder desde un bloque de codigo aislado 
//LET solo se puede acceder desde bloques de codigo especificos

//var trabaja de manera global podemos acceder a ella desde el if 
var numero = 40;
console.log(numero);

if(true){
    var numero = 50 ;
    console.log(numero);
}
console.log(numero);

//LET ESTA VARIABLE TRABAJA LIMITADA AL BLOQUE DE CODIGO 
//POR LO CUAL EN ESTE EJEMPLO SE MUESTRA DOS VECES CURSO JS
let texto = 'CURSO JS'
console.log(texto);
if (true) {
    let texto = 'LARAVEL 5' //dentro del if se crea una variable diferente de texto
    console.log(texto);

}

console.log(texto);


//Constantes 

const variable = 1; // lo siguiente no se puede hacer con una constante
// variable = 2;


