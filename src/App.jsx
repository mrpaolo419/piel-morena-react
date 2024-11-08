import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListConteiner from "./component/pages/itemListContainer/ItemListConteiner";
import Navbar from "./component/layouts/navbar/Navbar";

import CartConteiner from "./component/pages/cart/CartConteiner";
import Footer from "./component/layouts/footer/Footer";

import ChecKout from "./component/pages/checkout/ChecKout";
import {
  CartContext,
  CartContextProvider,
} from "./component/context/cartContext"; // Verifica si necesitas agregar la extensión.

import ItemDetailContainer from "./component/pages/itemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<ItemListConteiner />} />

          <Route
            path={"/category/:categoria"}
            element={<ItemListConteiner />}
          />
          <Route path={"/cart"} element={<CartConteiner />} />
          <Route path="/productdetail/:id" element={<ItemDetailContainer />} />
          <Route path={"/checKout"} element={<ChecKout />} />
          <Route path={"*"} element={<h2>error 404</h2>} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
