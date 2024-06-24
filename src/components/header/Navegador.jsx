import React from 'react'
import { NavLink } from 'react-router-dom'
import categorias from '../../data/categorias.json'

const Navegador = () => {

  return (
    <nav>
      <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          {
            categorias.map((categoria) => {
              return (
                <li key={categoria.id}>
                  <NavLink to={`/categoria/${categoria.id}`}>
                    {categoria.nombre}
                  </NavLink>
                </li>
              )
            })
          }
      </ul>
    </nav>
  )
}

export default Navegador
