let nota1 = parseFloat(prompt("Entre com a primeira nota: "));
        let nota2 = parseFloat(prompt("Entre com a segunda nota: "));
        let media;

        media= (nota1+nota2)/2

        if (media ==10){
            document.write("Aprovado com Distinção!")
        } else if(media>=7){
            document.write("Aprovado!")
        }else if(media<7){
            document.write("Reprovado!")
        }