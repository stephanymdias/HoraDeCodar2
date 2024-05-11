function executarExercicio10() {
    alert(". Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:")
    alert("Para homens: (72.7 * h) - 58// Para mulheres: (62.1 * h) -44.7// Observação: Altura = h (na fórmula acima).")

    let altura = parseFloat(prompt("Qual a sua altura?"))
    let sexo = prompt("Você se identifica como Masculino (M) ou Feminino (F)?")
    let ideal = 0

    if(sexo == "masculino" || sexo == "m"){
        ideal = (72.7 * altura) - 58
    }else{
        ideal = (62.1 * altura) - 44.7
    }

    alert(`Seu peso ideal é ${ideal.toFixed(2)}`)
}