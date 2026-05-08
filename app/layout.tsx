import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/components/providers/auth-provider'

import { Manrope, Public_Sans } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-heading',
})

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'MedNetwork',
  description: 'Where Medical Excellence Connects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${publicSans.variable}`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}