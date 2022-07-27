import React, { useContext } from "react";
import { CartContext } from "../../Containers/Context/CartContext";
import { db } from "../../firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartCheckout from "./CartCheckout";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";

const Cart = () => {
  const { products, clearCart, precioTotal } =
    useContext(CartContext);


  const finalizarCompra = async (datos) => {
    const ventasCollection = collection(db, "ventas");
    console.log(datos);
    const getId = await addDoc(ventasCollection, {
      datos,
      items: products,
      date: serverTimestamp(),
      total: precioTotal,
    });

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
      {products.length > 0 ? 
      ( <CartCheckout finalizarCompra = {finalizarCompra} /> ) 
      : 
      (
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
            <Link className="text-blue-700 hover:underline" to="/products">
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
      )}
      <ToastContainer />
      
    </>
  );
};

export default Cart;
