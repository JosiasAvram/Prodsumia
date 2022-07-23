/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import stockDeProductos from "../../data/descripcionDeProductos";
import ItemDetail from "../ItemDetailsContainer/ItemDetail";
import { useParams } from "react-router-dom";
import LoadingSpin from "../../Components/LoadingSpin/LoadingSpin";

const promesa = new Promise((res, rej) => {
  setTimeout(() => {
    res(stockDeProductos);
  }, 2000);
});

const ItemDetailsContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    promesa.then((response) => {
      setLoading(false);
      const thisProduct = response.find((prod) => prod.id == itemId);
      setProducto(thisProduct);
    });
  }, [itemId]);

  return (
    <>
      <h1 className="text-5xl font-bold mt-10 ml-5 text-center">
        Detalle del Producto
      </h1>
      <div className="flex justify-center items-center mt-5">
        {loading ? <LoadingSpin /> : <ItemDetail product={producto} />}
      </div>
    </>
  );
};

export default ItemDetailsContainer;
