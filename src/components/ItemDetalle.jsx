import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/productos.json'

export const ItemDetalle = () => {

    let {itemId} = useParams();
    let [producto, setProducto] = useState([]);

    useEffect(() => {
        setProducto(data.find((prod) => prod.id === parseInt(itemId)))
    },[itemId])

  return (
    <div className='itemDetalle'>
      <div>
        <img className='imagen' src={producto.imagen} alt="" />
      </div>
      <div>
        <p>nombre: {producto.nombre}</p>
        <p>modelo: {producto.modelo}</p>
        <p>motor: {producto.motor}</p>
        <p>potencia: {producto.potencia}</p>
        <p>precio: {producto.precio}</p>
        <p>caracteristicas: {producto.caracteristicas}</p>
      </div>
    </div>
  )
}

