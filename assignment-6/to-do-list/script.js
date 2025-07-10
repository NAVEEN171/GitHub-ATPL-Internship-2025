document.addEventListener("DOMContentLoaded", () => {
  const newTaskInput = document.getElementById("new-task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");
  const pendingTasksCountSpan = document.getElementById("pending-tasks-count");

  let tasks = [];

  function loadTasks() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      tasks = JSON.parse(storedTasks);
    }
    renderTasks();
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTasks() {
    taskList.innerHTML = "";
    let pendingCount = 0;

    tasks.forEach((task) => {
      const taskItem = document.createElement("li");
      taskItem.className = `task-item ${
        task.completed ? "completed" : "pending"
      }`;
      taskItem.dataset.id = task.id;

      if (!task.completed) {
        pendingCount++;
      }

      taskItem.innerHTML = `
        <span class="status-dot"></span>
        <span class="task-text">${task.text}</span>
        <div class="task-actions">
          <button class="complete-btn" ${
            task.completed ? "disabled" : ""
          }>✓</button>
          <button class="delete-btn">X</button>
        </div>
      `;

      const completeBtn = taskItem.querySelector(".complete-btn");
      const deleteBtn = taskItem.querySelector(".delete-btn");

      completeBtn.addEventListener("click", () => turnComplete(task.id));
      deleteBtn.addEventListener("click", () => deleteTask(task.id));

      taskList.appendChild(taskItem);
    });

    pendingTasksCountSpan.textContent = `Pending tasks: ${pendingCount}`;
  }

  function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.unshift(newTask);
    newTaskInput.value = "";
    saveTasks();
    renderTasks();
  }

  function turnComplete(id) {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex > -1) {
      tasks[taskIndex].completed = true;
      saveTasks();
      renderTasks();
    }
  }

  function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
    saveTasks();
    renderTasks();
  }

  addTaskBtn.addEventListener("click", addTask);
  newTaskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  loadTasks();
});
