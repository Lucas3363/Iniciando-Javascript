var insere1 = prompt('Digite qualquer coisa:')
var insere2 = prompt('Digite qualquer coisa de novo:')

if (2 == 2 && 3 ==3 && 3 >= 1 && insere1 === insere2){      // TODAS AS COMPARAÇÕES DEVEM SER TRUE PARA RETORNAR TRUE
    document.write('1- Positivo.')
}else {
    document.write('1 - Negativo.')
}

if (2 == 2 || 3 == 4 || 1 >= 7){
    document.write('<br>2 - Positivo.') // SE pelo menos UMA COMPARAÇÃO FOR TRUE, TODA A ESTRUTURA VAI RETORNAR TRUE
}else {
    document.write('<br>2 - Negativo.')
}

if (!(2 == 2)){       // Se a expressão for falsa, vai contar como verdadeiro, pois inverte o primeiro resultado da expressão de true pra false
    document.write('<br>É falso, mas verdadeiro porque inverte.')
}else {
    document.write('<br>É verdadeiro, mas está em false porque inverte o resultado.')
}

// TESTANDO NA PRATICA OS COMANDOS

var nota = prompt('Digite a nota do aluno:')
var falta = prompt('Digite a frequencia do aluno:')

if (nota >= 7 && falta >= 75){
    document.write('<br>Aprovado!')
}else {
    document.write('<br>Reprovado!')
}

// OPERADOR TERNÁRIO -- um if else resumido porém muito limitado, só retorna coisas simples, string ou valor numérico.
// var resultado = <condição> ? <verdadeiro> : <falso>

    // operador : quer dizer OU ... o verdadeiro fica sempre ao lado esquerdo.

var resultado = (nota >= 7 && falta >= 75) ? '<br>Aprovado! pelo operador ternário' : '<br>Reprovado! pelo operador ternário.'
    document.write(resultado)