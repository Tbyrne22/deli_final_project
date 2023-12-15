import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlined from '@mui/icons-material/CancelOutlined';
import HourglassTopOutlinedIcon from '@mui/icons-material/HourglassTopOutlined';
import InputAdornment from '@mui/material/InputAdornment';

function Subscribe() {
  const [open, setOpen] = React.useState(false);
  const [emailValue, setEmailValue] = React.useState('');
  const [status, setStatus] = React.useState(null);

  const statusOkStyle = {
    backgroundColor:'success.dark',
    width:40,
    height:40,
    borderRadius:'4px',
    color:'#FFF',
    p:'7px'
  };
  const statusErrorStyle = {
    ...statusOkStyle,
    backgroundColor:'error.main',
  };
  const statusLoadingStyle = {
    ...statusOkStyle,
    backgroundColor:'#1E92F4',
  };

  const onEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);
    //console.log('Email: ', emailValue);

    if(!emailValue){
      setStatus({'error': 'Please enter a valid email'});
      setOpen(true);
    }
    else{
      setStatus({'loading': true});

      const resp = await fetch('/api/subscribe-user', {
        body: JSON.stringify({'email': emailValue}),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      
      console.log('RESP: ', resp);
      
      if (resp.ok) {
        setStatus({'ok': true});
        setEmailValue('');
        //console.log('OK subscribed');
      } else {
        const data = await resp.json();
        console.log('Error: ', data);
        setStatus({'error': data.error});
        setOpen(true);
      }
      
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component="section" sx={{ mt:24, mb:18, display: 'flex' }}>
    <a name="subscribe"></a>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: 'warning.main',
              py: 8,
              px: 3,
            }}
          >
            <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
              <Typography variant="h2" component="h2" gutterBottom>
                Get Notified
              </Typography>
              <Typography variant="h5" sx={{fontSize:20}}>
                New specials and discounted offers
              </Typography>
              <TextField
                noBorder
                placeholder="Enter your email"
                autoCorrect="off"
                value={emailValue}
                onChange={onEmailChange}
                variant="standard"
                sx={{ width: '100%', mt: 3, mb: 2 }}
                InputProps={{
                  endAdornment:(
                    <InputAdornment position="end">
                      {
                        status && status.ok ?
                          (
                            <Box sx={{...statusOkStyle}}>
                              <CheckCircleOutlineIcon />
                            </Box>
                          ) : (
                            status && status.error ?
                            (
                              <Box sx={{...statusErrorStyle}}>
                                <CancelOutlined />
                              </Box>
                            ) : (
                              status && status.loading ?
                              (
                                <Box sx={{...statusLoadingStyle}}>
                                  <HourglassTopOutlinedIcon />
                                </Box>
                              ) : (
                                <></>
                              )
                            )
                          )
                      }                      
                      
                    </InputAdornment>
                  )
                }}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: '100%' }}
              >
                Keep me updated
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          
          <Box
            component="img"
            src="/images/subscribe-bg.png"
            alt="Get notified"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '446px',
              height:'372px',
            }}
          />
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message={status && status.error}
        onClose={handleClose}  
      />
    </Container>
  );
}

export default Subscribe;
