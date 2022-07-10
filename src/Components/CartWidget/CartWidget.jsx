import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const CartWidget = () => {
    return(
        <button className='hover:bg-teal-900 p-4 '>
        <FaShoppingCart className='text-white ' size={40}/>            
        </button>
    )
}
export default CartWidget
