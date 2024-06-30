import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import { CartContext } from "../context/CartContext";

export const CartWidget = () => {
  // Obtiene el carrito y las funciones de manipulación del contexto CartContext
  const { cart, handleAdd, handleDelete, calculate } = useContext(CartContext);

  return (
    <List
      border={"solid black 1px"}
      sx={{ width: "100%", maxWidth: 300, bgcolor: "background.paper", minHeight: "100vh" }} >
      {cart.length > 0 ? (
        cart.map((prod) => {
          return (
            <React.Fragment key={prod.id}>
              <ListItem alignItems="center">
                <ListItemAvatar>
                  <Avatar alt={prod.nombre} src={prod.imagen} />
                </ListItemAvatar>
                <ListItemText
                  primary={prod.modelo}
                  secondary={
                    <>
                      {prod.amount} -
                      <Typography
                        sx={{
                          display: "inline",
                          margin: 2,
                          fontWeight: "bold",}}
                        component="span"
                        variant="body2"
                        color="text.primary"
                        className="precio" >
                        $ {prod.precio * prod.amount}
                      </Typography>
                    </> } />
                <Stack direction="row" spacing={1}>
                  <Icon
                    onClick={() => handleAdd(prod)} color="primary" sx={{ cursor: "pointer" }} >
                    add_circle
                  </Icon>
                  <DeleteIcon
                    onClick={() => handleDelete(prod.id)} sx={{ color: "red", cursor: "pointer" }} />
                </Stack>
              </ListItem>
              <Divider orientation="horizontal" flexItem />
            </React.Fragment>
          )})
      ) : <Typography sx={{ margin: 2 }}>El carrito está vacío</Typography> }
      {cart.length > 0 && (
        <Stack direction="column">
          <Typography sx={{ display: "flex", justifyContent: "center" }}>
            El total es: $<strong>{calculate()}</strong>
          </Typography>
          <NavLink
            to={`/formulario`}
            style={{ textDecoration: "none", display: "flex", justifyContent: "center" }} >
            <Button
              size="small" variant="outlined"
              sx={{ margin: 1, color: "green", border: "green solid 1px" }} >
              Confirmar Compra
            </Button>
          </NavLink>
        </Stack>
      )}
    </List>
  );
};


/*Se utiliza el hook 'useContext' para acceder al contexto 'CartContext'. Se obtienen 'cart' (el estado del carrito), 'handleAdd' (una función para añadir productos al carrito), 'handleDelete' (una función para eliminar productos del carrito) y calculate (una función para calcular el total).

Si el carrito no está vacío, se muestra el total calculado (calculate()) y un botón para confirmar la compra que redirige al formulario de compra.
*/