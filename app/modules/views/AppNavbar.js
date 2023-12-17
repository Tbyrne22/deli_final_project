import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: {md: 4, lg: 8},
  lineHeight:'38px',
  fontWeight:400,
  display:{sm: 'none', md: 'block'}
};

const orderNow = {
    borderRadius: '4px',
    background: '#ED2C2C',
    padding: '6px 16px',
    lineHeight:'25px',
    '&:hover': {
      backgroundColor:'#aa2e25',
    }
};

  
function AppNavbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const onMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const onMenuClose = () => {
    setAnchorEl(null);
  };
  
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

            <MenuIcon sx={{fontSize:'38px', cursor: 'pointer', display: {md:'none'} }}
              id="menu-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={onMenuClick}
            />

            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={onMenuClose}
              MenuListProps={{ 'aria-labelledby': 'menu-button', }}
              sx={{ width:400}}
            >
              <MenuItem onClick={onMenuClose}>
                <Link underline="none" href="/menu">{'Menu'}</Link>
              </MenuItem>
              <MenuItem onClick={onMenuClose}>
                <Link underline="none" href="/#specials">{'Specials'}</Link>
              </MenuItem>
              <MenuItem onClick={onMenuClose}>
                <Link underline="none" href="/#subscribe">{'Subscribe'}</Link>
              </MenuItem>
              <MenuItem onClick={onMenuClose}>
                  <Link underline="none" href="/#order-now">{'Order Now'}</Link>
              </MenuItem>
            </Menu>

          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppNavbar;
