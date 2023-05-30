// 24.	Faça um programa que calcule o mostre a média aritmética de N notas.

let quantidadeNotas = parseInt(prompt("Digite o número de notas que deseja inserir: "));
let somaNotas = 0;
let nota=0;
let media=0;

for (i = 1; i <= quantidadeNotas;i++) {
    nota = parseInt(prompt("Digite a nota: "));
    somaNotas=somaNotas+nota;
}

media=somaNotas/quantidadeNotas;

document.write("A média de todas as notas é: "+media.toFixed(2) );