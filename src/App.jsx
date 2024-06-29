import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListConteiner } from "./components/ItemListConteiner";
import { NotFound } from "./components/NotFound";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/header/NavBar";
import { CartWidget } from "./components/CartWidget";
import { CartProvider } from "./context/CartContext";
import { Form } from "./components/Form";

import "./css/main.css";
import Footer from "./components/footer/Footer";
import AboutUs from "./components/footer/AboutUs";
import TermsAndConditions from "./components/footer/TermsAndConditions";
import PrivacyPolicy from "./components/footer/PrivacyPolicy ";

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
          <Route path="/nostros" element={<AboutUs />} />
          <Route path="/terminosCondiones" element={<TermsAndConditions />} />
          <Route path="/politicaPrivacidad" element={<PrivacyPolicy />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
