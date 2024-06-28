import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import categorias from '../data/categorias.json'
import data from '../data/productos.json'

export const ComponenteCarga = () => {

  let [products, setProductos] = useState([]);
  let [titulo, setTitulo] = useState([]);
  let {categoriaId} = useParams();
  
  useEffect(() => {
    if(categoriaId) {
      const filtro = data.filter(producto => producto.categoria.id === categoriaId)
      setTitulo(categorias.find(cat => cat.id === categoriaId).nombre)
      setProductos(filtro);
    } else {
      setProductos(data);
      setTitulo("Catalogo");
    }
  },[categoriaId]);

  return (
    <div>
      <h2 className='title'>{titulo}</h2>
      <ItemList products={products}/>
    </div>
  )
}