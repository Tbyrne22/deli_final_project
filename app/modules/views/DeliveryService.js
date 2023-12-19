import * as React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const font = {
    fontFamily:"Ubuntu", 
    fontSize:16,
};

const imgStyle = {
  maxWidth:128, 
  maxHeight:86, 
  mx:'auto',
  my:'auto',  
  '&:hover': {
    opacity: 0.65,
    borderBottom:'solid 4px #FFF'
  }
};

export default function DeliveryService(props) {
   return (
    <Box sx={{textAlign:"center"}}>
        <Link sx={{width:128, height:86, mx:"auto", display:"flex", alignItems:"center"}} 
            href={props.link} target="_new"
            rel="noopener"
        >
            <Box component="img" src={props.image} sx={{...imgStyle}} alt={props.title} />
        </Link>
        
        <Rating name="read-only" precision={0.5} size="small" value={props.rating} readOnly />
        <Typography sx={{...font, fontWeight:700, display:"inline", ml:"12px"}}>
          {props.rating}/5
        </Typography>
        <Typography sx={{...font}}>
          ({props.reviews} Reviews)
        </Typography>

    </Box>
  );
}
