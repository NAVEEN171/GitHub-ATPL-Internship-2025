let toDoTasks = [];
function generate_uuid() {
  return (
    Math.floor(Math.random() * 100) +
    "-" +
    Math.floor(Math.random() * 200) +
    "-" +
    Math.floor(Math.random() * 1000)
  );
}

document.getElementById("search-bar").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  let searchBarValue = document.getElementById("search-bar").value;
  if (searchBarValue.trim() === "") {
    alert("task should spot be empty");
    return;
  }
  let createdTask = {
    name: searchBarValue,
    id: generate_uuid(),
  };
  searchBarValue.value = "";
  toDoTasks.push(createdTask);
  renderTasks();
}
const deleteTask = (e) => {
  console.log(e.target);
};

const renderTasks = () => {
  let tasks = document.querySelector("section");
  tasks.innerHTML = "";

  for (let task of toDoTasks) {
    let singleTask = document.createElement("div");
    singleTask.innerHTML = `
    <div>${task.name}</div>
    <button id=${task.id}  >Delete</button>
    `;
    let button = singleTask.querySelector("button");
    button.addEventListener("click", (e) => {
      let clickedButton = e.target;
      let buttonID = clickedButton.id;

      let filteredTasks = toDoTasks.filter((task) => task.id !== buttonID);
      toDoTasks = filteredTasks;
      renderTasks();
    });

    tasks.appendChild(singleTask);
  }
};
renderTasks();
