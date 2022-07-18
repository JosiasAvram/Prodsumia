/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react"
import stockDeProductos from "../../data/descripcionDeProductos";
import ItemDetail from '../ItemDetailsContainer/ItemDetail';
import { useParams } from "react-router-dom";
import LoadingSpin from "../../Components/LoadingSpin/LoadingSpin";



const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        res(stockDeProductos)
    }, 2000);
});

const ItemDetailsContainer = ({greeting}) => {
    const {itemId} = useParams()
    const [item, setProducto] = useState([]);
    const [loading, setLoading] = useState(false);
   
    useEffect(() => {
        setLoading(true);
        promesa.then((response) => {
            setLoading(false);
            const thisProduct = response.find(prod => prod.id == itemId)
            setProducto(thisProduct)
            
        })
    }, [itemId]);

    return (
        <>
            <h1 className = 'text-3xl font-bold mt-5 ml-5 text-center'>Detalle del Producto</h1>

            <div>
                {loading ? <LoadingSpin /> : <ItemDetail item = {item} /> }
            </div>
            
        </>
    )
}

export default ItemDetailsContainer