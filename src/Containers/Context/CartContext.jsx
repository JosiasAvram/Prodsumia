import React, { createContext, useState, useEffect} from 'react'

export const CartContext = createContext();
const { Provider } = CartContext;

const CartCustomProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0)
  
  const isInCart = (id) => {
    return products.some((prod) => prod.id === id);
  }
  
  const getQtyProduct = () => {
    let qty = 0;
    products.forEach(product => {qty += product.quantity})
    setTotalProducts(qty);  
  }
  useEffect(() => {
    getQtyProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products])

  const addToCart = (product) => {
      if (isInCart(product.id)){
        let newCart = [...products]
        const productAdded = newCart.find((prod) => prod.id === product.id);
        const productAddedIndex = newCart.indexOf(productAdded)
        newCart[productAddedIndex].quantity =
        newCart[productAddedIndex].quantity + parseInt(product.quantity);
        setProducts(newCart)
      } 
      else {
        setProducts([...products, product])
      }

    // const totalProductPrice = product.precio * product.quantity;
    setPrecioTotal(precioTotal + (product.precio * product.quantity));
    setTotalProducts(totalProducts + product.quantity);

  }
  
  const removeItemFromCart = (product) => {
    const newCart = products.filter(prod => prod.id !== product.id)
    setProducts(newCart)
    setPrecioTotal(precioTotal - (product.precio * product.quantity));
    setTotalProducts(totalProducts - product.quantity)
    }

  const clearCart = () => {
    setProducts([])
    setPrecioTotal(0);
    setTotalProducts(0);
  }

  return (
    <Provider value={{products, addToCart, removeItemFromCart, clearCart, totalProducts, precioTotal}}>
      {children}
    </Provider>
  )
}

export default CartCustomProvider