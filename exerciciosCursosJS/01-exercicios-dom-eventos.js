'use strict'

const formulario = document.querySelector("#cadastro");
const inputNome = formulario.querySelector("#nome");
const inputNota1 = formulario.querySelector("#nota1");
const inputNota2 = formulario.querySelector("#nota2");
const resultados = document.querySelector("#resultados");



formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = inputNome.value;
    const nota1 = Number(inputNota1.value);
    const nota2 = Number(inputNota2.value);

    const media = (nota1 + nota2) / 2;

    let status;

    if (media >= 5) {
        status = "Aprovado(a)";
    } else {
        status = "Reprovado(a)";
    }

    const pNome = document.createElement("p");
    const pMedia = document.createElement("p");
    const pStatus = document.createElement("p");


    pNome.textContent = `Aluno(a): ${nome}`;
    pMedia.textContent = `Média: ${media.toFixed(1)}`;
    pStatus.textContent = `Status: ${status}`;

    if (media >= 5) {
        pStatus.style.color = "blue";
        pStatus.style.fontWeight = "bold";
    } else {
        pStatus.style.color = "red";
        pStatus.style.fontWeight = "bold";
    }

    resultados.appendChild(pNome);
    resultados.appendChild(pMedia);
    resultados.appendChild(pStatus);

    
    formulario.reset();
    inputNome.focus();

});