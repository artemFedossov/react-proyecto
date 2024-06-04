import React from 'react'

export const NotFound = () => {
  return (
    <div className='contenedorNotFound'>
      <div className='notFound'>
        <h2>404 - Página no encontrada</h2>
        <p>Lo sentimos, la página que buscas no existe</p>
        <p>Puedes volver a la <a href="/">página de inicio</a>.</p>
      </div>
    </div>
  )
}
