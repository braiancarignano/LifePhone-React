import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true)
    const data = []
    const getProducts = async () => {
      const q = query(
        collection(db, "smartphones"),
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data.push({...doc.data(), id: doc.id });
      });
      setProducts(data)
    };
    getProducts()
    setLoading(false)
  }, []);

  return <div>{loading ? <Loader /> : <ItemList products={products} />}</div>;
};

export default ItemListContainer;
