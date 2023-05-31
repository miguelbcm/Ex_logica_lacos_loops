let numeroTermos=parseInt(prompt("Digite o número de termos: "));
let soma = 0;
let termo;

for(i=1;i<=numeroTermos;i++){
    termo=1/i;
    soma = soma+ termo;
}
document.write("Série H = ");
for(i=1;i<=numeroTermos;i++){
    if (i==numeroTermos){
        termo=(1+"/"+i);
        document.write(termo);
        break
    }
    termo=(1+"/"+i+" +    ");
    document.write(termo);
}


document.write("<br>Soma: " + soma.toFixed(2));