let cont = 0;
let resposta = prompt("Telefonou para a vítima? \n S- sim \n N-nao ");
if (resposta.toLowerCase() === "s") {
    cont++;
}

resposta = prompt("Esteve no local do crime? \n S- sim \n N-nao ");
if (resposta.toLowerCase() === "s") {
    cont++;
}

resposta = prompt("Mora perto da vítima? \n S- sim \n N-nao ");
if (resposta.toLowerCase() === "s") {
    cont++;
}

resposta = prompt("Devia para a vítima? \n S- sim \n N-nao ");
if (resposta.toLowerCase() === "s") {
    cont++;
}

resposta = prompt("Já trabalhou com a vítima? \n S- sim \n N-nao ");
if (resposta.toLowerCase() === "s") {
    cont++;
}

if (cont <= 1) {
    document.write("A pessoa é inocente!");
} else if (cont === 2) {
    document.write("A pessoa é suspeita!");
} else if (cont === 3 || cont === 4) {
    document.write("A pessoa é cúmplice!");
} else if (cont === 5) {
    document.write("A pessoa é o(a) assassino(a)!");
}