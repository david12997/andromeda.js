'use strict'

import renderPages from "./instances/renderPages.js";


function index(contenedor, data,page){

  
   contenedor.innerHTML = renderPages(data,page);
}

export default index;