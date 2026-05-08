'use client'

import Link from 'next/link'

import { useState } from 'react'

import {
  Menu,
  X,
} from 'lucide-react'

import { useAuth } from '@/components/providers/auth-provider'

import { AuthService } from '@/services/auth/auth.service'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false)

  const { user } = useAuth()

  async function handleLogout() {
    await AuthService.logout()

    window.location.href = '/'
  }

  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-xl'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-6'>
        {/* LOGO */}
        <Link
          href='/'
          className='flex items-center gap-3'
        >
          <div className='h-8 w-8 rounded-sm bg-[#0284C7]' />

          <div>
            <h1 className='text-[24px] font-bold tracking-tight text-[#0F172A]'>
              MedLink Pro
            </h1>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className='hidden items-center gap-8 lg:flex'>
          <Link
            href='/'
            className='text-sm font-semibold text-slate-600 transition hover:text-[#0F172A]'
          >
            Home
          </Link>

          <Link
            href='/about'
            className='text-sm font-semibold text-slate-600 transition hover:text-[#0F172A]'
          >
            About
          </Link>

          <Link
            href='/how-it-works'
            className='text-sm font-semibold text-slate-600 transition hover:text-[#0F172A]'
          >
            How It Works
          </Link>

          <Link
            href='/contact'
            className='text-sm font-semibold text-slate-600 transition hover:text-[#0F172A]'
          >
            Contact
          </Link>
        </nav>

        {/* AUTH ACTIONS */}
        <div className='hidden items-center gap-3 lg:flex'>
          {user ? (
            <>
              <Link
                href='/dashboard'
                className='text-sm font-semibold text-slate-600 transition hover:text-[#0F172A]'
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className='flex h-11 items-center border border-slate-300 px-5 text-sm font-semibold text-[#0F172A] transition hover:bg-slate-50'
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href='/login'
                className='text-sm font-semibold text-slate-600 transition hover:text-[#0F172A]'
              >
                Sign In
              </Link>

              <Link
                href='/register'
                className='flex h-11 items-center bg-[#0284C7] px-5 text-sm font-semibold text-white transition hover:bg-[#0369A1]'
              >
                Join Network
              </Link>
            </>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() =>
            setMobileMenuOpen(true)
          }
          className='flex h-10 w-10 items-center justify-center border border-slate-300 bg-white lg:hidden'
        >
          <Menu className='h-5 w-5 text-slate-700' />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <>
          {/* OVERLAY */}
          <div
            onClick={() =>
              setMobileMenuOpen(false)
            }
            className='fixed inset-0 z-40 bg-black/40 lg:hidden'
          />

          {/* DRAWER */}
          <div className='fixed right-0 top-0 z-50 flex h-screen w-[300px] flex-col border-l border-slate-200 bg-white lg:hidden'>
            {/* HEADER */}
            <div className='flex h-16 items-center justify-between border-b border-slate-200 px-5'>
              <div className='flex items-center gap-3'>
                <div className='h-8 w-8 rounded-sm bg-[#0284C7]' />

                <h1 className='text-2xl font-bold tracking-tight text-[#0F172A]'>
                  MedLink Pro
                </h1>
              </div>

              <button
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className='flex h-10 w-10 items-center justify-center border border-slate-300'
              >
                <X className='h-5 w-5 text-slate-700' />
              </button>
            </div>

            {/* NAV */}
<div className='flex-1 p-5'>
  <nav className='space-y-2'>
    <Link
      href='/'
      onClick={() => setMobileMenuOpen(false)}
      className='flex h-12 items-center px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-100'
    >
      Home
    </Link>

    <Link
      href='/about'
      onClick={() => setMobileMenuOpen(false)}
      className='flex h-12 items-center px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-100'
    >
      About
    </Link>

    <Link
      href='/how-it-works'
      onClick={() => setMobileMenuOpen(false)}
      className='flex h-12 items-center px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-100'
    >
      How It Works
    </Link>

    <Link
      href='/contact'
      onClick={() => setMobileMenuOpen(false)}
      className='flex h-12 items-center px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-100'
    >
      Contact
    </Link>

    {/* AUTH */}
    <div className='mt-6 space-y-3'>
      {user ? (
        <>
          <Link
            href='/dashboard'
            onClick={() => setMobileMenuOpen(false)}
            className='flex h-12 items-center justify-center bg-[#0284C7] text-sm font-semibold text-white'
          >
            Dashboard
          </Link>

          <button
            onClick={handleLogout}
            className='h-12 w-full border border-slate-300 text-sm font-semibold text-[#0F172A]'
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link
            href='/login'
            onClick={() => setMobileMenuOpen(false)}
            className='flex h-12 items-center justify-center border border-slate-300 text-sm font-semibold text-[#0F172A]'
          >
            Sign In
          </Link>

          <Link
            href='/register'
            onClick={() => setMobileMenuOpen(false)}
            className='flex h-12 items-center justify-center bg-[#0284C7] text-sm font-semibold text-white'
          >
            Join Network
          </Link>
        </>
      )}
    </div>
  </nav>
</div>

            {/* FOOTER */}
            <div className='border-t border-slate-200 p-5 text-sm text-slate-500'>
              Professional Healthcare Network
            </div>
          </div>
        </>
      )}
    </header>
  )
}