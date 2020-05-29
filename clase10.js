var Ana ={
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

function imprimirSiEsMayorDeEdad(persona){
    // console.log(`${persona.nombre} es:`)
    if (persona.edad >= 18) {
        console.log(`${persona.nombre} es mayor de edad:`)
    } else {
        console.log(`${persona.nombre} es menor de edad:`)
    }

}



function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)

if(persona.ingeniero === true){
    console.log('ingeniero')
     }
    
if (persona.cocinero){
    console.log('cocinero')
}

if (persona.cantante) {
    console.log('cantante')
}

if (persona.dj) {
    console.log('dj')
}

if (persona.guitarrista) {
    console.log('guitarrista')
}

if (persona.drone) {
    console.log('Piloto de drone')
}



}

