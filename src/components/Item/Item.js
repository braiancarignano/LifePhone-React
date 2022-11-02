import icon from "../../assets/envio-gratis.png";
import { Link } from "react-router-dom";
//Renderizado de item con props con informacion de la base de datos
const Item = ({ id, name, imguno, price, brand, memory }) => {
  return (
    <div className="w-44 lg:w-64 bg-white border shadow-2xl rounded-xl mt-5 mx-auto lg:m-6">
      <img
        className="absolute bg-slate-800 h-10 w-10 p-1 rounded-full mt-2 ml-32 lg:ml-52"
        src={icon}
        alt="Imagen envio free"
      />
      <div className="h-44 lg:h-56 rounded-t-xl bg-gray-300 flex flex-col justify-center bg-cover bg-center">
        <h1 className="absolute text-sm bg-sky-500 rounded-3xl text-white p-2 font-medium mt-40 lg:mt-52 ml-2">
          OFERTA
        </h1>
        <img
          className="h-full rounded-t-xl"
          src={imguno}
          alt="Imagen Producto"
        />
      </div>
      <div className="p-2 flex flex-col text-center items-center">
        <h2 className="text-slate-800 capitalize">{brand}</h2>
        <h3 className="text-slate-800 text-lg font-medium mt-2">
          {name} {memory}GB
        </h3>
        <h3 className="text-sky-500 text-2xl font-semibold mt-3">${price}</h3>
        <Link to={`/product/detail/${id}`}>
          <button className="my-4 py-2 px-8 font-semibold shadow-lg shadow-slate-500/50 bg-slate-800 text-white rounded-2xl hover:bg-sky-600 active:bg-sky-700 disabled:opacity-50 w-full flex items-center justify-center">
            VER MÁS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
