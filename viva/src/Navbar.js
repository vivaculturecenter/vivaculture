import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import circle from './circle-v-red.png';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"sx={{ backgroundColor: 'white',height:{
          xs: '60px', // Height for extra-small screens
          sm: '70px', // Height for small screens
          md: '75px', // Height for medium screens
          lg: '80px', // Height for large screens
        }, 
        }}>
        <Toolbar>  
       
        <Box
      component="img"
      src={circle}
      alt="Logo"
      sx={{
        height: {
          xs: '40px', // Extra-small screens
          sm: '60px', // Small screens
          md: '80px', // Medium screens
          lg: '100px', // Large screens
        },
        width: 'auto',
        marginLeft
        :'-10px'
         // Maintain aspect ratio
      }}
    />
        
          <Typography variant="h6" component="div" sx={{  flexGrow: 1,
    color: 'black',
    fontSize: {
      xs: '.9rem',  // fontSize for extra-small screens
      sm: '1.25rem', // fontSize for small screens
      md: '1.5rem', // fontSize for medium screens
      lg: '1.75rem', // fontSize for large screens
    } }}>
            Viva Culture Center
          </Typography>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}
