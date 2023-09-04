import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eavesdrop',
  description: 'A cloud-based music library for DJs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="relative min-h-screen flex bg-midnight-100 text-powder">
          <Sidebar />
          <div className="flex-1">{children}</div>
          
        </div>
      </body>
    </html>
  )
}
