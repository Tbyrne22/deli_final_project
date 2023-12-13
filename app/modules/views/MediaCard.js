import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  const priceStyle = {
    color: (props.discount ? '#557B52 !important' : '#000000'),
    fontSize:18,
  };
  const discountStyle = {
    color: '#000000',
    textDecoration: 'line-through',
    fontSize:16,
  };
  const markup = (props.discount ? (parseFloat(props.price) + parseFloat(props.discount)) : null);
  const priceText = '$' + props.price + (props.discount ? ' ($' + props.discount + ' OFF)' : '');
  const discountText = (props.discount ? ('$' + markup.toFixed(2)) : '');
  const endText = (props.ends ? ' Ends ' + props.ends : '');

  return (
    <Card sx={{ maxWidth: {md: 262}, mx:'auto', mt:{xs:4, md:0} }}>
      <CardMedia
        sx={{ height: 146 }}
        image={props.image}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" sx={{mb:2}}>
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{textAlign:'left'}}>
          {props.text}
        </Typography>
      </CardContent>
      <CardActions sx={{px:2}}>
        <Typography sx={{...priceStyle}}>
          {priceText}
        </Typography>
        <Typography sx={{...discountStyle}}>
          {discountText}
        </Typography>
        <Typography sx={{color:"#FF0000", fontSize:16, ml:'auto !important'}}>
          {endText}
        </Typography>        
      </CardActions>
    </Card>
  );
}
