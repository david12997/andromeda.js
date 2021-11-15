'use strict'

import Components from './components.js';
import index from  './pages/index.js';


const Loading = (container_store) =>{

    return container_store.innerHTML="<h1>Cargando pagina...</h1>";
}


async function GetData(container_store){

    try{

        const data = await fetch('./pages/instances/instance-components.json');
        const response = await data.json();
    
        index(container_store,response,'home');

    }
    catch(error){

        console.log(error);
    }

}




const main =() =>{

    let container_store = document.getElementById('store-001');
    
    Loading(container_store);
    GetData(container_store);
    Components();

}

main();


