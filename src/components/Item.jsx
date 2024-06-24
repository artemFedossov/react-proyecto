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

export const Item = ({producto}) => {
  return (
    <Card sx={{ maxWidth: 350 }} className='item'>
      <CardMedia
        sx={{ height: 300 }}
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
