import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
//Funcion para traer informacion de los productos de la base de datos y envio de informacion para lista de productos
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const data = [];
    const getProducts = async () => {
      const q = query(collection(db, "smartphones"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
