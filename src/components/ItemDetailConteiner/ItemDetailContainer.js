import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {
  collection,
  query,
  where,
  documentId,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import LogoWhatsapp from "../LogoWhatsapp/LogoWhatsapp";
//Funcion para extraer informacion de la base de datos segun ID y pasarla como prop a la vista de detalle
const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const data = [];
    const getProducts = async () => {
      const q = query(
        collection(db, "smartphones"),
        where(documentId(), "==", id)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setProducts(data);
    };
    getProducts();
  }, [id]);
  return (
    <div>
      <LogoWhatsapp />
      {products.map((product) => (
        <ItemDetail key={product.id} {...product} data={products[0]} />
      ))}
    </div>
  );
};

export default ItemDetailContainer;
