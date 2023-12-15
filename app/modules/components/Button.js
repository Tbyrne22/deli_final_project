import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';

const ButtonRoot = styled(MuiButton)(({ theme, size }) => ({
  borderRadius: 4,
  fontWeight: 700,
  fontFamily: 'Ubuntu',
  padding: theme.spacing(2, 4),
  fontSize: '16px',
  boxShadow: 'none',
  textTransform:'capitalize',
  '&:active, &:focus': {
    boxShadow: 'none',
  },
  // '&:hover':{
  //   backgroundColor:'#f00f00',
  // },
  ...(size === 'small' && {
    padding: theme.spacing(1, 3),
    fontSize: theme.typography.pxToRem(13),
  }),
  ...(size === 'large' && {
    padding: theme.spacing(2, 5),
    fontSize: theme.typography.pxToRem(16),
  }),
}));

// See https://mui.com/guides/typescript/#usage-of-component-prop for why the types uses `C`.
function Button(props) {
  return <ButtonRoot {...props} />;
}

export default Button;
