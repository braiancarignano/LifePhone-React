import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailConteiner/ItemDetailContainer";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="product/memory/:memoryId"
              element={<ItemListContainer />}
            />
            <Route
              path="product/brand/:brandId"
              element={<ItemListContainer />}
            />
            <Route
              path="product/detail/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
