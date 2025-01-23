const body = document.getElementById = 'anim';


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