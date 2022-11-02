import { useState, useEffect } from "react";
import Item from "../components/Item/Item";
import IconFilter from "../assets/edit.png"
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import Filters from "../components/Filters/Filters";
import Footer from "../components/Footer/Footer";
import LogoWhatsapp from "../components/LogoWhatsapp/LogoWhatsapp";
const Brand = () => {
  //Declaracion de estado y funciones para extraer informacion de la base de datos segun su marca
  const [products, setProducts] = useState([]);
  const { brand } = useParams();
  useEffect(() => {
    const data = [];
    const getProducts = async () => {
      const q = query(
        collection(db, "smartphones"),
        where("brand", "==", brand)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setProducts(data);
    };
    getProducts();
  }, [brand]);
   //Renderizado de menu Filtros
  const [isOpen, SetIsOpen] = useState(false);
  const getFilters = () => {
    isOpen === false ? SetIsOpen(true) : SetIsOpen(false);
  };
  //Renderizado de categoria "Marcas" con su menu de navegacion y productos
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
        <div className="col-span-4 flex flex-wrap w-full">
          {products.map((product) => (
            <Item key={product.id} {...product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Brand;
