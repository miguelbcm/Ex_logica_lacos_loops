let num = parseInt(prompt("Digite o número que desejar: "));
let centenas;
let dezenas;
let unidades;

if(num>=1000){
    document.write ("Digite número menor que 1000!");
}else{
    centenas=num/100;
    dezenas=(num%100)/10;
    unidades=(num%100)%10;
    if(centenas<1){
        if(dezenas>=1 && unidades>=1){
            document.write(num + " = " +Math.trunc(dezenas)+ " dezenas e " +Math.trunc(unidades)+ " unidades");
        }else if (dezenas>=1 && unidades<1){
            document.write(num + " = " +Math.trunc(dezenas)+ " dezenas");
        }else if(dezenas<1 && unidades>=1){
            document.write(num + " = " +Math.trunc(unidades)+ " unidades ");
        }
    }else{
        if(dezenas<1){
            if(centenas>=1 && unidades>=1){
                document.write(num + " = " +Math.trunc(centenas)+ " centenas e " +Math.trunc(unidades)+ " unidades");
            }else if(centenas>=1 && unidades<1){
                document.write(num + " = " +Math.trunc(centenas)+ " centenas");
            }
        }else{
            if(unidades<1){
                document.write(num + " = " +Math.trunc(centenas)+ " centenas e " +Math.trunc(dezenas)+ " dezenas");
            }else{
                document.write(num + " = " +Math.trunc(centenas)+ " centenas, " +Math.trunc(dezenas)+ " dezenas e " +Math.trunc(unidades)+ " unidades");
            }
        }
    }
}