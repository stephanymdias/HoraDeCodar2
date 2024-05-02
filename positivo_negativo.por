programa
{
	
	funcao inicio()
	{
		//2. Faça um programa que leia um valor informado pelo 
		//usuário e diga se o valor informado é positivo, negativo ou zero.

		inteiro valor

		escreva("Digite um valor: ")
		leia(valor)

		se(valor>0){
			escreva("O valor ", valor, " é positivo!")
		}senao se(valor<0){
			escreva("O valor ", valor, " é negativo!")
		}senao {
			escreva("O valor ", valor, " é neutro!")
		}
		}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 41; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */