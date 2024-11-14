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
    fetch (`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(response => {
        document.getElementById("logradouro").value = response.logradouro
        document.getElementById("bairro").value = response.bairro
        document.getElementById("cidade").value = response.localidade
        document.getElementById("estado").value = response.uf
    })
}
function limpar(){
    document.getElementById("inputCep").value = ""
    document.getElementById("logradouro").value = ""
    document.getElementById("bairro").value = ""
    document.getElementById("cidade").value = ""
    document.getElementById("estado").value = ""
}
function adicionar(){
    const tabela = document.getElementById("dadosTabela")
    const novaLinha = tabela.insertRow()
    const celulaCep = novaLinha.insertCell(0)
    const celularLogradouro = novaLinha.insertCell(1)
    const celulaBairro = novaLinha.insertCell(2)
    const celulaCidade = novaLinha.insertCell(3)
    const celularEstado = novaLinha.insertCell(4)
    celulaCep.textContent = document.getElementById("inputCep").value || "N/A"
    celulaBairro.textContent = document.getElementById("bairro").value || "N/A"
    celularLogradouro.textContent = document.getElementById("logradouro").value || "N/A"
    celulaCidade.textContent = document.getElementById("cidade").value || "N/A"
    celularEstado.textContent = document.getElementById("estado").value || "N/A"
}