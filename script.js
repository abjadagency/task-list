document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const saveButton = document.getElementById('save-button');
    const taskList = document.getElementById('task-list');

    saveButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }
        // Create a new list item for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a date element and set its text to the current date
        const dateElement = document.createElement('span');
        dateElement.textContent = new Date().toLocaleDateString();

        // Append the task and date to the task list
        taskItem.appendChild(dateElement);
        taskList.appendChild(taskItem);

        // Clear the task input field
        taskInput.value = '';
    });
});
