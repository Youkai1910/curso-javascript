'use stict'

/*  3 formas/sintaxes para criar função */

//1) Função anônima (precisa ser depois da Declareção):
const exemplo1 = function(){
    console.log("Olá! Sou uma função anômina!");
    
};

//"Chamnado " a função:
exemplo1()

console.log("----------");

//2)Função declecara/nomeado
function exemplo2() {
    console.log("Opa! Função declaradas");
    
};

//Chamando a fução declarada (PODE CHAMAR ANTS OU DEPOIS)
exemplo2();

console.log("----------");

//3) Arrow Function (fundaçao seta/ lecha)
const exemplo3 = () => {
    console.log("É aqui temos uma Arrow Function!");   
};

// "Chamando" a arrow function (PRECISA SER DEPOIS DA DECLARAÇÃO):
exemplo3();

console.log("---------");

/* Parâmetros/Argumentos de função 
É parâmetro OPICIONAL quando definimos um padrão para o parâmetro. No exemplo
 abaixo, o parâmetro sobrenome (quando não informado), fica valendo uma string 
 vazia "". */

function saudacao(nome, sobrenome = ""){
    console.log("Bem-Vindo(a) "+nome+" "+sobrenome);    
};

saudacao("Carlos", "Nascimento");
saudacao("Ana", "Paula");// aqui, sobrenome foi omitido
saudacao("Jesus", "Cristo");

console.log("----------");

function multiplicar(valor1, valor2){
    // Variável de escopo LOCAL
    let resultado = valor1 * valor2;

     //"retorna/ joga pra fora" o resultado que função gerou
    return resultado;
};

console.log("Resultado A: "+multiplicar(10, 20));
console.log("Resultado B: "+multiplicar(5, 100));

console.log("--------------");

/* Formatar pra qualquer moeda */
function formatarMoeda(valor, moeda = "BRL") {
    return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: moeda
}).format(valor);
};

console.log("Teste 1 REAIS: "+formatarMoeda(1000, "BRL"));
console.log("Teste 2 DÓLAR: "+formatarMoeda(1000, "USD"));
console.log("Teste 3 EURO:  "+formatarMoeda(1000, "EUR"));
console.log("Teste 4 REAIS: "+formatarMoeda(500));

console.log("----------------------------");

console.log("Simplificando com Arrow Function");

//Versão 1: sintaxe declarada/nomeada
/* function dobrar(numero) {
    return numero * 2;
}; */

// Versão 2: sintaxe arrow function com return EXPLÍCITO
/* const dobrar = (numero) => {
    return numero * 2;
}; */

//Versão 3: sintaxe arrow function com return IMPLÍCITO
const dobrar = numero  => numero * 2;
    
console.log(dobrar(20));








