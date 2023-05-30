
let numero
let maior = 0

for(i = 1; i <= 5; i++){
    numero = parseFloat(prompt("Digite um número: "));
    if (numero > maior){
        maior=numero;
    }
}

document.write("O maior número é : " + maior);