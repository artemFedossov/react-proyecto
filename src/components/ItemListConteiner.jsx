import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import categorias from '../data/categorias.json'
import data from '../data/productos.json'

export const ItemListConteiner = () => {

  let [productos, setProductos] = useState([]);
  let [titulo, setTitulo] = useState([]);
  let {categoriaId} = useParams();
  
  console.log(categorias)
  console.log(categoriaId)
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
      <h2>{titulo}</h2>
      <ItemList productos={productos}/>
    </div>
  )
}

