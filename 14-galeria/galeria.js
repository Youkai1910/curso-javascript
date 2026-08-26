'use strict';

// Objeto com as propiedades de configurçao para o Simplelightboxx
const opcoes = {
    captions: true ,
    captionSelector: 'self' ,
    captionType: 'attr',
    captonsData:'title',
    captionDelay: 1000,

    alertErrorMessage: "Imagem não encontrada...",
    download: "Clique aqui para baixar a foto",
    overlayOpacity: 0.6
};

const lightbox = new SimpleLightbox('.galeria a', opcoes);