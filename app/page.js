'use client'
import * as React from 'react';
import AppNavbar from './modules/views/AppNavbar';
import withRoot from './modules/withRoot';

function Index() {
  return (
    <>
      <AppNavbar />
    </>
  );
}

export default withRoot(Index);
