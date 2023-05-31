let valorSaque = parseInt( prompt("Digite o valor que desejar sacar: "));
let valorSaqueAux= valorSaque;
let notasCem=0 ;
let notasCinquenta=0;
let notasDez=0;
let notasCinco=0;
let notasUm=0;


if (valorSaque >= 100) {
    notasCem = Math.floor(valorSaque / 100);
    valorSaque = valorSaque % 100;
  }
  if (valorSaque >= 50) {
    notasCinquenta = Math.floor(valorSaque / 50);
    valorSaque = valorSaque % 50;
  }
  if (valorSaque >= 10) {
    notasDez = Math.floor(valorSaque / 10);
    valorSaque = valorSaque % 10;
  }
  if (valorSaque >= 5) {
    notasCinco = Math.floor(valorSaque / 5);
    valorSaque = valorSaque % 5;
  }
  if (valorSaque >= 1) {
    notasUm = valorSaque;
  }

  document.write("Para sacar a quantia de " +valorSaqueAux+ " reais, o script fornece:<br>");

    if (notasCem > 0) {
        document.write(notasCem + " nota(s) de R$100<br>");
    }
    if (notasCinquenta > 0) {
        document.write(notasCinquenta + " nota(s) de R$50<br>");
    }
    if (notasDez > 0) {
        document.write(notasDez + " nota(s) de R$10<br>");
    }
    if (notasCinco > 0) {
        document.write(notasCinco + " nota(s) de R$5<br>");
    }
    if (notasUm > 0) {
        document.write(notasUm + " nota(s) de R$1<br>");
    }