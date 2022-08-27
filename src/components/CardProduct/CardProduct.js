import React from "react";
import ItemCount from "../ItemListContainer/ItemCount";

const CardProduct = ({ image, name, price, brand }) => {
  return (
    <div className="w-80 bg-white shadow-xl rounded-xl  m-8">
      <div className="h-48 w-full rounded-t-xl bg-gray-300 flex flex-col justify-center bg-cover bg-center">
        <img className="h-56 w-full" src={image} alt="Imagen Producto" />
      </div>
      <div className="p-4 flex flex-col items-center">
        <p className="text-gray-800 text-sm	font-extralight text-center">
          {brand}
        </p>
        <h1 className="text-gray-800 font-bold text-center mt-1">{name}</h1>
        <p className="text-center text-gray-800 mt-1">{price}</p>
        <ItemCount/>
        <button className="py-2 px-4 shadow-lg shadow-slate-500/50 bg-sky-500 text-white rounded hover:bg-sky-600 active:bg-sky-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
          Agregar Carrito
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardProduct;

