/*
const valores = [12,7,3,22,9]
let qpar = 0
let qimpar = 0

for (let i = 0 ; i < valores.length ; i++) {
    if (valores [i] %2 === 0) {
        qpar +=1
    } else {
        qimpar +=1
    }
}
console.log  (`${qpar} pares.`)
console.log  (`${qimpar} impares.`)
*/

// percorrendo o vetor com for...of;
const valores = [-4,-3,-8]
let qpar = 0
let qimpar = 0

for (const valor of valores) {   // forma de percorrer um array inteiro. - > declaro uma variavel que vai guardar os valores percorridos e chamo o vetor na segunda. 
    if (valor %2 === 0) {
        qpar +=1
    } else {
        qimpar +=1
    }
}
console.log  (`${qpar} pares.`)
console.log  (`${qimpar} impares.`)
