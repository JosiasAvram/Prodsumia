import React from "react"
import Item from "./Item"


const ItemList = ({stockDeProductos}) => {
    return (
        <div className = 'flex flex-wrap justify-around mt-5'>    
            {stockDeProductos.map((item) => {
                return <Item key={item.id} item = {item}/>;
            })}
        </div>
    );
}

export default ItemList