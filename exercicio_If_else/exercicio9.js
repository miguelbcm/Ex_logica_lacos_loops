let valorHora = parseFloat(prompt("Entre com o valor da sua hora: "));
let quantHoras = parseInt(prompt("Entre com a quantidade de horas trabalhadas: "));
let salarioBruto = valorHora*quantHoras;
let desconto_IR;
let desconto_INSS;
let desconto_FGTS;
let totalDesconto=0;
let salarioLiquido=0;

document.write("Salário Bruto: ("+valorHora+ " * "+quantHoras+")       : R$ "+ salarioBruto.toFixed(2));

if(salarioBruto<=900){
    desconto_IR=0.00;
    document.write("<br>(-) IR (isento) : R$ "+desconto_IR.toFixed(2));
} else if(salarioBruto>900 && salarioBruto<=1500){
    desconto_IR=salarioBruto*0.05;
    document.write("<br>(-) IR (5%): R$ "+desconto_IR.toFixed(2));
}else if(salarioBruto>1500 && salarioBruto<=2500){
    desconto_IR=salarioBruto*0.1;
    document.write("<br>(-) IR (10%) : R$ "+desconto_IR.toFixed(2));
}else if(salarioBruto>2500){
    desconto_IR=salarioBruto*0.2;
    document.write("<br>(-) IR (20%) : R$ "+desconto_IR.toFixed(2));
}
totalDesconto=totalDesconto+desconto_IR;

desconto_INSS=salarioBruto*.1;
document.write("<br>(-) INSS (10%) : R$ "+desconto_INSS.toFixed(2));
totalDesconto=totalDesconto+desconto_INSS;

desconto_FGTS=salarioBruto*.11;
document.write("<br>(-) FGTS (11%) : R$ "+desconto_FGTS.toFixed(2));
totalDesconto=totalDesconto+desconto_FGTS;

document.write("<br> Total de Descontos : R$ "+totalDesconto.toFixed(2));

salarioLiquido=salarioBruto-totalDesconto;
document.write("<br> Salário Líquido : R$ "+salarioLiquido.toFixed(2));