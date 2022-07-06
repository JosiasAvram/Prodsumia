import React, { useState, useEffect } from "react"
import stockDeProductos from "../data/descripcionDeProductos";
import ItemDetail from "./ItemDetail";


const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        res(stockDeProductos)
    }, 2000);
});

const ItemDetailContainer = ({greeting}) => {
    const [listaDeProductos, setListaDeProductos] = useState([]);
    const [loading, setLoading] = useState(false);
   
    useEffect(() => {
        setLoading(true);
        promesa.then((response) => {
            setLoading(false);
            setListaDeProductos(response)
        })
    }, []);

    return (
        <>
            <h1>{greeting}</h1>
            {loading ? <p className = 'text-3xl font-bold mt-5 ml-5 text-center'>Cargando...</p> : <p></p> }
            <ItemDetail stockDeProductos = {listaDeProductos} />
        </>
    )
}

export default ItemDetailContainer