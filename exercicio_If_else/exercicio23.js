let quantMorango = parseFloat(prompt("Digite quantos kg de morango deseja comprar? "));
let quantMaca = parseFloat(prompt("Digite quantos kg de maçã deseja comprar? "));
let quantTotal;
let valorMorango;
let valorMaca;
let valorTotal;

if (quantMorango<=5){
    valorMorango=quantMorango*2.5;
}else{
    valorMorango=quantMorango*2.2;
}

if (quantMaca<=5){
    valorMaca=quantMaca*1.8;
}else{
    valorMaca=quantMaca*1.5;
}

valorTotal=valorMorango+valorMaca;
quantTotal=quantMorango+quantMaca;
if(valorTotal>25 || quantTotal>8){
    valorTotal=valorTotal*.9;
}

document.write("O valor total é de: R$ "+valorTotal.toFixed(2));