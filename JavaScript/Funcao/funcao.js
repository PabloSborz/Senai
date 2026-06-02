function soma(a, b) {
    res = a + b;
    console.log(res);
}

soma(5, 10);
soma(20, 30);
soma(1, 2);

function nomeCompleto(nome, sobrenome) {
    nome = nome + " " + sobrenome;
    console.log(nome);
}

nomeCompleto("João", "Silva");
nomeCompleto("Maria", "Santos");
nomeCompleto("Pedro", "Oliveira");

function calcularMedia(nota1, nota2) {
    media = (nota1 + nota2) / 2;
    console.log(media);
}
calcularMedia(8, 9);
calcularMedia(7, 6);
calcularMedia(10, 10);

function verificarParidade(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " é par.");
    } else {
        console.log(numero + " é ímpar.");
    }   
}    
verificarParidade(4);
verificarParidade(7);
verificarParidade(10);

function calcularAreaRetangulo(base, altura) {
    area = base * altura;
    console.log(area);
}
calcularAreaRetangulo(5, 3);
calcularAreaRetangulo(10, 4);
calcularAreaRetangulo(7, 2);

function saudacao(nome) {
    console.log("Olá, " + nome + "! Bem-vindo(a)!");
}
saudacao("João");
saudacao("Maria");
saudacao("Pedro");

function somaNumeros() {
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

let soma2 = num1 + num2;
alert("A soma dos números é: " + soma2);
}
somaNumeros();

function nome(){
let nomeUsuario = prompt("Digite seu nome:");
alert("Olá, " + nomeUsuario + "! Bem-vindo(a)!");
}
nome();

function alunoPresente(){
let aluno = true
if(aluno == true){
    console.log("Presença confirmada.")
}else{
    console.log("Presença não confirmada.")
}
}

alunoPresente();

function alunoPresente2(){
let aluno2 = prompt("Presença ou falta")
if(aluno2 == "Presença"){
    console.log("Presença confirmada.")
}else if(aluno2 == "Falta"){
    console.log("Presença não confirmada.")
}

}
alunoPresente2();

function situacaoAluno(){
    let nota1 = Number(prompt("Digite a primeira nota:"));
    let nota2 = Number(prompt("Digite a segunda nota:"));
    let nota3 = Number(prompt("Digite a terceira nota:"));
    let media = (nota1 + nota2 + nota3) / 3;

    if(media >= 7){
        alert("Aprovado");
    }else if(media >= 5){
        alert("Recuperação");
    }else{
        alert("Reprovado");
    }
}
situacaoAluno();