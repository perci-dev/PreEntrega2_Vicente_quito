
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito/Carrito';



function App() {
  

  return (
    <div  className="App">
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/PreEntrega2_Vicente_quito/" element={<ItemListContainer greetings = { " Bienvenidos A ecommerce Vicente " } />} />
        <Route path="PreEntrega2_Vicente_quito/categoria/:categoria" element = {<ItemListContainer />} />
        <Route path="PreEntrega2_Vicente_quito/item/:id" element = {<ItemDetailContainer />} />
        <Route path="PreEntrega2_Vicente_quito/categoria/:categoria/item/:id" element = {<ItemDetailContainer />} />
        <Route path="/carrito" element = {<Carrito/>}/>
      
        
        </Routes> 
      </BrowserRouter>
      </CartProvider>
    </div>
    
  );
}

export default App;
