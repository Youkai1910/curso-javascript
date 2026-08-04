'use strict'

/* "chatbot" */
console.log("Bem-vindo ao ChatBot da Biribinha Infortima");
console.log("\nComo posso ajudar? Escolha: \n\n" +
    "1. Financeiro\n" +
    "2. Vendas\n" +
    "3. Suporte\n\n"
);

console.log("----------");

let opcao = Number(prompt("Digite uma das opções validas (1, 2 ou 3):"));

//parseInt() -> converte prá número inteiro
//parseFloat() ->  converte pra número decimal/quebrado/real
//String() -> converte um dado para texto (string)
switch (opcao) {
    case 1:
        console.log("Financeiro");
        console.log("Legal, o que quer saber sobre finanças");
        break;
    case 2:
        console.log("Vendas");
        console.log("Show, quer comprar o que?");
        break;
    case 3:
        console.log("Suporte");
        console.log("Ok, o que está acontecendo?");
        break;
    default:
        console.log("Não entendi");
        console.log("Aguarde para falar com atendente humano...");
}


