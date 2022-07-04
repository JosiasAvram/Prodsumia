import React, { useState } from 'react'

const ItemCounter = ({stock, initial = 1}) => {
    const [cuenta, setCuenta] = useState(initial)
    
    const sumar = () => {
        cuenta < stock && setCuenta(cuenta + 1)
        cuenta >= stock && alert('No hay stock suficiente para el producto que esta seleccionando')
    }
    const restar = () => {
        setCuenta(Math.max(cuenta -1,0))
    }
    const onAdd = () => {
        alert('Producto agregado al Carrito')
    }
    
  return (
        <>
        <div className = 'flex flex-col items-center mt-16'>
            <p className = 'text-xl font-bold'>Placa de video Nvidia 2060</p>
            <div className = 'flex gap-6 py-6 px-10'>
                <button className = 'text-2xl'onClick={restar}>-</button>
                <p className = 'text-2xl font-bold'>{cuenta}</p>
                <button className = 'text-2xl' onClick={sumar}>+</button>
            </div>
            <button 
                className='bg-teal-700 hover:bg-teal-900 py-3 text-white p-10'
                onClick={onAdd}
            >
            Agregar Al Carrito
            </button>
        </div>
        
        </>
  )
}

export default ItemCounter