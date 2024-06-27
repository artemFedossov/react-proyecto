import React, { useContext, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import productos from '../data/productos.json'
import DeleteIcon from '@mui/icons-material/Delete';
import Icon from '@mui/material/Icon';
import Stack from '@mui/material/Stack';
import { CartContext } from '../context/CartContext';

export const Carrito = () => {

  const {cart} = useContext(CartContext);
  let [cantidad, setCantidad] = useState(1)
  let [valor, setValor] = useState(productos[0].precio)
  let [producto, setProducto] = useState(productos)

  const handleDelete = () => {
    setProducto([])
  }

  return (
    <List border={"solid black 1px"} sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
      {cart.length > 0 ? (
        cart.map(prod => {
          return (
            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src={prod.imagen} />
              </ListItemAvatar>
              <ListItemText
                primary={prod.modelo}
                secondary={
                  <React.Fragment>
                    {cantidad}
                    <Typography
                      sx={{ display: 'inline', margin: 2 }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                      className='precio'>
                      {valor}
                    </Typography>
                  </React.Fragment>
                }
              />
              <Stack direction="row" spacing={1}>
                <Icon color='primary' sx={{ cursor: 'pointer' }}>add_circle</Icon>
                <DeleteIcon onClick={handleDelete} sx={{ color: 'red', cursor: 'pointer' }} />
              </Stack>
            </ListItem>
          )
        })
      ) : (
        <Typography sx={{ margin: 2 }}>El carrito está vacío</Typography>
      )}
      <Divider variant="inset" component="li" />
    </List>
  );
}
