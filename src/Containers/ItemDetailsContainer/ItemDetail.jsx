import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCounter from '../../Components/Counter/ItemCounter'
import { CartContext } from '../Context/CartContext';



const ItemDetail = ({item}) => {
  const { addToCart } = useContext(CartContext);
  const [showComponent, setShowComponent] = useState(true);
  const [quantity, setQuantity] = useState(0);
  
  
  const onAdd = (e) => {
    setShowComponent(false);
    setQuantity(e.target.value);
    let quantity = parseInt(e.target.value)
    console.log(quantity);
    addToCart(item, quantity)
    
  }
  const alertmsg = `Usted Agrego al carrito: ${quantity} unidades`;

  console.log(quantity);

  return (
    <>
    <div className = 'flex justify-around bg-teal-700 rounded-lg text-white p-10 m-5'>
      <img className = 'w-96 rounded-md' src = {item.img} alt="imágen del Producto" />
      <div className = 'text-center'>
        <h1 className = 'text-5xl font-bold pb-10'>{item.name}</h1>
        <p className = 'italic px-20 pb-20'>{item.descripcion}</p>
        <h2 className = 'font-bold text-4xl'>${item.precio}</h2> 
        <h3>Stock Disponible: {item.stock}</h3>
      
       
      {showComponent ? <ItemCounter stock={item.stock} articulo={item} initial={1} onAdd={onAdd} cambiarBoton={setShowComponent}/> 
      : (<div><p>{quantity > 1 ? `${alertmsg}` : `${alertmsg}`}</p><button className='border-2 border-slate-900 bg-teal-900 hover:bg-teal-800 py-3 text-white p-10 rounded-md mt-10'><Link to={"/cart"}>Finalizar Compra</Link></button></div>)}
      </div>
    </div>
    </>
  )
}
export default ItemDetail


