function persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    // return this
}

persona.prototype.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
}

persona.prototype.soyAlto = function () {
    
    return this.altura > 1.7
}

var Ana = new persona('Ana', 'Mongui', 1.62)
var Salome = new persona('Salome', 'Gonzalez', 1.00)
var Luis = new persona('Luis', 'Gonzalez', 1.74)
