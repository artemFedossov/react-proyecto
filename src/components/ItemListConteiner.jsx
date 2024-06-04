import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import categorias from '../data/categorias.json'
import data from '../data/productos.json'

export const ItemListConteiner = () => {

  let [productos, setProductos] = useState([]);
  let {categoriaId} = useParams();
  
  useEffect(() => {
    if(categoriaId) {
      const filtro = data.filter(producto => producto.categoria.id === categoriaId)
      setProductos(filtro);
    } else {
      setProductos(data)
    }
  },[categoriaId]);

  return (
    <div>
      <ItemList productos={productos}/>
    </div>
  )
}

