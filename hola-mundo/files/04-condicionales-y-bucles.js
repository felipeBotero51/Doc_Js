'use strict'
var numero = 123;
console.log('if');
var numero2 = '123';
//if
if(numero == numero2){
    console.log('si');
}else{
    console.log('no');
}
console.log('switch');
//switch
numero = 2;
switch (numero) {
    case 2:
        console.log('switch = '+numero);
        break; //si no se colca el break el sigue buscando en los otros casos si hay otro que se cumpla
    default:
        console.log('no se reconoce la opcion');
}


//for
console.log('for');
for (let i = 0; i < 3; i++) {
    const element = i; // que diferencia hay entre colcoarle let var o element dentro del for
    console.log(element);    
    //debugger; //paso a paso 
}


//while
console.log('while');
numero = 2018;
while (numero <= 2020) {
    // ejecuta esto
    console.log('year '+numero);
    if(numero == 2019){
        break;
    }
        
    numero++;
}


//do while
console.log('do while');
numero = 2018;
do{
    console.log('year ' + numero);
    numero++;
}while(numero <= 2020)