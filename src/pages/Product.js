import { useState } from "react";
import Filters from "../components/Filters/Filters";
import IconFilter from "../assets/edit.png"
import Footer from "../components/Footer/Footer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import LogoWhatsapp from "../components/LogoWhatsapp/LogoWhatsapp";
//Renderizado de seccion "Productos" con los items y menu para navegar entre categorias
const Product = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const getFilters = () => {
    isOpen === false ? SetIsOpen(true) : SetIsOpen(false);
  };
  return (
    <div>
      <LogoWhatsapp />
      <h1 className="text-3xl my-2 mx-8 pl-6 py-2 font-sans border-b-2 text-slate-700 border-sky-500 ">
        Productos
      </h1>
      <div className="text-slate-800 lg:justify-items-center grid lg:grid-cols-5">
      <div className="lg:col-span-1">
      <button
              className="flex m-auto ml-8 lg:ml-0 text-xl font-sans py-1 px-4 border-b-2 border-sky-500"
              onClick={getFilters}
              type="button"
            >
              Filtros
              <img className="mx-2 mt-1 h-6 w-5" src={IconFilter} alt="icono filtros"/>
            </button>
            {isOpen === true ? <Filters /> : <></>}
        </div>
        <div className="lg:col-span-4">
          <ItemListContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
