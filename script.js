const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const totalTask = document.getElementById("totalTask");
const completedTask = document.getElementById("completedTask");


taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});


addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    // Validasi input
    if (taskText === "") {
        alert("tugas remidian belum ada infoo!");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    span.addEventListener("click", function () {
        span.classList.toggle("completed");
        updateCount();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateCount();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    updateCount();
}

function updateCount() {
    const tasks = taskList.children.length;
    const completed = document.querySelectorAll(".completed").length;

    totalTask.textContent = tasks;
    completedTask.textContent = completed;
}
