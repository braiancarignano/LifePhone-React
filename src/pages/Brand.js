import { useState, useEffect } from "react";
import Item from '../components/Item/Item'
import { useParams } from "react-router-dom";
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import Filters from "../components/Filters/Filters";
import Footer from "../components/Footer/Footer";

const Brand = () => {
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
    console.log(products);
  return (
    <div>
    <div className="text-slate-800 justify-items-center grid grid-cols-5">
      <Filters/>
      <div className="col-span-4 flex flex-wrap w-full">
        {products.map(product => 
      <Item key={product.id} {...product}/>
      )}
    </div> 
    </div>
    <Footer/>
      </div>
  )
}

export default Brand