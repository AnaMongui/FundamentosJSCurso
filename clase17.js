var ana = {
    nombre: 'Ana',
    apellido: 'Mongui',
    altura: 1.62
}

var luis = {
    nombre: 'Luis',
    apellido: 'Gonzalez',
    altura: 1.74
}

var salome = {
    nombre: 'Salome',
    apellido: 'Gonzalez',
    altura: 82
}
var nanis = {
    nombre: 'Nanis',
    apellido: 'Mongui',
    altura: 1.64
}

var vero = {
    nombre: 'Veronica',
    apellido: 'Duque',
    altura: 1.59
}

var fabian = {
    nombre: 'Fabian',
    apellido: 'Mongui',
    altura: 1.76
}

var personas = [ana, luis, salome, nanis, vero, fabian]

for (var i = 0; i< personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura}mt`)
}