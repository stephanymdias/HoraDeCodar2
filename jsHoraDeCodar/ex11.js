function executarExercicio11() {

    alert("Uma micro calculadora: Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas(codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação). O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. (Observação: Considere que só serão lidos os valores 1, 2, 3 ou 4 para as operações)")

    
    let valor1 = parseInt(prompt(`Digite o primeiro valor: `))
    let valor2 = parseInt(prompt(`Digite o segundo valor: `))
    let soma = 0, subtracao = 0, divisao = 0, multiplicacao = 0

    let opcao = parseInt(prompt(`Digite o número para realizar a operação:\n\n1.Soma\n2.Subtração\n3.Divisão\n4.Multiplicação`))

    switch (opcao) {
        case 1:
            soma = valor1 + valor2
            alert(`${valor1} + ${valor2} = ${soma}`)
            break;
        case 2:
            subtracao = valor1 - valor2
            alert(`${valor1} - ${valor2} = ${subtracao}`)
            break;
        case 3:
            divisao = valor1 / valor2
            alert(`${valor1} / ${valor2} = ${divisao}`)
            break;
        case 4:
            multiplicacao = valor1 * valor2
            alert(`${valor1} * ${valor2} = ${multiplicacao}`)
            break;

        default:
            alert(`Número inválido.`)
            break;
    }
}