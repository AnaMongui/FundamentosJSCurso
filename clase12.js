var Ana = {
    nombre: 'Ana',
    apellido: 'Mongui',
    edad: 24,
    ingeniero: true,
    cocinero: true,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: false
}

var salome = {
    nombre: 'Salome',
    apellido: 'Gonzalez',
    edad: 2
}

const MAYORIA_DE_EDAD = 18

// const esMayorDeEdad = (persona) => {
//     return persona.edad >= MAYORIA_DE_EDAD

const esMayorDeEdad = ({ edad }) => edad <= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }

}

function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)){
        console.log('ACCESO DENEGADO')
    }
}