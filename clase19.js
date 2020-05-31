var ana = {
    nombre: 'Ana',
    apellido: 'Mongui',
    altura: 1.62
}

var luis = {
    nombre: 'Luis',
    apellido: 'Gonzalez',
    altura: 1.74
}

var salome = {
    nombre: 'Salome',
    apellido: 'Gonzalez',
    altura: 1.00
}
var nanis = {
    nombre: 'Nanis',
    apellido: 'Mongui',
    altura: 1.64
}

var vero = {
    nombre: 'Veronica',
    apellido: 'Duque',
    altura: 1.59
}

var fabian = {
    nombre: 'Fabian',
    apellido: 'Mongui',
    altura: 1.76
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



console.log(personasCms)