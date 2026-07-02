document.addEventListener("DOMContentLoaded", function () {
    const formFilme = document.getElementById("formFilme");
    const listaFilme = document.getElementById("listaFilme");
    const botaoCadastrar = document.getElementById("botaoCadastrarFilme");
    const contadorFilmes = document.getElementById("contadorFilmes");

    function atualizarContador() {
        const quantidade = listaFilme.querySelectorAll(".card").length;
        contadorFilmes.innerText = quantidade + (quantidade === 1 ? " filme" : " filmes");
    }

    function primeiraLetraMaiuscula(texto) {
        return texto.charAt(0).toUpperCase() + texto.slice(1);
    }

    async function buscarCapaFilme(nome, anoLancamento) {
        const controlador = new AbortController();
        const tempoLimite = setTimeout(function () {
            controlador.abort();
        }, 8000);

        const parametros = new URLSearchParams({
            action: "query",
            generator: "search",
            gsrsearch: nome + " " + anoLancamento + " filme",
            gsrnamespace: "0",
            gsrlimit: "5",
            prop: "pageimages|info",
            piprop: "thumbnail",
            pithumbsize: "600",
            inprop: "url",
            format: "json",
            origin: "*"
        });

        try {
            const resposta = await fetch(
                "https://pt.wikipedia.org/w/api.php?" + parametros.toString(),
                { signal: controlador.signal }
            );

            if (!resposta.ok) return null;

            const dados = await resposta.json();
            const paginas = Object.values(dados.query?.pages || {}).sort(function (paginaA, paginaB) {
                return paginaA.index - paginaB.index;
            });
            const paginaComCapa = paginas.find(function (pagina) {
                return pagina.thumbnail && pagina.thumbnail.source;
            });

            if (!paginaComCapa) return null;

            return {
                imagem: paginaComCapa.thumbnail.source,
                link: paginaComCapa.fullurl || ""
            };
        } catch (erro) {
            console.error("Não foi possível buscar a capa do filme.", erro);
            return null;
        } finally {
            clearTimeout(tempoLimite);
        }
    }

    function criarCapa(dadosCapa, nome) {
        if (!dadosCapa) {
            const semCapa = document.createElement("div");
            semCapa.className = "capa-filme sem-capa";
            semCapa.textContent = "Sem capa";
            return semCapa;
        }

        const imagem = document.createElement("img");
        imagem.className = "capa-filme";
        imagem.src = dadosCapa.imagem;
        imagem.alt = "Capa do filme " + nome;
        imagem.loading = "lazy";

        if (!dadosCapa.link) return imagem;

        const link = document.createElement("a");
        link.className = "link-capa";
        link.href = dadosCapa.link;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.title = "Ver página do filme na Wikipédia";
        link.appendChild(imagem);
        return link;
    }

    function criarCard(nome, genero, anoLancamento, dadosCapa) {
        const card = document.createElement("div");
        card.classList.add("card");

        const titulo = document.createElement("h3");
        titulo.innerText = nome;

        const generoFilme = document.createElement("p");
        generoFilme.innerText = `Gênero: ${genero}`;

        const ano = document.createElement("p");
        ano.innerText = `Ano de Lançamento: ${anoLancamento}`;

        const botaoExcluir = document.createElement("button");
        botaoExcluir.innerText = "Excluir";
        botaoExcluir.addEventListener("click", function () {
            card.remove();
            atualizarContador();
        });

        card.appendChild(criarCapa(dadosCapa, nome));
        card.appendChild(titulo);
        card.appendChild(generoFilme);
        card.appendChild(ano);
        card.appendChild(botaoExcluir);
        listaFilme.appendChild(card);
        atualizarContador();
    }

    formFilme.addEventListener("submit", async function (event) {
        event.preventDefault();

        let nome = document.getElementById("nomeFilme").value.trim();
        let genero = document.getElementById("generoFilme").value.trim();
        const anoLancamento = document.getElementById("anoFilme").value.trim();

        if (nome === "" || genero === "" || anoLancamento === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        nome = primeiraLetraMaiuscula(nome);
        genero = primeiraLetraMaiuscula(genero);
        botaoCadastrar.disabled = true;
        botaoCadastrar.innerText = "Buscando capa...";

        try {
            const dadosCapa = await buscarCapaFilme(nome, anoLancamento);
            criarCard(nome, genero, anoLancamento, dadosCapa);
            formFilme.reset();
        } finally {
            botaoCadastrar.disabled = false;
            botaoCadastrar.innerText = "Cadastrar Filme";
        }
    });
});
