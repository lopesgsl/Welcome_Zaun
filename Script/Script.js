const novaTask = document.getElementById('input');
const addTask = document.getElementById('btnAdd');
const taskList = document.getElementById('taskList');

//Adiciona uma tarefa quando o botão é clicado
addTask.addEventListener('click', () => {
    adicionarTask();
});

// Adiciona uma tarefa quando a tecla Enter é pressionada
novaTask.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        adicionarTask();
    }
});

function adicionarTask() {
    const text = novaTask.value;
    localStorage.setItem('item', novaTask.value);
    if (text) {
        const listItem = document.createElement('li');
        listItem.className = 'taskItem';

        const checkbox = document.createElement('button');
        checkbox.className = 'btnCheck';
        checkbox.innerHTML = '<i class="fas fa-check"></i>';

        const span = document.createElement('span');
        span.className = 'text';
        span.textContent = text;

        const deletar = document.createElement('button');
        deletar.className = 'btnDelete';
        deletar.innerHTML = '<i class="fa-solid fa-xmark"></i>'; 

        listItem.appendChild(checkbox);
        listItem.appendChild(span);
        listItem.appendChild(deletar); 

        taskList.appendChild(listItem);

        novaTask.value = '';

        deletar.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        checkbox.addEventListener('click', () => { 
            if (span.style.textDecoration == 'line-through') { 
                span.style.textDecoration = 'none';
            } 
            else { 
                span.style.textDecoration = 'line-through'; 
            } 
        });
    }
}
