import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {

    let {itemId} = useParams();
    let [product, setProduct] = useState([]);

    useEffect(() => {
        
      const refDoc = doc(db, 'productos', itemId);
      
      getDoc(refDoc)
        .then((res) => {
          setProduct({...res.data(), id: res.id})
        })

    },[itemId])

    if (product) {
      return <ItemDetail product={product} /> 
    } else {
      return <div>Cargando...</div>
    }
}

