let listaNumerosSorteados = [];
let nuemroLiminte = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMessagemIncial() {
    exibirTextoNaTela('h1','Jogo do número sercreto');
    exibirTextoNaTela('p','Escolha um numero entre 1 e 100');
}

exibirTextoNaTela('h1','Jogo do número sercreto');
exibirTextoNaTela('p','Escolha um numero entre 1 e 100');


function verificarChute() {
    let chute = document.querySelector('input').value;

     if (chute == numeroSecreto){

        exibirTextoNaTela("h1", "ACERTOU!");
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let messagemTentativa = `Você descobriu número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", messagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');

     }else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "Número secreto é menor");
        } else {
            exibirTextoNaTela("p", "Número secreto é maior");
        }
        tentativas++
        limparCampo()
     }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * nuemroLiminte + 1);
    let quatidadeDeElementoNaLista = listaNumerosSorteados.length;

    if (quatidadeDeElementoNaLista == nuemroLiminte) {
        listaNumerosSorteados = []
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados)
        return numeroEscolhido;
    }
};

function limparCampo (){
    chute = document.querySelector("input")
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo()
    tentativas = 1;
    exibirMessagemIncial();
    document.getElementById("reiniciar").setAttribute('disabled', true);
}