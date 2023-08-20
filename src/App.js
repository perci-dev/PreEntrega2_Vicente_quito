
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito/Carrito';
import Checkout from "./components/Checkout/Checkout";



function App() {
  

  return (
    <div  className="App">
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/TP-FINAL-VICENTE_QUITO-REACT/" element={<ItemListContainer greetings = { " Bienvenidos A ecommerce Vicente " } />} />
        <Route path="TP-FINAL-VICENTE_QUITO-REACT/categoria/:categoria" element = {<ItemListContainer />} />
        <Route path="TP-FINAL-VICENTE_QUITO-REACT/item/:id" element = {<ItemDetailContainer />} />
        <Route path="TP-FINAL-VICENTE_QUITO-REACT/categoria/:categoria/item/:id" element = {<ItemDetailContainer />} />
        <Route path="/carrito" element = {<Carrito/>}/>
        <Route path="/checkout" element={<Checkout />}/>
      
        
        </Routes> 
      </BrowserRouter>
      </CartProvider>
    </div>
    
  );
}

export default App;
