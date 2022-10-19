import imgApple from "../../assets/iphone14.png";
import imgSamsung from "../../assets/samsung-galaxy-z-flip4-3.png";
import imgMoto from "../../assets/motoedge30pro.png";
import imgXiaomi from "../../assets/pocox4pro.png";
import { Link } from "react-router-dom";
//Renderizado de imagen en seccion "inicio" com informacion y links para distintas categorias segun marcas
const ItemNew = () => {
  return (
    <div className="w-full h-screen bg-slate-800 mt-20 text-white">
      <div className="absolute w-1/3 right-10 px-5 -mt-14 text-center">
        <h2 className="text-5xl z-10 font-semibold text-slate-800">
          LO MÁS NUEVO <p className="my-3 text-white">DEL MERCADO</p>
        </h2>
        <h3 className="text-3xl font-semibold mt-32">
          Contamos con variedad de productos en lanzamiento.
        </h3>
        <p className="text-xl mt-10">
          Para que te mantengas siempre actualizado y puedas tener la tecnologia
          al alcance de tu mano, en tu lugar de confianza y al precio mas
          competitivo del mercado.
        </p>
        <Link to={`/product`}>
          <button className="py-4 px-6 mt-10 mx-auto shadow-lg shadow-slate-500/20 bg-sky-500 text-white rounded-2xl hover:bg-sky-600 active:bg-sky-300 disabled:opacity-50  flex items-center justify-center">
            Ver Productos
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 w-1/2 gap-14 pt-14 ml-10">
        <Link to={`/product/brand/apple`}>
          <div className="font-bold h-60 w-72 shadow-2xl hover:scale-110 transition">
            <h2 className="text-4xl absolute mx-24 -mt-6">APPLE</h2>
            <h2 className="text-4xl absolute mx-12 mt-56">IPHONE 14</h2>
            <img className="h-full w-full rounded" src={imgApple} alt="" />
          </div>
        </Link>
        <Link to={`/product/brand/samsung`}>
          <div className=" font-bold h-60 w-72 shadow-2xl hover:scale-110 transition">
            <h2 className="text-4xl absolute mx-16 -mt-6">SAMSUNG</h2>
            <h2 className="text-4xl absolute mx-16 mt-56">Z FLIP 4</h2>
            <img className="h-full w-full rounded" src={imgSamsung} alt="" />
          </div>
        </Link>
        <Link to={`/product/brand/motorola`}>
          <div className=" font-bold h-60 w-72 shadow-2xl hover:scale-110 transition">
            <h2 className="text-4xl absolute mx-14 -mt-6">MOTOROLA</h2>
            <h2 className="text-4xl absolute mx-16 mt-56">EDGE 30</h2>
            <img className="h-full w-full rounded" src={imgMoto} alt="" />
          </div>
        </Link>
        <Link to={`/product/brand/xiaomi`}>
          <div className="font-bold h-60 w-72 shadow-2xl hover:scale-110 transition">
            <h2 className="text-4xl absolute mx-20 -mt-6">XIAOMI</h2>
            <h2 className="text-4xl absolute mx-5 mt-56">POCO X4 PRO</h2>
            <img className="h-full w-full rounded" src={imgXiaomi} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ItemNew;
