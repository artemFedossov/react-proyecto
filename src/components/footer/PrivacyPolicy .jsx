import React from "react";
import { Box, Typography } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", my: 4, px: 2, minHeight: "100vh" }}>
      <Typography variant="h4" gutterBottom>
        Política de Privacidad
      </Typography>
      <Typography variant="body1" paragraph>
        En RocketRiders, valoramos y respetamos tu privacidad. Esta política de
        privacidad describe cómo recopilamos, usamos y compartimos información
        personal cuando visitas nuestro sitio web.
      </Typography>
      <Typography variant="body1" paragraph>
        Recolectamos información para mejorar tu experiencia de usuario y
        ofrecerte productos y servicios relevantes. Al visitar RocketRiders,
        aceptas las prácticas descritas en esta política de privacidad.
      </Typography>
      <Typography variant="body1" paragraph>
        Mantenemos tus datos seguros y nunca los compartimos con terceros sin tu
        consentimiento. Para más detalles sobre cómo protegemos tu información,
        consulta nuestra política completa.
      </Typography>
      <Typography variant="body1" paragraph>
        Si tienes alguna pregunta sobre nuestra política de privacidad, no dudes
        en <a href="/contact">contactarnos</a>.
      </Typography>
    </Box>
  );
};

export default PrivacyPolicy;
