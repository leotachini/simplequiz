let x = 0;
const perguntas = [
"Quem foi o primeiro cientista a propor uma teoria heliocêntrica do sistema solar",
"Quanto tempo leva para a Lua orbitar a Terra",
"Qual é a capital do Quênia",
"Quem escreveu a peça de teatro 'Romeu e Julieta'",
"O que é a fotossíntese",
"Qual é o nome do fenômeno óptico que ocorre quando a luz se curva ao passar por diferentes meios, como o ar e a água",
"Quem é o autor da obra filosófica 'Meditações', que reflete sobre a ética e a filosofia estoica",
"Qual é a unidade básica da estrutura de um ácido nucleico, como o DNA",
"Qual elemento químico é representado pelo símbolo 'Cu' na tabela periódica",
"Quem é o autor da obra '1984', um famoso romance distópico que descreve um regime totalitário e vigilância governamental"
]
const opcao1 = [
    "Isaac Newton",
    "Aproximadamente 25 dias",
    "Moçambique",
    "Oscar Wilde",
    "O processo de revelação de uma foto",
    "Refração",
    "Platão",
    "Nucleotídeo",
    "Ferro",
    "Ray Bradbury"
    ]
const opcao2 = [
        "Copérnico",
        "Aproximadamente 23 dias",
        "Cidade do Quênia",
        "William Shakespeare",
        "O processo de mudança de cor de alguma coisa",
        "Reflexão",
        "Aristóteles",
        "Átomo",
        "Cobre",
        "H.G. Wells"
    ]
const opcao3 = [
        "Albert Einstein",
        "Aproximadamente 27 dias",
        "Nairobi",
        "Nelson Rodrigues",
        "Um método de produção de energia da luz solar feito pelas plantas",
        "Difração",
        "Sócrates",
        "Nucleosídeo",
        "Cromo",
        "George Orwell"
    ]
    const opcao4 = [
        "Galileu Galilei",
        "Aproximadamente 29 dias",
        "Botswana",
        "Sófocles",
        "Um método de produção de eletricidade da queima de combustíveis",
        "Polarização",
        "Marco Aurélio",
        "Nucleobase",
        "Cluorídeo",
        "Aldous Huxley"
    ]
//definindo respostas corretas
const respostasCorretas = [opcao4[0], opcao3[1], opcao3[2], opcao2[3], opcao3[4], opcao1[5],opcao4[6], opcao1[7], opcao2[8], opcao3[9]]

let acertos = document.getElementById('acertos').innerHTML = 0;
let erros = document.getElementById('erros').innerHTML = 0;
let pergunta = document.getElementById('pergunta').innerHTML = perguntas[x];
//const proxima = document.getElementById('proximo').addEventListener("click", proximaPergunta);
let quantPerguntasRespondidas = 0;
let contagemRegressiva = document.getElementById('tempo').innerHTML = 15;
let audioErros = document.getElementById('erro');
let audioAcertos = document.getElementById('acerto');
let susto = document.getElementById('susto');

function cronometro(){
    contagemRegressiva = contagemRegressiva - 1;
    document.getElementById('tempo').innerHTML = contagemRegressiva;
        if(contagemRegressiva <= 0){
            alert("Tempo esgotado, a presente pergunta será considerada errada")
            erros += 1;
            document.getElementById('erros').innerHTML = erros;
            proximaPergunta();
            contagemRegressiva = 15;
        }
}
    
setInterval(cronometro, 1000)

document.getElementById("opcao1").innerHTML = opcao1[x];
document.getElementById("opcao2").innerHTML = opcao2[x];
document.getElementById("opcao3").innerHTML = opcao3[x];
document.getElementById("opcao4").innerHTML = opcao4[x];

function proximaPergunta(){
    
    x+=1;
    document.getElementById('pergunta').innerHTML = perguntas[x];
    document.getElementById("opcao1").innerHTML = opcao1[x];
    document.getElementById("opcao2").innerHTML = opcao2[x];
    document.getElementById("opcao3").innerHTML = opcao3[x];
    document.getElementById("opcao4").innerHTML = opcao4[x]; 
      
  console.log(x);
 
  if(x > 9){
    alert("Fim de jogo");
    alert(`Você errou ${erros} e acertou ${acertos} perguntas`)
    window.location.reload()  
    x = 0
}
}
//definindo funções as alternativas
document.getElementById("opcao1").addEventListener("click", responderPergunta);
document.getElementById("opcao2").addEventListener("click", responderPergunta);
document.getElementById("opcao3").addEventListener("click", responderPergunta);
document.getElementById("opcao4").addEventListener("click", responderPergunta);

//ao responder a pergunta sera executado esse comando
function responderPergunta(){
if(perguntas[x] == perguntas[0] && this.innerHTML == respostasCorretas[0]){
    audioAcertos.play();
    acertos += 1; 
    quantPerguntasRespondidas +=1;
    document.getElementById('acertos').innerHTML = acertos;
    acertar();
}
else if(perguntas[x] == perguntas[1] && this.innerHTML == respostasCorretas[1]){
    audioAcertos.play();
    acertos += 1;
    quantPerguntasRespondidas +=1;
    document.getElementById('acertos').innerHTML = acertos;
    acertar();
}
else if(perguntas[x] == perguntas[2] && this.innerHTML == respostasCorretas[2]){
    audioAcertos.play();
    acertos += 1;
    quantPerguntasRespondidas +=1;
    document.getElementById('acertos').innerHTML = acertos;
    acertar();
}
else if(perguntas[x] == perguntas[3] && this.innerHTML == respostasCorretas[3]){
    audioAcertos.play();
    acertos += 1;
    quantPerguntasRespondidas +=1;
    document.getElementById('acertos').innerHTML = acertos;
    acertar();
}
else if(perguntas[x] == perguntas[4] && this.innerHTML == respostasCorretas[4]){
    audioAcertos.play();
    acertos += 1;
    quantPerguntasRespondidas +=1;
    document.getElementById('acertos').innerHTML = acertos;
    acertar();
}
else if(perguntas[x] == perguntas[5] && this.innerHTML == respostasCorretas[5]){
    audioAcertos.play();
    acertos += 1;
    quantPerguntasRespondidas +=1;
    document.getElementById('acertos').innerHTML = acertos;
    acertar();
}
else if(perguntas[x] == perguntas[6] && this.innerHTML == respostasCorretas[6]){
    audioAcertos.play();
    acertos += 1;
    quantPerguntasRespondidas +=1;
    document.getElementById('acertos').innerHTML = acertos;
    acertar();
}
else if(perguntas[x] == perguntas[7] && this.innerHTML == respostasCorretas[7]){
    audioAcertos.play();
    acertos += 1;
    quantPerguntasRespondidas +=1;
    document.getElementById('acertos').innerHTML = acertos;
    acertar();
}
else if(perguntas[x] == perguntas[8] && this.innerHTML == respostasCorretas[8]){
    audioAcertos.play();
    acertos += 1;
    quantPerguntasRespondidas +=1;
    document.getElementById('acertos').innerHTML = acertos;
    acertar();
}
else if(perguntas[x] == perguntas[9] && this.innerHTML == respostasCorretas[9]){
    audioAcertos.play();
    acertos += 1;
    quantPerguntasRespondidas +=1;
    document.getElementById('acertos').innerHTML = acertos;
    acertar();
}
    else{
        audioErros.play();
        erros += 1;
        quantPerguntasRespondidas +=1;
        document.getElementById('erros').innerHTML = erros;
        errar()
       
    }
    console.log(x);
console.log(quantPerguntasRespondidas)
proximaPergunta();
contagemRegressiva = 15;
}

function errar(){
    alert("Resposta errada")
}

function acertar(){
    alert("Resposta correta")
}

console.log(x);
console.log(quantPerguntasRespondidas)