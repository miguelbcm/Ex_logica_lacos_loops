

let usuario = prompt("Seu Usuário: ")

let senha = prompt("Sua Senha: ")

while(usuario == senha){
    alert("Usuário não pode ser igual a senha, Digite novamente ")
    usuario = prompt("Seu Usuário:")
    senha =  prompt("Sua senha: ")
}

document.write(" Você está Logado")