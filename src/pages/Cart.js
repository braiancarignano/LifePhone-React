import { useCartContext } from "../context/CartContext";
import ItemCart from "../components/ItemCart/ItemCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart } = useCartContext();
  const price = cart.map((product) => {
    return product.price * product.quantity;
  });
  const totalPrice = price.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return (
    <div>
      <h1 className="text-center font-semibold text-3xl">
        Tus Productos en carrito:
      </h1>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <div>
        {cart.length > 0 ? (
          <div>
            <div className="rounded-2xl w-72 p-3 mx-auto my-6 text-center border-4 border-slate-800">
              <h3 className="text-lg font-semibold">Precio total: ${totalPrice}</h3>
            </div>
            <Link to={`/`}>
            <button className="py-4 px-6 mb-3 mx-auto shadow-lg shadow-slate-500/50 bg-sky-500 text-white rounded hover:bg-sky-600 active:bg-sky-300 disabled:opacity-50  flex items-center justify-center">
                Pagar Carrito
              </button>
            </Link>
            <button
              className="py-2 px-4 mb-10 mx-auto shadow-lg shadow-slate-500/50 bg-slate-800 text-white rounded hover:bg-slate-700 active:bg-slate-700 disabled:opacity-50  flex items-center justify-center"
              onClick={() => clearCart()}
            >
              Eliminar Carrito
            </button>
          </div>
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
      </div>
    </div>
  );
};

export default Cart;
