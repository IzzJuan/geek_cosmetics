import React, { useState } from 'react';

//importo enrutador
import {
    Link
} from "react-router-dom";

//importo css
import "./styles/Navbar.css"

//import images
import menu from "../images/menu_white.png"
import up from "../images/up.png"

const Navbar = () => {

    const [showNav2, setShowNav2] = useState(false);

    return(
        <div className="header-container">
            <header className="navbarStyles" style={{zIndex:'2'}}>
                <ul style={{listStyleType:'none'}} className="navbarListContainer mt-3">
                    <li className="navbarList">
                        <Link to="/" className="linkStyles">Inicio</Link>
                        <Link to="/comprar" className="linkStyles">Comprar</Link>
                        <Link to="/miscompras" className="linkStyles">Mis compras</Link>
                    </li>
                    <li className="navbarList2">
                        {
                            !showNav2 ? (
                                <button className="btn-menu">
                                    <img src={menu} className="imgMenu" alt="menu" onClick={() => setShowNav2(true)}/>
                                </button>
                            ) : (
                                <div style={{width:'100%'}} className="containerNavbarList2body">
                                    <div className="containerBtnMenu2">
                                        <button className="btn-menu">
                                            <img src={up} className="imgMenu" alt="menu" onClick={() => setShowNav2(false)}/>
                                        </button>
                                    </div>
                                    <div className="containerLinks2">
                                        <Link to="/" className="linkStyles" onClick={() => setShowNav2(false)}>Inicio</Link>
                                        <Link to="/comprar" className="linkStyles" onClick={() => setShowNav2(false)}>Comprar</Link>
                                        <Link to="/miscompras" className="linkStyles" onClick={() => setShowNav2(false)}>Mis compras</Link>
                                    </div>
                                </div>
                            )
                        }
                        
                    </li>
                </ul>
            </header>
            <div className="divTouchLeave" style={{height:'100vh', width:'100vw', background:'none', position:'absolute', zIndex:'1'}} onClick={() => setShowNav2(false)} />
        </div>
        
    )
}

export default Navbar