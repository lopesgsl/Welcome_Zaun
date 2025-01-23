let corpo = document.getElementsByTagName('body')[0];
let iconeindex;

const icones =
[
    'url(../Imagens/plano_de_fundo/tema_jinx.gif)',
    'url(../Imagens/plano_de_fundo/tema_ekko.gif)',
    'url(../Imagens/plano_de_fundo/tema_warwick.gif)',
    'url(../Imagens/plano_de_fundo/tema_urgot.gif)',
    'url(../Imagens/plano_de_fundo/tema_drmundo.gif)',
    'url(../Imagens/plano_de_fundo/tema_rato.gif)'
];

if (localStorage.getItem("UsuarioAtual") != null)
{
    let UsuarioAtual = JSON.parse(localStorage.getItem("UsuarioAtual"));

    corpo.style.backgroundImage = icones[UsuarioAtual.iconselected];
}

//////////////////////////icones//////////////////////////

const iconeJinx = document.getElementById('icon_jinx');
iconeJinx.addEventListener('click', ()=>{
    //tema = 'jinx';
    corpo.style.backgroundImage = 'url(../Imagens/plano_de_fundo/tema_jinx.gif)';
    document.documentElement.style.setProperty("--tema", "#3470B9");
    iconeindex = 0;
    localStorage.setItem("IconSelected", JSON.stringify(iconeindex));
});

const iconeEkko = document.getElementById('icon_ekko');
iconeEkko.addEventListener('click', ()=>{
    //tema = 'ekko';
    corpo.style.backgroundImage = 'url(../Imagens/plano_de_fundo/tema_ekko.gif)';
    document.documentElement.style.setProperty("--tema", "#21A68D");
    iconeindex = 1;
    localStorage.setItem("IconSelected", JSON.stringify(iconeindex));
});

const iconeWarwick = document.getElementById('icon_warwick');
iconeWarwick.addEventListener('click', ()=>{
    //tema = 'warwick';
    corpo.style.backgroundImage = 'url(../Imagens/plano_de_fundo/tema_warwick.gif)';
    document.documentElement.style.setProperty("--tema", "#CC1E35");
    iconeindex = 2;
    localStorage.setItem("IconSelected", JSON.stringify(iconeindex));
});

const iconeUrgot = document.getElementById('icon_urgot');
iconeUrgot.addEventListener('click', ()=>{
    //tema = 'urgot';
    corpo.style.backgroundImage = 'url(../Imagens/plano_de_fundo/tema_urgot.gif)';
    document.documentElement.style.setProperty("--tema", "#8C6249");
    iconeindex = 3;
    localStorage.setItem("IconSelected", JSON.stringify(iconeindex));
});

const iconeDrMundo = document.getElementById('icon_drmundo');
iconeDrMundo.addEventListener('click', ()=>{
    //tema = 'dr_mundo';
    corpo.style.backgroundImage = 'url(../Imagens/plano_de_fundo/tema_drmundo.gif)';
    document.documentElement.style.setProperty("--tema", "#A352D9");
    iconeindex = 4;
    localStorage.setItem("IconSelected", JSON.stringify(iconeindex));
});

const iconeRato = document.getElementById('icon_rato');
iconeRato.addEventListener('click', ()=>{
    //tema = 'rato';
    corpo.style.backgroundImage = 'url(../Imagens/plano_de_fundo/tema_rato.gif)';
    document.documentElement.style.setProperty("--tema", "#30F274");
    iconeindex = 5;
    localStorage.setItem("IconSelected", JSON.stringify(iconeindex));
});

