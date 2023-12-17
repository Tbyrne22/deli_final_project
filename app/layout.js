import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/CookieBanner';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Expeditions Deli - The Unconventional Food Destination',
  description: 'Newark, New Jersey. Try our sandwich of the month special - 20% off and limited time!',
  keywords: 'sandwich, explore, deli, tasty, lunch, hungry, promotions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu&family=Roboto&family=Playfair+Display&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body className={inter.className}>{children}
        <GoogleAnalytics measurementId='G-XFQ3KSWWJV'/>
        <CookieBanner />
      </body>
    </html>
  )
}
