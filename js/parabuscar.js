function mosbarbus(){
    document.getElementById('parmosbarrbus').style.display = 'flex';
}
function cerbus(){
    document.getElementById('parmosbarrbus').style.display = 'none';
}



// para hacer que filtre la busqueda

inputbuscar = document.getElementById("inputbuscar");
box_search = document.getElementById("box-search");

document.getElementById('inputbuscar').addEventListener("keyup", buscador_interno);

function buscador_interno(){
    filter = inputbuscar.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //recorre elementos a filtrar mediante li
    for(i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
            box_search.style.display = "block";

            if(inputbuscar.value === ""){
                box_search.style.display = "none";
            }
        }else{
            li[i].style.display = "none";
        }
    }
}
