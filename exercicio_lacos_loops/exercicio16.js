//16.	A série de Fibonacci é formada pela sequência 0,1,1,2,3,5,8,13,21,34,55,... Faça um programa que gere a série até que o valor seja maior que 500.


let a = 1
let b = 1
let c = 0

document.write(a + ", ")
document.write(b + ", ")

while (c <= 500){
    c = a + b;
    a = b
    b = c
    document.write(b +", ");
}
  


