import React from 'react';
import { Item } from './Item';

export const ItemList = ({products}) => {

  return (
    <div className='itemList'>
    {
      products.map(product => {
        return (<Item key={product.id} product={product}/>)
      })
    }
      
  </div>
  )
}
