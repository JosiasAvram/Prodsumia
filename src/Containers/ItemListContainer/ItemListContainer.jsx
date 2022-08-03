import React, { useState, useEffect } from "react";
import LoadingSpin from "../../Components/LoadingSpin/LoadingSpin";
import ItemList from "./ItemList";
import { db } from "../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const productCollection = collection(db, "productos");
    getDocs(productCollection)
      .then((result) => {
        const lista = result.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setProducts(lista);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoaded(false));
  }, []);

  return (
    <>
      <h1 className="text-5xl font-bold mt-10 ml-5 text-center">
        Catálago de Productos
      </h1>

      <div className="flex justify-center items-center mt-10">
        {loaded ? <LoadingSpin /> : <ItemList products={products} />}
      </div>
    </>
  );
};

export default ItemListContainer;
