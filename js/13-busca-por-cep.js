'use strict';

const formulario = document.querySelector("form");
const inputCep = formulario.querySelector("#cep");

const divGrupoEndereco = formulario.querySelector("#grupo-endereco");
const inputLogradouro = divGrupoEndereco.querySelector("#logradouro");
const inputBairro = divGrupoEndereco.querySelector("#bairro");
const inputCidade = divGrupoEndereco.querySelector("#cidade");
const inputEstado = divGrupoEndereco.querySelector("#estado");

const spanErroCep = formulario.querySelector("#erro-cep");
const pResultado = formulario.querySelector("#resultado");


inputCep.addEventListener("input", function () {
    // mantendo a div/campos escondidos enquanto estiver digitando
    divGrupoEndereco.hidden = true;

    // Deixando o pResultado sem qualquer formatação e sem texto enquanto estiver digitando
    pResultado.classList.remove("sucesso", "nao-encontrado");
    pResultado.textContent = "";

    /* expressão regular ou (Regex) */
    // \D -> captura somente números
    // /g -> a regex deve ser aplica para tudo
    // "" -> indica que vamos substituir por nada
    let cepSomenteNumeros = inputCep.value.replace(/\D/g, "");

    /* Permitir a entrada de somente 8 digitos e incluir o hífen após o quinto */
    cepSomenteNumeros = cepSomenteNumeros.slice(0, 8);

    /* Máscara  (aplicar o hifen) */
    let cepComMascara;

    // parte 1: montar a máscara
    if (cepSomenteNumeros.length > 5) {
        cepComMascara = cepSomenteNumeros.slice(0, 5) + "-" + cepSomenteNumeros.slice(5);
    } else {
        cepComMascara = cepSomenteNumeros;
    }

    // parte 2: aplica a máscara
    inputCep.value = cepComMascara;

    /* Validações */

    //Verificando se um cep foi digitado
    if (cepSomenteNumeros === "") {
        mostrarErro(inputCep, spanErroCep, "Digite um Cep");
        return; // parar enquanto o usuário
    }

    // verificando se cep não tem 8 números
    if (cepSomenteNumeros.length !== 8) {
        mostrarErro(inputCep, spanErroCep, "Cep deve ter 8 número");
        return; // interrompe  até o sejam digitados os 8 números
    }

    //"Reset" para não mostrar mensagem caso não tenha erros. 
    mostrarErro(inputCep, spanErroCep, "");

    // Buscar os dados de endereço do cep
    buscarCep(cepSomenteNumeros);

});

async function buscarCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`

    try {
        // Abrindo uma conexão de busca na API o CEP
        const resposta = await fetch(url);

        // Após a resposta, transformando os dados em formato de objeto JSON
        const dados = await resposta.json();

        // Se o retorno da API tiver a propriedade  erro  dentro de dados
        // (ou, dados.erro == 'true') -> neste caso precisa das aspas
        // siginifica que o CEP é inexistente
        if (dados.erro) {
            pResultado.textContent = "CEP não encontrado 😒";
            pResultado.classList.add("nao-encontrado");
            divGrupoEndereco.hidden = true;
            return;
        }

        // colocar os dados dentro dos campos 
        //Desetruturação de objeto
        const { logradouro, bairro, localidade, uf } = dados;

        inputLogradouro.value = logradouro;
        inputBairro.value = bairro;
        inputCidade.value = localidade;
        inputEstado.value = uf;

        // Exibir a div com os campos
        divGrupoEndereco.hidden = false;

        pResultado.textContent = "CEP encontrado! 😁";
        pResultado.classList.add("sucesso");


    } catch (erro) {
        console.error("Erro ao buscar o CEP: " + erro); // msg pro programador
        pResultado.textContent = "Erro ao buscar o CEP"; // msg para o usuário
        pResultado.classList.add("nao-encontrado");

    }

}

function mostrarErro(input, spanErro, mensagem) {
    // Exibindo a mensagem no spanErro
    spanErro.textContent = mensagem;

    // Se mensagem  não tiver vazia, aplica/remove CSS
    if (mensagem !== "") {
        input.classList.add("erro"); // coloca borda vermelha
        input.classList.remove("ok"); // tira a borda verde
    }
    else {
        // Caso contrário, remove/aplica
        input.classList.remove("erro");
        input.classList.add("ok");

    }
}