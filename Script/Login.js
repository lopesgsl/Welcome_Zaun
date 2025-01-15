let usuarios = [];

let nome;
let senha;

//Buscando se há usuarios salvos
if (localStorage.getItem("usuarios") != null)
{
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
}

//Botão do login
document.getElementById("login").addEventListener("click", function(e)
{
    e.preventDefault();

    //Pega o nome e senha informados
    nome = document.getElementById("lrname").value;
    senha = document.getElementById("lrpword").value;

    let n = 0; //Percorrer o array e diferenciar os usuários com suas resppectivas senhas

    //O -1 que por algum motivo evita erro de array
    while (nome != usuarios[n].Usernome && n < usuarios.length-1)
    {
        n++;
    }

    //Verifica se o usuário existe e se a senh corresponde
    if (nome == usuarios[n].Usernome)
    {
        if (senha == usuarios[n].Usersenha)
        {
            alert("Logado com sucesso!");
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

//Classe User feito em cada código para evitar trabalho com importação
class User
{
    Usernome;
    Usersenha;

    constructor(novonome, novasenha)
    {
        this.Usernome = novonome;
        this.Usersenha = novasenha;
    }
}