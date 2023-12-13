'use client'
import * as React from 'react';
import AppNavbar from './modules/views/AppNavbar';
import HomepageHero from './modules/views/HomepageHero';
import Specials from './modules/views/Specials';
import withRoot from './modules/withRoot';

function Index() {
  return (
    <>
      <AppNavbar />
      <HomepageHero />
      <Specials />
    </>
  );
}

export default withRoot(Index);
