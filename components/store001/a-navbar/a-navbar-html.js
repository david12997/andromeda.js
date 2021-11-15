'use strict'

const  a_navbar1 = (iconos,data)=>{

    console.log(iconos)
    console.log(data)

    return `
    <div class="none pantalla1 animacion-pantalla1-cerrar">
       <div class="cerrar-pantalla1">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${iconos.angle_right.icon[0]} ${iconos.angle_right.icon[1]}" height="${data.mobile.icon2.size}">
                <path style="fill:${data.mobile.icon2.color}" d="${iconos.angle_right.icon[4]}"/>
            </svg>
       
       </div>
    </div>

    <div id="a-navbar">

       <div class="logo">
            <img  src="${data.all.logo}" />
        </div>
       <div class="buscador">
            <form>

                <input type="text" placeholder="${data.all.placeholder}" required>

            </form>
       </div>
       <div class="links">

            <div class="links-mobile">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${iconos.bars.icon[0]} ${iconos.bars.icon[1]}" height="${data.mobile.icon.size}">
                    <path style="fill:${data.mobile.icon.color}" d="${iconos.bars.icon[4]}"/>
                </svg>
            </div>


            <div class="links-desktop ">

                <a href="${data.all.links.home[1]}">
                    
                    <p>${data.all.links.home[0]}</p> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${iconos.store.icon[0]} ${iconos.store.icon[1]}" height="${data.desktop.icon.size}">
                        <path style="fill:${data.desktop.icon.color}" d="${iconos.store.icon[4]}"/>
                    </svg>
                </a>
                
                <a href="${data.all.links.store[1]}">

                    <p>${data.all.links.store[0]}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${iconos.shopping_bag.icon[0]} ${iconos.shopping_bag.icon[1]}" height="${data.desktop.icon2.size}">
                        <path style="fill:${data.desktop.icon2.color}" d="${iconos.shopping_bag.icon[4]}"/>
                    </svg>            
                </a>

                <a href="${data.all.links.tracker[1]}">

                    <p>${data.all.links.tracker[0]}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${iconos.search_location.icon[0]} ${iconos.search_location.icon[1]}" height="${data.desktop.icon3.size}">
                        <path style="fill:${data.desktop.icon3.color}" d="${iconos.search_location.icon[4]}"/>
                    </svg>   
                </a>

                <span>
        
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${iconos.cart_plus.icon[0]} ${iconos.cart_plus.icon[1]}" height="${data.desktop.icon4.size}">
                        <path style="fill:${data.desktop.icon4.color}" d="${iconos.cart_plus.icon[4]}"/>
                    </svg>   
                </span>

            </div>
       </div>

    </div>`;
}


function A_navbar_html(type,data){

    const iconos = {
        'bars':window.FontAwesome.icon({ prefix: data.mobile.icon.type, iconName: data.mobile.icon.name }),
        'angle_right': window.FontAwesome.icon({ prefix: data.mobile.icon2.type, iconName: data.mobile.icon2.name }),
        'store': window.FontAwesome.icon({ prefix: data.desktop.icon.type, iconName: data.desktop.icon.name}),
        'search_location':window.FontAwesome.icon({ prefix: data.desktop.icon2.type, iconName: data.desktop.icon2.name}),
        'shopping_bag':window.FontAwesome.icon({ prefix: data.desktop.icon3.type, iconName: data.desktop.icon3.name}),
        'cart_plus':window.FontAwesome.icon({ prefix: data.desktop.icon4.type, iconName: data.desktop.icon4.name})
    }


    switch (type) {

        case  1:
            
            return a_navbar1(iconos,data);

        break;


        case  2:
            
            return ``;

        break;


        case  3:
            
            return ``;

        break;

    
        default:

            return `Ups, please choose component type at prop "type"`;

         break;
    }


}

export default A_navbar_html;