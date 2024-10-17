const generos = document.getElementsByName("generos")
let senha1 = document.getElementById("senha1")
let senha2 = document.getElementById("senha2")

function abrirOutros(){
    let outros = document.querySelector("#inputText")
    if (generos[2].checked){
        outros.disabled = false 
    }else{
        outros.disabled = true
        outros.value = ""
    }
}

function togglePass(){
    let btSenha = document.getElementById("btSenha")

    if (senha1.type == "password" || senha2.type == "password"){
        senha1.type = "text"
        senha2.type = "text"
        btSenha.innerHTML = 'desver'
    }else{
        senha1.type = "password"
        senha2.type = "password"
        btSenha.innerHTML = 'ver'
    }
}
function conferirSenha(){
    if (senha1.value == senha2.value){
        senha2.classList.remove("redInput")
        console.log ("iguais")
    }else if (senha2.value){
        senha2.classList.add("redInput")
        console.log ("diferentes")
        console.log (senha1.value)
        console.log (senha2.value)
    }
}
senha1.addEventListener("input", conferirSenha)
senha2.addEventListener("input", conferirSenha)
generos.forEach(genero => {
    genero.addEventListener('input', abrirOutros)
})
