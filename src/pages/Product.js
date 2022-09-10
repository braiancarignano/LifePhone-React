import React from "react";
import { Link } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Product = () => {
  return (
    <div className="text-slate-800 justify-items-center grid grid-cols-5">
      <div className="list-none w-60">
        <h1 className="font-bold text-2xl border-b-2 p-2">Marcas</h1>
        <ul>
          <li className="p-1 font-semibold">
            <Link to="brand/samsung"> - Samsung </Link>
          </li>
          <li className="p-1 font-semibold">
            <Link to="brand/xiaomi"> - Xiaomi </Link>
          </li>
          <li className="p-1 font-semibold">
            <Link to="brand/apple"> - Apple </Link>
          </li>
        </ul>
        <h1 className="font-bold text-2xl border-b-2 mt-6 p-2">Memoria</h1>
        <ul>
          <li className="p-1 font-semibold">
            <Link to="memory/128"> - 128GB </Link>
          </li>
          <li className="p-1 font-semibold">
            <Link to="memory/256"> - 256GB </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-4">
        <ItemListContainer />
      </div>
    </div>
  );
};

export default Product;
