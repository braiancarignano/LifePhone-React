import React from "react";
import image from "./carrito.png";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CardWidget = () => {
  const { cart } = useCartContext();
  const quantity = cart.map((product) => {
    return product.quantity;
  });
  const total = quantity.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return (
    <Link to={`/cart`}>
    <div>
      {total > 0 ? (
        <div className=" flex w-16 mt-4 px-2 py-2 leading-none border rounded-xl shadow-lg transition ease-in-out delay-150 duration-300 shadow-sky-600/40 bg-sky-600 border-white hover:border-transparent hover:bg-sky-400 lg:mt-0">
        <a href="#x">
          <img className="w-6 h-6" src={image} alt="CardWidget" />
        </a>
        <p className="text-white p-1 ml-1 font-light">{total}</p>
      </div>
      ) : (
        <div></div>
      )}
    </div>
    </Link>
  );
};

export default CardWidget;
