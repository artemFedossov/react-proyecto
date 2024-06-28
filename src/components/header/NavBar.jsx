import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { CartContext } from '../../context/CartContext';
import Browser from './Browser';

export const NavBar = () => {

  const { cart, calculateAmount } = useContext(CartContext);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" color="primary">
        <Toolbar 
          sx={{ display: "flex", justifyContent: "space-between", 
                background: "#1976d2" }} >
          <Typography
            variant="h6" component="div"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img style={{ width: "5rem" }} src="/img/logo.png" alt="logo" />
            RocketRiders
          </Typography>
          <Box>
            <Browser />
          </Box>
          {cart.length > 0 && (
            <NavLink to={`/carrito`}>
              <Box sx={{ position: 'relative', display: 'inline-block', }} >
                <AddShoppingCartIcon sx={{ color: "white", fontSize: 40 }} />
                <Box
                  sx={{
                    position: 'absolute', // Permite posicionar este elemento relativo a su contenedor padre
                    bottom: -10, // Ajusta esta propiedad para mover el número hacia abajo
                    right: -10, // Ajusta esta propiedad para mover el número a la derecha
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    backgroundColor: '#39ff14',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 19,
                    fontWeight: 'bold',
                  }}
                >
                  {calculateAmount()}
                </Box>
              </Box>
            </NavLink>

          )}

        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 0.5 }}>
        <Toolbar />
        <Typography>
        </Typography>
      </Box>
    </Box>
  );
}


