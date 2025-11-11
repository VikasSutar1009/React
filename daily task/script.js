// const addBtn = document.getElementById("addBtn");
// const textInput = document.getElementById("taskInput");
// const taskList = document.getElementById("taskList");

// // Add Task
// addBtn.addEventListener("click", () =>{
//     const taskText  =  taskInput.value.trim();
//     if(taskText === " "){
//         alert("Please enter a task!");
//         return ;
//     }

//     // create list item
//     const li = document.createElement("li");
//     li.textContent = taskText;

//     // Mark complete on click
//     li.addEventListener("click", () => {
//         li.classList.toggle("completed");
//     });

//     // Mark complete on click
//     li.addEventListener("click", () =>{
//         li.classList.toogle("completed");
//     });

//     // Delete button
//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "X";
//     deleteBtn.classList.add("deleteBtn");
//     deleteBtn.addEventListener("click", (e) => {
//         e.stopPropagation();   // prevent marking complete
//     });

//     li.appendChild(deleteBtn);
//     taskList.appendChild(li);

//     // Clear input
//     taskInput.value = " ";
// });

const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Mark complete on click
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent marking complete
        li.remove();
    });

    // Append delete button to list item
    li.appendChild(deleteBtn);

    // Add to task list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
});