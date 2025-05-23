import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect, useState } from "react";
import ProductCard from "../Pages/ProductCard";

const ProductLogic = () => {
  const [products, setProducts] = useState([]);

  const readProducts = async () => {
      const productsRef = collection(db, "products");
      const snapshot = await getDocs(productsRef);
      const list = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
      }));
      setProducts(list);
  };

  useEffect(() => {
      readProducts();
  },[]);

  return(
    <div>
        <ProductCard products={products}/>
    </div>
  );
}

export default ProductLogic;