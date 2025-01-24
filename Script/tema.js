let corpoBG = document.getElementsByTagName('body')[0];
let iconIndex;

const iconesTemas =
[
    'url(../Imagens/plano_de_fundo/tema_jinx.gif)',
    'url(../Imagens/plano_de_fundo/tema_ekko.gif)',
    'url(../Imagens/plano_de_fundo/tema_warwick.gif)',
    'url(../Imagens/plano_de_fundo/tema_urgot.gif)',
    'url(../Imagens/plano_de_fundo/tema_drmundo.gif)',
    'url(../Imagens/plano_de_fundo/tema_rato.gif)'
];

const coresTema = [
    "#3470B9",
    "#21A68D",
    "#CC1E35",
    "#8C6249",
    "#A352D9",
    "#30F274"
];

if (localStorage.getItem("UsuarioAtual") != null)
{
    let UsuarioAtual = JSON.parse(localStorage.getItem("UsuarioAtual"));

    corpoBG.style.backgroundImage = iconesTemas[UsuarioAtual.iconselected];
    document.documentElement.style.setProperty("--tema", coresTema[UsuarioAtual.iconselected]);
}

//////////////////////////iconesTemas//////////////////////////

const iconeJinx = document.getElementById('icon_jinx');
iconeJinx.addEventListener('click', ()=>{
    //tema = 'jinx';
    corpoBG.style.backgroundImage = 'url(../Imagens/plano_de_fundo/tema_jinx.gif)';
    document.documentElement.style.setProperty("--tema", "#3470B9");
    iconIndex = 0;
    localStorage.setItem("IconSelected", JSON.stringify(iconIndex));
});

const iconeEkko = document.getElementById('icon_ekko');
iconeEkko.addEventListener('click', ()=>{
    //tema = 'ekko';
    corpoBG.style.backgroundImage = 'url(../Imagens/plano_de_fundo/tema_ekko.gif)';
    document.documentElement.style.setProperty("--tema", "#21A68D");
    iconIndex = 1;
    localStorage.setItem("IconSelected", JSON.stringify(iconIndex));
});

const iconeWarwick = document.getElementById('icon_warwick');
iconeWarwick.addEventListener('click', ()=>{
    //tema = 'warwick';
    corpoBG.style.backgroundImage = 'url(../Imagens/plano_de_fundo/tema_warwick.gif)';
    document.documentElement.style.setProperty("--tema", "#CC1E35");
    iconIndex = 2;
    localStorage.setItem("IconSelected", JSON.stringify(iconIndex));
});

const iconeUrgot = document.getElementById('icon_urgot');
iconeUrgot.addEventListener('click', ()=>{
    //tema = 'urgot';
    corpoBG.style.backgroundImage = 'url(../Imagens/plano_de_fundo/tema_urgot.gif)';
    document.documentElement.style.setProperty("--tema", "#8C6249");
    iconIndex = 3;
    localStorage.setItem("IconSelected", JSON.stringify(iconIndex));
});

const iconeDrMundo = document.getElementById('icon_drmundo');
iconeDrMundo.addEventListener('click', ()=>{
    //tema = 'dr_mundo';
    corpoBG.style.backgroundImage = 'url(../Imagens/plano_de_fundo/tema_drmundo.gif)';
    document.documentElement.style.setProperty("--tema", "#A352D9");
    iconIndex = 4;
    localStorage.setItem("IconSelected", JSON.stringify(iconIndex));
});

const iconeRato = document.getElementById('icon_rato');
iconeRato.addEventListener('click', ()=>{
    //tema = 'rato';
    corpoBG.style.backgroundImage = 'url(../Imagens/plano_de_fundo/tema_rato.gif)';
    document.documentElement.style.setProperty("--tema", "#30F274");
    iconIndex = 5;
    localStorage.setItem("IconSelected", JSON.stringify(iconIndex));
});

