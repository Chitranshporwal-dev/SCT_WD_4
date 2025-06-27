function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskTime = document.getElementById("taskTime");
  const taskText = taskInput.value.trim();
  const taskDate = taskTime.value;

  if (!taskText) return;

  const task = document.createElement("div");
  task.className = "task";

  const details = document.createElement("div");
  details.className = "details";
  details.innerHTML = `<h2>${taskText}</h2><p>${taskDate}</p>`;

  const actions = document.createElement("div");
  actions.className = "actions";

  const completeBtn = document.createElement("button");
  completeBtn.className = "complete";
  completeBtn.textContent = "✔";
  completeBtn.onclick = () => task.classList.toggle("completed");

  const editBtn = document.createElement("button");
  editBtn.className = "edit";
  editBtn.textContent = "✏️";
  editBtn.onclick = () => editTask(task, taskText, taskDate);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.textContent = "🗑️";
  deleteBtn.onclick = () => task.remove();

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  task.appendChild(details);
  task.appendChild(actions);

  document.getElementById("taskList").appendChild(task);

  taskInput.value = "";
  taskTime.value = "";
}

function editTask(task, oldText, oldTime) {
  const newText = prompt("Edit Task", oldText);
  const newTime = prompt("Edit Date/Time", oldTime);
  if (newText && newTime) {
    const details = task.querySelector(".details");
    details.innerHTML = `<h2>${newText}</h2><p>${newTime}</p>`;
  }
}
