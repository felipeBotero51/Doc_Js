'use scrict'
//funciones
//una funcion es una agrupacion reutilizable de un conjunto de instrucciones que podemos aplicar donde queramos
var n1 = 20;
var n2 = 10;
function calculadora(n1,n2,mostrar = 1){
    console.log('primer log de la funcion calculadora()');  
    console.log('la suma es = '+ suma(n1,n2));  
    console.log('la resta es = '+resta(n1,n2)); 
    console.log('la division es = '+division(n1,n2)); 
    console.log('la multiplicacion es = '+multiplicacion(n1,n2)); 

    if(mostrar == 3) console.log('mostrar');
    return "return => calculadora"
}
calculadora(n1,n2);
calculadora(n1,n2,3); 



console.log(suma(n1,n2));//se creia que si se crea una funcion mas abajo de su llamado no funcionaba(a esperar con la funcion flecha)
function suma(numero1,numero2){return numero1 + numero2} 
function resta(numero1,numero2){return numero1 - numero2} 
function division(numero1,numero2){return numero1 / numero2} 
function multiplicacion(numero1,numero2){return numero1 * numero2} 

//cuando se declaran los parametros de la funcion solo se utiliza localmente no choca con variables del mismo nombre
//en el ambito global


//funciones con parametros rest y spread

function frutas(f1,f2,...restante){
console.log('fruta 1:' + f1 );
console.log('fruta 2:' + f2);  
console.log(restante);  
}

frutas('pera','manzana','mango','sapote','durazno');
var arrayfrutas = ['pera','manzana'];
frutas(...arrayfrutas,'mango','sapote','durazno'); //con los tres puntos le estoy diciendo que agarre cada posicion como un parametro

//funciones anonimas
//es una funcion que no tiene nombre
console.log('Funciones anonimas');
console.log('********************');

var pelicula = function(nombre){
    return 'la pelicula es '+ nombre
}
console.log(pelicula('anaconda'));

function sumame(numero1,numero2,sumaYmuestra,sumaPorDos){
    var sumar = numero1+numero2;
    sumaYmuestra(sumar)
    sumaPorDos(sumar)
    return sumar;
}

console.log(sumame(5,7, //se pueden mandar funciones a la funcion principal por asi decirlo
    function(dato){
        console.log('la suma es '+ dato);
    },
    function(dato){
        console.log('dato por dos = '+dato*2);
    }));


//funcion flecha
console.log(' ');
console.log('funcion flecha anonima');
console.log(sumame(5,7, //se pueden mandar funciones a la funcion principal por asi decirlo
dato => console.log('la suma es '+ dato), // los parametros se pueden colocar sin parentesis cuando es un solo parametro
dato => console.log('dato por dos = '+dato*2)
));

async function funcionAsincrona() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/6')
    const json = await response.json()
    console.log(json);
  }
  funcionAsincrona();