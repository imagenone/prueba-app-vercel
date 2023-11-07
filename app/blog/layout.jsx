import { Inter } from 'next/font/google'
// import './globals.css'
import Script from 'next/script'
import Navigation from './components/Navigation.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: ' blog | como ser programador junior | que computadora Comprar | javascript  ',
  description: 'fundamentos de la programación, elige un lenguaje de programación que te interese,',
}


export default function RootLayout({ children }) {
  return (
    
   
    
      <>
        
       {children}

       
       </>
    
  )
}
