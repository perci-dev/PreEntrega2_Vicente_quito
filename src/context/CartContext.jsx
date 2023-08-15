import { createContext, useEffect } from "react";
import { useState } from "react";


export const CartContext = createContext();


const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) =>{
    const [carrito, setCarrito] = useState(carritoInicial);  // Asegúrate de que carrito se inicialice como un array vacío

  const AgregarCarrito = (item, cantidad) => {
    const itemAdd = { ...item, cantidad };
    const nuevoCarrito = [...carrito];
    const estaEnCarrito = nuevoCarrito.find((producto) => producto.id === itemAdd.id);

    if (estaEnCarrito) {
      estaEnCarrito.cantidad = estaEnCarrito.cantidad + cantidad;
    } else {
      nuevoCarrito.push(itemAdd);
    }
    setCarrito(nuevoCarrito);
    
  }


  
  const cantidadCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  }


  const precioTotal = () =>{
    return carrito.reduce((acc, prod) => acc+ prod.precio*prod.cantidad, 0);
  }
  
  const vaciarCarrito = () =>{
    setCarrito([])
  }

  useEffect(()=>{
    localStorage.setItem("carrito", JSON.stringify(carrito))
  },[carrito])
  
  return (
    <CartContext.Provider value = {{carrito, AgregarCarrito, cantidadCarrito, precioTotal, vaciarCarrito}}>
    {children}
    </CartContext.Provider>
    )

}


