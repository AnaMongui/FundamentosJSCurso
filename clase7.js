var Ana = {
    nombre: 'Ana',
    apellido: 'Mongui',
    edad: 28
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

function imprimirNombreYEdad(persona,edad){
    var nombre= persona.nombre
    var edad= edad.edad

    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`)
}   

imprimirNombreYEdad(Ana)
imprimirNombreYEdad(salome)