let nomeAtleta = prompt("Digite o nome do Atleta: ");
let notas = [];
let media = 0;
let melhorNota = 0;
let piorNota = 0;

for (let i = 0; i < 7; i++) {
  notas[i] = parseFloat(prompt("Digite a nota do jurado: "));
  media = media + notas[i];
}

melhorNota = notas[0];
piorNota = notas[0];

for (let i = 1; i < 7; i++) {
  if (notas[i] > melhorNota) {
    melhorNota = notas[i];
  }
  if (notas[i] < piorNota) {
    piorNota = notas[i];
  }
}

media = (media - melhorNota - piorNota) / 4;

document.write("Atleta: " + nomeAtleta + "<br>");

for (let i = 0; i < 7; i++) {
  document.write("Nota do jurado " + (i + 1) + ": " + notas[i].toFixed(1) + "<br>");
}

document.write("<br>Resultado final: <br>");
document.write("Atleta: " + nomeAtleta + "<br>");
document.write("Melhor nota: " + melhorNota.toFixed(1) + "<br>");
document.write("Pior nota: " + piorNota.toFixed(1) + "<br>");
document.write("Média: " + media.toFixed(2) + "<br>");