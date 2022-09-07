import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, price, name, img, brand }) => {
  return (
    <div className="w-80 bg-white shadow-xl rounded-xl  m-8">
      <div className="h-48 w-full rounded-t-xl bg-gray-300 flex flex-col justify-center bg-cover bg-center">
        <img className="h-56 w-full" src={img} alt="Imagen Producto" />
      </div>
      <div className="p-4 flex flex-col items-center">
        <p className="text-gray-800 capitalize 	font-bold text-center">{brand}</p>
        <h1 className="text-gray-800 text-center mt-1">{name}</h1>
        <Link to={`/product/detail/${id}`}>
          <button className="py-2 px-4 shadow-lg shadow-slate-500/50 bg-sky-500 text-white rounded hover:bg-sky-600 active:bg-sky-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
            Ver Detalles
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
