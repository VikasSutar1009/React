const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if( taskText === " ") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = " ";
});

