var Ana = {
    nombre: 'Ana',
    apellido: 'Mongui',
    edad: 24
}

var salome = {
    nombre: 'Salome',
    apellido: 'Gonzalez',
    edad: 2
}

function imprimirNombreEnMayusculas(persona) {
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(Ana)
imprimirNombreEnMayusculas(salome)

function cumpleanos(persona) {
    return{
        ...persona,
        edad: persona.edad+1
    }
}

