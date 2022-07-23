import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../../Containers/Context/CartContext';

const CartWidget = () => {
  const { totalProducts } = useContext(CartContext);

  return (
 
    <button className="flex  hover:bg-teal-900 p-4 rounded-xl">
      <FaShoppingCart className="text-white mr-5" size={40} />
      <p className="text-4xl text-white">{totalProducts}</p>
    </button>
  );
};
export default CartWidget;
