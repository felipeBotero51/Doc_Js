'use strict'
let boton = document.querySelector('#btnSubir')
let div = document.querySelector('#resultado')
let formulario = document.querySelector('#formulario');
div.style.display = 'none'


formulario.addEventListener('submit',(event) => {
        event.preventDefault();
        div.style.display = 'block'
        let nombre = document.getElementById('campo_nombre').value
        let apellido = document.querySelector('#campo_apellido').value;
        let edad = document.querySelector('#campo_edad').value;
        console.log("evento submit capturado");        
        // let datos = [nombre,apellido,edad]         
        // datos.forEach(dato => {
        //     let p = document.createElement('p') 
        //     p.append(dato)
        //     div.append(p)
        // }); 
        document.querySelector('#m_nombre span').innerHTML = nombre
        document.querySelector('#m_apellido span').innerHTML = apellido
        document.querySelector('#m_edad span').innerHTML = edad
})

window.addEventListener('load',()=>{
    console.log("DOM cargado");
    
})
