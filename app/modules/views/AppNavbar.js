import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 8,
  lineHeight:'38px',
  fontWeight:400
};

const orderNow = {
    borderRadius: '4px',
    background: '#ED2C2C',
    padding: '6px 16px',
    lineHeight:'25px'
};
  
function AppNavbar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }}>
            <Link
                variant="h6"
                underline="none"
                color="inherit"
                href="/"
                data-tag="logo"
                sx={{ fontSize: 24, fontFamily: 'Ubuntu' }}
            >
                {'Expeditions Deli'}
            </Link>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }} role="menu">
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/menu"
              sx={rightLink}
              /*role="menuitem" */
            >
              {'Menu'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/#specials"
              sx={rightLink}
              role="menuitem"
            >
              {'Specials'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/#subscribe"
              sx={rightLink}
              role="menuitem"
            >
              {'Subscribe'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/#order-now"
              sx={{ ...rightLink, ...orderNow }}
              role="menuitem"
            >
              {'Order Now'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppNavbar;
