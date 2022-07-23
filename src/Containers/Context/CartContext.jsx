import React, { createContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const messagerepeated = () => {
  toast.success("Cantidad del producto modificada", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
};

const messageAdd = () => {
  toast.success("Producto Agregado Al carrito", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
};

const messageRemove = () => {
  toast.success("Producto eliminado del carrito", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
};

const messageClear = () => {
  toast.success("El Carrito se vació exitosamente", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
};
const messageEmpty = () => {
  toast.warn("El Carrito esta Vacío", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
};

export const CartContext = createContext();
const { Provider } = CartContext;

const CartCustomProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);

  const isInCart = (id) => {
    return products.some((prod) => prod.id === id);
  };

  const getQtyProduct = () => {
    let qty = 0;
    products.forEach((product) => {
      qty += product.quantity;
    });
    setTotalProducts(qty);
  };
  useEffect(() => {
    getQtyProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  const addToCart = (product) => {
    if (isInCart(product.id)) {
      let newCart = [...products];
      const productAdded = newCart.find((prod) => prod.id === product.id);
      const productAddedIndex = newCart.indexOf(productAdded);
      newCart[productAddedIndex].quantity =
        newCart[productAddedIndex].quantity + parseInt(product.quantity);
      setProducts(newCart);
      messagerepeated();
    } else {
      setProducts([...products, product]);
      messageAdd();
    }

    setPrecioTotal(precioTotal + product.precio * product.quantity);
    setTotalProducts(totalProducts + product.quantity);
  };

  const removeItemFromCart = (product) => {
    const newCart = products.filter((prod) => prod.id !== product.id);
    setProducts(newCart);
    setPrecioTotal(precioTotal - product.precio * product.quantity);
    setTotalProducts(totalProducts - product.quantity);
    messageRemove();
  };

  const clearCart = () => {
    setProducts([]);
    setPrecioTotal(0);
    setTotalProducts(0);
    // eslint-disable-next-line no-lone-blocks
    {
      products.length > 0 ? messageClear() : messageEmpty();
    }
  };

  return (
    <>
      <Provider
        value={{
          products,
          addToCart,
          removeItemFromCart,
          clearCart,
          totalProducts,
          precioTotal,
        }}
      >
        {children}
      </Provider>
      <ToastContainer />
    </>
  );
};

export default CartCustomProvider;
