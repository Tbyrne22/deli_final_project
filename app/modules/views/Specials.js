import * as React from 'react';
import Typography from '../components/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import MediaCard from './MediaCard';

const specialSection = {
  background: '#FFF5F8',
  textAlign:'center',
  color:'#000',
  fontFamily:'Ubuntu',
  pt:{xs: 8, md:26},
  pb:{xs: 8}
};

export default function Specials() {
  return (
    <>
      <a name="specials"></a>
      <Box component="section" sx={{...specialSection}}>
        
        <Container>        
          <Typography color="inherit" align="center" variant="h2" component="h2" marked="center">
            Specials
          </Typography>      
          <Typography color="inherit" align="center" variant="body1" >
            Rotates at the end of each month.<br />Order soon to not miss out!
          </Typography>
          
          <Container sx={{mt:'48px'}}>
            <Grid container>
              <Grid item xs={12} md={4}>
                <MediaCard 
                  title="Monthly Special" 
                  image="/images/card-image-1.png"
                  text="Vietnamese-style Lemongrass Chicken Bahn-mi in a freshly baked french baguette."
                  price="12.99"
                  ends="12/31"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <MediaCard 
                  title="Discount Special 1" 
                  image="/images/card-image-2.png"
                  text="Smoked Turkey Hero with candied walnuts - substitute with portobello mushrooms."
                  price="11.99"
                  discount="4"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <MediaCard 
                  title="Discount Special 2" 
                  image="/images/card-image-3.png"
                  text="Roasted Pork Hero with dill-dijon mustard sauce in a seeded ciabatta roll."
                  price="10.99"
                  discount="3"
                />
              </Grid>
            </Grid>
          </Container>

        </Container>
      </Box>
    </>   
  );
}
