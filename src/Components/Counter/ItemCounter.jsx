import React, { useState } from 'react'


const ItemCounter = ({stock, onAdd, initial, }) => {
    const [quantity, setQuantity] = useState(initial);
  
    
    const sumar = () => {
        quantity < stock && setQuantity(quantity + 1)
        quantity >= stock && alert('No hay stock suficiente para el producto que esta seleccionando')
    }
    const restar = () => {
        setQuantity(Math.max(quantity -1,0))
    }
    
    return (
        <>
        <div className = 'flex flex-col items-center mt-16'>
            <div className = 'flex gap-6 py-6 px-10'>
                <button className = 'text-2xl'onClick={restar}>-</button>
                <p className = 'text-2xl font-bold'>{quantity}</p>
                <button className = 'text-2xl' onClick={sumar}>+</button>
            </div>
            <button 
            className='border-2 border-slate-900 bg-teal-900 hover:bg-teal-800 py-3 text-white p-10 rounded-md ' 
            onClick={onAdd} value = {quantity}
            >
                    Agregar Al Carrito
            </button>
        </div>
        
        </>
  )
}
export default ItemCounter
