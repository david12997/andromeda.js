
function Open_menu_mobile(element){

    element.classList.remove('none');
    element.classList.remove('animacion-pantalla1-cerrar');
    element.classList.add('animacion-pantalla1-abrir');
   
    

}

function Close_menu_mobile(element){

    element.classList.remove('animacion-pantalla1-abrir');
    element.classList.add('animacion-pantalla1-cerrar');
    setTimeout(()=>{

        element.classList.add('none');
    },950)
   
    

    

}



export { Open_menu_mobile,Close_menu_mobile};