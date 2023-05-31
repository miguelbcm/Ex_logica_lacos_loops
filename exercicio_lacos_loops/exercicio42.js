let gabarito = [];
let maiorAcerto = 0;
let menorAcerto = 10;
let totalAlunos = 0;
let somaNotas = 0;


for (let i = 1; i <= 10; i++) {
  let resposta = prompt("Digite a resposta da questão " + i + ":");
  gabarito.push(resposta.toUpperCase());
}

let outroAluno = true;

while (outroAluno) {
  let respostasAluno = [];
  let notaAluno = 0;

 
  for (let i = 1; i <= 10; i++) {
    let resposta = prompt("Digite a resposta da questão " + i + " do aluno:");
    respostasAluno.push(resposta.toUpperCase());

   
    if (resposta.toUpperCase() === gabarito[i - 1]) {
      notaAluno++;
    }
  }

  
  if (notaAluno > maiorAcerto) {
    maiorAcerto = notaAluno;
  }
  if (notaAluno < menorAcerto) {
    menorAcerto = notaAluno;
  }

  totalAlunos++;
  somaNotas += notaAluno;


  outroAluno = confirm("Outro aluno vai utilizar o sistema?");

}

let mediaNotas = somaNotas / totalAlunos;


document.write("Resultados:<br>");
document.write("Maior Acerto: " + maiorAcerto + "<br>");
document.write("Menor Acerto: " + menorAcerto + "<br>");
document.write("Total de Alunos: " + totalAlunos + "<br>");
document.write("Média das Notas: " + mediaNotas.toFixed(2) + "<br>");
document.write("Gabarito da Prova:<br>");


for (let i = 0; i < 10; i++) {
  document.write((i + 1) + " - " + gabarito[i] + "<br>");
}