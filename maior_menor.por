programa
{
	// Escreva um programa em que o usuário informe dois números 
	//utilizando o "prompt". Então escreva em tela o maior deles.
	
	funcao inicio()
	{

	inteiro numero1, numero2, maior, menor
	
		escreva("Digite um número: ")
		leia(numero1)

		escreva("Agora digite outro número: ")
		leia(numero2)
		
		se(numero1 > numero2){
			escreva("O numero maior é: ", numero1, "\n") 
		}
		senao{
			escreva("O numero maior é: ", numero2)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 418; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */