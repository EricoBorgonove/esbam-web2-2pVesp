function validarCep(){
    const cep = document.getElementById("inputCep").value.trim()

    if (cep ==''){
        alert ("Campo CEP não preenchido")
    }else if (cep.length != 8){
        alert ("CEP inválido")
    }else{
        viaCep(cep)
    }
}
function viaCep(cep){
    
}