//Desafio 1
let idade = Number(prompt("Digite sua idade:"));

if (idade < 12) {
    alert("Você é uma criança.");
} else if (idade < 18) {
    alert("Você é um adolescente.");
} else {
    alert("Você é um adulto.");
}

//Desafio 2
let num = Number(prompt("Digite um número:"));
switch (num) {
    case 1:
        alert("Baixo");
        break;
    case 2:
        alert("Médio");
        break;
    case 3:
        alert("Alto");
        break;
}

//Desafio 3
let nume = Number(prompt("Digite um número:"));
let resultado = nume === 0 ? "Igual a zero" : nume > 0 ? "Positivo" : "Negativo";
alert(resultado);

//Desafio 4
let idade2 = Number(prompt("Digite sua idade:"));
if (idade2 >= 16 && idade2 <= 120) {
    alert("Você pode votar.");
} else {
    alert("Você não pode votar.");
}