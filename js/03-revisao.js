'use strict';

// Usamos let para variável
let unidadeCurricular = 2;//número inteiro
let preco = 1575.59;// número real
let titulo = "Desenvolvimento Front-End";//texto(srting)

//Usamos const para constantes (valor fixo, não muda)
const escola = "Senac";

//Saída de dados (exibi no console do navegador)

//Concatenação: usa aspas e sinal de +
console.log("Estamos na unidade "+unidadeCurricular+" no curso de " +titulo);

//Template String/Literal: usa crases `` e ${}
console.log(`A escola ${escola} cobra R$ ${preco} por este curso.`);
