import React from "react"
import Item from "./Item"


const ItemList = ({stockDeProductos}) => {
    return (
        <div className = 'flex flex-wrap justify-around mt-5'>    
            {stockDeProductos.map((producto) => {
                return <Item key={producto.id} producto = {producto}/>;
            })}
        </div>
    );
}

export default ItemList