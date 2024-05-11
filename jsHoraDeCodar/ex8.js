function executarExercicio8() {
    alert("Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem VOCÊ PASSOU NO TESTE. Em qualquer outra situação, ele receberá uma mensagem de TENTE NOVAMENTE.")

    let soma = 0;
    let media = 0;
    let contadora2 = 0;

    let nota = parseFloat(prompt("Digite a primeira nota: "))

    for (var contadora = 2; contadora <= 4; contadora++) {
        nota = parseFloat(prompt(`Digite a ${contadora} nota:`))
        if (nota >= 0 && nota <= 10) {
            soma += nota
        }
        contadora2++
    }
    media = soma / contadora2

    if (media >= 5) {
        alert("Você passou no teste.")
    }else{
        alert("Tente novamente.")
    }
}