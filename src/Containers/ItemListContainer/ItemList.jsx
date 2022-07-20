import React from "react"
import Item from "./Item"


const ItemList = ({stockDeProductos}) => {
    return (
        <div className = 'flex flex-wrap justify-around mt-5'>
            {stockDeProductos.map((product) => (
                <Item 
                    key = {product.id} 
                    product = {product}
                />
            )
            )}    
        </div>
    );
}

export default ItemList