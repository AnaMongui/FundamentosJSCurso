function persona(nombre, apellido){
    this.nombre = nombre 
    this.apellido = apellido
    return this
}

persona.prototype.saludar = function () {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`)
}


console.log('Sacha')


var Ana = new persona('Ana', 'Mongui')
var Salome = new persona('Salome', 'Gonzalez')
var Luis = new persona('Luis', 'Gonzalez')
Ana.saludar()