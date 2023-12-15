import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage = 'images/hero-image.png';

const heroAction = {
   '&:hover':{
    backgroundColor:'#f00f00',
  },
};

export default function HomepageHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h1" marked="center">
        Explore Your Flavor Profile
      </Typography>      
      <Typography color="inherit" align="center" variant="h5" component="h5" sx={{ mb: 0, mt: { xs: 4, sm: '28px' } }}>
        With Rotating Regional Dishes From Around The Globe
      </Typography>
      <Typography variant="body2" color="inherit" sx={{ mt: { xs: '40px', sm:'140px'} }}>
        Discover Limited-Time Items
      </Typography>
      <Button color="secondary" variant="contained" size="large" component="a" href="/#specials" sx={{...heroAction, minWidth: 200, mt: '18px' }}>
        View Specials
      </Button>

    </ProductHeroLayout>
  );
}
