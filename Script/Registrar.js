let usuarios = [];

let nome;
let senha;
let senha2;
let tema;

if (localStorage.getItem("UsuarioAtual") != null) {
    window.location.href = 'To_do.html';
}

const iconesIMG =
[
    '../Imagens/plano_de_fundo/icon_jinx.webp',
    '../Imagens/plano_de_fundo/icon_ekko.webp',
    '../Imagens/plano_de_fundo/icon_warwick.webp',
    '../Imagens/plano_de_fundo/icon_urgot.webp',
    '../Imagens/plano_de_fundo/icon_dr_mundo.webp',
    '../Imagens/plano_de_fundo/icon_twitch.webp'
];

let iconeindex = 0;
if (localStorage.getItem("IconSelected") != null)
{
    iconeindex = JSON.parse(localStorage.getItem("IconSelected"));
}

document.getElementById("edit_icon").src  = iconesIMG[iconeindex];

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
                    usuarios.push(new User(usuarios.length+1, nome, senha, iconeindex));

                    localStorage.setItem("usuarios", JSON.stringify(usuarios));

                    alert("Conta criada com sucesso!");

                    localStorage.setItem("UsuarioAtual", JSON.stringify(usuarios[usuarios.length-1]));
                    window.location.href = 'To_do.html';
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
/*let corpo = document.getElementsByTagName('body')[0];
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
}, 3000);*/

//Classe User feito em cada codigo para evitar trabalho com importacaoo
class User
{
    UserID;

    Usernome;
    Usersenha;

    iconselected;

    ToDoList = [];

    constructor(newID, novonome, novasenha, newicon)
    {
        this.UserID = newID;
        this.Usernome = novonome;
        this.Usersenha = novasenha;
        this.iconselected = newicon;
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
