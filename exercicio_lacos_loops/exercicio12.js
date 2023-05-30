let numero = parseInt(prompt("Digite o número da tabuada desejada: "))

document.write("Tabuada do número: "+ numero + "<br> ")
for(i = 1; i <= 10; i++){
    document.write(numero +" x " + i +" = "+ numero * i + "<br>")
}