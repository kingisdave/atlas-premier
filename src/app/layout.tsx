import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { switchThemeDuration } from './_constants'
import { Providers } from './_components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'atlas-premier',
  description: 'Assessment for atlas-premier by David Ayangunna',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <head>
        <link rel='icon' href='/logo.png'/>
      </head>
      <body
        className={`${inter.className} bg-slate-100 dark:bg-[#0d1117] ${switchThemeDuration}`}
      >
        {/* Wrapping the children prop */}
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
