'use strict';

/* Operadores lógicos  
&& -> E (AND)
|| -. OU (or) (osimbolo é chamado de pipe)
! -> Negação/não (not)*/

console.log("Exemplo &&");

/* Simulação  de um processo  de login:
Login é bem-sucedido se a senha do usuário estiverem corretos */

//simulaçaõ de dados existentes num banco de dados 
const senhaBD = "123abc";
const loginBD = "tiago.bsantos"

// Simulação de dados de entrada
let senhaDigitada = "123abc"
let loginDigitado = "tiago.bsantos";
let loginBemSucedido = false;

//Aqui, comparamos todos os dados. e só entra se tudo for V.
if (senhaDigitada === senhaBD && loginDigitado === loginBD) {
    console.log("Bem-vindos, login realizado com sucesso!");
    loginBemSucedido = true;
} else {
    console.log("Ops! Login/senha inválidos...");
}
/* Operador && só retorna o resultado verdadeiro se TODAS as condições foram verdadeiras. */

//variável para sinalizar /registrar o login bem-sucedido 

console.log("------");

console.log("exemplo ||");
let feriado = false;
let fimDeSemana = false;

/* Avaliar se o sistema está "rodando" em modo "completo" em dias úteis, ou em modo "reduzido" em feriados/finais de semana */
if(feriado === true || fimDeSemana === true){
    console.log("Modo reduzido: ativado");
} else {
    console.log("Modo completo: ativado");
    
}
/* Operador || retorna verdeiro se pelo menos uma das condições for verdadeira. */


console.log("------");

console.log("exemplo !");// inverte a lógica
let estaChovendo = false;

if (estaChovendo) { // estaChovendo === false, estaChovendo !== true
    console.log("legal, bora pra praia...");
    
} else {
console.log("Fica em, bora estudar!");
}

/*  se o usuario naõ está logado, convida - lo a acessar a pagina de login.
Caso contrario (ou seja, está logado), apresenta menu de opções. */
if (!loginBemSucedido) {
    console.log("Por favor, acesse a página login.html");
    } else {
        console.log("Veja o menu de opções e escolha uma...");
    }