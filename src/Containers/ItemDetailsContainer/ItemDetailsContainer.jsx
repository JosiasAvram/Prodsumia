/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetailsContainer/ItemDetail";
import { useParams } from "react-router-dom";
import LoadingSpin from "../../Components/LoadingSpin/LoadingSpin";
import { db } from "../../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";

const ItemDetailsContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const productCollection = collection(db, "productos");
    const refDoc = doc(productCollection, itemId);
    getDoc(refDoc)
      .then((result) => {
        const product = {
          id: result.id,
          ...result.data(),
        };
        setProduct(product);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoaded(false));
  }, [itemId]);

  return (
    <>
      <h1 className="text-5xl font-bold mt-10 ml-5 text-center">
        Detalle del Producto
      </h1>
      <div className="flex justify-center items-center mt-10">
        {loaded ? <LoadingSpin /> : <ItemDetail product={product} />}
      </div>
    </>
  );
};

export default ItemDetailsContainer;
