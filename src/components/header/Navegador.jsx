import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { db } from '../../firebase/config'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
            <AddShoppingCartIcon sx={{ color: 'green', cursor: 'pointer' }} />
          </li>
          { 
            categories.map((category) => {
              return (
                <li key={category.id}>
                  <NavLink to={`/categoria/${category.id}`}>
                    {category.nombre}
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

