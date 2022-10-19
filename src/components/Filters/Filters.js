import { Link } from "react-router-dom";
//Renderiza menu para filtrar categorias en la seccion "productos"
const Filters = () => {
  return (
    <div>
      <div className="list-none w-60">
        <h1 className="font-sans text-slate-800 text-2xl border-b border-black m-4 pl-5 py-2">
          Marcas
        </h1>
        <ul>
          <li className="p-1 text-slate-700 mx-7 mr-8 text-lg font-sans hover:underline">
            <Link to="/product/brand/samsung"> Samsung </Link>
          </li>
          <li className="p-1 text-slate-700 mx-7 mr-8 text-lg font-sans hover:underline">
            <Link to="/product/brand/xiaomi"> Xiaomi </Link>
          </li>
          <li className="p-1 text-slate-700 mx-7 mr-8 text-lg font-sans hover:underline">
            <Link to="/product/brand/apple"> Apple </Link>
          </li>
          <li className="p-1 text-slate-700 mx-7 mr-8 text-lg font-sans hover:underline">
            <Link to="/product/brand/motorola"> Motorola </Link>
          </li>
        </ul>
        <h1 className="font-sans text-gray-800 text-2xl border-b border-black m-4 pl-5 py-2">
          Capacidad
        </h1>
        <ul>
          <li className="p-1 text-slate-700 mx-7 mr-8 text-lg font-sans hover:underline">
            <Link to="/product/memory/64"> 64GB </Link>
          </li>
          <li className="p-1 text-slate-700 mx-7 mr-8 text-lg font-sans hover:underline">
            <Link to="/product/memory/128"> 128GB</Link>
          </li>
          <li className="p-1 text-slate-700 mx-7 mr-8 text-lg font-sans hover:underline">
            <Link to="/product/memory/256"> 256GB</Link>
          </li>
        </ul>
        <ul>
        <li className="p-1 text-gray-700 mx-7 my-5 mr-8 text-lg underline font-medium"><Link to="/product"> Ver todos</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
