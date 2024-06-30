import React from "react";
import { Box, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", my: 4, px: 2, minHeight: "100vh" }}>
      <Typography variant="h4" gutterBottom>
        Acerca de Nosotros
      </Typography>
      <Typography variant="body1" paragraph>
        Bienvenidos a RocketRiders, tu destino para encontrar las mejores
        motocicletas de alta gama y accesorios. Nuestro compromiso es brindarte
        productos de calidad y un servicio excepcional.
      </Typography>
      <Typography variant="body1" paragraph>
        En RocketRiders, creemos en la pasión por las motocicletas y en
        proporcionar a nuestros clientes una experiencia única. Nuestro equipo
        está compuesto por entusiastas de las motos que están aquí para ayudarte
        a encontrar exactamente lo que necesitas.
      </Typography>
      <Typography variant="body1" paragraph>
        Si tienes alguna pregunta, no dudes en contactarnos. Estamos aquí para
        ayudarte a vivir tu pasión por las motos al máximo.
      </Typography>
    </Box>
  );
};

export default AboutUs;
