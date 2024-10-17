function pegarTexto(){
    let nome = document.getElementById("inputText")
    //alert(nome.value)
    document.getElementById("lugarTexto").innerHTML = nome.value
}
function unirNomes(){
    const nome = document.getElementById('nome')
    const sobrenome = document.getElementById("sobrenome")
    // concatenação de string
    let nomeCompleto1 = (nome.value + " " + sobrenome.value)
    // template string
    let nomeCompleto2 = (`Olá, ${nome.value} ${sobrenome.value}`)
    document.getElementById("nomeSobrenome").innerHTML = nomeCompleto2
}
