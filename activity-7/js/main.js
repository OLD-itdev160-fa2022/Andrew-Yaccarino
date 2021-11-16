let tasks = [];

/**
 * @readonly
 * @constant
 * @enum {String}
 */
const taskStatus = {
    active: 'active',
    completed: 'completed'
};

class Task {
    constructor(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
}

/**
 * @param {Task} task 
 */
function addTaskElement(task) {
    let listEl = document.getElementById('active-list');
    let taskEl = document.createElement('li');
    let textEl = document.createTextNode(task.name);

    taskEl.setAttribute('id', task.id);

    taskEl.appendChild(textEl);

    listEl.appendChild(taskEl);
}

/**
 * @param {Event} event 
 */
function addTask(event) {
    let inputEl = document.getElementById('input-task');
    if (inputEl != '') {
        let id = 'item-' + tasks.length;

        let task = new Task(id, inputEl.value, taskStatus.active);
        tasks.push(task);

        addTaskElement(task);

        inputEl.value = '';
    }
}

/**
 * @param {Event} event 
 */
function completeTask(event) {
    let taskEl = event.target;
    let id = taskEl.id;

    for (let t of tasks) {
        if (t.id === id) {
            t.status = taskStatus.completed;
            break; // no need to keep looking if we found it
        }
    }

    taskEl.remove(); // delete
    document.getElementById('completed-list').appendChild(taskEl);
}

document.body.onload = function() {
    document.getElementById('add-task').onclick = addTask;
    document.getElementById('active-list').onclick = completeTask;
};