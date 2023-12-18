'use client'
import * as React from 'react';
import AppNavbar from '../modules/views/AppNavbar';
import AppFooter from '../modules/views/AppFooter';
import MenuSection from '../modules/views/MenuSection';
import withRoot from '../modules/withRoot';


function Menu() {
    return (
        <>
        <AppNavbar />
        <MenuSection />
        <AppFooter />
      </>

    )
}
export default withRoot(Menu);