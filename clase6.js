var Ana ={
    nombre: 'Ana', 
    apellido: 'Mongui',
    edad: 28
}

var salome ={
    nombre: 'Salome',
    apellido: 'Gonzalez',
    edad: 2
}

function imprimirNombreEnMayusculas(persona) {
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas(Ana)
imprimirNombreEnMayusculas(salome)