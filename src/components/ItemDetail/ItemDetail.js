import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import CarouselItem from "../CarouselItem/CarouselItem";
import "swiper/css/bundle";
import "../CarouselItem/CarouselItem";
import Footer from "../Footer/Footer";
//Renderiza vista del detalle de producto segun su id y trae informacion a traves de props
const ItemDetail = ({
  name,
  brand,
  price,
  imguno,
  imgdos,
  imgtres,
  memory,
  screen,
  processor,
  cameraback,
  camerafront,
  batery,
  system,
  stock,
  data,
}) => {
  //Funcion para agregar producto utilizada del context
  const { addProduct } = useCartContext();
  //Declaracion de estado para mostrar boton para navegar al carrito
  const [buy, setBuy] = useState(false);
  //Agrega producto al carrito con su informacion y cantidad
  const handleOnAdd = (quantity) => {
    addProduct(data, quantity);
    setBuy(true);
  };
  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container mx-auto px-5">
          <div className="lg:w-4/5 lg:flex">
            <div className="lg:my-36 lg:ml-32 lg:h-2/5 lg:w-2/5">
              <CarouselItem imguno={imguno} imgdos={imgdos} imgtres={imgtres} />
            </div>
            <div className="lg:w-1/2 ml-8 lg:ml-20 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div className="py-4 border-b-2 border-gray-200">
                <h1 className="text-gray-900 text-3xl title-font font-medium capitalize mb-3">
                  {brand} {name}
                </h1>
                <span className="font-medium text-3xl text-sky-500">
                  ${price}
                </span>
              </div>
              <h2 className="text-gray-900 text-xl title-font font-medium mt-7 ml-4">
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
                  {cameraback}
                </li>
                <li className="p-1 font-thin">
                  <p className="font-medium inline">● Camara Frontal: </p>{" "}
                  {camerafront}
                </li>
                <li className="p-1 font-thin">
                  <p className="font-medium inline">● Bateria: </p> {batery}
                </li>
                <li className="p-1 font-thin">
                  <p className="font-medium inline">● Sistema: </p> {system}
                </li>
              </ul>

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Capacidad:</span>
                  <div className="relative">
                    <section className="text-lg font-semibold">
                      <p>{memory}GB</p>
                    </section>
                  </div>
                </div>
              </div>
              <div className="flex">
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
      <Footer />
    </div>
  );
};

export default ItemDetail;
