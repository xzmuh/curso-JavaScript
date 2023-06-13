console.log("deu erro");
console.error(new Error("deu erro")); // traz detalhe do erro (objeto)

// tratamento de error seria fazer o consoleErro

let numero = 5;

if (numero === 5) {
    console.log("Número é 5")
} else {
    console.error("Error: Número não é igual a 5")
}