import { useCartContext } from "../context/CartContext";
import ItemCartContainer from "../components/ItemCartContainer/ItemCartContainer";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import LogoWhatsapp from "../components/LogoWhatsapp/LogoWhatsapp";

const Cart = () => {
  const { cart } = useCartContext();
//Renderizado de carrito si no hay productos
  return (
    <div>
      <LogoWhatsapp />
      {cart.length > 0 ? (
        <ItemCartContainer />
      ) : (
        <div>
          <p className="text-center mt-24 text-2xl">
            No tienes productos en tu carrito aún...
          </p>
          <Link to={`/product/`}>
            <button className="py-2 px-4 mt-8 mx-auto shadow-lg shadow-slate-500/50 bg-slate-800 text-white rounded hover:bg-slate-700 active:bg-slate-700 disabled:opacity-50  flex items-center justify-center">
              Agregar Productos
            </button>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
