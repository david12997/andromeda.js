'use strict';

function Components(components){
    
    let my_componets ={

        a_navbar:{

            render: `
                <a-navbar 
                
                    id="a-navbar" 
                    type="{'component':1}"
                    data="${JSON.stringify(components[0].a_navbar.data).replace(/"/g, "'").replace(/\s+/g,' ')}" 
                    styles-mobile="${JSON.stringify(components[0].a_navbar.styles_mobile).replace(/"/g, "'").replace(/\s+/g,' ')}" 
                    styles-desktop="${JSON.stringify(components[0].a_navbar.styles_desktop).replace(/"/g, "'").replace(/\s+/g,' ')}">
                
                </a-navbar>
            `
        }

    }

    return my_componets;

}




function renderPages(data,page){

    let body='';
 
    switch (page) {

        case 'home':
            
            body=` <h1>Soy el home</h1> `;

        break;
    
        
        default:
            
        break;
    }
 

    return `
    
    ${Components(data).a_navbar.render}
    <br>
    ${body}

    
    `;
    
}

export default renderPages;


 