'use strict';

/* Exemplo 01 */

//Busca e seleção de elementos através do ID
 const pValor = document.querySelector("#valor");
 const botaoSomar = document.querySelector("#somar");
 const botaoSubtrair = document.querySelector("#subtrair");

//Vriável para armazenar a contagem de cliques
let contador = 0;

// Desabilitando o botão subtrair
botaoSubtrair.disabled = true;

// Ouvinte de Evento para o botão de somar
botaoSomar.addEventListener("click", function(){
    //"Guardando" e somando cada clique
    contador++;

    //Exibindo o valor de contador no parágrafo selecionado
    pValor.textContent = contador;

    botaoSubtrair.disabled = false;
});
 

