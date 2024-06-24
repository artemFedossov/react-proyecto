/* import React from 'react'
import Carrito from './Carrito'
import Navegador from './Navegador'

const Header = () => {
  return (
    <header className='header'>
      <h1>Style</h1>
      <Navegador/>
      <Carrito/>
    </header>
  )
}

export default Header */


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Navegador from './Navegador';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export const DrawerAppBar = (props) => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
      }
    }
  })

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar component="nav" color="primary">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}>
              <div className='containerLogo'>
                <img className='logo' src="/img/logo.png" alt="" />
                <p className='logoTitle'>RocketRiders</p>
              </div>
            </Typography>
            <Box >
              <Navegador/>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Box component="main" sx={{ p: 0.5 }}>
        <Toolbar />
        <Typography>
        </Typography>
      </Box>
    </Box>
  );
}


