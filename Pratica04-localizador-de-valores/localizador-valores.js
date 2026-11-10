/*
Exercício B — Localizador de valores
Com um array de cinco inteiros, receba um valor a procurar. Informe se ele existe e qual o primeiro índice
encontrado. Explique no comentário por que índice e posição ordinal não são a mesma coisa.
*/


const valores = [4, 9, 2, 8, 5]
let buscaUsuario = 9 // usuario forcene esse valor
let encontrado = false // declarado como booleano para servir como variavel de controle dentro do for ... of


for (let i = 0; i < valores.length; i++ ) { // percorre o vetor, comparando a condição com os valores do array.
    if (valores[i] === buscaUsuario) {
        encontrado = true;
        indice = i;
        break;
    }
}
   if (encontrado) {
    console.log(`O valor ${buscaUsuario} foi encontrado no índice ${indice} do array.`)
    console.log(`Ele ocupa a posição ordinal ${indice + 1}.`)
} else {
    console.log('Valor não encontrado.')
    }

    // indice - identifica a posição de um elemento do array, começando sempre em 0.
    // posição ordinal - posição na contagem comum. 
    // no exemplo a seguir - indice de 9 é 1, posição ordinal é 2.