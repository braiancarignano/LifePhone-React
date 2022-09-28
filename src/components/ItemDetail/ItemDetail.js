import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import CarouselItem from "../CarouselItem/CarouselItem";
import "swiper/css/bundle";
import "../CarouselItem/CarouselItem";

const ItemDetail = ({
  name,
  brand,
  price,
  imguno,
  imgdos,
  imgtres,
  screen,
  processor,
  cameraBack,
  cameraFront,
  batery,
  system,
  stock,
  data,
}) => {
  const { addProduct } = useCartContext();
  const [buy, setBuy] = useState(false);
  const handleOnAdd = (quantity) => {
    addProduct(data, quantity);
    setBuy(true);
  };
  return (
    <div>
      <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container mx-auto px-5">
          <div class="lg:w-4/5 flex">
            <div className="my-36 ml-32 h-2/5 w-2/5">
              <CarouselItem imguno={imguno} imgdos={imgdos} imgtres={imgtres} />
            </div>
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div className="py-4 border-b-2 border-gray-200">
                <h1 class="text-gray-900 text-3xl title-font font-medium capitalize mb-3">
                  {brand} {name}
                </h1>
                <span class="font-medium text-3xl text-sky-500">${price}</span>
              </div>
              <h2 class="text-gray-900 text-xl title-font font-medium mt-7 ml-4">
                Caracteristicas Principales:
              </h2>
              <ul className="p-3 text-slate-800">
                <li className="p-1 font-thin">
                  <p className="font-medium inline">● Pantalla: </p> {screen}
                </li>
                <li className="p-1 font-thin">
                  <p className="font-medium inline">● Procesador: </p>{" "}
                  {processor}
                </li>
                <li className="p-1 font-thin">
                  <p className="font-medium inline">● Camara Trasera: </p>{" "}
                  {cameraBack}
                </li>
                <li className="p-1 font-thin">
                  <p className="font-medium inline">● Camara Frontal: </p>{" "}
                  {cameraFront}
                </li>
                <li className="p-1 font-thin">
                  <p className="font-medium inline">● Bateria: </p> {batery}
                </li>
                <li className="p-1 font-thin">
                  <p className="font-medium inline">● Sistema: </p> {system}
                </li>
              </ul>

              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div class="flex ml-6 items-center">
                  <span class="mr-3">Capacidad:</span>
                  <div class="relative">
                    <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                      <option>64 GB</option>
                    </select>
                    <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex">
                <ItemCount stock={stock} onAdd={handleOnAdd} />
              </div>
              {buy ? (
                <Link to={`/cart`}>
                  <button className="py-4 px-6 my-5 mx-auto shadow-lg shadow-slate-500/50 bg-sky-500 text-white rounded hover:bg-sky-600 active:bg-sky-300 disabled:opacity-50  flex items-center justify-center">
                    Ir Carrito
                  </button>
                </Link>
              ) : (
                <></>
              )}
              <Link to={`/product/`}>
                <button className="py-2 px-4 mt-10 mx-auto shadow-lg shadow-slate-500/50 bg-slate-800 text-white rounded hover:bg-slate-700 active:bg-slate-700 disabled:opacity-50  flex items-center justify-center">
                  Agregar otros Productos
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemDetail;
