import { Inter } from 'next/font/google'
// import './globals.css'
import Script from 'next/script'
import Navigation from './components/Navigation.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: ' Tecno Art Designe| | como  Empezar a Programacion | guia facil   ',
  description: 'como empezar en el mundo de la Programacion',
}
const scriptContent = `
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-MNG85WPY8L');
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      {/* <link rel="icon" href="/public/favicon.ico" type='image/ico' sizes="32/32" /> */}

    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MNG85WPY8L"   />
    
    <script dangerouslySetInnerHTML={{ __html: scriptContent }} />

    </head>
    
      <body
       className={` ${inter.className}`}
       >
        <Navigation/>
       {children}

       
       </body>
    </html>
  )
}
