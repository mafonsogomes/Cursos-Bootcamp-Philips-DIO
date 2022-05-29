/* selecionei a div dino do html no documento*/
const dino = document.querySelector ('.dino');
const background = document.querySelector('.background')
let isJumping = false;
let position = 0;

function handleKeyUp(event){
    //keycode.info
    if (event.keyCode === 32) {
        if (!isJumping)
        jump();
    }
}
function jump() {
    isJumping = true;
/* setInterval serve para definir intervalos, tudo que tiver dentro das chaves será executado
sem parar no intervalo que agente definir nesse caso 20 milisegundos*/    
let upInterval = setInterval(() => {
        if (position >=150) {
           clearInterval(upInterval) 

           //descendo
        let downInterval = setInterval(() => {
            if (position <=0) {
                clearInterval(downInterval);
                isJumping = false;
                } else {
                position -=10;
                dino.style.bottom = position +'px';
                }
            }, 20);
        } else {
        //subindo
        position += 20;
        dino.style.bottom = position + 'px';
        } 
    }, );
}


function createCactus () {
    const cactus = document.createElement('div'); //Criando uma div no HTML usando o javascript, gerar htmls novos.
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;
    cactus.classList.add('cactus'); // adicionando uma classe na div que acabou de ser criada dentro do html.
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus); // adicionando um filho.

    let leftInterval = setInterval(() => {       
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            clearInterval(leftInterval);
            document.body.innerHTML =`<h1 class = 'game-over'>Fim de Jogo</h1><h2 class = 'aperte'>Aperte o botão para jogar novamente</h2>
            <div class = 'botao'> <button onclick="location.reload()">Jogar</button></div>`;
           
        } else { 
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px'
        }
    }, 20);
    // execute uma determinada função, depois de um determinado tempo
    setTimeout(createCactus, randomTime);

}


//tudo que você faz no navegador seja um clique, pressionamento de tecla gera um evento.
//Nesse comando você vai escutar esse evento e fazer algo com ele.
createCactus();
document.addEventListener ('keyup', handleKeyUp);




 

