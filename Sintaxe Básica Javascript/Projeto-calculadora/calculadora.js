function calculadora() {
    const operacao = Number(prompt('escolha uma operação:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'));
        
        if(operacao == 0){
            alert('Fechando...');
            return;
        }
   
        if (!operacao || operacao >= 7 ) {
            alert('Digite uma opção correta!')
            calculadora();
        } else { 
                let n1 = Number(prompt('Insira o primeiro valor:'));
                let n2 = Number(prompt('Insira o segundo valor:'));
                let resultado;

            if (!n1 || !n2) {
                alert('Erro - parâmetro inválido!')
                calculadora();
            } 
            
        switch (operacao) {
            case 1:
                soma(resultado,n1,n2);
                break;
            case 2:
                subtracao(resultado,n1,n2);
                break;
            case 3:
                multiplicacao(resultado,n1,n2);
                break;
            case 4:
                divisaoReal(resultado,n1,n2);
                break;
            case 5:
                divisaoInteira(resultado,n1,n2);
                break;
            case 6:
                potenciacao(resultado,n1,n2);
                break;

        }

    }
}

function soma(resultado,n1,n2) {
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);
    novaOperacao();
}
function subtracao(resultado,n1,n2) {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`);
    novaOperacao();
}
function multiplicacao(resultado,n1,n2) {
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`);
    novaOperacao();
}
function divisaoReal(resultado,n1,n2) {
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`);
    novaOperacao();
}
function divisaoInteira(resultado,n1,n2) {
    resultado = n1 % n2;
    alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
    novaOperacao();
}
function potenciacao(resultado,n1,n2) {
    resultado = n1 ** n2;
    alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
    novaOperacao();
}

function novaOperacao(resultado,n1,n2) {
    let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

    if (opcao == 1) {
        calculadora();
    }

    else if (opcao == 2) {
        alert('Até mais!');
    }

    else {
        alert('Digite uma opção válida');
        novaOperacao();
    }
}

