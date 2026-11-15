
const nome = "Bruna";
const curso = "Análise e Desenvolvimento de Sistemas";

const botao = document.getElementById("botaoMensagem");
const mensagem = document.getElementById("mensagem");


let cliques = 0;

botao.addEventListener("click", function() {
    cliques++;

    if (cliques === 1) {
        mensagem.textContent = "Olá! Seja bem-vindo ao meu portfólio!";
    } else if (cliques === 2) {
        mensagem.textContent = "Obrigada pela visita!";
    } else {
        mensagem.textContent = "Estou aprendendo JavaScript!";
    }
});


const botaoSobre = document.getElementById("botaoSobre");
const textoSobre = document.getElementById("textoSobre");

botaoSobre.addEventListener("click", function() {
    if (textoSobre.style.display === "none") {
        textoSobre.style.display = "block";
        botaoSobre.textContent = "Esconder sobre mim";
    } else {
        textoSobre.style.display = "none";
        botaoSobre.textContent = "Mostrar sobre mim";
    }
});



const formContato = document.getElementById("formContato");

const nomeContato = document.getElementById("nomeContato");
const mensagemContato = document.getElementById("mensagemContato");
const retornoContato = document.getElementById("retornoContato");


formContato.addEventListener("submit", function(event) {
    event.preventDefault();

    nomeContato.classList.remove("campo-erro");
    mensagemContato.classList.remove("campo-erro");

    if (nomeContato.value.trim() === "") {
        retornoContato.textContent = "Por favor, digite seu nome.";
        retornoContato.className = "mensagem-erro";
        nomeContato.classList.add("campo-erro");

    } else if (mensagemContato.value.trim() === "") {
        retornoContato.textContent = "Por favor, digite sua mensagem.";
        retornoContato.className = "mensagem-erro";
        mensagemContato.classList.add("campo-erro");

    } else {
        retornoContato.textContent = "Obrigada, " + nomeContato.value + "! Formulário preenchido com sucesso!";
        retornoContato.className = "mensagem-sucesso";

        nomeContato.value = "";
        mensagemContato.value = "";
        contadorCaracteres.textContent = "0 caracteres digitados";
        contadorCaracteres.classList.remove("contador-limite");
    }
});

nomeContato.addEventListener("input", function() {
    nomeContato.classList.remove("campo-erro");
});
mensagemContato.addEventListener("input", function() {
    mensagemContato.classList.remove("campo-erro");
});

const contadorCaracteres = document.getElementById("contadorCaracteres");

mensagemContato.addEventListener("input", function() {
    let quantidade = mensagemContato.value.length;

    contadorCaracteres.textContent =
        quantidade + " caracteres digitados";

    if (quantidade >= 180) {
        contadorCaracteres.classList.add("contador-limite");
    } else {
        contadorCaracteres.classList.remove("contador-limite");
    }
});

// Alternar entre modo claro e escuro

const botaoTema = document.getElementById("botaoTema");
// Recuperar o tema salvo no navegador

const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {
    document.body.classList.add("modo-escuro");
    botaoTema.textContent = "☀️ Modo claro";
}

botaoTema.addEventListener("click", function() {

    document.body.classList.toggle("modo-escuro");

    if (document.body.classList.contains("modo-escuro")) {
    botaoTema.textContent = "☀️ Modo claro";
    localStorage.setItem("tema", "escuro");
} else {
    botaoTema.textContent = "🌙 Modo escuro";
    localStorage.setItem("tema", "claro");
}

});