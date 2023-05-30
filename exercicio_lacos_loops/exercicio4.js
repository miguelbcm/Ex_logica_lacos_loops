

let paisA = 80000;
let paisB = 200000;
let anos = 0;

while (paisA<paisB){
    paisA = paisA + (paisA * 0.03);
    paisB = paisB + (paisB * 0.015);
    anos++;
}

document.write("O país A levará " + anos + " anos para ultrapassar o número de habitantes do país B");