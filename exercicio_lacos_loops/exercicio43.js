let nomeAtleta;

while (true) {
  nomeAtleta = prompt("Digite o nome do Atleta: ");
  if (nomeAtleta === "") {
    break; // Condição de parada, encerra o loop
  }

  let distSalto = [];
  let melhorSalto = 0;
  let piorSalto = 0;
  let media = 0;

  for (let i = 0; i < 5; i++) {
    distSalto[i] = parseFloat(prompt("Digite a distância do salto: "));
    media = media + distSalto[i];
  }

  melhorSalto = distSalto[0];
  piorSalto = distSalto[0];

  for (let i = 1; i < 5; i++) {
    if (distSalto[i] > melhorSalto) {
      melhorSalto = distSalto[i];
    }
    if (distSalto[i] < piorSalto) {
      piorSalto = distSalto[i];
    }
  }

  media = (media - melhorSalto - piorSalto) / 3;

  document.write("Atleta: " + nomeAtleta + "<br><br>");
  document.write("Primeiro Salto: " + distSalto[0].toFixed(1) + " m<br>");
  document.write("Segundo Salto: " + distSalto[1].toFixed(1) + " m<br>");
  document.write("Terceiro Salto: " + distSalto[2].toFixed(1) + " m<br>");
  document.write("Quarto Salto: " + distSalto[3].toFixed(1) + " m<br>");
  document.write("Quinto Salto: " + distSalto[4].toFixed(1) + " m<br><br>");
  document.write("Melhor Salto: " + melhorSalto.toFixed(1) + " m<br>");
  document.write("Pior Salto: " + piorSalto.toFixed(1) + " m<br>");
  document.write("Média dos demais Saltos: " + media.toFixed(1) + " m<br><br>");
  document.write("Resultado Final: <br>");
  document.write(nomeAtleta + ": " + media.toFixed(1) + " m<br>");
}