// PEGANDO INDICE E VENDO SE É TRUE OU FALSE
const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno, indice) => {
    return (medias[indice] < 6); // retorna true ou false
});

console.log(reprovados);