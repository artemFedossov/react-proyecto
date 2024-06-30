import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CartContext } from "../context/CartContext";

export const ItemDetail = ({ product }) => {
  // Obtiene la función handleAdd del contexto CartContext
  const { handleAdd } = useContext(CartContext);

  return (
    <Card sx={{ maxWidth: "full", height: 400, backgroundColor: "#2196f3", minHeight: "100vh" }}>
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
          image={product.imagen}
          title={product.nombre}
        />
        <CardContent
          sx={{ display: "flex", flexDirection: "column", maxWidth: 500 }}
        >
          <Typography variant="body1" sx={{ color: "white" }}>
            <strong>nombre:</strong> {product.nombre}
            <br />
            <strong>modelo:</strong> {product.modelo}
            <br />
            <strong>motor:</strong> {product.motor}
            <br />
            <strong>potencia:</strong> {product.potencia}
            <br />
            <span className="precio">
              <strong>precio:</strong> {product.precio} USD
            </span>
            <br />
            <strong>caracteristicas:</strong> {product.caracteristicas}
          </Typography>
          <CardActions>
            <Button
              onClick={() => handleAdd(product)}
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

/*Se utiliza el hook 'useContext' para acceder al contexto 'CartContext'. Se obtiene la función 'handleAdd' para agregar productos al carrito.

Card: Utiliza el componente 'Card' de Material-UI para crear una tarjeta con un       
  ancho máximo y una altura de 400 píxeles. El color de fondo de la tarjeta es azul (#2196f3).
CardContent: La tarjeta principal contiene dos secciones:
  CardMedia: Muestra la imagen del producto. La imagen tiene un ancho de 500 píxeles y una altura de 400 píxeles.
  CardContent: Muestra los detalles del producto (nombre, modelo, motor, potencia, precio y caracteristicas).
CardActions:
  Contiene un botón que permite agregar el producto al carrito.
*/