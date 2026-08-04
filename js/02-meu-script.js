/* Habilitando o modo ESTRITO da linguagem 
Desta forma, evitamos erros como esquecer de declarar variáveis/constantes e uso de palavaras pela linguagem.*/

"use strict";

/* 1) Crie uma variável chamada "produto" e coloque nela o nome de um produto.
2) Crie uma variável chamada "preco" e coloque nela o preço do produto.
3) Crie uma constante chamada "desconto" e coloque nela um valor fixo de desconto em reais.
4) Calcule o preço final do produto, descontando o valor definido na constante "desconto".
5) Monte e mostre uma frase no console exibindo o produto, o preço original, o desconto e o preço final.
 
Exemplos de saídas: 
 
O produto "Teclado Mecânico" custa R$ 250.
Com um desconto de R$ 30, o preço final é R$ 220. */

let produto = "Cadeira";
let preco = 500;

const desconto = 30;
let precoFinal = preco - desconto

console.log(`Produto "${produto}" custa "${preco}"`);
console.log(`Com um Desconto "${desconto}" Preço Final "${precoFinal}" `);


