//JSON - JAVASCRIPT OBJECT NOTATION
'use strict'

let pelicula = {
    titulo: 'Batman vs Superman',
    año: 2017,
    pais: 'Estados Unidos'

}

let peliculas = [
    {titulo:'La Verdad Duele',
        año: 2016,
        pais: 'Francia'
    },
    pelicula    
]

let div_peliculas = document.querySelector("#peliculas")
 for(let index in peliculas)
    {
        var p = document.createElement('p')
        p.append(peliculas[index].titulo + " - "+peliculas[index].año);
        div_peliculas.append(p)
    }
//pelicula.titulo = 'Superman Inicios'
console.log(peliculas)

 