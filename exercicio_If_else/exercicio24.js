let carne= prompt("Qual tipo de carne deseja comprar? \n F - File Duplo\n A - Alcatra\n P - Picanha");
let kg = parseFloat(prompt("Digite quantos quilos deseja comprar: "));
let cartao = prompt("A compra será feita no cartão Tabajara tendo 5% de desconto?\n S - Sim\n N - Não");
let valor;
let desconto=0;

if (carne.toLowerCase() === "f") {
    carne=("File Duplo");
    if (kg<=5){
        valor=kg*4.9;
    }else{
        valor=kg*5.8;
    }
}else if (carne.toLowerCase() === "a") {
    carne=("Alcatra");
    if (kg<=5){
        valor=kg*5.9;
    }else{
        valor=kg*6.8;
    }
}else if (carne.toLowerCase() === "p") {
    carne=("Picanha");
    if (kg<=5){
        valor=kg*6.9;
    }else{
        valor=kg*7.8;
    }
}else{
    document.write("Insira um valor válido!");
}

if(cartao.toLowerCase() === "s"){
    cartao=("cartão");
    desconto=.95;
    valor=valor*desconto;
}else{
    cartao=("sem cartão");
}

document.write("Foi comprado "+kg.toFixed(2)+ " kg de "+ carne+ ".\nA forma de pagamento é: "+ cartao+ ". Tendo desconto de: R$ "+ desconto+ " tendo por valor total da compra: R$ "+ valor.toFixed(2));
