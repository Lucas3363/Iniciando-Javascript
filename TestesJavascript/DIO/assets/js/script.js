var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = 'black'
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber <= -1){
        currentNumberWrapper.style.color = 'red'
    }
}

function comparaNumeros(num1, num2) {
    const saoIguais = num1 === num2;
    const soma = num1 + num2;

    return saoIguais ? "São iguais." : "não são iguais.";

    if(saoIguais) {
        return "São iguais";
    } else {
        return "São diferentes.";
    }
}

function comparaNumeros(num1, num2) {
    if(!num1 || !num2) return 'Defina dois números!';

    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = ' ';

    if (num1 !== num2) {
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10) {
        resultado10 = 'maior';
    }

    if(compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
}

console.log(comparaNumeros(121, 1))

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

// const PI = 3.14159;
// var raio = 3;


//TODO: Complete os espaços em branco com uma possível solução para o desafio
//Para precisão numérica utiliza-se o .toFixed(n)
// var volumeEsfera = (4/3) * PI * (raio * raio * raio);

// console.log("VOLUME =          "  + volumeEsfera.toFixed(3));


//     let raio2 = 15;
//     var volumeEsfera2 = (4/3) * PI * (raio2 * raio2 * raio2);

//     console.log("VOLUME =          "  + volumeEsfera2.toFixed(3));

//         let raioTres = 1523;
//         var volumeEsferaTres = (4/3) * PI * (raioTres * raioTres * raioTres);

//         console.log("VOLUME =          " + volumeEsferaTres.toFixed(3));

        const PI = 3.14159;

        let R = parseFloat(gets());
        
        //TODO: Complete os espaços em branco com uma possível solução para o desafio
        //Para precisão numérica utiliza-se o .toFixed(n)
        
        var volumeEsfera = (4/3) * PI * (R * R * R);
        
        print("VOLUME = "  + volumeEsfera.toFixed(3));