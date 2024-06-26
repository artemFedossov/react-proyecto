import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { CartContext } from "../../context/CartContext";
import Browser from "./Browser";

export const NavBar = () => {
  // Obtiene el carrito y la función calculateAmount del contexto CartContext
  const { cart, calculateAmount } = useContext(CartContext);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" color="primary">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            background: "#1976d2",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            {/* Logo y nombre del sitio */}
            <img style={{ width: "5rem" }} src="/img/logo.png" alt="logo" />
            RocketRiders
          </Typography>
          {/* Componente de navegación */}
          <Box>
            <Browser />
          </Box>
          {/* Muestra el icono del carrito de compras solo si hay elementos en el carrito */}
          {cart.length > 0 && (
            <NavLink to={`/carrito`}>
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <AddShoppingCartIcon sx={{ color: "white", fontSize: 40 }} />
                {/* Muestra el número de elementos en el carrito */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -10,
                    right: -10,
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    backgroundColor: "#39ff14",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 19,
                    fontWeight: "bold",
                  }}
                >
                  {calculateAmount()}
                </Box>
              </Box>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
      {/* Espaciador para que el contenido no esté oculto detrás del AppBar */}
      <Box component="div" sx={{ p: 0.5 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

/*Se utiliza el hook 'useContext' para acceder al contexto 'CartContext'. Se obtienen 'cart' (el estado del carrito) y 'calculateAmount' (una función para calcular la cantidad total de elementos en el carrito).

*/