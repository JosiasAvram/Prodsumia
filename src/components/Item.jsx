import React from 'react'
const Item = ({producto}) => {
  return (
    <div onClick={()=> {detalleDelProducto()}} className = 'bg-teal-700 rounded-lg hover:bg-teal-900 text-white p-10 m-5 text-center '>
        <img className = 'w-72' src = {producto.img} alt="imágen del Producto" />
        <h1 className = 'text-2xl font-bold'>{producto.name}</h1>
        <p className = 'italic'>{producto.descripcion}</p>
        <h2 className = 'font-bold '>${producto.precio}</h2>
    </div>
  )
}

const detalleDelProducto = () => {
  console.log("hola");
}
export default Item