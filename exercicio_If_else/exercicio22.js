let combustivel= prompt("Qual combustível deseja abastecer? \n A - álcool\n G - Gasolina");
let litro = parseFloat(prompt("Digite quantos litros deseja comprar: "));
let valor;

if (combustivel.toLowerCase() === "a") {
    if (litro<=20){
        valor=litro*1.9;
        valor=valor*.97;
    }else{
        valor=litro*1.9;
        valor=valor*.95;
    }
}

if (combustivel.toLowerCase() === "g") {
    if (litro<=20){
        valor=litro*2.5;
        valor=valor*.96;
    }else{
        valor=litro*2.5;
        valor=valor*.94;
    }
}

document.write("O valor do abastecimento é de: R$ "+valor.toFixed(2))