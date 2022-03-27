programa
{
	
	funcao inicio()
	{
		real janeiro, fevereiro, marco, abril, media
		cadeia funcionario
		escreva("Qual o nome do funcionário:")
		leia(funcionario)
		escreva("Quanto vendeu em janeiro: ")
		leia(janeiro)
		escreva("Quanto vendeu em fevereiro: ")
		leia(fevereiro)
		escreva("Quanto vendeu em marco: ")
		leia(marco)
		escreva("Quanto vendeu em abril: ")
		leia(abril)

		media = (janeiro+fevereiro+marco+abril)/4

		escreva("O seu nome é " + funcionario +  " e sua média de vendas foi de: " + media + " reais") 
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 528; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */