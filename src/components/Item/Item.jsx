import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    return (
        <div className="box-wrapper">
        <div className='producto shape-box shape-box_half' >
            <img src={producto.imagen} alt={producto.titulo} />
            <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
            <figcaption>
                <div>
                <h4 className='card-main-title'>{producto.titulo}</h4>
                <p className='card-no'>Precio : ${producto.precio}</p>
                </div>
                <p>Categoria : {producto.categoria}</p>
                <Link className='read-more-btn' to={`./item/${producto.id}`}>ver detalle</Link>
            </figcaption>
            <span className="after"></span>                  
            </div>
            
        </div>
    );
}

export default Item;

