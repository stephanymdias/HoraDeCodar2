function executarExercicio9() {
    alert("Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).")

    let anoNascimento = parseInt(prompt("Digite o ano em que você nasceu: "))
    let anoNovo = 2024

    if(anoNovo - anoNascimento >= 18){
        alert("Pode votar.")
    }else{
        alert("Não pode votar.")
    }
}