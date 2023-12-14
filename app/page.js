'use client'
import * as React from 'react';
import AppNavbar from './modules/views/AppNavbar';
import HomepageHero from './modules/views/HomepageHero';
import Specials from './modules/views/Specials';
import OrderNow from './modules/views/OrderNow';
import Catering from './modules/views/Catering';
import withRoot from './modules/withRoot';

function Index() {
  return (
    <>
      <AppNavbar />
      <HomepageHero />
      <Specials />
      <OrderNow />
      <Catering />
    </>
  );
}

export default withRoot(Index);
