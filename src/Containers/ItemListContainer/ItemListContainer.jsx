import React, { useState, useEffect } from "react"
import LoadingSpin from "../../Components/LoadingSpin/LoadingSpin";
import stockDeProductos from '../../data/descripcionDeProductos'
import ItemList from "./ItemList";


const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        res(stockDeProductos)
    }, 2000);
});

const ItemListContainer = () => {

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
            <h1 className = 'text-5xl font-bold mt-10 ml-5 text-center'>Catálago de Productos</h1>

            <div className="flex justify-center items-center mt-10">
                {loading ? <LoadingSpin /> : <></> }
            </div>
            <ItemList  stockDeProductos = {listaDeProductos} />
        </>
    )
}

export default ItemListContainer