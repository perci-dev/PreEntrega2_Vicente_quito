import React from 'react';
import { FaBeer, FaShoppingCart } from 'react-icons/fa';
import './cartWidget.css';

const CartWidget = () => {
    return (
        <div className='widget'>
            <FaShoppingCart className='cart' />
            <p>0</p>
        </div>
    );
}

export default CartWidget;
