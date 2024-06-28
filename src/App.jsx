import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListConteiner } from "./components/ItemListConteiner";
import { NotFound } from "./components/NotFound";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/header/NavBar";
import { CartWidget } from "./components/CartWidget";
import { CartProvider } from "./context/CartContext";
import { Form } from "./components/Form";

import "./css/main.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route
            path="/categoria/:categoriaId"
            element={<ItemListConteiner />}
          />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartWidget />} />
          <Route path="/formulario" element={<Form />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
