// 1. Calculadora simples

let num1 = 10;
let num2 = 5;

console.log("Soma:", num1 + num2);
console.log("Subtração:", num1 - num2);
console.log("Multiplicação:", num1 * num2);
console.log("Divisão:", num1 / num2);

// 2. Resto da divisão

let numero = 7;

if (numero % 2 === 0) {
    console.log("Número par");
} else {
    console.log("Número ímpar");
}

// 3. Potência

let valor = 4;

console.log("Quadrado:", valor ** 2);
console.log("Cubo:", valor ** 3);

// 4. Conversão de temperatura

let celsius = 30;

let fahrenheit = (celsius * 9/5) + 32;

console.log("Temperatura em Fahrenheit:", fahrenheit);

// 5. Média aritmética

let nota1 = 7.5;
let nota2 = 8;
let nota3 = 9;

let media = (nota1 + nota2 + nota3) / 3;

console.log("Média:", media.toFixed(2));

// 6. Cálculo de troco

let preco = 50;
let valorPago = 100;

let troco = valorPago - preco;

console.log("Troco: R$", troco);

// 7. Igual ou diferente?

let a = 5;
let b = "5";

console.log(a == b);   // true
console.log(a === b);  // false

// == compara apenas o valor
// === compara valor e tipo

// 8. Maior ou menor?

let n1 = 20;
let n2 = 15;

if (n1 > n2) {
    console.log(n1 + " é maior");
} else {
    console.log(n2 + " é maior");
}

// 9. Aprovado ou reprovado?

let nota = 6;

console.log(nota >= 7 ? "Aprovado" : "Reprovado");

// 10. Verificação de idade

let idade = 18;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// 11. Comparação de strings

let palavra1 = "JavaScript";
let palavra2 = "javascript";

console.log(palavra1 === palavra2);
console.log(palavra1 !== palavra2);

// 12. Faixa de preço

let precoProduto = 80;

if (precoProduto >= 10 && precoProduto <= 100) {
    console.log("Preço dentro da faixa");
} else {
    console.log("Preço fora da faixa");
}

// 13. E lógico (&&)

let numeroTeste = 8;

console.log(numeroTeste > 0 && numeroTeste % 2 === 0);

// 14. OU lógico (||)

let usuario = "admin";

console.log(usuario === "admin" || usuario === "root");

// 15. NÃO lógico (!)

let logado = true;

console.log(!logado);

if (!logado) {
    console.log("Usuário deslogado");
} else {
    console.log("Usuário logado");
}

// 16. Validação de formulário

let idadeUsuario = 20;
let email = "teste@gmail.com";

if (idadeUsuario > 18 && email !== "") {
    console.log("Cadastro válido");
} else {
    console.log("Cadastro inválido");
}

// 17. Desconto especial

let assinante = false;
let totalCompra = 250;

if (assinante || totalCompra > 200) {
    console.log("Tem desconto");
} else {
    console.log("Sem desconto");
}

// 18. Acesso restrito

let maiorIdade = true;
let contaAtiva = true;
let banido = false;

if (maiorIdade && contaAtiva && !banido) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}

// 19. Par e dentro do intervalo

let numeroIntervalo = 40;

if (
    numeroIntervalo % 2 === 0 &&
    numeroIntervalo >= 1 &&
    numeroIntervalo <= 100
) {
    console.log("Número válido");
} else {
    console.log("Número inválido");
}

// 20. Classificação de nota

let notaAluno = 8;

if (notaAluno >= 9) {
    console.log("Excelente");
} else if (notaAluno >= 7) {
    console.log("Aprovado");
} else if (notaAluno >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

// 21. Calculadora de IMC

let peso = 75;
let altura = 1.75;

let imc = peso / (altura ** 2);

console.log("IMC:", imc.toFixed(2));

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc < 25) {
    console.log("Normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}

// 22. Jogo de adivinhar o número

let numeroSecreto = 42;
let palpite = 30;

if (palpite === numeroSecreto) {
    console.log("Você acertou!");
} else if (palpite > numeroSecreto) {
    console.log("O número secreto é menor");
} else {
    console.log("O número secreto é maior");
}