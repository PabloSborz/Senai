document.addEventListener("DOMContentLoaded", function () {
    // let botao = document.getElementById("tema");
    // botao.addEventListener("click", () =>{
    //     document.body.classList.toggle("claro");
    // });
    let botaoCadastrarFilme = document.getElementById("botaoCadastrarFilme");
    let listaFilme = document.getElementById("listaFilme");

    botaoCadastrarFilme.addEventListener("click", function () {
        let nome = document.getElementById("nomeFilme").value.trim();
        let genero = document.getElementById("generoFilme").value.trim();
        let anoLancamento = document.getElementById("anoFilme").value.trim();

        if (nome !== "" && genero !== "" && anoLancamento !== "") {

            let card = document.createElement("div");
            card.classList.add("card");

            let titulo = document.createElement("h3");
            titulo.innerText = nome;

            let generoFilme = document.createElement("p");
            generoFilme.innerText = `Gênero: ${genero}`;

            let ano = document.createElement("p");
            ano.innerText = `Ano de Lançamento: ${anoLancamento}`;

            let botaoExcluir = document.createElement("button");
            botaoExcluir.innerText = "Excluir";
            botaoExcluir.addEventListener("click", function () {
                listaFilme.removeChild(card);
            });

            card.appendChild(titulo);
            card.appendChild(generoFilme);
            card.appendChild(ano);
            card.appendChild(botaoExcluir);

            listaFilme.appendChild(card);

            document.getElementById("nomeFilme").value = "";
            document.getElementById("generoFilme").value = "";
            document.getElementById("anoFilme").value = "";
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});