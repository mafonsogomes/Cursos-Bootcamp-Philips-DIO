const user = {
    nome: 'Marcelo',
    idade: 29,
};
const user2 = {
    nome: 'Tatá',
    idade: 21,
};
const user3 = {
    nome: 'Julio',
    idade: 22,
};
const user4 = {
    nome: 'Henrique',
    idade: 33,
};
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log (calculaIdade.call(user2, 20));
