// 30.	O Sr. Manoel Joaquim acaba de adquirir uma panificadora e pretende implantar a metodologia da tabelinha, que já é um sucesso na sua loja de 1,99. Você foi contratado para desenvolver o programa que monta a tabela de preços de pães, de 1 até 50 pães, a partir do preço do pão informado pelo usuário, conforme o exemplo abaixo:




let precoPao=parseFloat(prompt("Qual o preço de cada pão?"));
for(i=1;i<=50;i++){
    document.write(i+" - R$ "+(i*precoPao).toFixed(2)+"<br>");
}