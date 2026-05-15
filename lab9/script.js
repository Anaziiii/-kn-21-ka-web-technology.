document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const sortBtn = document.getElementById("sortBtn");
    const taskList = document.getElementById("taskList");


    let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];


    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${task}</span>
                <div class="btn-group">
                    <button class="edit-btn" onclick="editTask(${index})">✎</button>
                    <button class="del-btn" onclick="deleteTask(${index})">✕</button>
                </div>
            `;
            li.querySelector('span').addEventListener('click', () => {
    li.classList.toggle('completed');
});
            taskList.appendChild(li);
        });

        localStorage.setItem("myTasks", JSON.stringify(tasks));
    }


    addBtn.addEventListener("click", () => {
        const text = taskInput.value.trim();
        if (text) {
            tasks.push(text);
            taskInput.value = "";
            renderTasks();
        }
    });


    window.deleteTask = (index) => {
        tasks.splice(index, 1);
        renderTasks();
    };


    window.editTask = (index) => {
        const newText = prompt("Редагувати завдання:", tasks[index]);
        if (newText !== null && newText.trim() !== "") {
            tasks[index] = newText.trim();
            renderTasks();
        }
    };

 
    sortBtn.addEventListener("click", () => {
        tasks.sort((a, b) => a.localeCompare(b));
        renderTasks();
    });

    renderTasks();
});