import React from 'react'
import Carrito from './Carrito'
import Navegador from './Navegador'

const Header = () => {
  return (
    <header className='header'>
      <h1>Style</h1>
      <Navegador/>
      <Carrito/>
    </header>
  )
}

export default Header
