class persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
        if(fn){
            fn(nombre, apellido)
        }
    }

    soyAlto() {
        return this.altura > 1.7
    }
}

class Desarrollador extends persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y soy desarrollador`)
        if (fn) {
            fn(this.nombre, this.apellido, true)
        }
    }

}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen Día ${nombre} ${apellido}`)
    if(esDev){
        console.log(`Ah mirá, no sabía que eras desarrollador/a`)
    }
}

var Ana = new persona('Ana', 'Mongui', 1.62)
var Salome = new persona('Salome', 'Gonzalez', 1.00)
var Luis = new Desarrollador('Luis', 'Gonzalez', 1.74)

Ana.saludar()
Salome.saludar(responderSaludo)
Luis.saludar(responderSaludo)








