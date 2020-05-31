function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    claseHija.prototype.constructor = claseHija
} 


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

function Desarrollador(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, persona)

Desarrollador.prototype.saludar = Function (){
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y soy Desarrollador `)
}



// var Ana = new persona('Ana', 'Mongui', 1.62)
// var Salome = new persona('Salome', 'Gonzalez', 1.00)
// var Luis = new persona('Luis', 'Gonzalez', 1.74)




