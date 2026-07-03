"use strict";

// Aguarda o HTML ser carregado antes de procurar elementos e registrar eventos.
document.addEventListener("DOMContentLoaded", function () {
    // Chaves usadas para identificar os dados salvos no armazenamento do navegador.
    const CHAVE_STORAGE = "meu-album-aula13";
    const CHAVE_TEMA = "tema-meu-album-aula13";
    const CHAVE_PERFIL = "foto-perfil-meu-album-aula13";

    // Referências aos elementos do HTML que serão lidos ou alterados pelo JavaScript.
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

    // Estado atual da aplicação: fotos, filtro, seleção, edição e confirmação.
    let fotos = carregarFotos();
    let filtroAtual = "Todos";
    let fotoAtualId = null;
    let fotoEmEdicaoId = null;
    let urlPreview = null;
    let resolverConfirmacao = null;

    // Liga ou desliga o tema escuro e atualiza os textos de acessibilidade do botão.
    function aplicarTema(temaEscuro) {
        document.body.classList.toggle("escuro", temaEscuro);
        botaoTema.setAttribute("aria-pressed", String(temaEscuro));
        botaoTema.setAttribute("aria-label", temaEscuro ? "Ativar tema claro" : "Ativar tema escuro");
        textoTema.textContent = temaEscuro ? "Tema claro" : "Tema escuro";
    }

    // Recupera a preferência de tema salva anteriormente.
    aplicarTema(localStorage.getItem(CHAVE_TEMA) === "escuro");

    // Substitui a inicial do perfil pela imagem escolhida.
    function exibirFotoPerfil(imagem) {
        fotoPerfil.src = imagem;
        fotoPerfil.hidden = false;
        inicialPerfil.hidden = true;
    }

    const fotoPerfilSalva = localStorage.getItem(CHAVE_PERFIL);
    if (fotoPerfilSalva) exibirFotoPerfil(fotoPerfilSalva);

    // Abre o modal com apenas uma mensagem e o botão "Entendi".
    function mostrarAlerta(mensagem, titulo = "Atenção") {
        tituloAlerta.textContent = titulo;
        mensagemAlerta.textContent = mensagem;
        cancelarAlerta.hidden = true;
        fecharAlerta.textContent = "Entendi";
        modalAlerta.showModal();
    }

    // Abre o modal de confirmação e devolve uma Promise com a escolha do usuário.
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

    // Fecha o alerta e, se houver confirmação pendente, entrega sua resposta.
    function concluirAlerta(confirmado) {
        modalAlerta.close();

        if (resolverConfirmacao) {
            resolverConfirmacao(confirmado);
            resolverConfirmacao = null;
        }
    }

    // Lê do localStorage as fotos salvas; se não houver dados válidos, retorna uma lista vazia.
    function carregarFotos() {
        try {
            return JSON.parse(localStorage.getItem(CHAVE_STORAGE)) || [];
        } catch (erro) {
            console.error("Não foi possível carregar o álbum.", erro);
            return [];
        }
    }

    // Converte a lista em texto JSON e a salva no navegador.
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

    // Transforma a data do campo (AAAA-MM-DD) em uma data por extenso no padrão brasileiro.
    function formatarData(data) {
        if (!data) return "Data não informada";

        return new Intl.DateTimeFormat("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        }).format(new Date(data + "T12:00:00"));
    }

    // Retorna todas as fotos ou somente as que pertencem à categoria selecionada.
    function obterFotosVisiveis() {
        if (filtroAtual === "Todos") return fotos;
        return fotos.filter(function (foto) {
            return foto.categoria === filtroAtual;
        });
    }

    // Cria, via JavaScript, todo o HTML de um cartão da galeria.
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

    // Reconstrói a galeria e atualiza o contador e a mensagem de álbum vazio.
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

    // Descarta a URL temporária da prévia para liberar memória do navegador.
    function limparPreview() {
        if (urlPreview) URL.revokeObjectURL(urlPreview);
        urlPreview = null;
        previewFoto.hidden = true;
        previewFoto.removeAttribute("src");
        mensagemUpload.hidden = false;
    }

    // Prepara e abre o formulário no modo de cadastro de uma nova foto.
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

    // Preenche o formulário com os dados da foto selecionada para permitir sua edição.
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

    // Fecha o formulário e limpa dados temporários da edição e da prévia.
    function fecharCadastro() {
        modalCadastro.close();
        limparPreview();
        fotoEmEdicaoId = null;
    }

    // Redimensiona e comprime uma imagem usando canvas antes de salvá-la.
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

    // Guarda o ID da foto clicada e abre seu modal de visualização.
    function abrirVisualizacao(id) {
        fotoAtualId = id;
        atualizarVisualizacao();
        modalVisualizacao.showModal();
    }

    // Localiza a foto atual e coloca seus dados no modal de visualização.
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

    // Avança ou volta na lista visível; o cálculo circular volta ao início no final.
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

    // Eventos dos botões de cadastro e da foto de perfil.
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

    // Alterna o tema e salva a nova preferência no localStorage.
    botaoTema.addEventListener("click", function () {
        const temaEscuro = !document.body.classList.contains("escuro");
        aplicarTema(temaEscuro);
        localStorage.setItem(CHAVE_TEMA, temaEscuro ? "escuro" : "claro");
    });

    // Eventos para abrir e fechar os modais de cadastro e visualização.
    document.getElementById("adicionarPrimeiraFoto").addEventListener("click", abrirCadastro);
    document.getElementById("fecharCadastro").addEventListener("click", fecharCadastro);
    document.getElementById("cancelarCadastro").addEventListener("click", fecharCadastro);
    document.getElementById("fecharVisualizacao").addEventListener("click", function () {
        modalVisualizacao.close();
    });
    document.getElementById("editarFoto").addEventListener("click", abrirEdicao);

    // Mostra imediatamente uma prévia local quando o usuário escolhe um arquivo.
    arquivoFoto.addEventListener("change", function () {
        const arquivo = arquivoFoto.files[0];
        limparPreview();

        if (!arquivo) return;

        urlPreview = URL.createObjectURL(arquivo);
        previewFoto.src = urlPreview;
        previewFoto.hidden = false;
        mensagemUpload.hidden = true;
    });

    // Valida, otimiza e salva uma foto nova ou as alterações de uma foto existente.
    formFoto.addEventListener("submit", async function (evento) {
        // Impede o comportamento padrão do formulário, que recarregaria a página.
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
            // Mantém a imagem antiga na edição, caso nenhuma imagem nova seja escolhida.
            const imagemOtimizada = arquivo
                ? await otimizarImagem(arquivo)
                : fotoExistente.imagem;
            const novaFoto = {
                // Reutiliza o ID na edição ou cria um ID único em um novo cadastro.
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
                // Depois de salvar, volta ao filtro "Todos" para a foto ficar visível.
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

    // Adiciona a cada filtro o evento que muda a categoria visível e redesenha o álbum.
    document.querySelectorAll(".filtro").forEach(function (botao) {
        botao.addEventListener("click", function () {
            filtroAtual = botao.dataset.filtro;
            document.querySelectorAll(".filtro").forEach(function (item) {
                item.classList.toggle("ativo", item === botao);
            });
            renderizarAlbum();
        });
    });

    // Navegação para a foto anterior no modal.
    document.getElementById("fotoAnterior").addEventListener("click", function () {
        navegarFoto(-1);
    });

    // Botões e tecla Esc do modal de alerta/confirmacão.
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

    // Navegação para a próxima foto no modal.
    document.getElementById("proximaFoto").addEventListener("click", function () {
        navegarFoto(1);
    });

    // Pede confirmação e, se aceita, remove a foto do armazenamento e da galeria.
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

    // Fecha os modais quando o usuário clica na área escura ao redor do conteúdo.
    [modalCadastro, modalVisualizacao].forEach(function (modal) {
        modal.addEventListener("click", function (evento) {
            if (evento.target === modal) modal.close();
        });
    });

    // Permite navegar pelas fotos usando as setas esquerda e direita do teclado.
    document.addEventListener("keydown", function (evento) {
        if (!modalVisualizacao.open) return;
        if (evento.key === "ArrowLeft") navegarFoto(-1);
        if (evento.key === "ArrowRight") navegarFoto(1);
    });

    // Exibe o estado inicial do álbum assim que a página termina de carregar.
    renderizarAlbum();
});
