import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";

import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";

import { CartContext } from "../context/CartContext";

export const Form = () => {
  const { cart, emptyCart } = useContext(CartContext);
  const { register, handleSubmit } = useForm();
  let [docId, setDocId] = useState("");

  const buy = (data) => {
    const pedido = {
      cliente: data,
      productos: cart,
      fecha: Timestamp.now(),
    };

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido).then((doc) => {
      setDocId(doc.id);
      emptyCart();
    });
  };

  return (
    <>
      {cart.length > 0 ? (
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: 200 },
            marginTop: 3,
          }}
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(comprar)}
        >
          <div className="gridForm">
            <TextField
              id="nombre"
              label="Nombre"
              variant="standard"
              type="text"
              {...register("nombre")}
            />
            <TextField
              id="apellido"
              label="Apellido"
              variant="standard"
              type="text"
              {...register("apellido")}
            />
            <TextField
              id="edad"
              label="Edad"
              variant="standard"
              type="number"
              InputLabelProps={{ shrink: true }}
              {...register("edad")}
            />
            <TextField
              id="nacionalidad"
              label="Nacionalidad"
              variant="standard"
              type="text"
              {...register("nacionalidad")}
            />
            <TextField
              required
              id="correoElectronico"
              label="Correo Electronico"
              variant="standard"
              type="email"
              {...register("email")}
            />
            <TextField
              required
              id="telefono"
              label="Telefono"
              variant="standard"
              type="number"
              InputLabelProps={{ shrink: true }}
              {...register("telefono")}
            />
            <Box></Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: 17,
              }}
            >
              <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                Enviar
              </Button>
            </Box>
          </div>
        </Box>
      ) : (
        <Box
          sx={{
            width: 500,
            height: 200,
            border: "solid 1px black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginLeft: "33%",
            marginTop: 10,
            background: "#1976d2",
            color: "white",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            Gracias por su compra !!!
          </Typography>
          <Typography>Su identificador de compra : {docId}</Typography>
          <Typography>Nos comunicaremos en brevedad con usted</Typography>
        </Box>
      )}
    </>
  );
};
