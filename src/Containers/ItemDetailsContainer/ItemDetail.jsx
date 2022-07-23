import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCounter from '../../Components/Counter/ItemCounter'
import { CartContext } from '../../Containers/Context/CartContext';

const ItemDetail = ({product}) => {
  const [showComponent, setShowComponent] = useState(true)
  const { addToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(0);

  
  const onAdd = (e) => {
    setShowComponent(false);
    setQuantity(e.target.value);
    let quantity = parseInt(e.target.value)
    // console.log(product);
    // console.log("cantidad de unidades que se agregan al carrito con onAdd",quantity);
    addToCart({...product, quantity})
  }
  
  const alertmsg = `Usted Agrego al carrito: ${quantity} unidad`;
  
  return (
    <>
    <div className = 'flex justify-around bg-teal-700 rounded-lg text-white p-10 m-5'>
      <img className = 'w-96 rounded-md' src = {product.img} alt="imágen del Producto" />
      <div className = 'text-center'>
        <h1 className = 'text-5xl font-bold pb-10'>{product.name}</h1>
        <p className = 'italic px-20 pb-20'>{product.descripcion}</p>
        <h2 className = 'font-bold text-4xl'>${product.precio}</h2> 
        <h3>Stock Disponible: {product.stock}</h3>
      
       
        {showComponent ? <ItemCounter stock={product.stock} articulo={product} initial={1} onAdd={onAdd} cambiarBoton={setShowComponent}/> 
      : (<div><p>{quantity > 1 ? `${alertmsg}es` : `${alertmsg}`}</p><button className='border-2 border-slate-900 bg-teal-900 hover:bg-teal-800 py-3 text-white p-10 rounded-md mt-10'><Link to={"/cart"}>Finalizar Compra</Link></button></div>)}
      </div>
    </div>
    </>
  )
}
export default ItemDetail


