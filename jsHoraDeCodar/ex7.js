function executarExercicio7(){
    alert("Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.")

    let acumuladora = 0
    let informados = []
    
    for (let contadora = 1; contadora <= 6; contadora++) {
        num = parseInt(prompt(`Digite o ${contadora}º número: `))
        informados.push(num)
        
        if (num <= 72) {
            acumuladora += num
        }
        
    }
    let numerosInformados = "Números informados: ";

    for (let i = 0; i < informados.length; i++) {
        numerosInformados += informados[i];
        if (i < informados.length - 1) {
            numerosInformados += ", ";
        }
    }

    alert(`${numerosInformados}.\nA soma final é: ${acumuladora}`)
}