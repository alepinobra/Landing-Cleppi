import React, { useState } from "react";
//import 'react-sticky-header/styles.css';

// Icons
import {
    RiMenu3Fill,
    RiCloseLine,
  } from "react-icons/ri";

  
const  Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return( 
    <header className="header">
            {/* logo */}
            <div className="brand">
                <a href="#"><img src="logo-blanco_1@2x.png" alt="" /></a>
            </div>
            {/* funcionamiento del menu responsive */}
            <nav className={`fixed bg-primary w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"} top-0 xl:static 
                            flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}>
                <a href="#carac" className="texto_header">
                    ¿Qué hacemos?
                </a>
                <a href="#como" className="texto_header">
                    ¿Cómo lo hacemos?
                </a>
                <a href="#aboutUs" className="texto_header">
                    ¿Quiénes somos?
                    
                </a>
                <a href="#services">
                <button className="button-37">
                   
                        Contacto                
                     
                </button>  
                </a>          
            </nav>
            <nav>
                <button onClick={() => setShowMenu(!showMenu)} className="text-color_fondo xl:hidden text-2xl p-2 h-[100px] bg-primary">
                    {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
                </button>
            </nav>    
       
            </header>
               
    )
};

export default Header;