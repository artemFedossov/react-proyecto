import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export const Item = ({producto}) => {

  return (
    <div className='item'>
      <img className='imagen' src={producto.imagen} alt="" />
      <p>modelo: {producto.modelo}</p>
      <p>motor: {producto.motor}</p>
      <p>potencia: {producto.potencia}</p>
      <p>precio: {producto.precio}</p>
      <Link to={`/item/${producto.id}`}>Ver más!</Link>
    </div>
  )
}
