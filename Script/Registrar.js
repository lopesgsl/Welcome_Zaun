let usuarios = [];

let nome;
let senha;
let senha2;

//Buscando se ha usuarios salvos
if (localStorage.getItem("usuarios") != null)
{
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
}

//Botao de registrar
document.getElementById("registrar").addEventListener("click", function(e)
{
    e.preventDefault();

    //Recebe o nome e senha informados
    nome = document.getElementById("lrname").value;
    senha = document.getElementById("lrpword1").value;
    senha2 = document.getElementById("lrpword2").value;

    //Verifica se o nome e senha informados estao vazios
    if (nome != "")
    {
        if (senha != "")
        {
            //Verifica se as senhas sao iguais
            if (senha == senha2)
            {
                //Verifica se o nome de usuario ja existe
                var nomeFind = usuarios.find((element) => element.Usernome == nome);

                if (nomeFind == undefined)
                {
                    //Registrar o usuario
                    usuarios.push(new User(usuarios.length+1, nome, senha));

                    localStorage.setItem("usuarios", JSON.stringify(usuarios));

                    alert("Conta criada com sucesso!");

                    window.location.href = 'Login.html';
                }

                else
                {
                    alert("Alerta! Ja existe um usuario com esse nome.");
                }
            }

            else
            {
                alert("As senhas estao diferentes!");
            }
        }

        else
        {
            alert("Informe uma senha valida!");
        }
    }

    else
    {
        alert("Informe um usuario valido!");
    }
});

//Background change animation
let corpo = document.getElementsByTagName('body')[0];
var index = 2;
var imagens = [
            "../Imagens/plano_de_fundo/Wallpaper_01.jpg",
            "../Imagens/plano_de_fundo/Wallpaper_02.jpg",
            "../Imagens/plano_de_fundo/Wallpaper_03.jpg",
            "../Imagens/plano_de_fundo/Wallpaper_04.jpg"
        ];

setInterval(function()
{
    corpo.style.backgroundImage = 'url(' + imagens[index] + ')';
    index += 1;
    index = index%4
}, 3000);

//Classe User feito em cada codigo para evitar trabalho com importacaoo
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
