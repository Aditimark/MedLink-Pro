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
        {/* PROFESSIONALS */}
        <div className='border-b border-slate-200'>
          <div className='mx-auto max-w-7xl px-6 py-10'>
            <div className='flex items-center justify-between'>
              <h3 className='text-sm font-semibold uppercase tracking-[0.2em] text-slate-500'>
                Healthcare Researchers & Professionals
              </h3>

              <p className='text-sm text-slate-400'>
                Featured Community
              </p>
            </div>

            <div className='mt-8 flex gap-4 overflow-x-auto pb-2'>
              {Array.from({ length: 10 }).map(
                (_, index) => (
                  <div
                    key={index}
                    className='flex min-w-[220px] items-center gap-4 border border-slate-200 bg-[#F8FAFC] p-4'
                  >
                    <div className='h-14 w-14 rounded-full bg-slate-200' />

                    <div>
                      <div className='h-3 w-24 bg-slate-200' />

                      <div className='mt-3 h-3 w-16 bg-slate-100' />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* UNIVERSITIES */}
        <div className='border-b border-slate-200'>
          <div className='mx-auto max-w-7xl px-6 py-10'>
            <div className='flex items-center justify-between'>
              <h3 className='text-sm font-semibold uppercase tracking-[0.2em] text-slate-500'>
                Research Institutions & Universities
              </h3>

              <p className='text-sm text-slate-400'>
                Institutional Network
              </p>
            </div>

            <div className='mt-8 flex gap-4 overflow-x-auto pb-2'>
              {Array.from({ length: 8 }).map(
                (_, index) => (
                  <div
                    key={index}
                    className='flex h-24 min-w-[220px] items-center justify-center border border-slate-200 bg-[#F8FAFC]'
                  >
                    <div className='h-8 w-32 bg-slate-200' />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className='mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h2 className='text-lg font-bold tracking-tight text-[#0F172A]'>
              MedLink Pro
            </h2>

            <p className='mt-2 text-sm text-slate-500'>
              Research collaboration & healthcare networking platform.
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