import React from 'react'
import Link from 'next/link'

interface RegisterLayoutProps {
  children: React.ReactNode
}

export default function RegisterLayout({
  children,
}: RegisterLayoutProps) {
  return (
    <div className='min-h-screen bg-[#F4F7FA]'>
      {/* TOP BAR */}
      <div className='border-b border-slate-200 bg-white'>
        <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-6'>
          {/* LOGO */}
          <Link href='/' className='flex items-center gap-3'>
  <div className='h-9 w-9 rounded-sm bg-[#0EA5E9]' />

  <div>
    <h1 className='text-2xl font-bold tracking-tight text-[#0F172A]'>
      MedLink Pro
    </h1>
  </div>
</Link>

          {/* RIGHT */}
          <div className='flex items-center gap-2 text-sm text-slate-500'>
            <span>Already have an account?</span>

            <Link
              href='/login'
              className='font-semibold text-[#0284C7]'
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className='px-6 py-14'>
        <div className='mx-auto max-w-5xl'>
          {children}
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-slate-200 bg-white'>
        <div className='mx-auto flex flex-col gap-4 px-6 py-6 text-sm text-slate-500 md:max-w-7xl md:flex-row md:items-center md:justify-between'>
          <div>
            <p className='font-semibold text-[#0F172A]'>
              MedLink Pro
            </p>

            <p className='mt-1'>
              © 2025 MedLink Pro. Clinical Excellence &
              Professional Integrity.
            </p>
          </div>

          <div className='flex flex-wrap gap-6'>
            <Link href='#'>Privacy Policy</Link>
            <Link href='#'>Terms of Service</Link>
            <Link href='#'>Help Center</Link>
            <Link href='#'>Contact Support</Link>
          </div>
        </div>
      </div>
    </div>
  )
}