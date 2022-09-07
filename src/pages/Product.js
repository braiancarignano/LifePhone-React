import React from "react";
import { Link } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Product = () => {
  return (
    <div className="flex">
      <div className="list-none w-60">
      <h1 className="font-bold text-2xl p-4">Marcas</h1>
        <li className="p-3 text-lg font-semibold">
          <Link to="brand/samsung"> - Samsung </Link>
        </li>
        <li className="p-3 text-lg font-semibold">
          <Link to="brand/xiaomi"> - Xiaomi </Link>
        </li>
        <li className="p-3 text-lg font-semibold">
          <Link to="brand/apple"> - Apple </Link>
        </li>
      </div>
      <div className="list-none">
        <h1 className="font-bold text-2xl p-4">Memoria</h1>
        <li className="p-3 text-lg font-semibold">
          <Link to="memory/128"> - 128GB </Link>
        </li>
        <li className="p-3 text-lg font-semibold">
          <Link to="memory/256"> - 256GB </Link>
        </li>
      </div>
      <div>
        <ItemListContainer />
      </div>
    </div>
  );
};

export default Product;
