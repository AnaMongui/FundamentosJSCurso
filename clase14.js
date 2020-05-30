var Ana = {
    nombre: 'Ana',
    apellido: 'Mongui',
    edad: 24,
    peso: 56
}

console.log(`Al inicio del año ${Ana.nombre} pesa ${Ana.peso} kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = Ana.peso -3 
var dias = 0

while(Ana.peso > META){
    if (comeMucho()){
        aumentarDePeso(Ana)
    }
    if(realizaDeporte()){
        adelgazar(Ana)
    }
    dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${Ana.nombre} adelgazo 3 kg`)