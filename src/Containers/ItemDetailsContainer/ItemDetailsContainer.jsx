/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react"
import stockDeProductos from "../../data/descripcionDeProductos";
import ItemDetail from '../ItemDetailsContainer/ItemDetail';
import { useParams } from "react-router-dom";



const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        res(stockDeProductos)
    }, 2000);
});

const ItemDetailsContainer = ({greeting}) => {
    const {itemId} = useParams()
    const [producto, setProducto] = useState([]);
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
            <h2>{greeting}</h2>
            {loading ? <p className = 'text-3xl font-bold mt-5 ml-5 text-center'>Cargando...</p> : <p></p> }
            <ItemDetail producto = {producto} />
        </>
    )
}

export default ItemDetailsContainer