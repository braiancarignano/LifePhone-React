import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from '../../context/CartContext';
const ItemDetail = ({
  name,
  brand,
  price,
  img,
  memory,
  screen,
  processor,
  memoryRam,
  cameraBack,
  cameraFront,
  batery,
  system,
  connectivity,
  size,
  stock,
  data
}) => {
  const { addProduct } = useCartContext();
  const [buy, setBuy] = useState(false);
  const handleOnAdd = (quantity) => {
    alert(`Se agrego: ${quantity} ${brand} ${name}`);
    addProduct(data, quantity)
    setBuy(true);
  };
  return (
    <div className="grid grid-cols-5 p-4 gap-10">
      <div className="col-span-3">
        <h1 className="capitalize rounded-lg text-3xl font-semibold mx-32 p-10 text-center bg-slate-800 text-white">
          {brand} {name} {memory}GB
        </h1>
        <img className="m-auto" src={img} alt="Smartphone" />
        <h2 className="text-center text-4xl rounded-lg mx-40 p-6 bg-slate-800 text-white">
          ${price}
        </h2>
      </div>
      <div className="col-span-2 rounded-lg border-4 border-slate-800">
        <ul className="p-6 text-slate-800 font-medium">
          <li className="rounded-t-lg p-3">{screen}</li>
          <li className="p-3">{processor}</li>
          <li className="p-3">{memoryRam}</li>
          <li className="p-3">{cameraBack}</li>
          <li className="p-3">{cameraFront}</li>
          <li className="p-3">{batery}</li>
          <li className="p-3">{system}</li>
          <li className="p-3">{connectivity}</li>
          <li className="rounded-b-lg p-3">{size}</li>
        </ul>
        <div className="pb-10">
          {buy ? (
            <Link to={`/cart`}>
              <button className="py-4 px-6 mb-3 mx-auto shadow-lg shadow-slate-500/50 bg-sky-500 text-white rounded hover:bg-sky-600 active:bg-sky-300 disabled:opacity-50  flex items-center justify-center">
                Terminar Compra
              </button>
            </Link>
          ) : (
            <ItemCount stock={stock} onAdd={handleOnAdd} />
          )}
        </div>
        <Link to={`/product/`}>
          <button className="py-2 px-4 mb-10 mx-auto shadow-lg shadow-slate-500/50 bg-slate-800 text-white rounded hover:bg-slate-700 active:bg-slate-700 disabled:opacity-50  flex items-center justify-center">
            Agregar otros Productos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
