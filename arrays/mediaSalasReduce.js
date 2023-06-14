const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasSala) {
    const somaDasNotas = notasSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);

    const media = somaDasNotas / notasSala.length;

    return media;
}

console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);

// ********** CLONANDO ARRAY PARA FAZER UM NOVO SEM ALTERAR O OUTRO ************ //

const notas = [7, 7, 8, 9];

const novasNotas = [...notas];

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);