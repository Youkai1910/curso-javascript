'use strict'

const formulario = document.querySelector("#cadastro");
const inputNome = formulario.querySelector("#nome");
const inputNota1 = formulario.querySelector("#nota1");
const inputNota2 = document.querySelector("#nota2");
 
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    const nome = inputNome.value;
 const nota1 = Number(inputNota1.value);
 const nota2 = Number(inputNota2.value);

 console.log(nome, nota1, nota2);
});