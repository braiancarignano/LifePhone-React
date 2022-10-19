import { useState, useEffect } from "react";
import Item from "../components/Item/Item";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import Filters from "../components/Filters/Filters";
import Footer from "../components/Footer/Footer";
import LogoWhatsapp from "../components/LogoWhatsapp/LogoWhatsapp";
const Memory = () => {
  //Declaracion de estado y funciones para extraer informacion de la base de datos segun su memory
  const [products, setProducts] = useState([]);
  const { memory } = useParams();
  useEffect(() => {
    const data = [];
    const getProducts = async () => {
      const q = query(
        collection(db, "smartphones"),
        where("memory", "==", memory)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setProducts(data);
    };
    getProducts();
  }, [memory]);
  //Renderizado de categoria "Memory" con su menu de navegacion y productos
  return (
    <div>
      <LogoWhatsapp />
      <div className="text-slate-800 justify-items-center grid grid-cols-5">
        <Filters />
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

export default Memory;
