import React from 'react';
import './navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <header className='navbar'>
            <div className="navContainer">
            <a href="#" className='logo'><h1>E-commerce Vicente</h1></a>
            <nav className="menu">        
                <button className="menu-btn">Categorias</button>
                <ul>
                    <li><a href="#">Casacas</a></li>
                    <li><a href="#">Pantalones</a></li>
                    <li><a href="#">Poleras</a></li>
                    <li><a href="#">Zapatillas</a></li>
                </ul>
            </nav>
            </div>
            <CartWidget />
        </header>

        );
    }

export default Navbar;
