import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListConteiner from "./component/pages/itemListContainer/ItemListConteiner";
import Navbar from "./component/layouts/navbar/Navbar";
import ItemDetailContainer from "./component/pages/itemDetail/ItemDetailContainer";
import CartConteiner from "./component/pages/cart/CartConteiner";
import Footer from "./component/layouts/footer/Footer";
import { CartContextProvider } from "./component/context/cartContext";

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
          <Route path={"*"} element={<h2>error 404</h2>} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
