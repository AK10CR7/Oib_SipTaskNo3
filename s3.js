document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const pendingTasks = document.getElementById('pending-tasks');
    const completedTasks = document.getElementById('completed-tasks');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(text) {
        const taskItem = document.createElement('li');
        taskItem.textContent = text;

        const taskActions = document.createElement('div');
        taskActions.className = 'task-actions';

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.className = 'complete';
        completeButton.addEventListener('click', () => {
            completeTask(taskItem);
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit';
        editButton.addEventListener('click', () => {
            editTask(taskItem);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', () => {
            deleteTask(taskItem);
        });

        taskActions.appendChild(completeButton);
        taskActions.appendChild(editButton);
        taskActions.appendChild(deleteButton);
        taskItem.appendChild(taskActions);
        pendingTasks.appendChild(taskItem);
    }

    function completeTask(taskItem) {
        taskItem.classList.add('completed');
        taskItem.querySelector('.complete').remove();
        completedTasks.appendChild(taskItem);
    }

    function editTask(taskItem) {
        const newText = prompt('Edit task:', taskItem.firstChild.textContent);
        if (newText !== null && newText.trim() !== '') {
            taskItem.firstChild.textContent = newText;
        }
    }

    function deleteTask(taskItem) {
        taskItem.remove();
    }
});
