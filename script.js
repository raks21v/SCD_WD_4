let taskList = [];

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');

    if (taskInput.value.trim() !== '') {
        const task = {
            id: Date.now(),
            text: taskInput.value,
            date: taskDate.value,
            completed: false
        };
        taskList.push(task);
        displayTasks();
        taskInput.value = '';
        taskDate.value = '';
    }
}

function displayTasks() {
    const taskListElement = document.getElementById('task-list');
    taskListElement.innerHTML = '';

    taskList.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.text} - ${task.date}</span>
            <div>
                <button onclick="markCompleted(${task.id})">Complete</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        li.className = task.completed ? 'completed' : '';
        taskListElement.appendChild(li);
    });
}

function markCompleted(id) {
    taskList = taskList.map(task => 
        task.id === id ? {...task, completed: !task.completed} : task
    );
    displayTasks();
}

function deleteTask(id) {
    taskList = taskList.filter(task => task.id !== id);
    displayTasks();
}
