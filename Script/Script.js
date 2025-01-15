var nome;
var senha;

let usuarios = [];

if (localStorage.getItem("usuarios") != null)
{
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
}

if (document.getElementById("login") != undefined)
{
    document.getElementById("login").addEventListener("click", function(e)
    {
        e.preventDefault();

        nome = document.getElementById("lrname").value;
        senha = document.getElementById("lrpword").value;

        var nomeFind = usuarios.find((element) => element.Usernome == nome);
        var senhaFind = usuarios.find((element) => element.Usersenha == senha);

        if (nomeFind != undefined)
        {
            if (senhaFind != undefined)
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
}

if (document.getElementById("registrar") != undefined)
{
    document.getElementById("registrar").addEventListener("click", function(e)
    {
        e.preventDefault();

        nome = document.getElementById("lrname").value;
        senha = document.getElementById("lrpword1").value;
        var senha2 = document.getElementById("lrpword2").value;

        if (nome != "")
        {
            if (senha != "")
            {
                if (senha == senha2)
                {
                    var nomeFind = usuarios.find((element) => element.Usernome == nome);

                    if (nomeFind == undefined)
                    {
                        usuarios.push(new User(nome, senha));

                        localStorage.setItem("usuarios", JSON.stringify(usuarios));
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
}

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