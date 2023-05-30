//10.	Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.

let numeroInicio = parseInt(prompt("Digite o número inicial: "))
let numeroFinal = parseInt(prompt("Digite o número final: "))

document.write("Número do intervalo <br> ")
for(i = numeroInicio + 1; i < numeroFinal; i++){
    document.write(i + "<br>")
}