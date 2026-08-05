'user srtict';

console.log("Funções para TEXTO\n\n");

const frase = " JavaScript é INCRÍVEL! ";

// Transformação em maiúsculas
console.log(frase.toUpperCase());

//Tansformação em minúsculas
console.log(frase.toLowerCase());

// verificar se um texto existe em outro
console.log(frase.includes("Java")); // true
console.log(frase.includes("JS")); //false

// Procura e substitui
console.log(frase.replace("INCRÍVEL", "Demais"));

// Remoção de espaços no início e no fim
console.log(frase.trim());

console.log("--------------------------");

console.log("Funções para NÚMERO\n\n");

const preco = 19.95422;
console.log(preco);

//Definir quantidade de casas decimais 
console.log(preco.toFixed(2));

//obs.: tofixed()transforma o valor em string
const precoComCasaDeCimal = preco.toFixed(2);
console.log((precoComCasaDeCimal));

//E Number()converte novamente pra número
console.log(Number(precoComCasaDeCimal));

console.log(typeof preco);//number
console.log(typeof precoComCasaDeCimal);//string

console.log(Math.round(preco));// arredonda
console.log(Math.ceil(19.1));// arredonda para cima
console.log(Math.floor(19.9));// arredonda pra baixo

console.log(Math.max(10, 5, 200, 7));// retorna o maior
console.log(Math.min(10, 5, 200, 7));// retorna o menor

console.log("\n--------------------\n\n");

console.log("Funções para ARRAY\n\n");
const filiaisSP = ["São Paulo", "Mogi das Cruzes", "Ubatuba"];
const filiaisRj = ["Rio de Janeiro", "Ptrópolis"];

//Concatenando arrays para formar um novo array
const filiaisSudeste = filiaisSP.concat(filiaisRj);
console.log(filiaisSudeste);

//Operador SPREAD (...) para gerar um novo array
const outroExemplo = [...filiaisSP, ...filiaisRj];
console.log(outroExemplo);

















