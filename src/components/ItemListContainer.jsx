import React, { useState, useEffect } from "react"
import stockDeProductos from "../data/descripcionDeProductos";
import ItemList from "./ItemList";


const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        res(stockDeProductos)
    }, 2000);
});

const ItemListontainer = () => {
    const [listaDeProductos, setListaDeProductos] = useState([]);
    const [loading, setLoading] = useState(false);
   
    useEffect(() => {
        setLoading(true);
        promesa.then((response) => {
            setLoading(false);
            setListaDeProductos(response)
        })
    }, []);
    
    if (loading) {
        return (
            <>
            <h1 className = 'text-3xl font-bold mt-5 ml-5 text-center'>Cargando...</h1>
            </>
        )
    }

    return (
        <div>
            <ItemList stockDeProductos = {listaDeProductos} />
        </div>
    )
}

export default ItemListontainer