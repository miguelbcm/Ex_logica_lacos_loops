let valorInicial;
let quantParcelas;
let cont = 0;
let valorJuros;
let valorComJuros;
let valorParcela;

while (cont == 0) {
  valorInicial = parseFloat(prompt("Digite o valor inicial da dívida: "));
  quantParcelas = parseInt(prompt("Digite a quantidade de parcelas para pagar a dívida. As opções são: 1, 3, 6, 9 ou 12"));

  if (quantParcelas == 1) {
    valorJuros = 0;
  } else if (quantParcelas == 3) {
    valorJuros = 0.1;
  } else if (quantParcelas == 6) {
    valorJuros = 0.15;
  } else if (quantParcelas == 9) {
    valorJuros = 0.2;
  } else if (quantParcelas == 12) {
    valorJuros = 0.25;
  }

  valorComJuros = valorInicial + (valorInicial * valorJuros);
  valorJuros = valorInicial * valorJuros;
  valorParcela = valorComJuros / quantParcelas;

  cont = parseInt(prompt("Deseja digitar outra dívida?\n 0 - sim\n 1 - não")); 
}

alert("Valor da Dívida  Valor dos Juros  Quantidade de Parcelas  Valor da Parcela\nR$   " + valorComJuros.toFixed(2) + "          " + valorJuros.toFixed(2) + "          " + quantParcelas + "          R$ " + valorParcela.toFixed(2) + "     ");
