import { Productos } from "./productos"


const pedirDatos = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(Productos);
        }, 2000)
    })
    
}
export default pedirDatos;


export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) =>{
        const item = Productos.find((producto) => producto.id === id);
        if(item){
            resolve(item)
        }else{
            reject({
                error: "No se encontro el producto"
            })
        }
    })
    
}
