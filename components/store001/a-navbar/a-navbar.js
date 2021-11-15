'use strict'

import A_navbar_html from "./a-navbar-html.js";
import A_navbar_css from "./a-navbar-css.js";
import {Open_menu_mobile, Close_menu_mobile} from "./a-navbar-js.js";

class A_navbar extends HTMLElement{

    constructor(){

        super();
        this.shadow = this.attachShadow({mode:"open"});
        this.type;
        this.data;
        this.styles_mobile;
        this.styles_desktop;

    }


    static get observedAttributes(){

        return [ 'type','data','styles-mobile','styles-desktop'];
    }



    attributeChangedCallback(prop, old_value, new_vaule){
       
        if(prop === 'styles-mobile') this.styles_mobile =  JSON.parse(new_vaule.replace(/'/g,'"'));
            
        if(prop === 'styles-desktop') this.styles_desktop =  JSON.parse(new_vaule.replace(/'/g,'"'));
    
        if(prop === 'data') this.data =  JSON.parse(new_vaule.replace(/'/g,'"'));

        if(prop === 'type') this.type =  JSON.parse(new_vaule.replace(/'/g,'"'));

        if(old_value !== null) this.render();
        
        
    }


    Styles(){

        return  A_navbar_css(this.shadow,this.styles_mobile,this.styles_desktop);


    }



    Components(){


        return A_navbar_html(this.type.component,this.data);

    }


    Functions(index){

        switch (index) {

            case 'open_menu_mobile':
                
                Open_menu_mobile(this.shadow.querySelector('.pantalla1'));
            break;

            case 'close_menu_mobile':
                
                Close_menu_mobile(this.shadow.querySelector('.pantalla1'));
            break;


        
            default:
                break;
        }



    }

    render(){

        this.shadow.innerHTML = `

            ${this.Styles()}
            ${this.Components()}
    
        `;

        //open menu mobile
        let btn_bars = this.shadow.querySelector('.links-mobile');
        btn_bars.addEventListener('click',this.Functions.bind(this,'open_menu_mobile'));


        //close menu mobile
        let btn_cerrar_menu = this.shadow.querySelector('.cerrar-pantalla1');
        btn_cerrar_menu.addEventListener('click',this.Functions.bind(this,'close_menu_mobile'));
    }




    connectedCallback(){

        this.render();

    }
}

export default A_navbar