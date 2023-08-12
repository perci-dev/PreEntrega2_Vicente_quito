
import './ItemCount.css';

const ItemCount = ({cantidad, handleRestar, handleSumar,handleAgregarCarrito}) => {

   
    return (
        <div>
            <div className="contador">
            <button  onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>   
        </div>
        <button className="Agregar" onClick={handleAgregarCarrito}>Agregar al carrito</button>   

        </div>
        
    );
}

export default ItemCount;
