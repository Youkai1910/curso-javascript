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

document.addEventListener("keyup", function (event) {

    const teclaUsada = event.key

    pTeclaPressionada.textContent = teclaUsada;

    switch (teclaUsada) {
        case "a": pagina.style.background = "yellow"; break;
        case "b": pagina.style.background = "lightblue"; break;
        case "c": pagina.style.background = "gray"; break;
        default: pagina.style.background = "red";
    }
});

/* Exemplo 6 */

// Aqui, primeiro selecionamos a div em que os elementos estão:
const divTarefas = document.querySelector(".exemplo-tarefas");

// Depois, fazemos o JS procurar DENTRO da div por cada elemento.
// Isso torna a busca do JS mais rápida do que ao procurar no document.
const inputTarefa = divTarefas.querySelector("#tarefa");
const botaoAdicionar = divTarefas.querySelector("#adicionar");
const listaTarefas = divTarefas.querySelector("#lista");

botaoAdicionar.addEventListener("click", function () {
    //Capturar o que foi digitado(valor do campo)
    const textoTarefa = inputTarefa.value;

    // Se o textoTarefa estiver vazio, interrompa as função
    // fazemos isso com um simples "return".
    if (textoTarefa === "") return;

    // Criar o elemento/tag <li>
    const item = document.createElement("li");

    //Adicionar conteudo à nova tag criada
    item.textContent = textoTarefa;


    //Adicionar o elemento dentro da lista 
    listaTarefas.appendChild(item);

    inputTarefa.value = ""; // limpar o campo (deixar vazio)
    inputTarefa.focus(); // devolve o foco para campo

    //Detectar o clique em cada item e marca-lo como feito
    item.addEventListener("click", function () {
        item.classList.toggle("feito");
    })

});// final do evento / função do botão adicionar

/* Mapeamento de Evento 
Detectar o enter e mapear a execução  atrvés do clique*/
inputTarefa.addEventListener("keydown", function (event) {
    if (event.key === "Enter") botaoAdicionar.click();

});

/* Exemplo 7 */
const barraProgresso = document.querySelector("#barra");
const botaoCarregar = document.querySelector("#carregar");
const botaoLimpar = document.querySelector("#limpar");

botaoCarregar.addEventListener("click", function () {
    barraProgresso.value += 10;
    if (barraProgresso.value === 100) barraProgresso.classList.add("concluido");
});

/* mini-exercicio: progrme o botão limpar para que, quando clicando, faça a barra de progresso voltar ao normal (sem cor e sem valor). */
botaoLimpar.addEventListener("click", function(){
   barraProgresso.value = 0 
   barraProgresso.classList.remove("concluido");
});

/* Exemplo 8 */

const formExemplo = document.querySelector("#form-exemplo");
const inputNome = formExemplo.querySelector("#nome");
const inputIdade = formExemplo.querySelector("#idade");
const pSaida = document.querySelector("#saida");

// Usamos o evento submit para dar suporte a mouse, teclado e toque
formExemplo.addEventListener("submit", function(event){
    //Anulando o comportamento padrão do navegador
    //(Comportamento padrão é tentar redirecionar)
    event.preventDefault();

    // pegando os valores digitados nos campos
 const nome = inputNome.value;
 const idade = Number(inputIdade.value);

 console.log(nome, idade);

 formExemplo.reset(); // limpando Todos os campos do formulário
 inputNome.focus(); // devolvendo o foco ao campos nome
 
 pSaida.textContent = "Seus dados foram cadastrados com sucesso!";
});















