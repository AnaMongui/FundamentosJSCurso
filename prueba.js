$.get('https://swapi.co/api/people/1', function (luke) {
    console.log(luke.name)
})

$.get('https://swapi.co/api/people/4', function (vader) {
    console.log(vader.name)
})
