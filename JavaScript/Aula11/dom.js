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
//      function alterarTitulo() {
//      document.getElementById("titulo").innerText = "DOM é incrível!";
//  }

//Exercicio 02
//     let botao = document.getElementById("altCor");
//     let paragrafo = document.getElementByID("azul");
//        botao.addEventListener("click", function() {
//             paragrafo.style.color = "Blue";
//             paragrafo.style.background = "pink"
//         });

//Exercicio 03
//     let texto = document.createElement("p");
//          texto.innerText = "Este é um texto que mudará de tamanho!";
//          texto.id = "texto";
//     let botaoFonte = document.createElement("button");
//          botaoFonte.innerText = "Aumentar Fonte";
//          document.body.appendChild(texto);
//          document.body.appendChild(botaoFonte);
//          botaoFonte.addEventListener("click", function () {
//          texto.style.fontSize = "40px";
// });

//  Exercicio 04
//       let botaoAlerta = document.getElementById("botaoAlerta");
//             botaoAlerta.addEventListener("click", function () {
//             alert("Bem-vindo à aula de DOM!");
//     });

//  Exercicio 05
//         let botaoSaudacao = document.getElementById("botaoSaudacao");
//                 botaoSaudacao.addEventListener("click", function () {
//         let nome = document.getElementById("nomeUsuario").value;
//         let mensagem = document.getElementById("mensagemSaudacao");
//             if (nome.trim() !== "") {
//                 mensagem.innerText = `Olá, ${nome}!`;
//             } else {
//                 mensagem.innerText = "Por favor, digite seu nome.";
//         }
// });

//  Exercicio 06
//         let botaoIdade = document.getElementById("botaoIdade");
//             botaoIdade.addEventListener("click", function () {
//         let idade = parseInt(document.getElementById("idadeUsuario").value);
//         let mensagem = document.getElementById("mensagemIdade");
//             if (idade >= 18) {
//                 mensagem.innerText = "Você é maior de idade.";
//             } else {
//                 mensagem.innerText = "Você é menor de idade.";
//         }
//     });

//  Exercicio 07
//         let botaoSoma = document.getElementById("botaoSoma");
//             botaoSoma.addEventListener("click", function () {
//         let num1 = parseFloat(document.getElementById("numero1").value);
//         let num2 = parseFloat(document.getElementById("numero2").value);
//         let resultado = document.getElementById("resultadoSoma");
//             resultado.innerText = `A soma é: ${num1 + num2}`;
//     });

//  Exercicio 08
//     let botaoSomar = document.getElementById("botaoSomar");
//     let botaoSubtrair = document.getElementById("botaoSubtrair");
//     let botaoMultiplicar = document.getElementById("botaoMultiplicar");
//     let botaoDividir = document.getElementById("botaoDividir");
//     let resultadoOperacao = document.getElementById("resultadoOperacao");
// botaoSomar.addEventListener("click", function () {
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     resultadoOperacao.innerText = `Resultado: ${num1 + num2}`;
// });
// botaoSubtrair.addEventListener("click", function () {
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     resultadoOperacao.innerText = `Resultado: ${num1 - num2}`;
// });
//         botaoMultiplicar.addEventListener("click", function () {
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     resultadoOperacao.innerText = `Resultado: ${num1 * num2}`;
// });
// botaoDividir.addEventListener("click", function () {
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     resultadoOperacao.innerText = num2 !== 0 ? `Resultado: ${num1 / num2}` : "Divisão por zero não permitida.";
// });

//  Exercicio 09
// let botaoAdicionarItem = document.getElementById("botaoAdicionarItem");
// let listaItens = document.getElementById("listaItens");
// botaoAdicionarItem.addEventListener("click", function () {
//     let novoItem = document.createElement("li");
//     novoItem.innerText = `Item ${listaItens.children.length + 1}`;
//     listaItens.appendChild(novoItem);
// });

//  Exercicio 10
//     let botaoEsconder = document.getElementById("botaoEsconder");
//     let botaoMostrar = document.getElementById("botaoMostrar");
//     let mensagem = document.getElementById("mensagem");

//     botaoEsconder.addEventListener("click", function () {
//         mensagem.style.display = "none";
//     });

//     botaoMostrar.addEventListener("click", function () {
//         mensagem.style.display = "block";
//     });

// Exercicio 11
//     let botaoTrocarImagem = document.getElementById("botaoTrocarImagem");
//     let imagem = document.getElementById("imagem");
//     botaoTrocarImagem.addEventListener("click", function () {
//         imagem.src = imagem.src.includes("imagem1.jpg") ? "imagem2.jpg" : "imagem1.jpg";
//     });

//  Exercicio 12
//     let botaoModoEscuro = document.getElementById("botaoModoEscuro");
//     botaoModoEscuro.addEventListener("click", function () {
//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "white";
//     });

//  Exercicio 13
// let botaoAdicionarTarefa = document.getElementById("botaoAdicionarTarefa");
// let listaTarefas = document.getElementById("listaTarefas");
// botaoAdicionarTarefa.addEventListener("click", function () {
//     let tarefa = document.getElementById("tarefa").value.trim();
//     if (tarefa !== "") {
//         let novoItem = document.createElement("li");
//         novoItem.innerText = tarefa;
//         listaTarefas.appendChild(novoItem);
//         document.getElementById("tarefa").value = ""; // Limpa o campo
//     } else {
//         alert("Por favor, digite uma tarefa.");
//     }
// });

//  Exercicio 14
// botaoAdicionarTarefa.addEventListener("click", function () {
//     let tarefa = document.getElementById("tarefa").value.trim();
//     if (tarefa !== "") {
//         let novoItem = document.createElement("li");
//         novoItem.innerText = tarefa;
//         // Adiciona botão de exclusão
//         let botaoExcluir = document.createElement("button");
//         botaoExcluir.innerText = "Excluir";
//         botaoExcluir.addEventListener("click", function () {
//             listaTarefas.removeChild(novoItem);
//         });
//         novoItem.appendChild(botaoExcluir);
//         listaTarefas.appendChild(novoItem);
//         document.getElementById("tarefa").value = ""; // Limpa o campo
//     } else {
//         alert("Por favor, digite uma tarefa.");
//     }
// });

//  Exercicio 15
// let botaoCadastrarAluno = document.getElementById("botaoCadastrarAluno");
// let listaAlunos = document.getElementById("listaAlunos");
// botaoCadastrarAluno.addEventListener("click", function () {
//     let nome = document.getElementById("nomeAluno").value.trim();
//     let idade = document.getElementById("idadeAluno").value.trim();
//     let curso = document.getElementById("cursoAluno").value.trim();
//     if (nome !== "" && idade !== "" && curso !== "") {
//         let novoAluno = document.createElement("li");
//         novoAluno.innerText = `Nome: ${nome}, Idade: ${idade}, Curso: ${curso}`;
//         // Adiciona botão de exclusão
//         let botaoExcluir = document.createElement("button");
//         botaoExcluir.innerText = "Excluir";
//         botaoExcluir.addEventListener("click", function () {
//             listaAlunos.removeChild(novoAluno);
//         });
//         novoAluno.appendChild(botaoExcluir);
//         listaAlunos.appendChild(novoAluno);
//         // Limpa os campos
//         document.getElementById("nomeAluno").value = "";
//         document.getElementById("idadeAluno").value = "";
//         document.getElementById("cursoAluno").value = "";
//     } else {
//         alert("Por favor, preencha todos os campos.");
//     }
// });