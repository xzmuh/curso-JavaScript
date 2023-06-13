//função declarada
function mostrarTexto(texto) {
    console.log(texto)
}

//chamando a função
mostrarTexto("Função chamada!")

//SEM PARAMETRO
function soma(sum1, sum2) {
    return sum1 + sum2;
}

function multiplicaSoma(num1, num2) {
    return num1 * num2;
}

console.log(multiplicaSoma(soma(12, 8), soma(7, 4)))


// COM PARAMETRO
// function nomeIdade(nome, idade) {
//     return `Meu nome é ${nome} e idade ${idade}`;
// }
// console.log(nomeIdade("Fuscadas1233", 13))

function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
}
   
cumprimentaPessoa('Helena')


function cumprimentar(){
    return 'Oi gente!'
}
   
function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}
   
cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

// EXPRESSÃO DE FUNÇÃO //   só é possivel usar depois que foi declarado
const soma = function(numero1, numero2) {
    return numero1 + numero2;
}
console.log(2, 8)