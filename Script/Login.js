let usuarios = [];

let nome;
let senha;

//Buscando se ha usuarios salvos
if (localStorage.getItem("usuarios") != null)
{
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
}

//Botao do login
document.getElementById("login").addEventListener("click", function(e)
{
    e.preventDefault();

    //Pega o nome e senha informados
    nome = document.getElementById("lrname").value;
    senha = document.getElementById("lrpword").value;

    let n = 0; //Percorrer o array e diferenciar os usuarios com suas resppectivas senhas

    //O -1 que por algum motivo evita erro de array
    while (nome != usuarios[n].Usernome && n < usuarios.length-1)
    {
        n++;
    }

    //Verifica se o usuario existe e se a senh corresponde
    if (nome == usuarios[n].Usernome)
    {
        if (senha == usuarios[n].Usersenha)
        {
            localStorage.setItem("UsuarioAtual", JSON.stringify(usuarios[n]));
            alert("Logado com sucesso!");
            window.location.href = 'To_do.html';
        }

        else
        {
            alert("Senha incorreta");
        }
    }

    else
    {
        alert("Este usuario nao existe");
    }
});

//Classe User feito em cada codigo para evitar trabalho com importacao
class User
{
    UserID;

    Usernome;
    Usersenha;

    ToDoList = [];

    constructor(newID, novonome, novasenha)
    {
        this.UserID = newID;
        this.Usernome = novonome;
        this.Usersenha = novasenha;
    }

    AdicionarNovaTarefa(newTask)
    {
        this.ToDoList.push(novaTarefa);
    }

    RemoverTarefa(oldTask)
    {
        const index = this.ToDoList.indexOf(oldTask);

        if (index > -1)
        {
            array.splice(index, 1);
        }
    }
}

class Task
{
    TaskID;
    TaskName;
    TaskState=false;

    constructor(newTaskID, newTaskName)
    {
        this.TaskID = newTaskID;
        this.TaskName = newTaskName;
    }

    UpdateTaskState()
    {
        this.TaskState = !this.TaskState;
    }
}