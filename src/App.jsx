import Header from "./components/header/Header";
import {ItemListConteiner} from "./components/ItemListConteiner";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/main.css';
import {NotFound} from "./components/NotFound";

function App() {

  return (
    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<ItemListConteiner/>}/>
        <Route path="/categoria/:categoriaId" element={<ItemListConteiner/>}/>
        <Route path="/item/:itemId" element={<ItemListConteiner/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
