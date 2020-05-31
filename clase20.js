var ana = {
    nombre: 'Ana',
    apellido: 'Mongui',
    altura: 1.62,
    cantidadDeLibros: 91
}

var luis = {
    nombre: 'Luis',
    apellido: 'Gonzalez',
    altura: 1.74,
    cantidadDeLibros: 50
}

var salome = {
    nombre: 'Salome',
    apellido: 'Gonzalez',
    altura: 1.00,
    cantidadDeLibros: 150
}
var nanis = {
    nombre: 'Nanis',
    apellido: 'Mongui',
    altura: 1.64,
    cantidadDeLibros: 80 
}

var vero = {
    nombre: 'Veronica',
    apellido: 'Duque',
    altura: 1.59,
    cantidadDeLibros: 120
}

var fabian = {
    nombre: 'Fabian',
    apellido: 'Mongui',
    altura: 1.76,
    cantidadDeLibros: 170
}

const esAlta = ({ altura }) => persona.altura < 1.6

var personas = [ana, luis, salome, nanis, vero, fabian]

var personasAltas = personas.filter(function (persona) {
    return persona.altura < 1.6
})

const pasarAlturaACms = persona => {

    return {
        ...persona,
        altura: persona.altura * 100
    }
}

var personasCms = personas.map(pasarAlturaACms)


var acum = 0

for (var i = 0; i < personas.length; i++){
    acum = acum + personas[i].cantidadDeLibros
}

console.log(`En Total todos tienen ${acum} libros`)