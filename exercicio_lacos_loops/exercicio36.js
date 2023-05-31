let validacao = 0;
let codigo = parseInt(prompt("Digite o código do cliente: "));
let altura = parseFloat(prompt("Digite a altura do cliente: "));
let maiorAltura = altura;
let menorAltura = altura;
let peso = parseFloat(prompt("Digite o peso do cliente: "));
let maiorPeso = peso;
let menorPeso = peso;
let quantInsercoes = 1;
let alturaTotal = altura;
let pesoTotal = peso;
let mediaAltura = 0;
let mediaPeso = 0;
let codigoAux=0;
let codigoMaiorAltura=codigo;
let codigoMenorAltura=codigo;
let codigoMaiorPeso=codigo;
let codigoMenorPeso=codigo;

while (validacao != 1) {
  if (codigo == 0) {
    validacao = 1;
    break;
  } else {
    codigoAux = codigo;
  }
  
  codigo = parseInt(prompt("Digite o código do cliente: "));
  
  if (codigo == 0) {
    validacao = 1;
    break;
  }
  
  altura = parseFloat(prompt("Digite a altura do cliente: "));
  
  if (maiorAltura < altura) {
    maiorAltura = altura;
    codigoMaiorAltura= codigo;
  }
  
  if (altura < menorAltura) {
    menorAltura = altura;
    codigoMenorAltura= codigo;
  }
  
  peso = parseFloat(prompt("Digite o peso do cliente: "));
  
  if (maiorPeso < peso) {
    maiorPeso = peso;
    codigoMaiorPeso= codigo;
  }
  
  if (peso < menorPeso) {
    menorPeso = peso;
    codigoMenorPeso= codigo;
  }
  
  alturaTotal += altura;
  pesoTotal += peso;
  quantInsercoes++;
}

document.write("A altura mais baixa é: " + menorAltura + " cm e seu código é: "+codigoMenorAltura+"<br>");
document.write("A altura mais alta é: " + maiorAltura + " cm e seu código é: "+codigoMaiorAltura+"<br>");
document.write("O menor peso é: " + menorPeso.toFixed(2) + " kg e seu código é: "+codigoMenorPeso+"<br>");
document.write("O maior peso é: " + maiorPeso.toFixed(2) + " kg e seu código é: "+codigoMaiorPeso+"<br>");

mediaAltura = alturaTotal / quantInsercoes;
mediaPeso = pesoTotal / quantInsercoes;

document.write("A média das alturas dos clientes é: " + mediaAltura.toFixed(2) + " cm <br>");
document.write("A média dos pesos dos clientes é: " + mediaPeso.toFixed(2) + " kg <br>");