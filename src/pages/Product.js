import React from "react";
import Filters from "../components/Filters/Filters";
import Footer from "../components/Footer/Footer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Product = () => {
  return (
    <div>
    <div className="text-slate-800 justify-items-center grid grid-cols-5">
      <Filters/>
      <div className="col-span-4">
        <ItemListContainer />
      </div> 
    </div>
    <Footer/>
      </div>
  );
};

export default Product;
