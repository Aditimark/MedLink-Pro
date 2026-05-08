'use client'

import { motion } from 'framer-motion'
import React from 'react'
import Link from 'next/link'

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
}

export default function AuthLayout({
  children,
  title,
  subtitle,
}: AuthLayoutProps) {
  return (
    <div className='min-h-screen bg-[#F4F7FA]'>
      <div className='grid min-h-screen lg:grid-cols-[42%_58%]'>
        {/* LEFT PANEL */}
        <div className='relative hidden overflow-hidden bg-[#0F172A] lg:block'>
          {/* Background Image */}
          <div
            className='absolute inset-0 bg-cover bg-center opacity-30'
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1400&auto=format&fit=crop')",
            }}
          />

          {/* Overlay */}
          <div className='absolute inset-0 bg-[#0F172A]/70' />

          <div className='relative z-10 flex h-full flex-col justify-between p-14 text-white'>
            {/* Logo */}
            <Link href='/' className='flex items-center gap-3'>
  <div className='h-10 w-10 rounded-sm bg-[#0EA5E9]' />

  <div>
    <h1 className='text-2xl font-bold tracking-tight'>
      MedLink Pro
    </h1>

    <p className='text-sm text-slate-300'>
      Clinical Excellence Network
    </p>
  </div>
</Link>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className='max-w-lg'
            >
              <h2 className='text-5xl font-bold leading-[1.05] tracking-tight'>
                Precision in clinical networking and institutional excellence.
              </h2>

              <p className='mt-6 text-lg leading-relaxed text-slate-300'>
                Access your professional dashboard to manage opportunities,
                research collaboration, and healthcare recruitment workflows.
              </p>

              <div className='mt-10 inline-flex items-center gap-2 border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 px-4 py-2 text-sm text-sky-200'>
                <div className='h-2 w-2 rounded-full bg-[#14B8A6]' />

                HIPAA Compliant Environment
              </div>
            </motion.div>

            {/* Bottom */}
            <div className='text-sm text-slate-400'>
              © 2025 MedLink Pro. Clinical Excellence & Professional Integrity.
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className='flex items-center justify-center px-6 py-12 sm:px-10'>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='w-full max-w-md'
          >
            {/* Mobile Branding */}
            <div className='mb-10 lg:hidden'>
              <Link href='/' className='flex items-center gap-3'>
  <div className='h-10 w-10 rounded-sm bg-[#0EA5E9]' />

  <div>
    <h1 className='text-2xl font-bold tracking-tight text-[#0F172A]'>
      MedLink Pro
    </h1>

    <p className='text-sm text-slate-500'>
      Clinical Excellence Network
    </p>
  </div>
</Link>
            </div>

            {/* Auth Header */}
            <div className='mb-8'>
              <h1 className='text-4xl font-bold tracking-tight text-[#0F172A]'>
                {title}
              </h1>

              <p className='mt-3 text-base leading-relaxed text-slate-500'>
                {subtitle}
              </p>
            </div>

            {/* Form */}
            <div className='border border-slate-200 bg-white p-8 shadow-sm'>
              {children}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}