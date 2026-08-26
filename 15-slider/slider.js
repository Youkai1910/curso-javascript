'use strict';

// Objeto com opções de configuração para o slider 
const opcoes = {
    rewind: true, // ao final, volta para o primeiro slide/conteúdo
    autoplay: true, // execução automática
    interval: 3000, // Intervalo de tempo a cada troca
    pauseOnHover: true, // pausar ao colocar o mouse em cima
    //type: 'fade', // efeito de transição
    arrows: true, // setas de  navegação
    //pagination: true, // bolinhas de navegação

    //Ativar o modo responsivo de layout
    perPage: 3,
    gap: "10px",
    breakpoints: {
        800: {perPage: 2},
        600: {perPage: 1}
    }
};



// Ativando (mount) a instância/objeto Splide com as opções
new Splide( '.splide', opcoes ).mount();

