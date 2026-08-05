'use strict';

// LOOP  WHILE (ENQUANTO)
console.log("Exemplo 1: while()");
console.log("Executa ações determinadas enquanto uma condição for verdadeira\n");

/* Exibir o valor da variável de controle em um ciclo de 10vezes*/


//Variável de controle
let i = 1;

while (i <= 10) {
    console.log("Valor de contador é: " + i);
    i++;
}
console.log("--------");

console.log("Exemplo 2: for()");
console.log("Executa ações de acordo com uma quantidade de vezes indica.");

//for (variável de controle; condição; atualização)
for (let i = 1; i <= 5; i++) {
    console.log("Senac " + i);
}

console.log("-------");

console.log("Exemplo 3: loop para acessar ARRAY");

const bandas = [
    "Ac/Dc", "Metallica", "Iron Maiden", "Yes",
    "Guns N Roses", "Motle Crue", "Led Zepellin", "Deflaprd"];


// Propriedade length: serve para acessar o tamanho do array

// Guardando Primeiro o tamanho do array
const quantidadeDeBandas = bandas.length;

//Obs.: sempre inicie em Zero para acessar Arrays
for (i = 0; i < quantidadeDeBandas; i++) {
    console.log(bandas[i]);
}

console.log("---------");
console.log("Loop exclusivo para acessar arrays");

for (const banda of bandas) {
    console.log(banda);
}

console.log("--------");

console.log("Exemplo 5: for/in");
console.log("Loop exclusivo para objeto");

const pessoa = {
    nome: "Chaves",
    idade: 25,
    cidade: "São Paulo"
};

for (const prop in pessoa) {
    console.log(pessoa[prop]);
}

console.log("---------");

console.log("Exercício");

const clientes = [
    { identificador: 1, nome: "Huguinho" },
    { identificador: 2, nome: "Zezinho" },
    { identificador: 3, nome: "Luízinho" }
];
for (const cliente of clientes) {
    console.log(`- Cliente: ${cliente.nome}, ID: ${cliente.identificador}`);
    //("- Cliente: "+cliente.nome+", ID: "+cliente.identificador); <- contatenação
};
















