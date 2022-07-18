import React, { useState, useEffect } from "react"
import LoadingSpin from "../../Components/LoadingSpin/LoadingSpin";
import stockDeProductos from '../../data/descripcionDeProductos'
import ItemList from "./ItemList";


const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        res(stockDeProductos)
    }, 2000);
});

const ItemListContainer = ({greeting}) => {

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
            <h1 className = 'text-3xl font-bold mt-5 ml-5 text-center'>Catálago de Productos</h1>

            <div>
                {loading ? <LoadingSpin/> : <></> }
            </div>
            <ItemList  stockDeProductos = {listaDeProductos} />
        </>
    )
}

export default ItemListContainer