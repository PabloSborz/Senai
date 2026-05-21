// 3 Variáveis com let e com valores//
let nome = "Pablo";
let idade = 21;
let hobbie = "Jogar bola";
console.log(nome);
console.log(idade);
console.log(hobbie);

//Contante para PI//
const PI = 3.14159;
let raio = 5;
let area = PI * raio * raio;
console.log(PI);
console.log(raio);
console.log(area);

//typeof//
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof hobbie);
console.log(typeof PI);
console.log(typeof raio);
console.log(typeof area);

//conversão de string para número//
let stringNumero = "50";
let numero = Number (stringNumero);
let resultado = numero + 10;
console.log (resultado);

//Escopo com bloco de código//
let mensagem ="Fora";
{
    let mensagem = "Dentro";
    console.log (mensagem);
}
console.log(mensagem);

//Renomear as váriaveis seguindo padrão camelCase//
let cidade = "Blumenau";
console.log (nome, idade, cidade);
