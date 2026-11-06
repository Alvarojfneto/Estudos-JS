let num = [5,8,2,9,3] 
num.push(1) // vai acrescentar o elemento 1, no ultimo indice.
num.sort() // metodo interno de um vetor, coloca em ordem crescente.
console.log(num)
console.log(`O vetor tem ${num.length} posições`) // .length conta o tamanho do vetor.
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8) // procura o valor dentro do array
if (pos === -1) { // quando retorna -1 é pq o valro não existe no vetor.
    console.log ("erro! valor não encontrado no vetor")
} else {
    console.log (`o valor procurado está na posição ${pos}`)
}