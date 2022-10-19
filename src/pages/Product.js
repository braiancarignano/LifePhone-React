import React from "react";
import Filters from "../components/Filters/Filters";
import Footer from "../components/Footer/Footer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import LogoWhatsapp from "../components/LogoWhatsapp/LogoWhatsapp";
//Renderizado de seccion "Productos" con los items y menu para navegar entre categorias
const Product = () => {
  return (
    <div>
      <LogoWhatsapp />
      <h1 className="text-3xl my-2 mx-8 pl-6 py-2 font-sans border-b-2 text-slate-700 border-sky-500 ">
        Productos
      </h1>
      <div className="text-slate-800 justify-items-center grid grid-cols-5">
        <Filters />
        <div className="col-span-4">
          <ItemListContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
