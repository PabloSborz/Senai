//Passo01
let el = document.getElementById("mensagem"); 
el.textContent = "Olá, DOM!";

//Passo02
let el1 = document.querySelector("p"); 
el1.classList.add("destaque");

//Passo03
let btn1 = document.getElementById("btnCor"); 
btn1.addEventListener("click", function() { 
document.body.style.backgroundColor = "lightblue";
 });

// Passo04
document.addEventListener("keydown", function(event) { 
console.log("Tecla: " + event.key); 
});

// Passo05
let input = document.getElementById("itemInput"); 
let btn = document.getElementById("addBtn"); 
let lista = document.getElementById("lista"); 
btn.addEventListener("click", function() { 
let li = document.createElement("li"); 
li.textContent = input.value; 
lista.appendChild(li); 
input.value = ""; 
});

// Passo06
let lista1 = document.getElementById("lista"); 
lista1.addEventListener("click", function(e) { 
if (e.target.tagName === "LI") { 
console.log("Clicou em: " + e.target.textContent);
 }
 });