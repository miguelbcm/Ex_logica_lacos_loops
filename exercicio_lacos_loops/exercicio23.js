// 23.	Faça um programa que mostre todos os primos entre 1 e N sendo N um número inteiro fornecido pelo usuário. O programa deverá mostrar também o número de divisões que ele executou para encontrar os números primos. Serão avaliados o funcionamento, o estilo e o número de testes (divisões) executados.

let numeroFinal = parseInt(prompt("Digite o número final do intervalo: "))
let numeroDivisoes = 0
let primos = []

for (let num = 2; num <= numeroFinal; num++) {
  let divisores = 0

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisores++
    }
    numeroDivisoes++
  }

  if (divisores === 2) {
    primos.push(num)
  }
}

document.write("Os números primos entre 1 e " + numeroFinal + " são: " + primos.join(", ") + "<br>")
document.write("O número de divisões realizadas foi: " + numeroDivisoes)