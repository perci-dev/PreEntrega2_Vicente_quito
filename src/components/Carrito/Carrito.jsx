import React, { useContext } from 'react'
import "./carrito.css";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="container">
        <h1 className="main-title">Carrito</h1>

        {
            carrito.map((prod) => (
                <div className='carrito-productos' key={prod.id}>
                <div className='carrito-producto'>
                    <h3 className='titulo'>{prod.titulo}</h3>
                    <p className='precio'>Precio unit: <span>${prod.precio}</span></p>
                    <p className='precio-total'>Precio total: <span>${prod.precio * prod.cantidad}</span></p>
                    <p className='cantidad'>Cant: <span>{prod.cantidad}</span></p>
                </div>
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <div className='carrito-acciones'>
                <h2>Precio total: <span>${precioTotal()}</span></h2>
                <button className='carrito-acciones__vaciar' onClick={handleVaciar}>Vaciar Carrito</button>
                <Link to="/Checkout" >Finalizar compra</Link>
            </div> :
            <h2>El carrito está vacío :(</h2>
        }
        
    </div>
  )
}

export default Carrito