import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import productos from '../data/productos.json'
import DeleteIcon from '@mui/icons-material/Delete';

export const Carrito = () => {

  return (
    <List sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>

      
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={productos[0].imagen} />
        </ListItemAvatar>
        <ListItemText
        
        primary={productos[0].modelo}
        secondary={
            <React.Fragment>
                {"1 - "}
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                className='precio'
              >
                
                {productos[0].precio}
              </Typography>
            
            </React.Fragment>
          }
        />
      <DeleteIcon />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
