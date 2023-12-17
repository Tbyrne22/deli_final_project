import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'warning.main',
  mr: 1,
  '&:hover': {
    bgcolor: 'warning.dark',
  },
};

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', color:'#FFFFFF', bgcolor: 'primary.main' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: 'flex' }} nodetag="social links">
                <Box component="a" href="https://facebook.com" target="_new" rel="noopener" sx={iconStyle}>
                  <img
                    src="/static/themes/onepirate/appFooterFacebook.png"
                    alt="Facebook"
                  />
                </Box>
                <Box component="a" href="https://twitter.com" target="_new" rel="noopener" sx={iconStyle}>
                  <img
                    src="/static/themes/onepirate/appFooterTwitter.png"
                    alt="Twitter"
                  />
                </Box>
              </Grid>
              <Grid item>
              <Typography color="inherit" sx={{fontSize:16}}>
                expeditionsdeli@gmail.com
              </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Navigation
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link color="inherit" href="/menu">Menu</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link color="inherit" href="/#specials">Specials</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={8} md={4} sx={{fontSize:16}}>
            <Typography variant="h6" marked="left" gutterBottom>
              Location
            </Typography>
            {'123 Newark Ave, Newark, NJ'}
          </Grid>          
        </Grid>
      </Container>
    </Typography>
  );
}
