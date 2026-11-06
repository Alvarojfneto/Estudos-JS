let amigo = {nome:'jose', // consigo colocar funcionalidades dentro de variaveis.
sexo: "M",
peso: 85.4,
engordar(p=0) {
    console.log('engordou')
    this.peso +=p
}}
amigo.engordar(2) // faz o amigo engordar 2 kilos
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)
