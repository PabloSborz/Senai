//Passo 01
let nota = Number(prompt("Digite a nota do aluno: "));
if (nota >= 70){
    console.log("A");
}else if (nota >= 60){
    console.log("B");
}else{
    console.log("C");
}


//Passo 02
let dia = Number(prompt("Digite o dia da semana: "));
switch (dia) {
    case 1:console.log("Domingo");
        break;      
    case 2:console.log("Segunda");
        break;
    case 3:console.log("Terça");
        break;
    case 4:console.log("Quarta");
        break;
    case 5:console.log("Quinta");
        break;
    case 6:console.log("Sexta");
        break;
    case 7:console.log("Sábado");
        break;
    default:console.log("Valor inválido");
        break;
}   

//Passo 03
let temp = Number(prompt("Digite a temperatura: "));
let clima = temp > 25 ? "Quente" : "Frio";
console.log(clima);

//Passo 04
let MIdade = Number(prompt("Digite a idade: "));
let motorista = MIdade >= 18 ? "Pode dirigir" : "Não pode dirigir";
console.log(motorista);

//Passo 05
let num = Number(prompt("Digite um número: "));
if (num >= 10 && num <= 20){
    console.log("O número está entre 10 e 20");
}else{
    console.log("O número não está entre 10 e 20");
}

//Passo 06
let cor = prompt("Digite a cor: ");
switch (cor) {
    case "vermelho":console.log("Pare");
        break;
    case "amarelo":console.log("Atenção");
        break;
    case "verde":console.log("Siga");
        break;
    default:console.log("Valor inválido");
        break;
}