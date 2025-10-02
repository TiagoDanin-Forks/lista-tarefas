const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const counter = document.getElementById('counter');
const clearAllBtn = document.getElementById('clearAllBtn');

function updateCounter() {
    const completed = taskList.querySelectorAll('.completed').length;
    counter.textContent = `Concluídas: ${completed}`;
}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

clearAllBtn.addEventListener('click', () => {
    if (taskList.children.length > 0) {
        if (confirm('Tem certeza que deseja remover todas as tarefas?')) {
            taskList.innerHTML = '';
            updateCounter();
        }
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;
    span.addEventListener('click', () => {
        li.classList.toggle('completed');
        if (typeof completeBtn !== 'undefined') {
            completeBtn.textContent = li.classList.contains('completed') ? 'Desfazer' : 'Concluir';
        }
        updateCounter();
    });

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.textContent = 'Concluir';
    completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
        completeBtn.textContent = li.classList.contains('completed') ? 'Desfazer' : 'Concluir';
        updateCounter();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Excluir';
    deleteBtn.addEventListener('click', () => {
        li.remove();
        updateCounter();
    });

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
}
