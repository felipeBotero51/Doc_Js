'use strict'
let boton = document.querySelector('#btnSubir')
let div = document.querySelector('#resultado')
let formulario = document.querySelector('#formulario');
div.style.display = 'none'
let error = document.querySelector('#error')

formulario.addEventListener('submit',(event) => {
        event.preventDefault();
        
        let nombre = document.getElementById('campo_nombre').value
        let apellido = document.querySelector('#campo_apellido').value;
        let edad = parseInt(document.querySelector('#campo_edad').value);
        

        if(nombre.trim() == null || nombre.trim().length == 0){
            alert("el nombre no es valido");
            error.innerHTML = "El nombre no es valido"
            error.style.color = 'red'
            return false;
        }
        if(apellido.trim() == null || apellido.trim().length == 0){
            alert("el apellido no es valido");
            return false;
        }
        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("la edad no es valida");
            return false;
        }
        console.log("evento submit capturado");       
        // let datos = [nombre,apellido,edad]         
        // datos.forEach(dato => {
        //     let p = document.createElement('p') 
        //     p.append(dato)
        //     div.append(p)
        // }); 
        //acceder al spam dentro de cada div
        document.querySelector('#m_nombre span').innerHTML = nombre
        document.querySelector('#m_apellido span').innerHTML = apellido
        document.querySelector('#m_edad span').innerHTML = edad
        div.style.display = 'block'
})

window.addEventListener('load',()=>{
    console.log("DOM cargado");
    
})
