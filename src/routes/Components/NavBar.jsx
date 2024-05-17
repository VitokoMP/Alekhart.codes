import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import '../../style.css'; // Asegúrate de importar tus estilos CSS aquí

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    // Función para manejar el scroll y cambiar el estado de 'scrolled'
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 10) {
            setScrolled(true);
           
        } else {
            setScrolled(false);
        }
    };

    // Agrega un listener para el evento 'scroll' cuando el componente se monta
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-dark ${scrolled ? 'bg-transparent' : 'bg-transparent' } ${scrolled ? 'scrolled' : ''}`}>

                <Link to="/" className="navbar-brand" href="#">
                <img src="../../../img/Alekh.png" className="navbar-brand-logo"></img>                    
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">
                                Home
                            </NavLink>
                        </li>
            
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
