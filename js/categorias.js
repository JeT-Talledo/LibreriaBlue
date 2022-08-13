function cerrfilt(){
    document.getElementById('contcate').style.width = '0';
}
function mosfilt(){
    document.getElementById('contcate').style.width = '100%';
}


/***** para cambiar de pagina*******/
function mostrarone(){
    document.getElementById('paginaone').style.display = 'flex';
    document.getElementById('paginados').style.display = 'none';
    document.getElementById('pag1').style.backgroundColor = '#005EFF';
    document.getElementById('pag1').style.color = 'white';
    document.getElementById('pag2').style.backgroundColor = '#efe9e9';
    document.getElementById('pag2').style.color = 'black';
}

function mostrardos(){
    document.getElementById('paginaone').style.display = 'none';
    document.getElementById('paginados').style.display = 'flex';
    document.getElementById('pag1').style.backgroundColor = '#efe9e9';
    document.getElementById('pag1').style.color = 'black';
    document.getElementById('pag2').style.backgroundColor = '#005EFF';
    document.getElementById('pag2').style.color = 'white';
}
