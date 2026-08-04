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

//Aqui, comparamos todos os dados. e só entra se tudo for V.
if (senhaDigitada === senhaBD && loginDigitado === loginBD) {
    console.log("Bem-vindos, login realizado com sucesso!");
} else {
    console.log("Ops! Login/senha inválidos...");
}
/* Operador && só retorna o resultado verdadeiro se TODAS as condições foram verdadeiras. */

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
