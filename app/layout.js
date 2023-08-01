import './globals.css'
import  styles from './styles.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Teemu Vaalasmaa',
  description: 'testing testing testing',
}

const Navigation = () => {
  return (
    <div className={styles.topnav}>
      <ul>
        <li><a href="./">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/links">Links</a></li>
      </ul>
    </div>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navigation />
      {children}
      </body>
    </html>
  )
}
