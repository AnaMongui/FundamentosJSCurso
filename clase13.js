var Ana ={
    nombre: 'Ana',
    apellido: 'Mongui',
    edad:24, 
    peso:56
}

console.log(`Al inicio del año ${Ana.nombre} pesa ${Ana.peso} kg`)

const INCREMENTO_PESO = 0.2

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= 365; i++) {
    var random = Math.random()
   
    if(random < 0.25) {
        aumentarDePeso(Ana)
    }else if (random < 0.5){
        adelgazar(Ana)
    }
}

console.log(`Al Final del año ${Ana.nombre} pesa ${Ana.peso.toFixed(1)} kg`)