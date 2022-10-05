let nome = "lucas"
let x = 5

console.log(nome)
console.log(x)


// function fecharpagina(){
// if (button.confirm("deseja dechar a página?")){
//     window.close()
// }
// }




function fecharPagina(){
    if (window.confirm("Deseja fechar a pagina mesmo?")){
    window.close()} else {
        window.alert("vida que segue parça")
    }
}

// input.addEventListener('click', fecharpagina);