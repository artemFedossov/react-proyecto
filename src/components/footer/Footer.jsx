import React from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import AboutUs from "./AboutUs";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1976d2",
        color: "white",
        py: 2,
        px: 2,
        mt: 2,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Información de Contacto</Typography>
          <Typography>
            Dirección: Rio Salado, Quilmes, Argentina
            <br />
            Teléfono: 1162160704
            <br />
            Email: rocketriders@hotmail.com
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Enlaces útiles</Typography>
          <Typography>
            <NavLink className="footerLink" to="/nostros">
              Acerca de Nosotros
            </NavLink>
              <br />
            <NavLink className="footerLink" to="/terminosCondiones">
              Términos y Condiciones
            </NavLink>
            <br />
            <NavLink className="footerLink" to="/politicaPrivacidad">
              Política de Privacidad
            </NavLink>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Redes Sociales</Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Facebook
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Twitter
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Instagram
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <Typography align="center" mt={2}>
        © {new Date().getFullYear()} RocketRiders. Todos los derechos
        reservados.
      </Typography>
    </Box>
  );
};

export default Footer;