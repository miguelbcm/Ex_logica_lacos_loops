//7.	Faça um programa que leia 5 números e informe o maior número.


let numero
let maior = 0

for(i = 1; i <= 5; i++){
    numero = parseFloat(prompt("Digite um número: "));
    if (numero > maior){
        maior=numero;
    }
}

document.write("O maior número é : " + maior);