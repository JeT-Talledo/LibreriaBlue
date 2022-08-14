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
    document.getElementById('contcatenav').style.height = '380px';
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

/*****cambia color de letra de categorias******/
var galeria = document.getElementById('galerycate1');
var nompro = document.getElementById('nompro1');
var galeria2 = document.getElementById('galerycate2');
var nompro2 = document.getElementById('nompro2');
var galeria3 = document.getElementById('galerycate3');
var nompro3 = document.getElementById('nompro3');
var galeria4 = document.getElementById('galerycate4');
var nompro4 = document.getElementById('nompro4');
var galeria5 = document.getElementById('galerycate5');
var nompro5 = document.getElementById('nompro5');
var galeria6 = document.getElementById('galerycate6');
var nompro6 = document.getElementById('nompro6');
var galeria7 = document.getElementById('galerycate7');
var nompro7 = document.getElementById('nompro7');

galeria.onmouseover = aparece;
galeria.onmouseout = sale;
galeria2.onmouseover = aparece2;
galeria2.onmouseout = sale2;
galeria3.onmouseover = aparece3;
galeria3.onmouseout = sale3;
galeria4.onmouseover = aparece4;
galeria4.onmouseout = sale4;
galeria5.onmouseover = aparece5;
galeria5.onmouseout = sale5;
galeria6.onmouseover = aparece6;
galeria6.onmouseout = sale6;
galeria7.onmouseover = aparece7;
galeria7.onmouseout = sale7;

function aparece(){
    nompro.style.color = "red";
}
function sale(){
    nompro.style.color = "black";
}
function aparece2(){
    nompro2.style.color = "red";
}
function sale2(){
    nompro2.style.color = "black";
}
function aparece3(){
    nompro3.style.color = "red";
}
function sale3(){
    nompro3.style.color = "black";
}
function aparece4(){
    nompro4.style.color = "red";
}
function sale4(){
    nompro4.style.color = "black";
}
function aparece5(){
    nompro5.style.color = "red";
}
function sale5(){
    nompro5.style.color = "black";
}
function aparece6(){
    nompro6.style.color = "red";
}
function sale6(){
    nompro6.style.color = "black";
}
function aparece7(){
    nompro7.style.color = "red";
}
function sale7(){
    nompro7.style.color = "black";
}
