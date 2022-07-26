import React, { useContext } from "react";
import { CartContext } from "../../Containers/Context/CartContext";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { db } from "../../firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { products, removeItemFromCart, clearCart, precioTotal } =
    useContext(CartContext);

  const datosDelComprador = {
    nombre: "juan",
    apellido: "olmos",
    email: "juanolmos@gmail.com",
  };

  const finalizarCompra = async () => {
    const ventasCollection = collection(db, "ventas");
    const getId = await addDoc(ventasCollection, {
      datosDelComprador,
      items: products,
      date: serverTimestamp(),
      total: precioTotal,
    });
    console.log("log function", getId.id);

    const messageFinCompra = () => {
      toast.success(`Gracias Por su Compra, Id: ${getId.id}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    };
    messageFinCompra();
    clearCart();
  };

  return (
    <>
      {products.length === 0 ? (
        <div>
          <div className="bg-teal-900 text-white rounded-xl border flex justify-between font-serif text-4xl mt-5 text-center mx-60 p-5">
            <div>Imagen</div>
            <div>Producto</div>
            <div>Precio</div>
            <div>Eliminar</div>
            <div>Cantidad</div>
            <div>Total</div>
          </div>

          <h1 className="text-4xl font-bold my-20 ml-5 text-center">
            No hay productos en el Carrito, sigue comprando
            <Link className="text-blue-700" to="/products">
              {" "}
              aquí
            </Link>
          </h1>
          <div className="bg-teal-900 text-white rounded-xl border flex justify-between font-serif text-4xl mt-5 text-center mx-96 p-5">
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
                  {product.quantity}{" "}
                  {product.quantity > 1 ? "unidades" : "unidad"}
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
                onClick={finalizarCompra}
              >
                <Link to={"/products"}>Finalizar Compra</Link>
              </button>
            </div>
          </div>
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default Cart;
