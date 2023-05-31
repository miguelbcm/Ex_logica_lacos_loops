let lado1 = prompt("Digite o valor do primeiro lado do triângulo: ");
let lado2 = prompt("Digite o valor do segundo lado do triângulo: ");
let lado3 = prompt("Digite o valor do terceiro lado do triângulo: ");

if (lado1+lado2>lado3 || lado1+lado3>lado2 || lado3+lado2>lado1 ){
    if (lado1==lado2 && lado2==lado3 && lado1==lado3){
        document.write("O triângulo é Equilátero!")
    } else if ((lado1==lado2 && lado2==lado1 &&  lado1!=lado3 && lado2!=lado3) || (lado1==lado3 && lado1!=lado2 && lado3!=lado2)|| (lado2==lado3 && lado1!=lado3 && lado1!=lado2)){
        document.write("O triângulo é Isóceles!")
    }else if (lado1!=lado2 && lado1!=lado3 && lado2!=lado3){
        document.write("O triângulo é Escaleno!")
    }
}