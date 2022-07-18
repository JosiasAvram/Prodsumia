import React, { createContext, useState, useEffect} from 'react'

export const CartContext = createContext();
const { Provider } = CartContext;

const CartCustomProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [totalProducts, setCantidadDeElementos] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0)
  
  const isInCart = (id) => {
    return cart.some(producto => producto.id === id);
  }
  
  const getQtyProduct = () => {
    let qty = 0;
    cart.forEach(producto => {qty += producto.qty})
    setCantidadDeElementos(qty);  
  }

  useEffect(() => {
    getQtyProduct()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart])


  const addToCart = (producto) => {
    if (isInCart(producto.id)){
      const found = cart.find(p => p.id === producto.id);
      console.log(`este es el found ${found}`);
      const index = cart.indexOf(found)
      console.log(`este es el index ${index}`);
      const aux = [...cart]
      console.log(`este es el aux ${aux}`);
      found[index].qty += cart.qty
      setCart(aux)
      console.log(`este es el productCart nuevo ${cart}`);
    }
    else {
      setCart([...cart, producto])
    }
  }

  const removeItemFromCart = (id) => {
    setCart(cart.filter(producto => producto.id !== id))
    
  }

  const clearCart = () => {
    setCart([])
    getQtyProduct(0);
  }



  return (
    <Provider value={{cart, addToCart, removeItemFromCart, clearCart, totalProducts}}>
      {children}
    </Provider>
  )
}

export default CartCustomProvider