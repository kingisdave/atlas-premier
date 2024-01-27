'use client'

import { ThemeProvider } from 'next-themes'
import Header from './navigations/Header'
import Footer from './navigations/Footer'

export function Providers({ children } : {children: React.ReactNode}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <main className="text-neutral-900 dark:bg-slate-900 min-h-screen bg-white">
        <div className="relative">
          <Header />
        </div>
        <div className="relative my-10 pt-5 pb-20">
          {children}
        </div>
        <div className="relative my-2">
          <Footer />
        </div>
      </main>
    </ThemeProvider>
)}