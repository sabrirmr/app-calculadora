const sumar = require('./sumar')
const restar = require('./restar')
const multiplicar = require('./multiplicar')
const dividir = require('./dividir')

const process = require('process');
const operacion = process.argv[2];
const numeroA = +process.argv[3];
const numeroB = +process.argv[4];
let resultado = 0;


if(operacion === 'sumar'){
    resultado = sumar(numeroA, numeroB)
}else if(operacion === 'restar'){
    resultado = restar(numeroA, numeroB)
}else if(operacion === 'multiplicar'){
    resultado = multiplicar(numeroA, numeroB)
}else if(operacion === 'dividir'){
    resultado = dividir(numeroA, numeroB)
}

console.log(resultado);
 