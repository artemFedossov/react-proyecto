import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { redirect, useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

export const ItemListConteiner = () => {
  let [products, setProducts] = useState([]);
  let [title, setTitle] = useState([]);
  let { categoriaId } = useParams();

  useEffect(() => {
    const refProducts = collection(db, "productos");
    let q = categoriaId
      ? query(refProducts, where("categoria.id", "==", categoriaId))
      : refProducts;

    const refCategory = collection(db, "categorias");
    const queryCategory =
      categoriaId && query(refCategory, where("id", "==", categoriaId));

    getDocs(q).then((res) => {
      setProducts(
        res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });

    if (queryCategory) {
      getDocs(queryCategory).then((res) => {
        setTitle(res.docs[0].data().nombre);
      });
    } else {
      setTitle("Motos");
    }
  }, [categoriaId]);

  return (
    <div>
      <h2 className="title">{title}</h2>
      <ItemList products={products} />
    </div>
  );
};
