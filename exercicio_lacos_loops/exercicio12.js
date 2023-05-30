
//12.	Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:

let numero = parseInt(prompt("Digite o número da tabuada desejada: "))

document.write("Tabuada do número: "+ numero + "<br> ")
for(i = 1; i <= 10; i++){
    document.write(numero +" x " + i +" = "+ numero * i + "<br>")
}