    function contar () {
    const campoInicio = document.getElementById ('inicio')
    const campoFim = document.getElementById ('fim')
    const campoPasso = document.getElementById ('passo')
    const campoResult = document.getElementById ('resultado')

    if (campoInicio.value === "" || campoFim.value ==="" || campoPasso.value === "") {
        window.alert ("ERRO! Informações Incompletas.")

    } else {
        let inicio = Number(campoInicio.value)
        let fim = Number(campoFim.value)
        let passo = Number(campoPasso.value)

        if (passo <=0 || !Number.isInteger(passo)) {
            window.alert ("Erro! Precisamos de um numero inteiro e positivo")
    
        } else {
        campoResult.innerHTML = ""
        let soma = 0
        let quantidade = 0
        
            if (inicio <=fim) {
                    for (let c = inicio ; c <= fim ; c = c + passo) {
                campoResult.innerHTML += `${c} `
                soma = soma + c
                quantidade = quantidade + 1 
                }

        }  else {
                    for (let c = inicio; c >= fim; c = c - passo){
                    campoResult.innerHTML += `${c} `
                    soma = soma + c
                    quantidade = quantidade + 1 
                    
                 }   
            }
                campoResult.innerHTML+= `<br>A soma dos numeros é igual a ${soma}</br>`
                campoResult.innerHTML += `<br>A quantidade de numeros exibidas foi igual a ${quantidade}</br>`
        }
    }
}

    


    
    
    
    
    
   
     