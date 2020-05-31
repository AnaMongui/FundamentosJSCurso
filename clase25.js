class persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar (){
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
    }

soyAlto(){
    return this.altura >1.7
}
}

class Desarrollador extends persona{
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
}

saludar(){
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y soy desarrollador`)
}

}

// var Ana = new persona('Ana', 'Mongui', 1.62)
// var Salome = new persona('Salome', 'Gonzalez', 1.00)
// var Luis = new persona('Luis', 'Gonzalez', 1.74)




