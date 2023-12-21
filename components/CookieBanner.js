'use client'

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@/app/modules/components/Button';
import InfoIcon from '@mui/icons-material/Info';
import Slide from '@mui/material/Slide';
import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';
import { useState, useEffect } from 'react';
import Typography from '@/app/modules/components/Typography';

function Transition(props) {
  return <Slide {...props} direction="up" />;
}

const cookieContainer = {
  backgroundColor:'#FFFFFF',
  height: {xs:'auto', md:'auto'},
  position: 'fixed',
  bottom:0,
  zIndex:10,
  width:'100%',
};

const buttonCss = {
  px:'16px',
  py:'8px',
  color:'#FFFFFF',
  fontWeight:500,
  ml:{xs:'10px', md:'40px'},
  mt:{xs:'24px', md:'0'},
  lineHeight:'16px',
};

const acceptCss = {
  backgroundColor:'#008000',
  '&:hover':{
    backgroundColor:'#4caf50',
  }
};

const rejectCss = {
  backgroundColor:'#F00F00',
  '&:hover':{
    backgroundColor:'#f44336',
  }
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);  

  const onLoad = () => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    console.log('IN onload, stored value: ', storedCookieConsent);
    consentChanged(storedCookieConsent);
    console.log('Consent set', storedCookieConsent);
    
    if(storedCookieConsent == null) setOpen(true);
  };
  
  const consentChanged = (cookieConsent) => {
    const newValue = cookieConsent ? "granted" : "denied"
    console.log('IN consent changed', newValue, cookieConsent);

    window.gtag("consent", "update", {
      analytics_storage: newValue
    });
  
    setLocalStorage("cookie_consent", cookieConsent);
  
    console.log("Cookie Consent: ", cookieConsent, newValue);
  };
  
  const acceptCookie = () => {
    consentChanged(true);
    setOpen(false);
  };

  const rejectCookie = () => {
    consentChanged(false);
    setOpen(false);
  };

  return (
    <Box sx={{...cookieContainer, display:`${open ? "block":"none"}`}}>
      <Box sx={{ width:{xs:'auto', md:'892px', lg:'1256px'}, mx:{xs:3, md:'auto'}, 
        padding:{xs:'24px 0', md:'24px 0 24px 0'}, position:'relative'}}>
        <Box sx={{
          border:'solid 1px #CCCCCC', 
          backgroundColor:'#FFF5F8', 
          pl:'10px', pr:'20px', py:'18px', 
          display: {xs:'block', md:'flex'},
          alignItems:'center',
        }}
        >
          <InfoIcon sx={{display:{xs: 'none', md: 'block'} }} />
          <Box sx={{width:{xs:'auto', md:'460px', lg:'815px'}, ml:'10px'}}>
            <Typography sx={{fontFamily:'Roboto'}}>
              We use cookies on our website to enhance your browsing experience. By clicking &apos;Accept,&apos; you agree to 
              the use of cookies as described in our Cookie Policy. You can manage your preferences and learn more 
              about our use of cookies by visiting our <Link href="/policy">Privacy Policy</Link>.
            </Typography>
          </Box>

          <Button sx={{...buttonCss, ...rejectCss}} onClick={rejectCookie}>Reject Cookies</Button>
          <Button sx={{...buttonCss, ...acceptCss}} onClick={acceptCookie} >Accept Cookies</Button>
        </Box>
      </Box>
    </Box>
      
  );
}
