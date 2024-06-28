import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { db } from '../../firebase/config'
import categorias from '../../data/categorias.json'

const Navegador = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    const refCategory = collection(db, 'categorias')

    getDocs(refCategory)
      .then((res) => {
        setCategories(
          res.docs.map( doc => {
            return {...doc.data()}
        }))
      })
  })

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

