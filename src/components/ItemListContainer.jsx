import React from "react"
import ItemCounter from "./ItemCounter"

const ItemListontainer = ({proximamente}) => {

    const onAdd = () => {
        alert('Producto agregado al Carrito')
    }

    return (
        <>

        <h1 className = 'text-3xl font-bold mt-5 ml-5'>{proximamente}</h1>
        
        <ItemCounter 
        stock = {10}
        onAdd = {onAdd}
        />
        </>
    )
}

export default ItemListontainer