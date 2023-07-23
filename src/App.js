import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div  className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<ItemListContainer greetings = { " Bienvenidos A ecommerce Vicente " } />} />
      <Route path="categoria/:categoria" element = {<ItemListContainer />} />
      <Route path="item/:id" element = {<ItemDetailContainer />} />
     
      
      </Routes> 
    </BrowserRouter>
    </div>
    
  );
}

export default App;
