import React, { useEffect, useState } from 'react';
import pedirDatos from '../../helpers/pedirDatos';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

const [productos, setProductos] = useState([]);
const { categoria } = useParams();
const [loading, setLoading] = useState(true);

    useEffect(() =>{
        setLoading(true);
        pedirDatos()
        .then((res) =>{
            setLoading(false);
            if (categoria){
                setProductos(res.filter((prod) => prod.categoria ===categoria));
            }else{
                setProductos(res);
            }
            

        })
    }, [categoria])
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