//compatibilidad de JS escenarios como librerias o integraciones con chromium, esto permite habilitar y traspilar lo que hacer que valide que todo este bien.
'use strict'

// usar let const var
var numero1 = 7;
var numero_falso = "33";
var bool = true;

console.log(parseInt(numero_falso)+8);
console.log(typeof(Number(numero_falso)));
console.log(typeof(numero_falso));
console.log(typeof bool);

