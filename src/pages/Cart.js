import React from "react";
import { useCartContext } from "../context/CartContext";
import ItemCart from "../components/ItemCart/ItemCart";

const Cart = () => {
  const { cart, clearCart  } = useCartContext();
  console.log(cart);
  return (
    <div>
      <h1 className="text-center font-semibold text-3xl">Tus Productos en carrito:</h1>
      {cart.map(product => <ItemCart key={product.id} product={product}/>)}
      <div>
      <button
    className="py-2 px-4 mb-10 mx-auto shadow-lg shadow-slate-500/50 bg-slate-800 text-white rounded hover:bg-slate-700 active:bg-slate-700 disabled:opacity-50  flex items-center justify-center"
    onClick={() => clearCart()}
  >
    Eliminar Carrito
  </button>
      </div>
    </div>
  );
};

export default Cart;
