import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { CartContext } from "../context/CartContext";

export const Item = ({ product }) => {
  // Obtiene la función handleAdd del contexto CartContext
  const { handleAdd } = useContext(CartContext);

  return (
    <Card sx={{ maxWidth: 400, backgroundColor: "#2196f3", margin: 2, minHeight: "100vh" }}>
      <CardMedia
        component="img"
        sx={{ width: "100%", height: 200, objectFit: "cover" }}
        image={product.imagen}
        title={product.modelo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.modelo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <span>
            <strong>Motor:</strong> {product.motor}
          </span>
          <br />
          <span>
            <strong>Producto:</strong> {product.potencia}
          </span>
          <br />
          <span className="precio">
            <strong>precio:</strong> {product.precio} USD
          </span>
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => handleAdd(product)}
          size="small"
          variant="outlined"
          sx={{ color: "black", border: "black solid 1px" }}
        >
          Agregar al Carrito
        </Button>
        <Link className="link" to={`/item/${product.id}`}>
          <Button
            size="small"
            variant="outlined"
            sx={{ color: "black", border: "black solid 1px" }}
          >
            Ver más!
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

/*El componente 'Item' recibe una prop 'product', que contiene la información del producto que se va a mostrar. 

Se utiliza el hook 'useContext' para acceder al contexto 'CartContext'. Se obtiene la función 'handleAdd' para agregar productos al carrito.

'CardActions' contiene dos botones:
Agregar al Carrito: Llama a la función 'handleAdd' con el producto actual como argumento.
Ver más: Enlaza a una página de detalles del producto utilizando Link y Button.*/