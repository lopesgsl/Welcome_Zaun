let usuarios = [];

let nome;
let senha;
let senha2;

//Buscando se há usuarios salvos
if (localStorage.getItem("usuarios") != null)
{
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
}

//Botão de registrar
document.getElementById("registrar").addEventListener("click", function(e)
{
    e.preventDefault();

    //Recebe o nome e senha informados
    nome = document.getElementById("lrname").value;
    senha = document.getElementById("lrpword1").value;
    senha2 = document.getElementById("lrpword2").value;

    //Verifica se o nome e senha informados estão vazios
    if (nome != "")
    {
        if (senha != "")
        {
            //Verifica se as senhas são iguais
            if (senha == senha2)
            {
                //Verifica se o nome de usuário ja existe
                var nomeFind = usuarios.find((element) => element.Usernome == nome);

                if (nomeFind == undefined)
                {
                    //Registrar o usuário
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
