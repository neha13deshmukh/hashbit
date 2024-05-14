
function addTask(taskName) {
  
    const listItem = document.createElement("li");
    listItem.classList.add("todo-item");
    
    
    const taskElement = document.createElement("span");
    taskElement.textContent = taskName;
    
   
    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.textContent = "Complete";
  
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("trash-btn");
    deleteButton.textContent = "Delete";
    
   
    listItem.appendChild(taskElement);
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    
    
    const todoList = document.querySelector(".todo-list");
    todoList.appendChild(listItem);
}


function markCompleted(taskElement) {
    taskElement.classList.toggle("strike");
}


function deleteTask(taskElement) {
    taskElement.remove();
}


function submitfn(event) {
    event.preventDefault();
    
   
    const taskInput = document.querySelector(".todo-input");
    const taskName = taskInput.value;
    
  
    if (taskName) {
        addTask(taskName);
        taskInput.value = ""; // Clear input field
    }
}


document.addEventListener("click", function(event) {
    const element = event.target;
    if (element.classList.contains("complete-btn")) {
        const taskElement = element.parentElement;
        markCompleted(taskElement);
    }
});


document.addEventListener("click", function(event) {
    const element = event.target;
    if (element.classList.contains("trash-btn")) {
        const taskElement = element.parentElement;
        deleteTask(taskElement);
    }
});
