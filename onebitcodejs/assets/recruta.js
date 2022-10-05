function cadastro(){
    let nome = window.prompt("Digite o primeiro nome:")
    let sobrenome = window.prompt("Digite o sobrenome:")
    let campoEstudo = window.prompt("Campo de estudo:")
    let nascimento = window.prompt("Digite o ano de nascimento:")
    
    document.getElementById("p1").innerHTML = ("Nome: " + nome)
    document.getElementById("p2").innerHTML = ("Sobrenome: " + sobrenome)
    document.getElementById("p3").innerHTML = ("Campo de estudo: " + campoEstudo)
    document.getElementById("p4").innerHTML = ("Idade: " + (2022-nascimento))
}
