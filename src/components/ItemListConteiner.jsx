import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import { Box, Typography } from "@mui/material";

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
    <Box sx={{ minHeight: "100vh"}}>
      <Typography
        align="center"
        variant="h2"
        sx={{
          textTransform: "uppercase",
          fontSize: "2rem",
          paddingTop: "2rem",
        }}
      >
        {title}
      </Typography>
      <ItemList products={products} />
    </Box>
  );
};

/*'useEffect', Se ejecuta cuando cambia 'categoriaId'. 
Dentro de este efecto:
  Crea una referencia a la colección de productos en Firestore (refProducts).
  Crea una consulta 'q' para filtrar productos por 'categoriaId' si está definido.
  Si 'categoriaId' está definido, también consulta la colección de categorías para obtener el título de la categoría actual.
  Utiliza 'getDocs' para obtener los documentos correspondientes de Firestore para ambos, productos (q) y categoría (queryCategory).
  Actualiza el estado 'products' con los datos de los documentos de productos obtenidos.
  Actualiza el estado 'title' con el nombre de la categoría obtenido de la consulta de categoría si está definido, de lo contrario, establece el título predeterminado como "Motos". */