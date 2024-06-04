import React from 'react'
import { NavLink } from 'react-router-dom'
import categorias from '../../data/categorias.json'

const Navegador = () => {
  return (
    <nav>
      <ul>
          <li>
            <NavLink to="/" activeClassName="active" >Inicio</NavLink>
          </li>
          {
            categorias.map((categoria) => {
              return (
                <li>
                  <NavLink to={`/categoria/${categoria.id}`} activeClassName="active">
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
