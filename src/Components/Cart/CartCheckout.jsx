import React, { useContext, useState } from "react";
import { CartContext } from "../../Containers/Context/CartContext";
import { BsTrash } from "react-icons/bs";
import Form from "../Form/Form";

const CartCheckout = ({ finalizarCompra }) => {
  const { products, removeItemFromCart, clearCart, precioTotal } =
    useContext(CartContext);
  const [mostrarForm, setMostrarForm] = useState(false);

  const mostrarFormulario = () => {
    setMostrarForm(true);
  };

  return (
    <>
      <div className="bg-teal-900 text-white rounded-xl border flex justify-between font-serif text-4xl mt-5 text-center mx-60 p-5">
        <div>Imagen</div>
        <div>Producto</div>
        <div>Precio</div>
        <div>Eliminar</div>
        <div>Cantidad</div>
        <div>Total</div>
      </div>
      <div className="mt-5">
        {products.map((product) => (
          <div
            className="bg-teal-700 text-white rounded-xl border flex justify-between font-serif text-4xl mt-5 text-center mx-60 p-5"
            key={product.id}
          >
            <img
              className="w-12 rounded-md ml-10"
              src={product.img}
              alt="imágen del Producto"
            />
            <div className="px-10 -ml-8">{product.name}</div>
            <div className="px-10 -ml-28">$ {product.precio}</div>
            <button>
              <BsTrash
                className=""
                size={30}
                onClick={() => removeItemFromCart(product)}
              />
            </button>
            <div className="px-10 -mr-24">
              {product.quantity} {product.quantity > 1 ? "unidades" : "unidad"}
            </div>
            <div className="px-10 -mr-10">
              $ {product.precio * product.quantity}
            </div>
          </div>
        ))}
        <div className="bg-teal-900 text-white rounded-xl border flex justify-between font-serif text-4xl mt-5 text-center mx-96 p-5">
          Total de la Compra
          <div className="flex">
            <button>
              <BsTrash className="mr-3" onClick={clearCart} />
            </button>
            <div>Vaciar Carrito</div>
          </div>
          <div>$ {precioTotal}</div>
        </div>
        <div className="flex justify-center">
          <button
            className="mt-5 bg-blue-700 text-2xl text-white p-3 rounded-3xl opacity-90"
            onClick={mostrarFormulario}
          >
            Finalizar Compra
          </button>
        </div>
      </div>
      {mostrarForm === true ? <Form Pagar={finalizarCompra} /> : <></>}
    </>
  );
};

export default CartCheckout;
