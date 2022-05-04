console.log('correcto');
document.querySelector('#boton').addEventListener('click', traerdatos);

function traerdatos(){

    var ObjetcRequest= new XMLHttpRequest();
    ObjetcRequest.open('get','treeViewData.json',true);
    ObjetcRequest.send();
    document.getElementById('tab').style.display = '';

    ObjetcRequest.onreadystatechange= function(){
        if(this.readyState ==4 && this.status==200){
            let datosjson = JSON.parse(this.responseText);

            let arbol = document.querySelector('#tittle');
            arbol.innerHTML='';
            
            let rama1 = document.querySelector('#Rama1T');
            rama1.innerHTML='';

            let rama2 = document.querySelector('#Rama2T');
            rama2.innerHTML='';

            let rama3 = document.querySelector('#Rama3T');
            rama3.innerHTML='';

            let hoja1 = document.querySelector('#Hoja1T');
            hoja1.innerHTML='';

            let hoja2 = document.querySelector('#Hoja2T');
            hoja2.innerHTML='';

            let hoja3 = document.querySelector('#Hoja3T');
            hoja3.innerHTML='';

            let hoja4 = document.querySelector('#Hoja4T');
            hoja4.innerHTML='';

            let hoja5 = document.querySelector('#Hoja5T');
            hoja5.innerHTML='';

            let hoja6 = document.querySelector('#Hoja6T');
            hoja6.innerHTML='';

            let hoja7 = document.querySelector('#Hoja7T');
            hoja7.innerHTML='';

            let Subhoja1 = document.querySelector('#SubHoja1T');
            Subhoja1.innerHTML='';

            arbol.innerHTML=datosjson[0].Name;

            rama1.innerHTML=datosjson[0].Rama[0].Name;
            hoja1.innerHTML=datosjson[0].Rama[0].Hoja[0].Name;
            hoja2.innerHTML=datosjson[0].Rama[0].Hoja[1].Name;
            hoja3.innerHTML=datosjson[0].Rama[0].Hoja[2].Name;
            Subhoja1.innerHTML=datosjson[0].Rama[0].Hoja[2].SubHoja[0].Name;
      
            rama2.innerHTML=datosjson[0].Rama[1].Name;
            hoja4.innerHTML=datosjson[0].Rama[1].Hoja[0].Name;
            hoja5.innerHTML=datosjson[0].Rama[1].Hoja[1].Name;


            rama3.innerHTML=datosjson[0].Rama[2].Name;
            hoja6.innerHTML=datosjson[0].Rama[2].Hoja[0].Name;
            hoja7.innerHTML=datosjson[0].Rama[2].Hoja[1].Name;

        }   
    }

}
function load(id){
    idTexto=document.getElementById(id).innerHTML;
    var ObjetcRequest= new XMLHttpRequest();
    

    ObjetcRequest.open('get','Arbol.json',true);
    ObjetcRequest.send();
    ObjetcRequest.onreadystatechange= function(){
        if(this.readyState ==4 && this.status==200){
            let datosjson = JSON.parse(this.responseText);

            let tabla = document.querySelector('#LoadTable');
            
            for (let index  of datosjson ) {
            
                for (let index1  of index.Rama ) { 
                    if (index1.Name==idTexto) {
                        tabla.innerHTML=
                        `
                        <tr>
                         <td> ID  </td><td> ${index1.Id}  </td> 
                        </tr>
                        <tr>
                         <td> IDJERARQUIA </td><td> ${index1.Idjerarquia}  </td>
                        </tr>
                        <tr>
                         <td> NAME  </td><td> ${index1.Name}  </td>
                        </tr>
                        <tr>
                         <td> TIPONODO  </td><td> ${index1.tipoNodo}  </td>
                        </tr>
                        <tr>
                         <td> NODOS  </td><td> ${index1.Hoja.length}  </td>
                        </tr>` ;
                        
                    }else{
                        for (let index2  of index1.Hoja ) { 
                            if (index2.Name==idTexto) {
                            tabla.innerHTML=
                            `
                            <tr>
                             <td> ID  </td><td> ${index2.Id}  </td> 
                            </tr>
                            <tr>
                             <td> IDJERARQUIA </td><td> ${index2.Idjerarquia}  </td>
                            </tr>
                            <tr>
                             <td> NAME  </td><td> ${index2.Name}  </td>
                            </tr>
                            <tr>
                             <td> TIPONODO  </td><td> ${index2.tipoNodo}  </td>
                            </tr>
                            <tr>
                             <td> NODOS  </td><td> ${index2.SubHoja.length}  </td>
                            </tr>` ;
                            }
                            else{
                                if (index2.SubHoja.length!=0) {
                                    for (let index3  of index2.SubHoja ) { 
                                        if (index3.Name==idTexto) {
                                            tabla.innerHTML=
                                            `
                                            <tr>
                                             <td> ID  </td><td> ${index3.Id}  </td> 
                                            </tr>
                                            <tr>
                                             <td> IDJERARQUIA </td><td> ${index3.Idjerarquia}  </td>
                                            </tr>
                                            <tr>
                                             <td> NAME  </td><td> ${index3.Name}  </td>
                                            </tr>
                                            <tr>
                                             <td> TIPONODO  </td><td> ${index3.tipoNodo}  </td>
                                            </tr>
                                            <tr>
                                             <td> NODOS  </td><td> 0  </td>
                                            </tr>` ;
                                            }
                                    }
                                }
                            }
                        }
                    }
                    
                   
            
            }
            }
        }
    
    
    }

}