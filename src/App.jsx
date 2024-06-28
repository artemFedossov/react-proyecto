
import {ItemListConteiner} from "./components/ItemListConteiner";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/main.css';
import './css/header.css';
import {NotFound} from "./components/NotFound";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ComponenteCarga } from "./components/ComponenteCarga";
import { NavBar } from "./components/header/NavBar";
import { Cargas } from "./components/Cargas";
import { CartWidget } from "./components/CartWidget";
import { CartProvider } from "./context/CartContext";
import { Form } from "./components/Form";

function App() {

  return (
    
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListConteiner/>}/>
          <Route path="/categoria/:categoriaId" element={<ItemListConteiner/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/carrito" element={<CartWidget/>}/>
          <Route path="/formulario" element={<Form/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
