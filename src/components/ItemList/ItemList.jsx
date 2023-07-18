
import Item from "../Item/Item";
import "./ItemList.css";
const ItemList = ({productos}) => {
    
    return (
        <div className="container">
            <h2 className="main-title">Productos</h2>

            <div className="productos">
                {
                    productos && productos.map((producto) => 
                    <Item  key = {producto.id} producto = {producto}/>
                    )

                }
            </div>
        </div>
    );
}

export default ItemList;
