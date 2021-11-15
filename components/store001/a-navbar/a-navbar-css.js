'use strict';

function Styles_component_1(styles_mobile, styles_desktop){

    return `
        
    <style>

        .none{

            display:none;
        }

        .pantalla1{

            margin-left:10%;
            position:fixed;
            width:90%;
            height:100vh;
            background:white;
            box-shadow:0px 0px 15px rgba(0,0,0,0.4);
        }

        .cerrar-pantalla1{

            width:90%;
            margin-left:5%;
            margin-top:10px;
            height:30px;
            
            display:flex;
            justify-content:end;
           
        }

        .animacion-pantalla1-abrir{

            animation-duration:1s;
            animation-name:animacion1;

        }

        .animacion-pantalla1-cerrar{

            animation-duration:1s;
            animation-name:animacion2;

        }

        @keyframes animacion1{

            from{

               right:-770px;
            }
            to{

                right:0px;
            }



        }


        @keyframes animacion2{

            from{

               right:0px;
            }
            to{

                right:-770px;
            }
            
        }


        #a-navbar{

            width:100%;
            height:90px;
            display:grid;
            grid-template-columns: 1.4fr 3fr 1.2fr;
            grid-template-rows:80px;
            grid-template-areas: "logo buscador links";

            
            ${styles_mobile.container}
        }



        #a-navbar > .logo{

            grid-column-start:logo;
            grid-column-end:logo;
            grid-row-start:logo;
            grid-row-end:logo;

            display:flex;
            justify-content:center;
            align-items:center;
            

            ${styles_mobile.logo}
            
        }

        #a-navbar > .logo > img{
            
            width:70px;
            height:70px;
            margin-top:7px;

            ${styles_mobile.img}
            
        }

    
       
        #a-navbar > .buscador{

            grid-column-start:buscador;
            grid-column-end:buscador;
            grid-row-start:buscador;
            grid-row-end:buscador;

            display:flex;
            justify-content:center;
            align-items:center;

            ${styles_mobile.buscador}
            
        }

        #a-navbar > .buscador > form{

            width:100%;
            display:flex;
            justify-content:center;
            align-items:center;

            ${styles_mobile.form}
        }

        #a-navbar > .buscador > form > input{

            width:90%;
            height:34px;
            border-radius:5px;

            ${styles_mobile.input}
        }


        #a-navbar > .links{

            grid-column-start:links;
            grid-column-end:links;
            grid-row-start:links;
            grid-row-end:links;

            display:flex;
            justify-content:center;
            align-items:center;

            ${styles_mobile.links}
            
        }

        #a-navbar > .links > .links-mobile{

            
            ${styles_mobile.icono_bars}

        }



        /*update styles mobile*/

        #a-navbar > .links > .links-desktop{

        
            display:none;

        }

        /*end update*/


        /*_________________________________________________________________________________________________________*/
        /*___________________________________________________________________________________________________________*/


        @media(min-width:800px){

            /*update styles mobile*/

            #a-navbar > .links > .links-mobile{

            
                display:none;
    
            }

            /*end update*/


    
            #a-navbar{

                width:100%;
                height:100px;
                display:grid;
                grid-template-columns: 1fr 2.5fr 2fr;
                grid-template-rows:1fr;
                grid-template-areas: "logo buscador links";

                ${styles_desktop.container}

            }

            #a-navbar > .logo{

                grid-column-start:logo;
                grid-column-end:logo;
                grid-row-start:logo;
                grid-row-end:logo;

                ${styles_desktop.logo}
                
            }

            #a-navbar > .logo > img{
            
                width:77px;
                height:77px;
                margin-top:1px;
    
                ${styles_mobile.img}
                
            }
    

            #a-navbar > .buscador{

                grid-column-start:buscador;
                grid-column-end:buscador;
                grid-row-start:buscador;
                grid-row-end:buscador;

                ${styles_desktop.buscador}
                
            }


            #a-navbar > .buscador > form{

                width:100%;
                display:flex;
                justify-content:center;
                align-items:center;
    
                ${styles_desktop.form}
            }
    
            #a-navbar > .buscador > form > input{
    
                width:90%;
                height:34px;
                border-radius:5px;
    
                ${styles_desktop.input}
            }



            #a-navbar > .links{

                grid-column-start:links;
                grid-column-end:links;
                grid-row-start:links;
                grid-row-end:links;

                ${styles_desktop.links}
                
            }

            #a-navbar > .links > .links-desktop{

                width:95%;
                display:flex;
                justify-content:space-around;
                align-items:center;
                cursor:pointer;
            
                ${styles_desktop.links}
                
    
            }

            #a-navbar > .links > .links-desktop > a{

                display:flex;
                justify-content:space-between;
                align-items:center;
                margin:5px;
                text-decoration:none;
                ${styles_desktop.a_links}
            }

            #a-navbar > .links > .links-desktop > a > p{

                margin-right:4px;
                margin-left:5px;
            }

            #a-navbar > .links > .links-desktop > span{

                margin-left:10px;
            }
    


        }
    
    </style>
   
   `;
}


function A_navbar_css(shadow, styles_mobile, styles_desktop, type){

    if(type === 1)  return  shadow.innerHTML = Styles_component_1(styles_mobile, styles_desktop);
    if(type === 2)  return  shadow.innerHTML = '';
    if(type === 3)  return  shadow.innerHTML = '';
    
}




export default A_navbar_css;