import React from 'react'

export const ItemDetail = ({product}) => {
  return (
    <div className='itemDetalle'>
      <div>
        <img className='imagen' src={product.imagen} alt="" />
      </div>
      <div>
        <p>nombre: {product.nombre}</p>
        <p>modelo: {product.modelo}</p>
        <p>motor: {product.motor}</p>
        <p>potencia: {product.potencia}</p>
        <p>precio: ${product.precio}</p>
        <p>caracteristicas: {product.caracteristicas}</p>
      </div>
    </div>
  )
}
