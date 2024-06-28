import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/productos.json'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CartContext } from '../context/CartContext';

export const ItemDetail = ({product}) => {

  let { itemId } = useParams();
  
  const {handleAdd} = useContext(CartContext);

 

  return (
    <Card sx={{ maxWidth: 'full', height: 400, backgroundColor: '#2196f3', }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'row', marginLeft: -2, marginTop: -1 }}>
            <CardMedia
                component="img"
                sx={{    width: 500, height: 400, objectFit: 'cover', }}
                image={product.imagen}
                title={product.nombre} />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', maxWidth: 500 }}>
                <Typography variant="body1" sx={{ color: "white" }}>
                    <strong>nombre:</strong> {product.nombre}<br />
                    <strong>modelo:</strong> {product.modelo}<br />
                    <strong>motor:</strong> {product.motor}<br />
                    <strong>potencia:</strong> {product.potencia}<br />
                    <span className='precio'><strong>precio:</strong> {product.precio} USD</span><br />
                    <strong>caracteristicas:</strong> {product.caracteristicas}
                </Typography>
                <CardActions>
                    <Button onClick={() => handleAdd(product)} size="small" variant="outlined" sx={{ color: "white", border: "white solid 1px" }}>Agregar al Carrito</Button>
                </CardActions>
            </CardContent>
        </CardContent>
    </Card>
)
}
