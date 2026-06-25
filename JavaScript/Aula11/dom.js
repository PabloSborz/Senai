// EXEMPLO 04
// function alterarTitulo() {
//     document.getElementById("titulo").innerText = "Título alterado com JavaScript!";
// }

// EXEMPLO 05.01
// let titulo1 = document.getElementById("titulo1");
// console.log(titulo1);

// EXEMPLO 5.2
// let texto = document.querySelector(".mensagem");
// console.log(texto);

// EXEMPLO 5.3
// let paragrafos = document.querySelectorAll("p");
// console.log(paragrafos);

// EXEMPLO 6.1
// document.getElementById("titulo2").innerText = "NovoTexto";

// EXEMPLO 6.2
// document.getElementById("resultado").innerHTML = "<strong>Texto em negrito</strong>";

// EXEMPLO 7
// let mensagem = document.getElementById("mensagem");

// mensagem.style.color = "red";
// mensagem.style.fontSize = "30px";
// mensagem.style.backgroundColor = "green";

// EXEMPLO 8.1
// function mostrarMensagem() {
//     alert("Você clicou no botão!");
// }

// EXEMPLO 9
//  function trocarTitulo() {
//     document.getElementById("titulo3").innerText = "Título alterado!";
// }

// EXEMPLO 10
// function mostrarNome() {
//     let nome = document.getElementById("nome").value;
//     document.getElementById("resultado2").innerText = "Olá, " + nome + "!";
// }

// EXEMPLO 11
// function verificarIdade() {
//     let idade = Number(document.getElementById("idade").value);

//         if (idade >= 18) {
//         document.getElementById("resultado3").innerText = "Você é maior de idade.";
//         } else {
//         document.getElementById("resultado3").innerText = "Você é menor de idade.";
//     }
// }

// EXEMPLO 12
// function trocarImagem() {
//     document.getElementById("imagem").src = "imagem2.jpg";
// }

// EXEMPLO 13
// function esconderTexto() {
//     document.getElementById("texto").style.display = "none";
// }
// function mostrarTexto() {
//     document.getElementById("texto").style.display = "block";
// }

// EXEMPLO 14
// function criarParagrafo() {
//     let novoParagrafo = document.createElement("p");
//     novoParagrafo.innerText = "Este parágrafo foi criado com JavaScript.";
//     document.getElementById("area").appendChild(novoParagrafo);
// }

// EXEMPLO 15
// function removerAviso() {
//     document.getElementById("aviso").remove();
// }

// EXEMPLO 16
// function calcularIMC() {
//     let peso = Number(document.getElementById("peso").value);
//     let altura = Number(document.getElementById("altura").value);
//     let imc = peso / (altura * altura);
//     document.getElementById("resultado4").innerText = "Seu IMC é: " + imc.toFixed(2);
// }

// EXEMPLO 17
// function adicionarTarefa() {
//     let textoTarefa = document.getElementById("tarefa").value;
//         if (textoTarefa === "") {
//             alert("Digite uma tarefa antes de adicionar.");
//             return;
//         }
//     let item = document.createElement("li");
//         item.innerText = textoTarefa + " ";
//     let botaoExcluir = document.createElement("button");
//         botaoExcluir.innerText = "Excluir";
//         botaoExcluir.onclick = function() {
//             item.remove();
//         };
//         item.appendChild(botaoExcluir);
//         document.getElementById("lista").appendChild(item);
//         document.getElementById("tarefa").value = "";
// }

//Exercicio 01
// function alterarTitulo() {
// document.getElementById("titulo").innerText = "DOM é incrível!";
// }

// Exercicio 02
//     let botao = document.getElementById("altCor");
//     let paragrafo = document.getElementByID("azul");
//        botao.addEventListener("click", function() {
//             paragrafo.style.color = "Blue";
//             paragrafo.style.background = "pink"
//         });
