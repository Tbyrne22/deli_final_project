'use client'
import * as React from 'react';
import AppNavbar from './modules/views/AppNavbar';
import HomepageHero from './modules/views/HomepageHero';
import withRoot from './modules/withRoot';

function Index() {
  return (
    <>
      <AppNavbar />
      <HomepageHero />
    </>
  );
}

export default withRoot(Index);
