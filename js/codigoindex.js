/*********** mostrar y no mostrar navegacion*********/
function mostrarnav(){
    document.getElementById('menunav').style.height = '280px';
    document.getElementById('mostrar').style.display = 'none';
    document.getElementById('cerrar').style.display = 'block';
}

function cerrarnav(){
    document.getElementById('menunav').style.height = '0';
    document.getElementById('mostrar').style.display = 'block';
    document.getElementById('cerrar').style.display = 'none';
}

/******* mostrar las categorias********/
function moscate(){
    document.getElementById('contcatenav').style.height = '260px';
    document.getElementById('menunav').style.height = 'auto';
}
function quitarcate(){
    document.getElementById('contcatenav').style.height = '0';
    document.getElementById('menunav').style.height = 'auto';
}



/***** deslis para ver productos en recomendados*****/
function verprod1(){
    document.getElementById('verprod1').style.height = '100%';
}
function noverprod1(){
    document.getElementById('verprod1').style.height = '0';
}
function verprod2(){
    document.getElementById('verprod2').style.height = '100%';
}
function noverprod2(){
    document.getElementById('verprod2').style.height = '0';
}
function verprod3(){
    document.getElementById('verprod3').style.height = '100%';
}
function noverprod3(){
    document.getElementById('verprod3').style.height = '0';
}
function verprod4(){
    document.getElementById('verprod4').style.height = '100%';
}
function noverprod4(){
    document.getElementById('verprod4').style.height = '0';
}
