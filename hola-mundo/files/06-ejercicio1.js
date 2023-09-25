'use strict'
//programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
// si los numeros no son un numero o son menores o iguales a cero los vuelva a pedir
var numero1;
var numero2;
var val =0;
do{
    numero1 = parseInt(prompt('Digite el primer numero',0));
    numero2 = parseInt(prompt('Digite el segundo numero',0));
    if(!(numero1 > -1 && numero2 > -1)){
        alert('introduzca un numero mayor a 0')
        val = 1;
    }else val = 0;    

}while(val == 1)


if(numero1 > numero2) alert(numero1 + ' es mayor');    
else if(numero2 > numero1) alert(numero2 + ' es mayor');
     else alert('son iguales');



    

     