import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chuck a quote',
  description: 'Probejob für W&S',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-bg text-white`}>
        <div className='flex max-h-screen flex-col p-4'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
