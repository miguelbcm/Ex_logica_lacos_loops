let num= parseInt(prompt("Digite o número que deseja ver a tabuada: "));
let numInicial= parseInt(prompt("Digite o número que irá começar a tabuada: "));
let numFinal= parseInt(prompt("Digite o número que irá terminar a tabuada: "));

while(numInicial>numFinal|| numFinal<numInicial){
    numInicial= parseInt(prompt("Digite novamente o número que irá começar a tabuada: "));
    numFinal= parseInt(prompt("Digite novamente o número que irá terminar a tabuada: "));
}

document.write("Tabuada do número: "+num+"<br> ");
document.write("Começar por : "+numInicial+"<br> ");
document.write("Terminar em: "+numFinal+"<br> ");
for(i=numInicial; i<=numFinal;i++){
    document.write(num+" x "+i+" = "+num*i+"<br>");
}