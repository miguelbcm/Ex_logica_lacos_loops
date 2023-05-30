
let nota=parseFloat(prompt("Digite uma entre 0 a 10:"));

while (nota>10 || nota<0){
    alert("Valor Inválido! Tente novamente ");
    nota=parseFloat(prompt("Digite uma nota de 0 a 10:"));
}

document.write("A nota é de: " + nota.toFixed(2));