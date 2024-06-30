import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { ItemDetail } from "./ItemDetail";
import Box from "@mui/material/Box";

export const ItemDetailContainer = () => {
  let { itemId } = useParams();
  let [product, setProduct] = useState([]);

  useEffect(() => {
    const refDoc = doc(db, "productos", itemId);

    getDoc(refDoc).then((res) => {
      setProduct({ ...res.data(), id: res.id });
    });
  }, [itemId]);

  if (product) {
    return (
      <Box sx={{ minHeight: "100vh", marginTop: "5rem"}}>
        <ItemDetail product={product} />
      </Box>)
  } else {
    return <div>Cargando...</div>;
  }
};



/*'useState' define el estado 'product' como un objeto inicializado como un array vacío ([]). Este estado se utilizará para almacenar los detalles del producto recuperados de Firestore. 

'useEffect' Se ejecuta cuando cambia 'itemId', es decir, cuando el parámetro 'itemId' en la URL cambia. Dentro de este efecto:
Crea una referencia al documento específico en Firestore
Llama a getDoc, para obtener el documento correspondiente.
Actualiza el estado 'product' con los datos del documento recuperado y le asigna un nuevo campo 'id' que representa el ID del documento en Firestore.

Si 'product' tiene algún valor, se renderiza el componente 'ItemDetail' pasándole el objeto 'product' como prop.
Si 'product' aún no tiene ningún valor, muestra un mensaje de "Cargando...".*/