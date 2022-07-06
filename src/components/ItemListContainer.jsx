import React, { useState, useEffect } from "react"
import stockDeProductos from "../data/descripcionDeProductos";
import ItemList from "./ItemList";


const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        res(stockDeProductos)
    }, 2000);
});

const ItemListontainer = ({greeting}) => {
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
            <ItemList stockDeProductos = {listaDeProductos} />
        </>
    )
}

export default ItemListontainer