function contar () {
var n1 = document.getElementById ('Número')
var numero = Number(n1.value)
var res = document.getElementById ('Resultado')
var result = Number(res.value)
res.innerHTML = ""

for ( var n = 1  ; n <= 10 ; n++) {
    var mult = numero * n
    var item = document.createElement ('option')
    item.text = `${numero} x ${n} =  ${mult}`
    res.appendChild(item)

}
}