//calculo de soma e media//
let nota1 = 8;
let nota2 = 9;
let nota3 = 2;
let soma = nota1 + nota2 + nota3;
let media = soma/3;

console.log(soma);
console.log(media);

//verificar número par ou ímpar//
let numi = 7;
let nump = 8;
let resto1 = numi % 2;
let resto2 = nump % 2;
let res1 = resto1 === 0;
let res2 = resto2 === 0;

console.log(res1);
console.log(res2);

//Combinações com &&(and)//
let id = true;
let ingresso = true;
let entra = id && ingresso;

console.log(entra);

//verificar váriavel é válida//
let nome = "";
let usuario = nome || "Visitante";

console.log(usuario);

//expressão com operador ternário//
let temp = 20;
let clima = temp > 20 ? "Quente" : "Frio";

console.log(clima);

//Expressão complexa//
let sparen = 5 + 3 * 2;
let cparen = (5 + 3) * 2;

console.log(cparen, sparen);
