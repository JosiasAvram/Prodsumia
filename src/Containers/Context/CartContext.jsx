import React, { createContext, useState } from 'react'

export const CartContext = createContext([]);
const { Provider } = CartContext;

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0)
  
  const isInCart = (item) => {
    return cart.some((prod) => prod.id === item.id);
  }
  
  const addToCart = (item, quantity) => {
    if (isInCart(item.id)){
      //si ya esxiste en el carrito
      let newCart = [...cart]
      const productAdded = newCart.find((prod) => prod.id === item.id);
      const productAddedIndex = newCart.indexOf(productAdded)
      //busco la posicion del producto existente
      productAdded[productAddedIndex].quantity += parseInt(quantity) 
      setCart(newCart)
      
    }
    else {
      //si no existía en el carrito
      let newProductAdded = { ...item };
      newProductAdded.quantity = parseInt(quantity);
      let newCart = [...cart, newProductAdded]
      setCart(newCart)
    }
    const totalProductPrice = item.price * quantity;
    setTotalPrice(totalPrice + totalProductPrice);

    setTotalProducts(totalProducts + quantity);
  }

  const removeItemFromCart = (id, precio, quantity) => {
    //eliminar de a un producto
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart);
    setTotalPrice(totalPrice - precio * quantity);
    setTotalProducts(totalProducts - quantity)
  }

  const cleanCart = () => {
    //eliminar todos los productos
    setCart([]);
    setTotalPrice(0);
    setTotalProducts(0);
  }



  return (
    <Provider value={{cleanCart, removeItemFromCart, addToCart, cart, totalProducts, totalPrice}}>
      {children}
    </Provider>
  )
}

export default CartProvider