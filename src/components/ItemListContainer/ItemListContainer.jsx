import React, { useEffect, useState } from 'react';
import pedirDatos from '../../helpers/pedirDatos';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

const [productos, setProductos] = useState([]);
const [loading, setLoading] = useState(true);

    useEffect(() =>{
        setLoading(true);
        pedirDatos()
        .then((res) =>{
            setLoading(false);
            setProductos(res);

        })
    }, [])
    return (
        <div>
            {!loading
            ?
            <ItemList productos = {productos} />
            :
            <h2>Cargando......</h2>
            }   
        </div>
    );
}

export default ItemListContainer;