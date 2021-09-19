import React from 'react'
import { Link } from "react-router-dom";
export const Header = () => {
    return (
        <div id="page-wrapper"> 
            <header id="header">
                <h1 id="logo"><Link to="/">Tetra Technology</Link></h1>
                <nav id="nav">
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><a href="#/">¿Quienes somos?</a>
                            <ul>
                                <li><Link to="/info">Información</Link></li>
                                <li><Link to="/portafolio">Portafolios</Link></li>
                                <li><Link to="/Contactos">No Sidebar</Link></li>
                                <li>
                                {/*<a href="#">Submenu</a>
                                <ul>
                                    <li><a href="#">Option 1</a></li>
                                    <li><a href="#">Option 2</a></li>
                                    <li><a href="#">Option 3</a></li>
                                    <li><a href="#">Option 4</a></li>
                                </ul>*/}
                                </li>
                            </ul>
                        </li>
                        <li><Link to="/empresa">Empresa</Link></li>
                        <li><Link to="/media" class="button primary">Multimedia</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
