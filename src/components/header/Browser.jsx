import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
// Importa las funciones necesarias de Firebase Firestore
import { collection, getDocs } from "firebase/firestore";
// Importa la configuración de Firebase
import { db } from "../../firebase/config";

const Browser = () => {
  // Define estados para categorías, estado de carga y manejo de errores
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  // Obtiene los documentos de la colección y actualiza el estado con los datos obtenidos
  useEffect(() => {
    const refCategory = collection(db, "categorias");

    getDocs(refCategory)
      .then(res => {
        setCategories(
          res.docs.map((doc) => {
            return { ...doc.data() };
          })
        );
      })
      .catch( err => {
        setError(err.message);
      })
  });

  return (
    <Box>
      <List sx={{ display: "flex" }}>
        <ListItem>
          <NavLink className="link" to="/">
            Inicio
          </NavLink>
        </ListItem>
        {categories.map((category) => {
          return (
            <ListItem key={category.id}>
              <NavLink className="link" to={`/categoria/${category.id}`}>
                {category.nombre}
              </NavLink>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Browser;

/* Se utiliza el hook 'useState' para manejar el estado de las categorías y 'useEffect' para ejecutar el código que obtiene los datos de Firestore cuando el componente se monta.

Se referencia la colección 'categorias' en la base de datos Firestore y se obtienen sus documentos con 'getDocs'. Los datos obtenidos se mapean y se guardan en el estado 'categories'.

Se renderiza una lista de navegación usando 'List' y 'ListItem' de Material-UI. Se incluye un enlace a la página de inicio y se generan enlaces dinámicos para cada categoría obtenida de Firestore.
*/
