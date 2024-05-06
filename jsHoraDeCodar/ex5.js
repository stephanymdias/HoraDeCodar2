function executarExercicio5() {
    alert("Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.")

    let soma = 0;
    let media = 0;
    let contadora2 = 0;
    let informados = []

    let numero = parseInt(prompt("Informe o primeiro número: "))
    informados.push(numero);

    for (var contadora = 2; contadora <= 6; contadora++) {
        numero = parseFloat(prompt(`Informe o ${contadora}º número: `))
        informados.push(numero);

        soma += numero
        contadora2++
    }

    media = soma / contadora2

    let numerosInformados = "Números informados: ";

    for (let i = 0; i < informados.length; i++) {
        numerosInformados += informados[i];
        if (i < informados.length - 1) {
            numerosInformados += ", ";
        }
    }
    alert(`${numerosInformados}. A média dos números informados é: ${media}`)
}