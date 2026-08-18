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
botaoSomar.addEventListener("click", function () {
    //"Guardando" e somando cada clique
    contador++;

    //Exibindo o valor de contador no parágrafo selecionado
    pValor.textContent = contador;

    botaoSubtrair.disabled = false;
});

botaoSubtrair.addEventListener("click", function () {
    //Evitar valor negativo
    if (contador > 0) contador--;

    // Colocar no paragrafo chamado "valor" o número existente em contador
    pValor.textContent = contador;

    //Quando o contador for zero, desativamos o botão Subtrair
    if (contador === 0) botaoSubtrair.disabled = true;
});

/* Exemplo 2 */
const botaoMostrarEsconder = document.querySelector("#mostra-esconder");
const pTexto = document.querySelector("#texto");

// Ouvinte de evento para botão
botaoMostrarEsconder.addEventListener("click", function () {
    //Usamos o toggle para ter o recurso de colocar/remover class
    pTexto.classList.toggle("oculto");
    // Alternando o texto o botanão
    /* se o texto do botão for esconder, troque para, Caso  contrário, coloque Esconder */
    if (botaoMostrarEsconder.textContent === "Esconder") {
        botaoMostrarEsconder.textContent = "Mostrar";
    } else {
        botaoMostrarEsconder.textContent = "Esconder";
    }

});



/* Exemplo 3 */
// seleção por ID
const imgFoto = document.querySelector("#foto");
// seleção por ATRIBUTO
const botoesDeFoto = document.querySelectorAll("[data-imagem]");



//Percorrer/Acessat o array de botões
for (const botao of botoesDeFoto) {
    botao.addEventListener("click", function () {
        //Pegar /obter os dados  dos botões (imagem e o alt)
        const imagem = botao.dataset.imagem;
        const textoAlt = botao.dataset.alt;

        //Aplicando a imagem e o texto alt a tag <img>
        imgFoto.src = imagem;
        imgFoto.alt = textoAlt;
    });
};
/* Exemplo 4 */
const textareaMensagem = document.querySelector("#mensagem");
const spanContadorCaracteres = document.querySelector("#contador");
const spanContadorRegressivo = document.querySelector("#regressivo");
const blimite = document.querySelector("p small b");

//Evento de entrada de dados (digitação no campo)
textareaMensagem.addEventListener("input", function () {
    //Capturando  durante a digitação  a qtd digitada de caracteres
    let totalCaracteres = textareaMensagem.value.length;

    // Exibindo o total de caracteres no spam
    spanContadorCaracteres.textContent = totalCaracteres;

    //contagem regressiva
    const contagemRegressiva = 100 - totalCaracteres;
    spanContadorRegressivo.textContent = contagemRegressiva;

    if (totalCaracteres === 100) {
        spanContadorCaracteres.classList.add("excesso");
        blimite.classList.add("excesso")
    } else {
        spanContadorRegressivo.classList.remove("excesso");
    }
});
/* Exemplo 5 */
const pTeclaPressionada = document.querySelector("#tecla b");
const pagina = document.querySelector("body");

document.addEventListener("keyup", function(event){
    
  const teclaUsada = event.key

  pTeclaPressionada.textContent = teclaUsada;

  switch (teclaUsada) {
    case "a": pagina.style.background = "yellow"; break;
    case "b": pagina.style.background = "lightblue"; break;
    case "c": pagina.style.background = "gray"; break; 
    default: pagina.style.background = "red";
  }
  console.log(teclaUsada);
  
});














