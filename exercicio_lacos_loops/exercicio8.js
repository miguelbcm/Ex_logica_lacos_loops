
let numero
let soma = 0
let media = 0

for(i= 1;i <= 5; i ++){
    numero = parseFloat(prompt("Digite um número: "))
    soma = soma + numero
}
media = soma / 5
document.write("A soma dos cinco números é: "+ soma + " e a média é de: "+ media.toFixed(2));