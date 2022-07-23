import React, { useContext } from "react";
import { CartContext } from '../../Containers/Context/CartContext';
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";

const Cart = () => {
  const { products, removeItemFromCart, clearCart, precioTotal} = useContext(CartContext);

  return (
    <>
      {products.length === 0 ? (
        <div>
        <h1 className = 'text-4xl font-bold my-20 ml-5 text-center'>
          No hay productos en el Carrito, sigue comprando
          <Link className="text-blue-700" to="/products"> aquí</Link>
        </h1>
            <div className="bg-teal-700 text-white rounded-xl border flex justify-between font-serif text-4xl mt-5 text-center mx-96 p-5">
            Total de la Compra
            <div className="flex">
              <button>
                <BsTrash className="mr-5" onClick={clearCart} />
              </button>
              <div>Vaciar Carrito</div>
            </div>
            <div>$ {precioTotal}</div>
          </div>
        </div>
      ) : (
        <>
          <div className="mt-5">
            {products.map((product) => (
              <div
                className="bg-teal-700 text-white rounded-xl border flex justify-between font-serif text-4xl mt-5 text-center mx-60 p-5"
                key={product.id}
              >
                <img className = 'w-12 rounded-md' src = {product.img} alt="imágen del Producto" />
                <div className="px-10">{product.name}</div>
                <div className="px-10">$ {product.precio}</div>
                <div className="px-10">
                  <button
                    className="text-4xl border rounded-2xl px-4 mr-4"
                    onClick={() => removeItemFromCart(product)}
                  >
                    -
                  </button>
                  {product.quantity} unidades
                </div>
                <div className="px-10">
                  $ {product.precio * product.quantity}
                </div>
              </div>
            ))}
            <div className="bg-teal-700 text-white rounded-xl border flex justify-between font-serif text-4xl mt-5 text-center mx-96 p-5">
              Total de la Compra
              <div className="flex">
                <button>
                  <BsTrash className="mr-5" onClick={clearCart} />
                </button>
                <div>Vaciar Carrito</div>
              </div>
              <div>$ {precioTotal}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
