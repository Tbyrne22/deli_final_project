'use client'

import Script from 'next/script';
import {usePathname, useSearchParams} from 'next/navigation';
import { useEffect } from 'react';
import {pageview} from '@/lib/gtagHelper';

export default function GoogleAnalytics({ measurementId }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = pathname + searchParams.toString();

        pageview(measurementId, url);
    }, [pathname, searchParams, measurementId])


  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('consent', 'default', {
                'analytics_storage': 'denied'
            });
            
            gtag('config', '${measurementId}', {
                page_path: window.location.pathname,
            });
            `
        }}
      />
    </>
  )
}
