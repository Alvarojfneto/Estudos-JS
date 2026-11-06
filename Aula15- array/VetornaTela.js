let valores = [8, 1, 7, 4, 2, 9]
valores.sort ()
/*for (let pos = 0; pos< valores.length; pos++)  { // percurso para exibição do vetor.
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores) { // maneira mais simples - percorre a posiçao dentro de valores.
    console.log (valores[pos])
}
console.log(valores.indexOf(7)) // indexOf procura um valor dentro do vetor.