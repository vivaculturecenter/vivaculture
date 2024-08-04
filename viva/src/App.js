// src/App.js
import React from 'react';
import Navbar from './Navbar.js';
import { Box, Typography } from '@mui/material';
import InfoCard from './InfoCard.js';
import viva from './viva.png';
import logo from './logo.png';
function App() {


  return (
    <div>
   <Navbar />
   
      <Box
          component="img"
          sx={{
            width: '100%',
            height: {
              xs: '300px', // Height for small screens
              sm: '400px', // Height for medium screens
              md: '500px', // Height for large screens
            },
            display: 'block',
            objectFit: 'cover',
          }}
          alt="Landing"
          src={viva}
        />
        <Box sx={{ textAlign: 'center', padding: 2 }}>
        <Typography
  variant="h2"
  sx={{
     fontFamily: 'ROBOTO'
  }}
>
Bienvenidos a Viva
      </Typography>
      <Typography
  variant="h5"
  sx={{
    fontSize: {
      xs: '1.25rem', // fontSize for extra-small screens
      sm: '1.5rem', // fontSize for small screens
      md: '1.75rem', // fontSize for medium screens
      lg: '2rem', // fontSize for large screens
    },
     fontFamily: 'Tajawal'
  }}
>
<br /> بنستهدف المتعة والإحترافية في رحلتنا معاك لتعلم اللغة
 <br/> بيبا مركز ثقافي هدفة تعليم اللغة في رحلة شيقة   
 <br />بيبني فيها مجتمعه الصغير معاك 

      </Typography>
     
      </Box>
      
      <InfoCard  />
      
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center',  
          // Center vertically
      }}
    >
      <Box
        component="img"
        sx={{
          height: '100px',         // Fixed height
          width: 'auto',           // Maintain aspect ratio
          display: 'block',        // Ensure the image is treated as a block element
        }}
        alt="Landing"
        src={logo}
      />
    </Box>
    </div>
  );
}

export default App;
