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

botaoSubtrair.addEventListener("click", function (){
    //Evitar valor negativo
    if(contador > 0) contador--;

    // Colocar no paragrafo chamado "valor" o número existente em contador
    pValor.textContent = contador;

    //Quando o contador for zero, desativamos o botão Subtrair
    if( contador === 0) botaoSubtrair.disabled = true;
});

/* Exemplo 2 */
const botaoMostrarEsconder = document.querySelector("#mostra-esconder");
    const pTexto = document.querySelector("#texto");

  // Ouvinte de evento para botão
  botaoMostrarEsconder.addEventListener("click", function(){
    //Usamos o toggle para ter o recurso de colocar/remover class
    pTexto.classList.toggle("oculto");
// Alternando o texto o botanão
/* se o texto do botão for esconder, troque para, Caso  contrário, coloque Esconder */
if (botaoMostrarEsconder.textContent === "Esconder") {
    botaoMostrarEsconder.textContent = "Mostrar";
} else{
    botaoMostrarEsconder.textContent = "Esconder";
}

  });

  

    
    
 

 

