
import {ItemListConteiner} from "./components/ItemListConteiner";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/main.css';
import './css/header.css';
import {NotFound} from "./components/NotFound";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ComponenteCarga } from "./components/ComponenteCarga";
import { NavBar } from "./components/header/NavBar";
import { ItemDetail } from "./components/ItemDetail";
import { Cargas } from "./components/Cargas";
import { Carrito } from "./components/Carrito";

function App() {

  return (
    
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ComponenteCarga/>}/>
        <Route path="/categoria/:categoriaId" element={<ItemListConteiner/>}/>
        <Route path="/item/:itemId" element={<Cargas/>}/>
        <Route path="/*" element={<NotFound/>}/>
        <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
