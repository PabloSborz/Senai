document.addEventListener("DOMContentLoaded", function () {
    let formFilme = document.getElementById("formFilme");
    let listaFilme = document.getElementById("listaFilme");

    function primeiraLetraMaiuscula(texto) {
        return texto.charAt(0).toUpperCase() + texto.slice(1);
    }

    formFilme.addEventListener("submit", function (event) {
        event.preventDefault();

        let nome = document.getElementById("nomeFilme").value.trim();
        let genero = document.getElementById("generoFilme").value.trim();
        let anoLancamento = document.getElementById("anoFilme").value.trim();

        if (nome !== "" && genero !== "" && anoLancamento !== "") {

            nome = primeiraLetraMaiuscula(nome);
            genero = primeiraLetraMaiuscula(genero);

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
