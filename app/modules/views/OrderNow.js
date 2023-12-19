import * as React from 'react';
import Typography from '../components/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import DeliveryService from './DeliveryService';

const orderNowSection = {
  background: '#FFF',
  textAlign:'center',
  color:'#000',
  fontFamily:'Ubuntu',
  pt:{xs: 8, md:26},
  pb:{xs: 8}
};

export default function OrderNow() {
  return (
    <Box component="section" sx={{...orderNowSection}}>
      <Container>
        
        <Typography color="inherit" align="center" variant="h2" component="h2" marked="center">
          <a name="order-now"></a>Order Now
        </Typography>      
        <Typography color="inherit" align="center" variant="body1" >
        Order from your favorite delivery service.
        </Typography>
        
        <Container sx={{mt:'48px', width:{md:"70%"}}}>
          <Grid container>
            <Grid item xs={12} md={4}>
              <DeliveryService 
                title="Grubhub"
                link="https://www.grubhub.com" 
                image="/images/delivery-grubhub.png"
                rating={4.5}
                reviews={62}
              />
            </Grid>
            <Grid item xs={12} md={4} sx={{mt:{xs:4, md:0}}}>
              <DeliveryService 
                title="Uber Eats"
                link="https://www.ubereats.com/"
                image="/images/delivery-uber-eats.png"
                rating={4.8}
                reviews={202}
              />
            </Grid>
            <Grid item xs={12} md={4} sx={{mt:{xs:4, md:0}}}>
              <DeliveryService 
                title="Door Dash"
                link="https://www.doordash.com"
                image="/images/delivery-door-dash.png"
                rating={4.6}
                reviews={137}
              />
            </Grid>
          </Grid>
        </Container>

      </Container>
    </Box>   
  );
}
