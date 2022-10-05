function iniciarCalculadora(){
    let primeiroNumero = prompt("Digite o primeiro número: ")
    let segundoNumero = prompt("Digite o segundo Número: ")
    primeiroNumero = parseFloat(primeiroNumero)
    segundoNumero = parseFloat(segundoNumero)

    soma = primeiroNumero + segundoNumero
    sub = primeiroNumero - segundoNumero
    multi = primeiroNumero * segundoNumero
    divi = primeiroNumero / segundoNumero

    document.getElementById("p1").innerHTML = ("A soma de " + primeiroNumero + " e " + segundoNumero + " é igual a: " + soma)
    document.getElementById("p2").innerHTML = ("A subtração de " + primeiroNumero + " e " + segundoNumero + " é igual a: " + sub)
    document.getElementById("p3").innerHTML = ("A multiplicação de " + primeiroNumero + " e " + segundoNumero + " é igual a: " + multi)
    document.getElementById("p4").innerHTML = ("A divisão de " + primeiroNumero + " e " + segundoNumero + " é igual a: " + divi)
}