import React from 'react';
import { Item } from './Item';

export const ItemList = ({products}) => {

  return (
    <div className='itemList'>
    {
      products.map(producto => {
        return (<Item key={producto.id} producto={producto}/>)
      })
    }
      
  </div>
  )
}
