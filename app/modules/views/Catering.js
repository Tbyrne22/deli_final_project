import * as React from 'react';
import Typography from '../components/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import DeliveryService from './DeliveryService';

const sectionFont = {
  background: '#FFF5F8',
  textAlign:'center',
  color:'#000',
  fontFamily:'Ubuntu',
  pt:{xs: 8, md:26},
  pb:{xs: 8}
};

const cateringStyle = {
  width:'480px',
  height:'292px', 
  background: 'url(/images/catering-image.png)',
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
  border:'solid 2px #000000',
  display:'flex',
  alignItems: 'center',
  mx:{xs:'auto', md:0},
};

const cateringInner = {
  width:'350px',
  height:'118px',
  textAlign:'center',
  mx:'auto',
  background:'rgba(255, 255, 255, 0.50)',
  mixBlendMode:'hard-light',
  display:'flex',
  alignItems: 'center',
  justifyContent:'center',
};
const cateringInnerText = {
  color:'#FFFFFF',
  textAlign:'center',
  fontSize:'36px',
  textTransform:'capitalize',
  letterSpacing:'0.4px',
  lineHeight:'50px',
  fontWeight:500,
  textShadow:'-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
};

const subs = {
  mt:{xs:6, md:0},
  ml:{xs:0, md:6, lg:12},
  display:'flex',
  justifyContent: 'center',
};
const subBag = {
  width:{xs:298, md:234, lg:298},
  py:3,
  borderRadius:'40px',
  background:'#FFF',
  textAlign:'center',
};
const subBox = {
  ...subBag,
  ml:'36px',
};

const subBagText = {
  fontSize:18,
  lineHeight:'18px',
  textTransform:'capitalize',
  fontWeight:500,
  textAlign:'center',
  mt:3,
};

export default function Catering() {
  return (
    <Box component="section" sx={{...sectionFont}}>
      <Typography color="inherit" align="center" variant="h2" component="h2" marked="center">
        Catering
      </Typography>      
      
      <Container sx={{mt:'80px', px:'0 !important', display:{xs:'block', md:'flex', justifyContent:'center'}}}>
        <Box sx={{...cateringStyle}}>
          <Box sx={{...cateringInner}}>
            <Typography sx={{...cateringInnerText}}>
              Convenient Bundles for your needs
            </Typography>
          </Box>
        </Box>
        <Box sx={{...subs}}>
          <Box sx={{...subBag}}>
            <Typography variant="h3" color="inherit" align="center" component="h3">
              Sub Bag
            </Typography>
            <Box component="img" sx={{mt:5}}
              src="/images/lunch-bag.png" alt="Sub Bag"
            />
            <Typography sx={{...subBagText}}>
              Six 6&quot; Subs<br />Servers: 6
            </Typography>              
          </Box>
          <Box sx={{...subBox}}>
            <Typography variant="h3" color="inherit" align="center" component="h3">
              Sub Box
            </Typography>
            <Box component="img" sx={{mt:5}}
              src="/images/lunch-box.png" alt="Sub Box"
            />
            <Typography sx={{...subBagText}}>
              Six 12&quot; Subs<br />Servers: 12
            </Typography>              
          </Box>
        </Box>
      </Container>
    </Box>   
  );
}
