import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const backgroundImage = 'images/menu.png';

const menuPage = {
    background: '#FFF',
    textAlign:'center',
    color:'#000',
    fontFamily:'Ubuntu',
    py:{xs: 8}
  };

  export default function MenuSection() {
    return (
        <Box component="section" sx={{...menuPage}}>
            <Container sx= {{ display: 'flex', justifyContent: 'center' }}>
            <img
                src={backgroundImage}
                alt="increase priority"
                style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
            />
            </Container>
        </Box>
    );
  }