let anoAtual= parseInt(prompt("Digite o ano atual: "));
let salario= 1000;
let percentual= 1.5 / 100;
let i= 1997;
let novoSalario=salario + percentual * salario;

while (i <= anoAtual) {
  percentual = 2 * percentual;
  novoSalario = novoSalario + percentual * novoSalario;
  i = i + 1;
}

document.write("Novo salário = " + novoSalario.toFixed(2));