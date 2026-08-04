'use strict';

//Exemplo 1: objeto com dados de uma pessoa
let pessoa = {
    //chave/propriedade: valor
    nome: "Fulano de tal",
    idade: 25,
    cidade: "São Paulo",
    estado: "SP"
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.cidade);

console.log("A pessoa se chama " + pessoa.nome);
console.log(`Ela tem ${pessoa.idade} anos.`);

console.log("-------------");

//Exemplo 2: objeto com array
let livro = {
    titulo: "Senhor dos Aneis",
    autor: "J.R.R. Tolkien",
    volumes: ["A Sociedade do Anel", "As Duas Torres", "O Retorno do Rei"]
};
console.log(livro)
console.log(livro.titulo);
console.log(livro.volumes[1]);
console.log("--------------");

//Exemplo 3: array de objetos
let livros = [
    {
        titulo: "Crônicas de Gelo e Fogo",
        ano: 1993
    },
    {
        titulo: "Desenvolvimento Web JS",
        ano: 2025
    },
    {
        titulo: "Pedagogia do Oprimido",
        ano: 1972
    }
];
console.log(livros);
console.log(livros[1].titulo);//Desenvolvimento Web JS
console.log("Um dos livros mais famosos de Paulo Freire foi lançado em: " + livros[2].ano);
console.log("---------");

//Exercícios 04
let aluno = {
    nome: "Dorval Marke",
    dataDeNascimento: "25/08/2000",
    listaDeTelefones: ["(11) 2135-0300", "(11) 94004-4244"],
    enderecocontendo: {
        rua: "Francisco Coimbra", 
        numero: "403", 
        bairro: "Penha"
    }

};
console.log(aluno.nome);
console.log(aluno.listaDeTelefones[1]);
console.log(aluno.enderecocontendo.bairro);

console.log("--------");

console.log(`O aluno ${aluno.nome} mora no bairro ${aluno.enderecocontendo.bairro}, e seu WhatsApp é ${aluno.listaDeTelefones[1]}.`);












