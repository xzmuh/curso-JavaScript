// CRIANDO NOVO ARRAY PADRONIZADO MAIUSCULO
const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesAjuste = nomes.map((nome) => {
    return nome.toUpperCase();
});

console.log(nomesAjuste);