import React from 'react';
import './Item.css';

const Item = ({producto}) => {
    return (
        <div class="box-wrapper">
        <div className='producto shape-box shape-box_half' >
            <img src={producto.imagen} alt={producto.titulo} />
            <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
            <figcaption>
                <div>
                <h4 className='card-main-title'>{producto.titulo}</h4>
                <p className='card-no'>Precio : ${producto.precio}</p>
                </div>
                <p>Categoria : {producto.categoria}</p>
                <p className='card-content'>Descripcion : {producto.descripcion}</p>
                <a className='read-more-btn' href={`./item/${producto.id}`}>ver detalle</a>
            </figcaption>
            <span class="after"></span>                  
            </div>
            
        </div>
    );
}

export default Item;

