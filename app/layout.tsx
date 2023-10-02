import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalBar } from './navbar/pc.navbar'
import { NavbarProvider } from './context/navbarContext'
import { BodyWarpper } from './widget/aside'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Talpx',
  description: 'A frontend website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarProvider>
          <GlobalBar />
          <BodyWarpper>
            {children}
          </BodyWarpper>
        </NavbarProvider>
      </body>
    </html>
  )
}
