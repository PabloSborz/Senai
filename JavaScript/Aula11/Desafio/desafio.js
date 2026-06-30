
let botaoCadastrarAluno = document.getElementById("botaoCadastrarAluno");
let listaAlunos = document.getElementById("listaAlunos");

botaoCadastrarAluno.addEventListener("click", function () {

    let nome = document.getElementById("nomeAluno").value.trim();
    let idade = document.getElementById("idadeAluno").value.trim();
    let curso = document.getElementById("cursoAluno").value.trim();

    if (nome === "" || idade === "" || curso === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let novoAluno = document.createElement("li");
    novoAluno.innerText = `Nome: ${nome} | Idade: ${idade} | Curso: ${curso} `;

    let botaoExcluir = document.createElement("button");
    botaoExcluir.innerText = "[Excluir]";
    botaoExcluir.style.marginLeft = "10px";

    botaoExcluir.addEventListener("click", function () {
        listaAlunos.removeChild(novoAluno);
    });

    novoAluno.appendChild(botaoExcluir);
    listaAlunos.appendChild(novoAluno);

    document.getElementById("nomeAluno").value = "";
    document.getElementById("idadeAluno").value = "";
    document.getElementById("cursoAluno").value = "";
});