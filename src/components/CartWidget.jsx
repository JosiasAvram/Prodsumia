import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const CartWidget = () => {
    return(
        <button>
        <FaShoppingCart className='text-white' size={40}/>            
        </button>
    )
}
export default CartWidget
