var treeviewData,hojasBlind=1;
$(document).ready(function jsonarray(){

    $( "#boton" ).click(jsondata);
    
    fetch("../treeViewData.JSON")
    .then(res => res.json())
    .then(data => {
        treeviewData=data;
    })    
})

function jsondata(){
    $( "#treeview" ).empty();

    treeviewData.temas_desarrollados.forEach(element => {
            if (element.codigo.length==2) {
                $("#treeview").append(fatherTemplate(element));
                addClick(element.codigo);
            }
    });

}

function addClick(hojaNumero){
    //var hojas=document.getElementById(hojaNumero);
    var hojas = document.querySelector(`[data-id="${hojaNumero}"]`);
    console.log(hojas);

        hojas.addEventListener("click", function() {
            if (hojas.className!="cargado") {
            console.log(hojas.className);
            console.log("click");
            hojas.classList.add("cargado");
            getchild(hojas.id);
        
        }
   
    });
}

function getchild(Code){
    treeviewData.temas_desarrollados.forEach(element => {
        if (element.codigo.length==Code.length+2 && element.codigo.startsWith(Code)) {
            $(`#${Code}`).append(childTemplate(element));
            addClick(element.codigo);
            console.log("añadiendo evento a "+`hoja${element.codigo}`);
        }
});

}

function childTemplate(element){

    return `
    <ul>
    <li id="${element.codigo}" name="hoja${element.codigo.length/2}" data-id=${element.codigo}>
        <i></i>
        <a>
        <i>$</i>
        <span>${element.codigo}</span>
        </a>
    </li>
    </ul>
    `
}
function fatherTemplate(element){

    return `
    <li id="${element.codigo}" name="hoja${element.codigo.length/2}" data-id=${element.codigo}>
        <i></i>
        <a>
        <i>$</i>
        <span>${element.codigo}</span>
        </a>
    </li>
    `
}