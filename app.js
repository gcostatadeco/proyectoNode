//el nombre de la constante que toma el valor de una funcion es sugerida por el desarrollador (evenOrOdd) esta constante pasa a ser como una funcion evenOrOdd sera procesada por index.js
const evenOrOdd = require('num-is-even-or-odd');
console.log(evenOrOdd(25))
console.log('hola mundo')
// console.log(evenOrOdd('hola mundo'))
console.log(`este numero es ${evenOrOdd(5)}`)

function saludo(nombre) {
    console.log(`buenos dias ${nombre}`)
}
saludo('manuel') 
