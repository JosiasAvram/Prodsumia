import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCounter from '../../Components/Counter/ItemCounter'


const ItemDetail = ({producto}) => {
  const [click, setClick] = useState(true)
  
  const onAdd = () => {

    // alert(`Producto agregado al carrito`)
    setClick(false)
}

  return (
    <>
    <div className = 'flex justify-around bg-teal-700 rounded-lg text-white p-10 mt-5 mx-64'>
      <img className = 'w-96 rounded-md' src = {producto.img} alt="imágen del Producto" />
      <div className = 'text-center'>
        <h1 className = 'text-5xl font-bold pb-10'>{producto.name}</h1>
        <p className = 'italic px-20 pb-20'>{producto.descripcion}</p>
        <h2 className = 'font-bold text-4xl'>${producto.precio}</h2> 
        <h3>Stock Disponible: {producto.stock}</h3>
      
       
      {click ? <ItemCounter stock = {producto.stock} articulo = {producto} initial = {1}onAdd = {onAdd} cambiarBoton = {setClick}/> 
      : <button className='border-2 border-slate-900 bg-teal-900 hover:bg-teal-800 py-3 text-white p-10 rounded-md mt-10'><Link to={"/cart"}>Finalizar Compra</Link></button>}
      </div>
    </div>
    </>
  )
}
export default ItemDetail


