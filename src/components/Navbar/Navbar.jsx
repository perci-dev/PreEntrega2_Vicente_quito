import React from 'react';
import './navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <header className='navbar'>
            <div className="navContainer">
            <Link to="/" className='logo'><h1>E-commerce Vicente</h1></Link>
            <nav className="menu">        
                <button className="menu-btn">Productos</button>
                <ul>
                    <li><Link to="categoria/casacas">Casacas</Link></li>
                    <li><Link to="categoria/pantalones">Pantalones</Link></li>
                    <li><Link to="categoria/poleras">Poleras</Link></li>
                    <li><Link to="categoria/zapatillas">Zapatillas</Link></li>
                </ul>
            </nav>
            </div>
            <CartWidget />
        </header>

        );
    }

export default Navbar;
