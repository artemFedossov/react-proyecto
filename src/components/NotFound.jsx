import { Box } from "@mui/material";
import React from "react";

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
      <h2>404 - Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe</p>
      <p>
        Puedes volver a la <a href="/">página de inicio</a>.
      </p>
    </Box>
  );
};
