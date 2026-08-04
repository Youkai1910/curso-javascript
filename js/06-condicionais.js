'use strict';

/* Operadores RELACIONAIS
< MENOR QUE 
<= MENOR IGUAL
> MAIOR QUE 
>= MAIOR IGUAL
== COMPARAÇÃO DE IGUALDADE DE VALOR
=== COMPARAÇÃO DE IGUALDADE DE VALOR E DE TIPO*/
// Expressões  lógica condicional
let a = 10;
let b = 50;
let x = a > b;
console.log(x);

let c = "10";
let y = a == c;// analisa valor (true)
let z = a === c;//analisa Valor e Tipo de Dado (false)
console.log("Y: "+y);
console.log("Z: "+z);

console.log("------");

console.log("Exemplo 1: condicional SIMPLES (if)");
let numero = 50;

//Se o valor de numero for maior ou igual a 20, mostrar
//uma mensagem qualquer
if(numero >= 20){
    console.log("Esta mensagem aparece, se condição V");
}

//Podemos omitir as chaves para instruções simples
if(numero < 100) console.log("Ok, é menor que 100");

console.log("-------");

console.log("Exemplo 2; condicional COMPOSTA (if/else)");
let aluno = "Jim Morrison";
let idade = 65; 

//Lógica 1: checando se a idade é maior ou igual a 18
if(idade >= 18){
    console.log(aluno+" é maior de idade" );
} else {
    console.log(aluno+" é menor de idade");
}

//Lógica 2: checando se a idade é menor que 18
if(idade < 18){
    console.log(aluno+" é menor de idade");
} else {
    console.log(aluno+" é maior de idade");    
}

console.log("-----");

//Exercícios 05
let nota1 = 10;
let nota2 = 4;
let media = (nota1 + nota2) / 2;

console.log(media);
if(media >= 7) {
   console.log(media+" aprovado");
} else {
    console.log(media+" reprovado");
}
if (media < 7) {
    console.log(media+" reprovado"); 
} else {
    console.log(media+" aprovado");
}

console.log("------");

console.log("Exemplo 3: condicional ENCADEADA/SUCESSIVA");
console.log("(if, else if, else)");

/* Contexto: determina o desempenho do aluno de acordo com média que teve, sendo as opções: 

Média acima de 9? Ótimo
Média acima de 7? Bom
Média acima de 5? Ruim
Média até 5? Péssima */

//Inicia sem valor, pois dependerá dos resultados 
let desempenho;

if(media > 9){
    desempenho = "Ótimo";
} else if(media > 7) {
    desempenho = "Bom";
} else if(media > 5) {
    desempenho = "Ruim"
} else { // else if(media <= 5)
    desempenho = "Péssimo";
}
console.log("O desempenho é: "+desempenho);

console.log("-----");

//Exercícios 06
/* "Uma loja online precisa sinalizar o nível de estoque de um produto, de acordo com a seguinte lógica:

Estoque Crítico: se for zero
Estoque Baixo: se for até 10
Estoque normal: se for acima de 10"

No final do arquivo "06-condicionais.js", programe os recursos necessário para verificar o estoque e exibir estas informações. */
// Variável para teste (você pode alterar esse valor para testar os cenários)

let estoque = 5;

if (estoque === 0 ) {
    console.log("Estoque Crítico");
}
else if (estoque <= 10) {
    console.log("Estoque Baixo");
} else {
    console.log("Estoque Normal");
}







