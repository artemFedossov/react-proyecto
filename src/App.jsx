import {DrawerAppBar} from "./components/header/Header";
import {ItemListConteiner} from "./components/ItemListConteiner";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/main.css';
import './css/header.css';
import {NotFound} from "./components/NotFound";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

function App() {

  return (
    
    <BrowserRouter>
      <DrawerAppBar/>
      <Routes>
        <Route path="/" element={<ItemListConteiner/>}/>
        <Route path="/categoria/:categoriaId" element={<ItemListConteiner/>}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
