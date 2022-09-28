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
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);

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
    setLoading(false);
  }, [id]);
  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <ItemDetail key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ItemDetailContainer;
