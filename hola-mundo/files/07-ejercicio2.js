'use strict'
// utilizando un bucle, mostrar la suma y la media de los numeros introducidos
//hasta introducir un numero negativo y ahi mostrar el resultado
var numero = -1;
var suma = 0;
var contador = 0;
var promedio = 0;
do{
    numero = parseInt(prompt('iintroduzca el numero',0));
    if(numero >= 0){
        suma += numero;
        contador++;
        promedio = suma / contador;
        alert('el numero ingresado fue: '+ numero 
        +' \n la suma de los numeros ingresados es: '+suma
        +' \n el promedio de los numeros ingresados es: '+promedio
        +' \n cantidad de numeros ingresados: '+contador)
    }else alert('introduzca un numero valido')
}while(numero >= 0)


