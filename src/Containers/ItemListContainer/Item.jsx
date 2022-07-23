import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="bg-teal-900 rounded-lg text-white p-10 m-5 text-center ">
      <img
        className="w-72 rounded-md"
        src={product.img}
        alt="imágen del Producto"
      />
      <h1 className="text-2xl font-bold p-2">{product.name}</h1>
      <h2 className="font-bold pb-5">${product.precio}</h2>
      <button className=" hover:bg-teal-700 text-sky-500 text-lg p-2 rounded-lg">
        {" "}
        <Link to={`/item/${product.id}`}>Ver Detalle</Link>
      </button>
    </div>
  );
};

export default Item;
