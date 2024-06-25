import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/productos.json'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Cargas = () => {

    let {itemId} = useParams();
    let [producto, setProducto] = useState([]);

    useEffect(() => {
        setProducto(data.find((prod) => prod.id === parseInt(itemId)))
    },[itemId])

  return (
    
      <Card sx={{ maxWidth: 350, height: 400, display: 'flex', backgroundColor: '#2196f3'}} className='item'>
        <CardMedia
            component="img"
            sx={{ width: '100%', height: 400, objectFit: 'cover',}}
            image={producto.imagen}
            title={producto.nombre}/>
        
            <CardContent>
                <Typography variant="body1" MuiListItemText-primary="primary">
                    <p><strong>nombre:</strong> {producto.nombre}</p>
                    <p><strong>modelo:</strong> {producto.modelo}</p>
                    <p><strong>motor:</strong> {producto.motor}</p>
                    <p><strong>potencia:</strong> {producto.potencia}</p>
                    <p><strong>precio:</strong> {producto.precio} USD</p>
                    <p><strong>caracteristicas:</strong> {producto.caracteristicas}</p>
                </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" variant="outlined" sx={{ color: "white", border: "white solid 1px"}}>Agregar al Carrito</Button>
            <Button size="small" variant="outlined" sx={{ color: "white", border: "white solid 1px"}}>Volver</Button>
            </CardActions>
        
        
      </Card>
    
  )
}