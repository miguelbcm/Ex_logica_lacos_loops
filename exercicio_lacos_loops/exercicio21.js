// 21.	Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1.

let numero = parseInt(prompt("Digite um número: "))
let primo = 0

for (let i = 2; i <= numero; i++) {
  if (numero % i == 0) {
    primo++
  }
}

if (primo == 1) {
  document.write("O número " + numero + " é primo")
} else {
  document.write("O número " + numero + " não é primo")
}