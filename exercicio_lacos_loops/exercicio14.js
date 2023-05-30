// 14.	Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números ímpares.


let numero
let impar = 0
let par = 0


for (i = 1; i <= 10; i ++){
    numero = parseInt(prompt("Digite 10 números: "))
    if(numero % 2 != 0){
        impar ++

    }else{
        par ++
    }
}

document.write("A quantidade de Pares é: " + par + "<br> A quantidade de impares é de: " + impar)