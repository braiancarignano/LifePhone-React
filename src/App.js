import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ItemDetailContainer from "./components/ItemDetailConteiner/ItemDetailContainer";
import Cart from "./pages/Cart";
import Brand from "./pages/Brand";
import Memory from "./pages/Memory";
import Checkout from "./pages/Checkout";
//Renderiza todos los componentes y crea rutas de navegacion
function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product/memory/:memory" element={<Memory />} />
            <Route path="product/brand/:brand" element={<Brand />} />
            <Route
              path="product/detail/:id"
              element={<ItemDetailContainer />}
            />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
