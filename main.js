const eH1 = document.querySelector('h1');
eH1.textContent = "Olá mundo!";

const eTabuleiro = criaTabuleiro();
document.body.append();

function criaTabuleiro(){
    const novoTabuleiro = document.createElement('div');
    novoTabuleiro.classList.add("tabuleiro") ;
    return novoTabuleiro;
}