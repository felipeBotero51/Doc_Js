'use stric'
var lenguajes = ['Espanol','ingles','mandarin','portugues','aleman','japones'];

function leng(lenguajes){
    lenguajes.forEach((elemento,indice,arreglo) =>{//tiene tres a las que se puede acceder elemento, indice, array completo
        document.write(`${indice} <li> lenguaje = ${elemento}   </li>`);
        console.log(arreglo);        
        });
        document.write('************************************ <br>')
}

lenguajes.push('ruso')
leng(lenguajes);
lenguajes.pop();
lenguajes.splice(4,1); //borra el aleman
leng(lenguajes);

var textoLenguajes = lenguajes.join() + ',Frances,';
console.log(textoLenguajes);

lenguajes = textoLenguajes.split(',') //separa el texto por 
console.log(lenguajes);


console.log(lenguajes.sort()); // ordenar array

var busqueda = lenguajes.find(elemento => elemento == 'Frances'); // buscar parametro
console.log(busqueda);



