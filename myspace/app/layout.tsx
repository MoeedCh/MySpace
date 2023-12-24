import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavMenu from './NavMenu'
import AuthProvider from './AuthProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MySpace',
  description: 'Generated by Moeed Chaudhry',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>  
      <html lang="en">
        <body className={inter.className}>
          <NavMenu />
            {children}
        </body>
      </html>
    </AuthProvider>
  )
}
