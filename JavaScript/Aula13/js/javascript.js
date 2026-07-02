"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const CHAVE_STORAGE = "meu-album-aula13";
    const CHAVE_TEMA = "tema-meu-album-aula13";
    const CHAVE_PERFIL = "foto-perfil-meu-album-aula13";
    const galeria = document.getElementById("galeria");
    const estadoVazio = document.getElementById("estadoVazio");
    const tituloEstadoVazio = estadoVazio.querySelector("h2");
    const contadorFotos = document.getElementById("contadorFotos");
    const modalCadastro = document.getElementById("modalCadastro");
    const modalVisualizacao = document.getElementById("modalVisualizacao");
    const formFoto = document.getElementById("formFoto");
    const arquivoFoto = document.getElementById("arquivoFoto");
    const previewFoto = document.getElementById("previewFoto");
    const mensagemUpload = document.getElementById("mensagemUpload");
    const etiquetaCadastro = document.getElementById("etiquetaCadastro");
    const tituloCadastro = document.getElementById("tituloCadastro");
    const salvarFoto = document.getElementById("salvarFoto");
    const tituloFoto = document.getElementById("tituloFoto");
    const descricaoFoto = document.getElementById("descricaoFoto");
    const categoriaFoto = document.getElementById("categoriaFoto");
    const dataFoto = document.getElementById("dataFoto");
    const fotoAmpliada = document.getElementById("fotoAmpliada");
    const tituloAmpliado = document.getElementById("tituloAmpliado");
    const descricaoAmpliada = document.getElementById("descricaoAmpliada");
    const categoriaAmpliada = document.getElementById("categoriaAmpliada");
    const dataAmpliada = document.getElementById("dataAmpliada");
    const botaoTema = document.getElementById("alternarTema");
    const textoTema = document.getElementById("textoTema");
    const alterarFotoPerfil = document.getElementById("alterarFotoPerfil");
    const arquivoPerfil = document.getElementById("arquivoPerfil");
    const fotoPerfil = document.getElementById("fotoPerfil");
    const inicialPerfil = document.getElementById("inicialPerfil");
    const modalAlerta = document.getElementById("modalAlerta");
    const tituloAlerta = document.getElementById("tituloAlerta");
    const mensagemAlerta = document.getElementById("mensagemAlerta");
    const fecharAlerta = document.getElementById("fecharAlerta");
    const cancelarAlerta = document.getElementById("cancelarAlerta");

    let fotos = carregarFotos();
    let filtroAtual = "Todos";
    let fotoAtualId = null;
    let fotoEmEdicaoId = null;
    let urlPreview = null;
    let resolverConfirmacao = null;

    function aplicarTema(temaEscuro) {
        document.body.classList.toggle("escuro", temaEscuro);
        botaoTema.setAttribute("aria-pressed", String(temaEscuro));
        botaoTema.setAttribute("aria-label", temaEscuro ? "Ativar tema claro" : "Ativar tema escuro");
        textoTema.textContent = temaEscuro ? "Tema claro" : "Tema escuro";
    }

    aplicarTema(localStorage.getItem(CHAVE_TEMA) === "escuro");

    function exibirFotoPerfil(imagem) {
        fotoPerfil.src = imagem;
        fotoPerfil.hidden = false;
        inicialPerfil.hidden = true;
    }

    const fotoPerfilSalva = localStorage.getItem(CHAVE_PERFIL);
    if (fotoPerfilSalva) exibirFotoPerfil(fotoPerfilSalva);

    function mostrarAlerta(mensagem, titulo = "Atenção") {
        tituloAlerta.textContent = titulo;
        mensagemAlerta.textContent = mensagem;
        cancelarAlerta.hidden = true;
        fecharAlerta.textContent = "Entendi";
        modalAlerta.showModal();
    }

    function mostrarConfirmacao(mensagem, titulo = "Confirmar") {
        tituloAlerta.textContent = titulo;
        mensagemAlerta.textContent = mensagem;
        cancelarAlerta.hidden = false;
        fecharAlerta.textContent = "Excluir";
        modalAlerta.showModal();

        return new Promise(function (resolve) {
            resolverConfirmacao = resolve;
        });
    }

    function concluirAlerta(confirmado) {
        modalAlerta.close();

        if (resolverConfirmacao) {
            resolverConfirmacao(confirmado);
            resolverConfirmacao = null;
        }
    }

    function carregarFotos() {
        try {
            return JSON.parse(localStorage.getItem(CHAVE_STORAGE)) || [];
        } catch (erro) {
            console.error("Não foi possível carregar o álbum.", erro);
            return [];
        }
    }

    function salvarFotos(novasFotos) {
        try {
            localStorage.setItem(CHAVE_STORAGE, JSON.stringify(novasFotos));
            fotos = novasFotos;
            return true;
        } catch (erro) {
            mostrarAlerta("O armazenamento do navegador está cheio. Exclua uma foto antes de adicionar outra.");
            return false;
        }
    }

    function formatarData(data) {
        if (!data) return "Data não informada";

        return new Intl.DateTimeFormat("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        }).format(new Date(data + "T12:00:00"));
    }

    function obterFotosVisiveis() {
        if (filtroAtual === "Todos") return fotos;
        return fotos.filter(function (foto) {
            return foto.categoria === filtroAtual;
        });
    }

    function criarCard(foto) {
        const card = document.createElement("article");
        card.className = "foto-card";

        const abertura = document.createElement("button");
        abertura.className = "foto-abertura";
        abertura.type = "button";
        abertura.setAttribute("aria-label", "Abrir " + foto.titulo);
        abertura.addEventListener("click", function () {
            abrirVisualizacao(foto.id);
        });

        const imagem = document.createElement("img");
        imagem.src = foto.imagem;
        imagem.alt = foto.titulo;
        imagem.loading = "lazy";
        abertura.appendChild(imagem);

        const informacoes = document.createElement("div");
        informacoes.className = "foto-info";

        const categoria = document.createElement("span");
        categoria.className = "foto-categoria";
        categoria.textContent = foto.categoria;

        const titulo = document.createElement("h3");
        titulo.textContent = foto.titulo;

        const data = document.createElement("time");
        data.dateTime = foto.data;
        data.textContent = formatarData(foto.data);

        informacoes.append(categoria, titulo, data);
        card.append(abertura, informacoes);
        return card;
    }

    function renderizarAlbum() {
        const fotosVisiveis = obterFotosVisiveis();
        galeria.replaceChildren();

        fotosVisiveis.forEach(function (foto) {
            galeria.appendChild(criarCard(foto));
        });

        const quantidade = fotos.length;
        contadorFotos.textContent = quantidade + (quantidade === 1 ? " foto" : " fotos");
        estadoVazio.hidden = fotosVisiveis.length > 0;
        tituloEstadoVazio.textContent = fotos.length === 0
            ? "Seu álbum está vazio"
            : "Nenhuma foto nesta categoria";
    }

    function limparPreview() {
        if (urlPreview) URL.revokeObjectURL(urlPreview);
        urlPreview = null;
        previewFoto.hidden = true;
        previewFoto.removeAttribute("src");
        mensagemUpload.hidden = false;
    }

    function abrirCadastro() {
        fotoEmEdicaoId = null;
        formFoto.reset();
        limparPreview();
        etiquetaCadastro.textContent = "Nova memória";
        tituloCadastro.textContent = "Adicionar foto";
        salvarFoto.textContent = "Salvar no álbum";
        dataFoto.value = new Date().toISOString().slice(0, 10);

        if (filtroAtual !== "Todos") {
            categoriaFoto.value = filtroAtual;
        }

        modalCadastro.showModal();
    }

    function abrirEdicao() {
        const foto = fotos.find(function (item) {
            return item.id === fotoAtualId;
        });

        if (!foto) return;

        fotoEmEdicaoId = foto.id;
        formFoto.reset();
        limparPreview();
        etiquetaCadastro.textContent = "Editar memória";
        tituloCadastro.textContent = "Editar foto";
        salvarFoto.textContent = "Salvar alterações";
        tituloFoto.value = foto.titulo;
        descricaoFoto.value = foto.descricao || "";
        categoriaFoto.value = foto.categoria;
        dataFoto.value = foto.data;
        previewFoto.src = foto.imagem;
        previewFoto.hidden = false;
        mensagemUpload.hidden = true;
        modalVisualizacao.close();
        modalCadastro.showModal();
    }

    function fecharCadastro() {
        modalCadastro.close();
        limparPreview();
        fotoEmEdicaoId = null;
    }

    function otimizarImagem(arquivo, limite = 1200) {
        return new Promise(function (resolve, reject) {
            const leitor = new FileReader();

            leitor.onload = function () {
                const imagem = new Image();

                imagem.onload = function () {
                    const escala = Math.min(1, limite / Math.max(imagem.width, imagem.height));
                    const canvas = document.createElement("canvas");
                    canvas.width = Math.round(imagem.width * escala);
                    canvas.height = Math.round(imagem.height * escala);

                    const contexto = canvas.getContext("2d");
                    contexto.drawImage(imagem, 0, 0, canvas.width, canvas.height);
                    resolve(canvas.toDataURL("image/jpeg", 0.78));
                };

                imagem.onerror = reject;
                imagem.src = leitor.result;
            };

            leitor.onerror = reject;
            leitor.readAsDataURL(arquivo);
        });
    }

    function abrirVisualizacao(id) {
        fotoAtualId = id;
        atualizarVisualizacao();
        modalVisualizacao.showModal();
    }

    function atualizarVisualizacao() {
        const foto = fotos.find(function (item) {
            return item.id === fotoAtualId;
        });

        if (!foto) return;

        fotoAmpliada.src = foto.imagem;
        fotoAmpliada.alt = foto.titulo;
        tituloAmpliado.textContent = foto.titulo;
        descricaoAmpliada.textContent = foto.descricao || "";
        categoriaAmpliada.textContent = foto.categoria;
        dataAmpliada.dateTime = foto.data;
        dataAmpliada.textContent = formatarData(foto.data);
    }

    function navegarFoto(direcao) {
        const fotosVisiveis = obterFotosVisiveis();
        if (fotosVisiveis.length < 2) return;

        const indiceAtual = fotosVisiveis.findIndex(function (foto) {
            return foto.id === fotoAtualId;
        });
        const proximoIndice = (indiceAtual + direcao + fotosVisiveis.length) % fotosVisiveis.length;
        fotoAtualId = fotosVisiveis[proximoIndice].id;
        atualizarVisualizacao();
    }

    document.getElementById("abrirCadastro").addEventListener("click", abrirCadastro);
    alterarFotoPerfil.addEventListener("click", function () {
        arquivoPerfil.click();
    });

    arquivoPerfil.addEventListener("change", async function () {
        const arquivo = arquivoPerfil.files[0];
        if (!arquivo) return;

        try {
            const imagem = await otimizarImagem(arquivo, 400);
            localStorage.setItem(CHAVE_PERFIL, imagem);
            exibirFotoPerfil(imagem);
            arquivoPerfil.value = "";
        } catch (erro) {
            mostrarAlerta("Não foi possível salvar a foto do perfil.");
            console.error(erro);
        }
    });

    botaoTema.addEventListener("click", function () {
        const temaEscuro = !document.body.classList.contains("escuro");
        aplicarTema(temaEscuro);
        localStorage.setItem(CHAVE_TEMA, temaEscuro ? "escuro" : "claro");
    });
    document.getElementById("adicionarPrimeiraFoto").addEventListener("click", abrirCadastro);
    document.getElementById("fecharCadastro").addEventListener("click", fecharCadastro);
    document.getElementById("cancelarCadastro").addEventListener("click", fecharCadastro);
    document.getElementById("fecharVisualizacao").addEventListener("click", function () {
        modalVisualizacao.close();
    });
    document.getElementById("editarFoto").addEventListener("click", abrirEdicao);

    arquivoFoto.addEventListener("change", function () {
        const arquivo = arquivoFoto.files[0];
        limparPreview();

        if (!arquivo) return;

        urlPreview = URL.createObjectURL(arquivo);
        previewFoto.src = urlPreview;
        previewFoto.hidden = false;
        mensagemUpload.hidden = true;
    });

    formFoto.addEventListener("submit", async function (evento) {
        evento.preventDefault();
        const arquivo = arquivoFoto.files[0];
        const fotoExistente = fotos.find(function (foto) {
            return foto.id === fotoEmEdicaoId;
        });

        if (!arquivo && !fotoExistente) {
            mostrarAlerta("Selecione uma imagem para adicionar ao álbum.");
            return;
        }

        const botaoSalvar = salvarFoto;
        const textoOriginalBotao = botaoSalvar.textContent;
        botaoSalvar.disabled = true;
        botaoSalvar.textContent = "Salvando...";

        try {
            const imagemOtimizada = arquivo
                ? await otimizarImagem(arquivo)
                : fotoExistente.imagem;
            const novaFoto = {
                id: fotoExistente
                    ? fotoExistente.id
                    : (typeof crypto.randomUUID === "function" ? crypto.randomUUID() : String(Date.now())),
                titulo: tituloFoto.value.trim(),
                descricao: descricaoFoto.value.trim(),
                categoria: categoriaFoto.value,
                data: dataFoto.value,
                imagem: imagemOtimizada
            };

            const fotosAtualizadas = fotoExistente
                ? fotos.map(function (foto) {
                    return foto.id === fotoExistente.id ? novaFoto : foto;
                })
                : [novaFoto].concat(fotos);

            if (salvarFotos(fotosAtualizadas)) {
                filtroAtual = "Todos";
                document.querySelectorAll(".filtro").forEach(function (botao) {
                    botao.classList.toggle("ativo", botao.dataset.filtro === "Todos");
                });
                renderizarAlbum();
                fecharCadastro();
            }
        } catch (erro) {
            mostrarAlerta("Não foi possível processar esta imagem.");
            console.error(erro);
        } finally {
            botaoSalvar.disabled = false;
            botaoSalvar.textContent = textoOriginalBotao;
        }
    });

    document.querySelectorAll(".filtro").forEach(function (botao) {
        botao.addEventListener("click", function () {
            filtroAtual = botao.dataset.filtro;
            document.querySelectorAll(".filtro").forEach(function (item) {
                item.classList.toggle("ativo", item === botao);
            });
            renderizarAlbum();
        });
    });

    document.getElementById("fotoAnterior").addEventListener("click", function () {
        navegarFoto(-1);
    });

    fecharAlerta.addEventListener("click", function () {
        concluirAlerta(true);
    });

    cancelarAlerta.addEventListener("click", function () {
        concluirAlerta(false);
    });

    modalAlerta.addEventListener("cancel", function (evento) {
        evento.preventDefault();
        concluirAlerta(false);
    });

    document.getElementById("proximaFoto").addEventListener("click", function () {
        navegarFoto(1);
    });

    document.getElementById("excluirFoto").addEventListener("click", async function () {
        const foto = fotos.find(function (item) {
            return item.id === fotoAtualId;
        });

        if (!foto) return;

        const exclusaoConfirmada = await mostrarConfirmacao(
            "Excluir a foto “" + foto.titulo + "” do álbum?",
            "Excluir foto"
        );

        if (!exclusaoConfirmada) return;

        const novasFotos = fotos.filter(function (item) {
            return item.id !== fotoAtualId;
        });

        if (salvarFotos(novasFotos)) {
            modalVisualizacao.close();
            fotoAtualId = null;
            renderizarAlbum();
        }
    });

    [modalCadastro, modalVisualizacao].forEach(function (modal) {
        modal.addEventListener("click", function (evento) {
            if (evento.target === modal) modal.close();
        });
    });

    document.addEventListener("keydown", function (evento) {
        if (!modalVisualizacao.open) return;
        if (evento.key === "ArrowLeft") navegarFoto(-1);
        if (evento.key === "ArrowRight") navegarFoto(1);
    });

    renderizarAlbum();
});
