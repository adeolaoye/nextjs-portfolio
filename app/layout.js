import './globals.css'
import { Montserrat } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'

const mont = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'olaDEV Portfolio',
  description: 'My portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Header />
        {children}
        <Projects />
        <Contact />
        <Footer />
      </body>
    </html>
  )
}
