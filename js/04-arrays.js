'user strict';

//Declarando um array(vetor)
let vocalistas = ["Ozzy", "Dio", "Lemmy", "David", "Freddy"];
console.log(vocalistas);

//o JS aceita  QUALQUER valor em arrays
let coisas = ["Senac", 2026, true, "<li></li>"];
console.log(coisas);

//Acessando determinados elementos/valores/dados do Array
console.log(vocalistas[1]);//Dio
console.log(coisas[0]);//Senac

console.log(`O ${vocalistas[2]} era o cantor do Motorhead!`);

/* Mini-exercícios: monte uma frase dizendo "Estamos no Senac estudando programação no ano de 2026" */

console.log(`Estamos no ${coisas[0]} estudando programação no ano de ${coisas[1]}.`);


let nomes = ["Corinthians", "Animes", "Rock n Roll", "Cadeira", "Computador", "Mesa", "Cão"];
console.log(nomes);

let material = ["Casa", 2026,];
console.log(material);

console.log(`Na ${material[0]} do programador tem ${nomes[1]}, ${nomes[5]} e tem ${nomes[6]}.`);

//Array como MATRIZ (array de array)
let ferramentasDeTI = [
    ["VSCode", "Notepad++", "Sublime Text"],
    ["Photoshop", "corelDraw", "Canva"],
    ["Word", "Exel", "PowerPoint"]
];
console.log(ferramentasDeTI);
console.log(ferramentasDeTI[0][1]);//Notepad++
console.log(ferramentasDeTI[2][0]);//Word
console.log(ferramentasDeTI[1][2]);//Canva








