import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './cartWidget.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {cantidadCarrito} = useContext(CartContext);
    return (
        <div className='widget'>
           <Link className='menu-link' to="carrito">
           <FaShoppingCart className='cart' /></Link>
           
            <p>{cantidadCarrito()}</p>
        </div>
    );
}

export default CartWidget;
