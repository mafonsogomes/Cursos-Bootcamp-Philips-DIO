const alunos = [
    {
        nome:'Marcelo',
        nota: 5,
        turma: '1A',
    },
    {
        nome:'Thalyne',
        nota: 9,
        turma: '1A',

    },
    {
        nome:'Pedro',
        nota: 7,
        turma: '2C',
    },
    {    
        nome:'Manoel',
        nota: 3,
        turma: '2C',
    },
    
];

function alunosAprovados (arr, media) {
    let aprovados= [];
    for (let i = 0; i < arr.length; i++) {
        const { nota, nome } = arr[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
        
    }

    return aprovados;
}

console.log(alunosAprovados(alunos,5));