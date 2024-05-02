programa
{
	// Faça um programa para ler 3 valores 
	//(considere que não serão informados valores iguais) 
	/// e escrever o maior deles.
	
	funcao inicio()
	{

	inteiro numero1, numero2, numero3, maior, menor
		escreva("Digite um número: ")
		leia(numero1)
		
		escreva("Agora digite mais um número: ")
		leia(numero2)
		
		escreva("Por fim, digite um último número: ")
		leia(numero3)

		se(numero1 > numero2){
			escreva("O número maior é: ", numero1, "\n")
		}
		senao se(numero2 > numero3){
			escreva("O número maior é: ", numero2, "\n")
		}
		senao{
			escreva("O número maior é: ", numero3)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 562; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */