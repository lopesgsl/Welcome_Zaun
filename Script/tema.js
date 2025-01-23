let corpo = document.getElementsByTagName('body')[0];

/*
//se o tema for do dr mundo
if (tema == 'dr_mundo'){
    function changerbg(){
        body.style.backgroundImage = 'url(../Imagens/plano_de_fundo/tema_drmundo.gif)';
    }

    function changeColor(){
        document.documentElement.style.setProperty("--tema", "#A352D9");
    }
}
//se o tema for do urgot
if (tema == 'urgot'){
    function changerbg(){
        body.style.background.image = 'url(../Imagens/plano_de_fundo/tema_urgot.gif)';
    }

    function changeColor(){
        document.documentElement.style.setProperty("--tema", "#8C6249");
    }
}
//se o tema for do ekko
if (tema == 'ekko'){
    function changerbg(){
        body.style.background.image = 'url(../Imagens/plano_de_fundo/tema_ekko.gif)';
    }

    function changeColor(){
        document.documentElement.style.setProperty("--tema", "#21A68D");
    }
}
//se o tema for da jinx
if (tema == 'jinx'){
    function changerbg(){
        body.style.background.image = 'url(../Imagens/plano_de_fundo/tema_jinx.gif)';
    }

    function changeColor(){
        document.documentElement.style.setProperty("--tema", "#3470B9");
    }
}
//se o tema for do warwick
if (tema == 'warwick'){
    function changerbg(){
        body.style.background.image = 'url(../Imagens/plano_de_fundo/tema_warwick.gif)';
    }

    function changeColor(){
        document.documentElement.style.setProperty("--tema", "#CC1E35");
    }
}
*/
//////////////////////////icones//////////////////////////

const iconeJinx = document.getElementById('icon_jinx');
iconeJinx.addEventListener('click', ()=>{
    //tema = 'jinx';
    corpo.style.backgroundImage = 'url(../Imagens/plano_de_fundo/tema_jinx.gif)';
    document.documentElement.style.setProperty("--tema", "#3470B9");
});

const iconeEkko = document.getElementById('icon_ekko');
iconeEkko.addEventListener('click', ()=>{
    //tema = 'ekko';
    corpo.style.backgroundImage = 'url(../Imagens/plano_de_fundo/tema_ekko.gif)';
    document.documentElement.style.setProperty("--tema", "#21A68D");
});

const iconeWarwick = document.getElementById('icon_warwick');
iconeWarwick.addEventListener('click', ()=>{
    //tema = 'warwick';
    corpo.style.backgroundImage = 'url(../Imagens/plano_de_fundo/tema_warwick.gif)';
    document.documentElement.style.setProperty("--tema", "#CC1E35");
});

const iconeUrgot = document.getElementById('icon_urgot');
iconeUrgot.addEventListener('click', ()=>{
    //tema = 'urgot';
    corpo.style.backgroundImage = 'url(../Imagens/plano_de_fundo/tema_urgot.gif)';
    document.documentElement.style.setProperty("--tema", "#8C6249");
});

const iconeDrMundo = document.getElementById('icon_drmundo');
iconeDrMundo.addEventListener('click', ()=>{
    //tema = 'dr_mundo';
    corpo.style.backgroundImage = 'url(../Imagens/plano_de_fundo/tema_drmundo.gif)';
    document.documentElement.style.setProperty("--tema", "#A352D9");
});

const iconeRato = document.getElementById('icon_rato');
iconeRato.addEventListener('click', ()=>{
    //tema = 'rato';
    corpo.style.backgroundImage = 'url(../Imagens/plano_de_fundo/tema_rato.gif)';
    document.documentElement.style.setProperty("--tema", "#30F274");
});

