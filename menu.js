// Usando Array para armazenar tarefas
let tarefas = [];

function adicionarTarefa() {
  const inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim();
  let mensagem = document.getElementById("mensagem");

  if (tarefa === "") {
    mensagem.textContent = "ERROR! → First enter a task before adding it.";
    mensagem.style.color = "#944040";
    mensagem.style.fontWeight = "bold";
    return;
  }

  tarefas.push(tarefa); // adiciona ao array
  renderizarTarefas(); // atualiza a lista na tela

  mensagem.textContent = "Task added successfully!";
  mensagem.style.color = "#2E5339";
  mensagem.style.fontWeight = "bold";

  inputTarefa.value = ""; // limpa o campo
}

function renderizarTarefas() {
  const lista = document.getElementById("lista");
  lista.innerHTML = ""; // limpa a lista antes de renderizar tudo de novo

  for (let i = 0; i < tarefas.length; i++) {
    let novaTarefa = document.createElement("li");

    let spanTexto = document.createElement("span");
    spanTexto.textContent = tarefas[i];

    let removerBotao = document.createElement("button");
    removerBotao.className = "remover";
    removerBotao.textContent = "Delete";
    removerBotao.onclick = () => removerTarefa(i);

    let editarTarefa = document.createElement("button");
    editarTarefa.className = "editar";
    editarTarefa.textContent = "Edit";
    editarTarefa.onclick = () => editar(i);

    novaTarefa.appendChild(spanTexto);
    novaTarefa.appendChild(removerBotao);
    novaTarefa.appendChild(editarTarefa);
    lista.appendChild(novaTarefa);
  }
}

function removerTarefa(i) {
  tarefas.splice(i, 1);
  renderizarTarefas();
}

function editar(i) {
  let tarefaEditada = prompt("Please! Edit your task.");
  if (tarefaEditada.trim() !== "") {
    tarefas[i] = tarefaEditada;
    renderizarTarefas();
  }
}

function limparLista() {
  tarefas.length = 0;
  renderizarTarefas();
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = "List successfully cleaned!";
}

// Permite adicionar a tarefa com Enter
document.getElementById("inputTarefa").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    adicionarTarefa();
  }
});

