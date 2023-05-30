// 17.	Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120


let numero = parseInt(prompt("Digite um número para ver o resultado fatorial: "));
let fatorial = 1
let num = numero
for(i = numero ;i > 0; i--){
    fatorial = fatorial * numero;
    numero--;
}

document.write("O fatorial de "+ num +" é: " + fatorial);