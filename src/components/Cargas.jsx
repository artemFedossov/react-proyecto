import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import data from "../data/productos.json";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CartContext } from "../context/CartContext";

export const Cargas = () => {
  let { itemId } = useParams();
  let [producto, setProducto] = useState([]);

  const { handleAdd } = useContext(CartContext);

  useEffect(() => {
    setProducto(data.find((prod) => prod.id === parseInt(itemId)));
  }, [itemId]);

  return (
    <Card sx={{ maxWidth: "full", height: 400, backgroundColor: "#2196f3" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          marginLeft: -2,
          marginTop: -1,
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 500, height: 400, objectFit: "cover" }}
          image={producto.imagen}
          title={producto.nombre}
        />
        <CardContent
          sx={{ display: "flex", flexDirection: "column", maxWidth: 500 }}
        >
          <Typography variant="body1" sx={{ color: "white" }}>
            <strong>nombre:</strong> {producto.nombre}
            <br />
            <strong>modelo:</strong> {producto.modelo}
            <br />
            <strong>motor:</strong> {producto.motor}
            <br />
            <strong>potencia:</strong> {producto.potencia}
            <br />
            <span className="precio">
              <strong>precio:</strong> {producto.precio} USD
            </span>
            <br />
            <strong>caracteristicas:</strong> {producto.caracteristicas}
          </Typography>
          <CardActions>
            <Button
              onClick={() => handleAdd(producto)}
              size="small"
              variant="outlined"
              sx={{ color: "white", border: "white solid 1px" }}
            >
              Agregar al Carrito
            </Button>
          </CardActions>
        </CardContent>
      </CardContent>
    </Card>
  );
};
