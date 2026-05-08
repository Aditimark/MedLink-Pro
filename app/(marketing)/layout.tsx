import type { ReactNode } from 'react'

import Navbar from '@/components/marketing/navbar'

export default function MarketingLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <main className='min-h-screen bg-[#F4F7FA]'>
      <Navbar />

      {children}

      {/* FOOTER */}
      <footer className='border-t border-slate-200 bg-white'>
        <div className='mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h2 className='text-lg font-bold tracking-tight text-[#0F172A]'>
              MedLink Pro
            </h2>

            <p className='mt-2 text-sm text-slate-500'>
              Clinical excellence & professional healthcare networking.
            </p>
          </div>

          <div className='flex flex-wrap gap-6 text-sm font-medium text-slate-500'>
            <a href='#'>
              Privacy Policy
            </a>

            <a href='#'>
              Terms of Service
            </a>

            <a href='#'>
              Help Center
            </a>

            <a href='#'>
              Contact Support
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}