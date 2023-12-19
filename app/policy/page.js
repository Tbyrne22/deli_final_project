'use client'
import * as React from 'react';
import AppNavbar from '../modules/views/AppNavbar';
import AppFooter from '../modules/views/AppFooter';
import PrivacyContent from '../modules/views/PrivacyContent';
import withRoot from '../modules/withRoot';


function Policy() {
    return (
        <>
        <AppNavbar />
        <PrivacyContent />
        <AppFooter />
      </>

    )
}
export default withRoot(Policy);