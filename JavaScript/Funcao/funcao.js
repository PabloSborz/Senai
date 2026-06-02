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