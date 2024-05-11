import { responderPergunta, x, cronometro} from './verificarResposta.js';
import { opcao1, opcao2, opcao3, opcao4 } from './alternativas.js';
import { perguntas } from './perguntas.js';

setInterval(cronometro, 1000);

    document.getElementById('pergunta').innerHTML = perguntas[x];
    document.getElementById("opcao1").innerHTML = opcao1[x];
    document.getElementById("opcao2").innerHTML = opcao2[x];
    document.getElementById("opcao3").innerHTML = opcao3[x];
    document.getElementById("opcao4").innerHTML = opcao4[x];

    // Definindo funções para as alternativas
    document.getElementById("opcao1").addEventListener("click", responderPergunta);
    document.getElementById("opcao2").addEventListener("click", responderPergunta);
    document.getElementById("opcao3").addEventListener("click", responderPergunta);
    document.getElementById("opcao4").addEventListener("click", responderPergunta);


