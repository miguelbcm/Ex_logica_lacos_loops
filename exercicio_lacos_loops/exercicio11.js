let numeroInicio = parseInt(prompt("Digite o número inicial do intervalo: "))
let numeroFinal = parseInt(prompt("Digite o número final do intervalo: "))
let soma = 0

document.write("Número inteiros do intervalo <br> ")
for(i = numeroInicio + 1; i < numeroFinal; i++){
    document.write(i + "<br>")
    soma = soma + i
}

document.write("A soma dos números mostrados é: "+soma)