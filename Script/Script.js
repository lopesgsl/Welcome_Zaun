const novaTask = document.getElementById('input');
const addTask = document.getElementById('btnAdd');
const taskList = document.getElementById('taskList');
const logoutBottom = document.getElementById('logout');

let UsuarioAtual;
let iconeindex = 0;

let corpo = document.getElementsByTagName('body')[0];

const icones =
[
    'url(../Imagens/plano_de_fundo/tema_jinx.gif)',
    'url(../Imagens/plano_de_fundo/tema_ekko.gif)',
    'url(../Imagens/plano_de_fundo/tema_warwick.gif)',
    'url(../Imagens/plano_de_fundo/tema_urgot.gif)',
    'url(../Imagens/plano_de_fundo/tema_drmundo.gif)',
    'url(../Imagens/plano_de_fundo/tema_rato.gif)'
];

if (localStorage.getItem("UsuarioAtual") != null) {
    UsuarioAtual = JSON.parse(localStorage.getItem("UsuarioAtual"));
    corpo.style.backgroundImage = icones[UsuarioAtual.iconselected];

    if (!UsuarioAtual.ToDoList) {
        UsuarioAtual.ToDoList = [];
    }

    for (let n = 0; n < UsuarioAtual.ToDoList.length; n++) {
        adicionarTask(UsuarioAtual.ToDoList[n].TaskID, UsuarioAtual.ToDoList[n].TaskName, UsuarioAtual.ToDoList[n].TaskState);
    }
} else {
    alert("Voce deve estar logado para usar esta pagina!");

    window.location.href = 'Login.html';
}

logoutBottom.addEventListener('click', () =>
{
    delete localStorage.UsuarioAtual;
});

// Adiciona uma tarefa quando o botão é clicado
addTask.addEventListener('click', () => {
    adicionarTask(GenerateNewTaskID(), novaTask.value, null);
});

// Adiciona uma tarefa quando a tecla Enter é pressionada
novaTask.addEventListener('keyup', (e) => {
    if (e.key === 'Enter')
    {
        adicionarTask(GenerateNewTaskID(), novaTask.value, null);
    }
});

// Função para Adicionar e carregar tasks
function adicionarTask(newTaskID, newTaskName, newTaskState) {
    const text = newTaskName;
    if (text)
    {
        if (text.charAt(0) != " ")
        {
            const listItem = document.createElement('li');
            listItem.className = 'taskItem';

            const checkbox = document.createElement('button');
            checkbox.className = 'btnCheck';
            checkbox.innerHTML = '';

            const span = document.createElement('span');
            span.className = 'text';
            span.textContent = text;

            listItem.id = newTaskID;
            span.id = newTaskID;

            if (newTaskState)
            {
                span.style.textDecoration = 'line-through';
                checkbox.innerHTML = '<i class="fas fa-check"></i>';
            }

            else if (newTaskState == null)
            {
                UsuarioAtual.ToDoList.push(new Task(span.id, text));
                SaveCurrentUserModifications();
            }

            const deletar = document.createElement('button');
            deletar.className = 'btnDelete';
            deletar.innerHTML = '<i class="fa-solid fa-xmark"></i>';

            const editar = document.createElement('button');
            editar.className = 'btnEdit';
            editar.innerHTML = '<i class="fa-solid fa-pen"></i>';

            listItem.appendChild(checkbox);
            listItem.appendChild(span);
            listItem.appendChild(editar);
            listItem.appendChild(deletar);

            taskList.appendChild(listItem);

            novaTask.value = '';

            deletar.addEventListener('click', () => {
                taskList.removeChild(listItem);
                RemoveItemFromToDoList(listItem.id);
            });

            checkbox.addEventListener('click', () => {
                if (span.style.textDecoration == 'line-through') {
                    span.style.textDecoration = 'none';
                    checkbox.innerHTML = '';
                } else {
                    span.style.textDecoration = 'line-through';
                    checkbox.innerHTML = '<i class="fas fa-check"></i>';
                }

                SaveStateModifications(span.id);
            });

            editar.addEventListener('click', () => {
                const novoTexto = prompt("Edite sua tarefa:", span.textContent);
                if (novoTexto !== null && novoTexto.trim() !== "") {
                    span.textContent = novoTexto;
                    SaveEditModifications(span.id, novoTexto);
                }
            });
        }

        else
        {
            alert("Remova o espaco no comeco, por favor");
        }
    }
}

//Gera um novo ID para as tasks
function GenerateNewTaskID()
{
    let repeat = true;
    let i = 0;
    let n = 1;
    let testID = "TID-" + n;

    if (UsuarioAtual.ToDoList.length > 0)
    {
        while (repeat)
        {
            repeat = false;
            testID = "TID-" + n;

            for (i = 0; i < UsuarioAtual.ToDoList.length; i++) 
            {
                if (testID == UsuarioAtual.ToDoList[i].TaskID) {
                    repeat = true;
                }
            }

            n += 1;
        }
    }

    return testID;
}

function SaveStateModifications(newText) {
    let i = 0;
    while (UsuarioAtual.ToDoList[i].TaskID != newText && i < UsuarioAtual.ToDoList.length) {
        i++;
    }

    if (i < UsuarioAtual.ToDoList.length) {
        UsuarioAtual.ToDoList[i].TaskState = !UsuarioAtual.ToDoList[i].TaskState;
    }

    SaveCurrentUserModifications();
}

function SaveEditModifications(taskID, newText) {
    let i = 0;
    while (UsuarioAtual.ToDoList[i].TaskID !== taskID && i < UsuarioAtual.ToDoList.length) {
        i++;
    }

    if (i < UsuarioAtual.ToDoList.length) {
        UsuarioAtual.ToDoList[i].TaskName = newText;
    }

    SaveCurrentUserModifications();
}

function SaveCurrentUserModifications() {
    localStorage.setItem("UsuarioAtual", JSON.stringify(UsuarioAtual));
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let n = 0;

    while (n < usuarios.length && usuarios[n].UserID != UsuarioAtual.UserID) {
        n++;
    }

    if (n < usuarios.length) {
        usuarios[n] = UsuarioAtual;
    } else {
        usuarios.push(UsuarioAtual);
    }

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function RemoveItemFromToDoList(oldTask) {
    let i = 0;
    while (UsuarioAtual.ToDoList[i].TaskID != oldTask && i < UsuarioAtual.ToDoList.length) {
        i++;
    }

    if (i < UsuarioAtual.ToDoList.length) {
        UsuarioAtual.ToDoList.splice(i, 1);
    }

    SaveCurrentUserModifications();
}

function ResetTasks() {
    UsuarioAtual.ToDoList = [];
    SaveCurrentUserModifications();
    taskList.innerHTML = '';
}

// Class de Usuario e Tarefa
class User {
    constructor(newID, novonome, novasenha, newicon) {
        this.UserID = newID;
        this.Usernome = novonome;
        this.Usersenha = novasenha;
        this.iconselected = newicon;
        this.ToDoList = [];
    }
}

class Task {
    constructor(newTaskID, newTaskName) {
        this.TaskID = newTaskID;
        this.TaskName = newTaskName;
        this.TaskState = false;
    }
}