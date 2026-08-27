const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

const searchTask = document.getElementById("searchTask");

let tasks = JSON.parse(localStorage.getItem("tasks"));

if (!tasks || tasks.length === 0) {

    tasks = [

        { text: "Morning Walk", completed: true },

        { text: "Drink 2 Liters of Water", completed: false },

        { text: "Attend College Classes", completed: false },

        { text: "Buy Groceries", completed: false },

        { text: "Call Parents", completed: true },

        { text: "Exercise for 30 Minutes", completed: false },

        { text: "Read a Book", completed: false },

        { text: "Clean My Room", completed: true },

        { text: "Pay Electricity Bill", completed: false },

        { text: "Sleep Before 11 PM", completed: false }

    ];

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

displayTasks();

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        addTask();

    }

});

function addTask(){

    const text = taskInput.value.trim();

    if(text === ""){

        alert("Please enter a task.");

        return;

    }

    tasks.push({

        text: text,

        completed: false

    });

    taskInput.value = "";

    saveTasks();

    displayTasks();

}

function displayTasks(filter = "all"){

    taskList.innerHTML = "";

    const search = searchTask.value.toLowerCase();

    tasks.forEach(function(task,index){

        if(search && !task.text.toLowerCase().includes(search)){

            return;

        }

        if(filter === "completed" && !task.completed){

            return;

        }

        if(filter === "pending" && task.completed){

            return;

        }

        const li = document.createElement("li");

        li.className = "task";

        if(task.completed){

            li.classList.add("completed");

        }

        li.innerHTML = `

            <input type="checkbox" ${task.completed ? "checked" : ""}>

            <span>${task.text}</span>

            <div class="buttons">

                <button class="edit-btn">Edit</button>

                <button class="delete-btn">Delete</button>

            </div>

        `;

        taskList.appendChild(li);

    });

    updateStatus();

}

function updateStatus(){

    totalTasks.textContent = tasks.length;

    let completed = tasks.filter(function(task){

        return task.completed;

    }).length;

    completedTasks.textContent = completed;

    pendingTasks.textContent = tasks.length - completed;

}

function saveTasks(){

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

taskList.addEventListener("click", function(e){

    const item = e.target.closest(".task");

    if(!item) return;

    const index = [...taskList.children].indexOf(item);

    if(e.target.type === "checkbox"){

        tasks[index].completed = e.target.checked;

        saveTasks();

        displayTasks();

    }

    if(e.target.classList.contains("edit-btn")){

        let newTask = prompt("Edit Task", tasks[index].text);

        if(newTask !== null && newTask.trim() !== ""){

            tasks[index].text = newTask.trim();

            saveTasks();

            displayTasks();

        }

    }

    if(e.target.classList.contains("delete-btn")){

        if(confirm("Delete this task?")){

            tasks.splice(index,1);

            saveTasks();

            displayTasks();

        }

    }

});

searchTask.addEventListener("keyup", function(){

    displayTasks();

});

document.getElementById("allBtn").addEventListener("click", function(){

    displayTasks("all");

});

document.getElementById("pendingBtn").addEventListener("click", function(){

    displayTasks("pending");

});

document.getElementById("completedBtn").addEventListener("click", function(){

    displayTasks("completed");

});

document.getElementById("clearBtn").addEventListener("click", function(){

    if(tasks.length === 0){

        alert("Task list is already empty.");

        return;

    }

    if(confirm("Are you sure you want to clear all tasks?")){

        tasks = [];

        saveTasks();

        displayTasks();

    }

});

updateStatus();