/* import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export const Item = ({producto}) => {

  return (
    <div className='item'>
      <img className='imagen' src={producto.imagen} alt="" />
      <p>modelo: {producto.modelo}</p>
      <p>motor: {producto.motor}</p>
      <p>potencia: {producto.potencia}</p>
      <p>precio: {producto.precio}</p>
      <Link to={`/item/${producto.id}`}>Ver más!</Link>
    </div>
  )
}
 */

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'

export const Item = ({producto}) => {
  return (
    <Card sx={{ maxWidth: 350, backgroundColor: '#2196f3'}} className='item'>
      <CardMedia
        component="img"
        sx={{ width: '100%', height: 200, objectFit: 'cover',}}
        image={producto.imagen}
        title={producto.modelo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {producto.modelo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <span><strong>Motor:</strong> {producto.motor}</span>
            <span><strong>Producto:</strong> {producto.potencia}</span>
            <span className='precio'><strong>precio:</strong> {producto.precio} USD</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" sx={{ color: "black", border: "black solid 1px"}}>Agregar al Carrito</Button>
        <Button size="small" variant="outlined" sx={{ color: "black", border: "black solid 1px"}}>
          <Link className='link' to={`/item/${producto.id}`}>Ver más!</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
