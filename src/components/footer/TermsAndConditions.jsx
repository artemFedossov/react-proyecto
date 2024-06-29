import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const TermsAndConditions = () => {
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", my: 4, px: 2 }}>
      <Typography variant="h4" gutterBottom>
        Términos y Condiciones
      </Typography>
      <Typography variant="body1" paragraph>
        Bienvenido a RocketRiders. Al acceder a nuestro sitio web, aceptas
        cumplir con estos términos y condiciones de uso, que junto con nuestra
        política de privacidad rigen la relación entre RocketRiders y los
        usuarios de este sitio web.
      </Typography>
      <Typography variant="body1" paragraph>
        Por favor, lee detenidamente estos términos antes de utilizar nuestro
        sitio web. Si no estás de acuerdo con cualquiera de estos términos, por
        favor no utilices este sitio.
      </Typography>
      <Typography variant="body1" paragraph>
        Nos reservamos el derecho de modificar estos términos en cualquier
        momento. Es responsabilidad del usuario revisar periódicamente estos
        términos y condiciones.
      </Typography>
      <Typography variant="body1" paragraph>
        Para más información, por favor consulta nuestra{" "}
        <NavLink className="footerLink" to="/politicaPrivacidad">
              Política de Privacidad
        </NavLink>
      </Typography>
    </Box>
  );
};

export default TermsAndConditions;
