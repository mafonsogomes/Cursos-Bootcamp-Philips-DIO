/* var jogador1 = 1;
var jogador2 = 1;
var placar;

//if ternário 
jogador1 != -1 && jogador2 != -1 ? console.log("jogadores são válidos"): 
console.log("jogadores invalidos");


// usando if
if (jogador1 > 0 && jogador2 < jogador1) {
    console.log("Jogador 1 marcou ponto");
    placar = jogador1 > jogador2;
}

//usando else if
else if (jogador2 > 0 && jogador1 < jogador2) {
    console.log("Jogador 2 marcou ponto");
    placar = jogador2 > jogador1;
} 

else if (jogador1 == jogador2) {
    console.log("jogo empatado");
    placar = jogador1 == jogador2;
}

// usando else
else {
    console.log("Ninguém marcou ponto");
}

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log("jogador 1 ganhou");
        
        break;
    case placar = jogador2 > jogador1:
            console.log("jogador 2 ganhou");
        break;
    case placar = jogador1 == jogador2:
        console.log("Jogo empatado");
        break;
        default:
            console.log("ninguém ganhou");
} */

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = {propriedade1: 'valor1', propriedade2: 'valor2',
 propriedade3: 'valor3'}

 // for - executa uma instrução até que ela seja falsa

/*  for (let indice = 0; indice < array.length; indice++) {
     console.log(indice);
 } */

 // for/in executa repetição a partr de uma propriedade

/*  for (let i in array) {
     console.log(i);
 }

 for (i in object) {
     console.log(i);
 } */

 // for/of executa repeticao a partir de um valor
 //com array

 /* for (i of array) {
     console.log(i);
 }

 // for/of com objetos

 for (i of object.propriedade1) {
     console.log(i); // ele imprime cada letra em uma linha, por isso não utiliza em objetos 
    
 } */

 // usando o while
/*  var a = 0

/*  while (a < 10) {a++; console.log(a);
} */

 // do/while

/*  do {
     a++; 
     console.log(a);
 }
 while (a < 10) */ 