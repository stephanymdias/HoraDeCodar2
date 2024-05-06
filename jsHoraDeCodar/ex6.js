function executarExercicio6(){
    alert("Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes)")

    let numero=parseInt(prompt("Digite o 1º número: "))

    let primeiro = numero

    let maior = numero

    for(let contadora = 2; contadora <= 3; contadora++){
        numero=parseInt(prompt(`Digite o ${contadora}º número: `))

        if (numero > maior){
            maior=numero
        }
    }
    alert(`O primeiro número é: ${primeiro}. O último número é ${numero}. O maior número é: ${maior}.`)
}