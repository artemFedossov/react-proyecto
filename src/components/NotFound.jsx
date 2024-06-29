import React from "react";
import { Box, Typography, Link } from "@mui/material";

export const NotFound = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(218, 217, 217)",
        width: 700,
        height: 300,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "4rem",
        marginLeft: "30%",
      }}
    >
      <Typography align="center" variant="h4">404 - Página no encontrada</Typography>
      <Typography variant="body1">
        Lo sentimos, la página que buscas no existe.
      </Typography>
      <Typography variant="body1">
        Puedes volver a la <Link sx={{ cursor: "pointer" }} to="/">página de inicio</Link>.
      </Typography>
    </Box>
  );
};

/*El componente 'NotFound' es utilizado para renderizar una página de error 404 cuando el usuario intenta acceder a una ruta que no existe. */