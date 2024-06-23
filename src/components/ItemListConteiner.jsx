import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

export const ItemListConteiner = () => {

  let [products, setProducts] = useState([]);
  let [title, setTitle] = useState([]);
  let {categoriaId} = useParams();
  

  useEffect(() => {

    const refProducts = collection(db, 'productos')
    const q = query(refProducts, where("categorias.id", "==", categoriaId))

    getDocs(q)
      .then((res) => {
        setProducts(
          res.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
          }))
      })

  },[categoriaId]);

  return (
    <div>
      <h2>{title}</h2>
      <ItemList products={products}/>
    </div>
  )
}

