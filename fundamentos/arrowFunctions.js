const soma = (num1, num2) => num1 + num2;

const somaPequenoNumero = (numero1, numero2) => {
    if (numero1 < 10 || numero2 < 10) {
        return "Número tem que ser pequeno!";
    } else {
        return numero1 + numero2;
    }
}