// tipo Number

const num1 = 5;
const num2 = 2;

const operacao = num1 * num2;
console.log(operacao);

// numero float

const numDec1 = 5.5;
const numDec2 = 2.7;

const operacaoFloat = numDec1 / numDec2;
console.log(operacaoFloat.toFixed(2));

// NaN -> Not A Number

const palavra = "John";
const num = 2;

const operacaoNaN = palavra * num;
console.log(operacaoNaN);

// Exemplo 

function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
    
    return salarioHora;
}

const ganhoPorDia = ganhoPorHora(3000,176).toFixed(2) * 8;

console.log("Ganho por hora: ", ganhoPorHora(3000,176).toFixed(2));
console.log("Ganho por dia: ",ganhoPorDia);

// null 
let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

let qualquer = null;
let qualquer2;

console.log(qualquer); // null
console.log(qualquer2); // undefined