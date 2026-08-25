'use strict'



 export function mostrarErro(input, spanErro, mensagem) {
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