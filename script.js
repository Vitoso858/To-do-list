let inputAddTask = document.querySelector("#addTask"),
  labelAddTask = document.querySelector("#label-addTask"),
  erro = document.querySelector(".error"),
  anyTask = document.querySelector("#anyTask");

//Código para o efeito do primeiro input, onde o conteúdo do placeholder passa para o label

inputAddTask.onfocus = () => {
  inputAddTask.setAttribute("class", "input-AddTaskFocus");

  inputAddTask.setAttribute("placeholder", "");

  labelAddTask.textContent = "Add task";
};

inputAddTask.onblur = () => {
  inputAddTask.removeAttribute("class");

  inputAddTask.setAttribute("placeholder", "Add task");

  labelAddTask.textContent = "";
};

//variaveis e função que vai adicionar as tarefas na área apropriada
let divTasks = document.querySelector(".task"),
  btnAddTasks = document.querySelector("#add"),
  topW = 1.5; // pega o id do botão de excluir que é clicado

function addTask() {
  anyTask.textContent = ""; // retira o texto que indica que não existe nenhuma tarefa

  let label = document.createElement("label"),
    checkbox = document.createElement("input"),
    btn = document.createElement("button"),
    span = document.createElement("span"),
    spanLabel = document.createElement("span");

  checkbox.setAttribute("type", "checkbox");
  span.setAttribute("class", "material-symbols-outlined");
  span.textContent = "delete";
  spanLabel.textContent = inputAddTask.value;
  // spanLabel.style.color = "#ceecef";

  label.appendChild(checkbox);
  label.appendChild(spanLabel);
  btn.appendChild(span);

  label.appendChild(btn);
  label.setAttribute("class", "labelRemove");
  label.style.top = `${topW}em`; // posição em relação ao topo

  divTasks.appendChild(label);

  inputAddTask.value = "";
  topW += 3.5; // variável que vai posicionar cada nova tarefa que for adicionada em relação ao top

  // Função que deleta uma tarefa e corrige a posição das tarefas restantes
  btn.addEventListener("click", () => {
    topW = 1.5;
    label.remove();
    let labels = document.querySelectorAll(".labelRemove");
    for (let i = 0; i < labels.length; i++) {
      labels[i].style.top = `${topW}em`;
      topW += 3.5;
    }

    if (labels.length === 0) {
      // Adiciona o texto que indica que não existe nenhuma tarefa
      anyTask.textContent = "Add new tasks";
    }
  });
}

// Função do botão "add" que vai adicionar as tarefas. Se o input não tiver nenhum valor inserido, ele vai exibir uma mensagem de erro
btnAddTasks.addEventListener("click", () => {
  erro.textContent = "";
  if (inputAddTask.value === "") {
    erro.textContent = "Insira uma tarefa";
  } else {
    addTask();
  }
});

//Código para mostrar a data em que as tarefas estão sendo realizadas
let data = new Date(),
  month = data.getMonth() + 1,
  main = document.querySelector("main"),
  body = document.querySelector("body"),
  dateOfTasks;

body.onload = () => {
  dateOfTasks = document.createElement("p");
  dateOfTasks.textContent = `${data.getDate()}/${month}/${data.getFullYear()}`;
  dateOfTasks.setAttribute("class", "dateOfTasks");
  main.appendChild(dateOfTasks);
};
