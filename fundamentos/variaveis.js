// var ( solta, pode causar problemas)
// var altura = 7;
// var comprimento = 4;
// var area = altura * comprimento + "cm²";

// console.log(area);


// let ( mais seguro )
// let forma = "retangulo";
// let altura = 8;
// let comprimento = 5;
// let area;

// if (forma === "retangulo") {
//     area = altura * comprimento;
// } else {
//     area = altura * comprimento / 2;
// }

// console.log(area);


// const ( tem que ter valor inicial )
const forma = "quadrado";
const altura = 8;
const comprimento = 5;
let area;

if (forma === "quadrado") {
    area = altura * comprimento;
} else {
    area = altura * comprimento / 2;
}

console.log(area);