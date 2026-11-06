function contar () {
var campoInicio = document.getElementById ('inicio')
var campoFim = document.getElementById ('fim')
var campoPasso = document.getElementById ('passo')
var resultado = document.querySelector ('#res')

if (campoInicio.value  === "" || campoFim.value === "" || campoPasso.value ==="") {
    window.alert ("ERRO! CAMPO VAZIO")
} else if (Number(campoPasso.value) <=0) {
    window.alert ("ERRO! O PASSO DEVE SER MAIOR QUE ZERO")
} else {
    var inicio = Number(campoInicio.value)
    var fim = Number(campoFim.value)
    var passo = Number(campoPasso.value)


resultado.innerHTML = ""
if (inicio <= fim) {
    for (var contador = inicio; contador <= fim ; contador += passo) {
    resultado.innerHTML +=  ` ${contador}`
}
}else { 
    for (var contador = inicio; contador >= fim; contador -= passo) {
        resultado.innerHTML += ` ${contador} \u{1F449}`
    }
}
}
}