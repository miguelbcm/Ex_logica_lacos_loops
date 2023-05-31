let salarioInicial = parseFloat(prompt("Entre com o salário: "));
    let aumento=0;
    let porcentualAumento="0%";

    if (salarioInicial<=280){
        aumento=salarioInicial*.2;
        novoSalario=salarioInicial*1.2;
        porcentualAumento="20%";
    }else if (salarioInicial>280 && salarioInicial<=700){
        aumento=salarioInicial*.15;
        novoSalario=salarioInicial*1.15;
        porcentualAumento="15%";
    }else if (salarioInicial>700 && salarioInicial<=1500){
        aumento=salarioInicial*.1;
        novoSalario=salarioInicial*1.1;
        porcentualAumento="10%";
    }else if (salarioInicial>1500){
        aumento=salarioInicial*.05;
        novoSalario=salarioInicial*1.05;
        porcentualAumento="5%";
    }
    document.write("O salário antes do reajuste era de : R$"+salarioInicial.toFixed(2)+ "<br> Devido ao salário, o aumento será de: "+porcentualAumento+"<br> O valor de aumento foi de: R$ "+aumento.toFixed(2)+ "<br> O novo salário é de: R$ "+novoSalario.toFixed(2) );
    