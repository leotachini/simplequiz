import { perguntas } from './perguntas.js';
import { opcao1, opcao2, opcao3, opcao4 } from './alternativas.js';

let x = 0;

let audioErros = document.getElementById('erro');
let audioAcertos = document.getElementById('acerto');
let acertos = 0;
let erros = 0;
let quantPerguntasRespondidas = 0;
let contagemRegressiva = 15;

function responderPergunta() {
    const respostasCorretas = [opcao4[0], opcao3[1], opcao3[2], opcao2[3], opcao3[4], opcao1[5], opcao4[6], opcao1[7], opcao2[8], opcao3[9]];

    if (this.innerHTML == respostasCorretas[x]) {
        audioAcertos.play();
        acertos += 1;
        document.getElementById('acertos').innerHTML = acertos;
        acertar();
    } else {
        audioErros.play();
        erros += 1;
        document.getElementById('erros').innerHTML = erros;
        errar();
    }
    console.log(x);
    quantPerguntasRespondidas += 1;
    console.log(quantPerguntasRespondidas);
    proximaPergunta();
}

function errar() {
    alert("Resposta errada");
}

function acertar() {
    alert("Resposta correta");
}

function proximaPergunta() {
    x += 1;
    document.getElementById('pergunta').innerHTML = perguntas[x];
    document.getElementById("opcao1").innerHTML = opcao1[x];
    document.getElementById("opcao2").innerHTML = opcao2[x];
    document.getElementById("opcao3").innerHTML = opcao3[x];
    document.getElementById("opcao4").innerHTML = opcao4[x];
    console.log(x);
    contagemRegressiva = 15;
    document.getElementById('tempo').innerHTML = contagemRegressiva;

    if (x >= perguntas.length) {
        alert("Fim de jogo");
        alert(`Você errou ${erros} e acertou ${acertos} perguntas`);
        window.location.reload();
        x = 0;
    }
}

function cronometro() {
    document.getElementById('tempo').innerHTML = contagemRegressiva;
    contagemRegressiva = contagemRegressiva - 1;
    if (contagemRegressiva < 0) {
        alert("Tempo esgotado, a presente pergunta será considerada errada")
        erros += 1;
        document.getElementById('erros').innerHTML = erros;
        proximaPergunta();
    }
}

export { responderPergunta, x, proximaPergunta, cronometro }