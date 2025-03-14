//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Lista para armazenar os nomes dos amigos
let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    // Se o campo não estiver vazio, adiciona à lista
    if (nome !== "") {
        amigos.push(nome);
        atualizarLista();
        input.value = ""; // Limpa o campo para o próximo nome
    } else {
        alert("Ei, você precisa digitar um nome!");
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    // Adiciona cada amigo como um item da lista
    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Você precisa adicionar pelo menos um amigo para sortear!");
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `<li>O amigo sorteado foi: ${sorteado}!</li>`;

    // Limpa a lista e reinicia tudo após o sorteio
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
}



