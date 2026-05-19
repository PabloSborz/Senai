
const botao = document.getElementById("filtrar");
const limpar = document.getElementById("limpar");

const categoria = document.getElementById("categoria");

const cards = document.querySelectorAll(".card");

botao.addEventListener("click", () => {

    const valor = categoria.value;

    cards.forEach(card => {

        if(valor === "all"){
            card.style.display = "block";
        }
        else if(card.dataset.category === valor){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

});

limpar.addEventListener("click", () => {

    categoria.value = "all";

    cards.forEach(card => {
        card.style.display = "block";
    });

});