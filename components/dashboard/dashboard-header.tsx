'use client'

import { useState } from 'react'
import Link from 'next/link'

import {
  Bell,
  Menu,
  MessageSquare,
  Search,
  X,
} from 'lucide-react'

const tabs = [
  'Home',
  'Feed',
  'Jobs',
  'Network',
  'Cases',
  'Institutions',
]

export default function DashboardHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false)

  return (
    <>
      {/* HEADER */}
      <header className='border-b border-slate-200 bg-white'>
        {/* TOP NAV */}
        <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-6'>
          {/* LEFT */}
          <div className='flex items-center gap-5 lg:gap-10'>
            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() =>
                setMobileMenuOpen(true)
              }
              className='flex h-10 w-10 items-center justify-center border border-slate-300 bg-white xl:hidden'
            >
              <Menu className='h-5 w-5 text-slate-600' />
            </button>

            {/* LOGO */}
            <Link
              href='/'
              className='flex items-center gap-3'
            >
              <div className='h-8 w-8 rounded-sm bg-[#0EA5E9]' />

              <div>
                <h1 className='text-[22px] font-bold tracking-tight text-[#0F172A] lg:text-[26px]'>
                  MedLink Pro
                </h1>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <div className='hidden items-center gap-8 lg:flex'>
              {tabs.map((tab, index) => {
  const href =
    tab === 'Home'
      ? '/'
      : '/dashboard'

  return (
    <Link
      key={tab}
      href={href}
      className={`pb-1 text-sm font-semibold transition ${
        index === 1
          ? 'border-b-2 border-[#0284C7] text-[#0284C7]'
          : 'text-slate-500 hover:text-[#0F172A]'
      }`}
    >
      {tab}
    </Link>
  )
})}
            </div>
          </div>

          {/* RIGHT */}
          <div className='flex items-center gap-3'>
            {/* SEARCH */}
            <div className='hidden items-center border border-slate-300 bg-white px-3 lg:flex'>
              <Search className='h-4 w-4 text-slate-400' />

              <input
                placeholder='Search specialists, research...'
                className='h-10 w-[240px] px-3 text-sm outline-none'
              />
            </div>

            {/* ICONS */}
            <button className='hidden h-10 w-10 items-center justify-center border border-slate-300 bg-white transition hover:bg-slate-50 lg:flex'>
              <Bell className='h-4 w-4 text-slate-600' />
            </button>

            <button className='hidden h-10 w-10 items-center justify-center border border-slate-300 bg-white transition hover:bg-slate-50 lg:flex'>
              <MessageSquare className='h-4 w-4 text-slate-600' />
            </button>

            {/* USER */}
            <img
              src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop'
              alt='Doctor'
              className='h-10 w-10 object-cover'
            />
          </div>
        </div>

        {/* MOBILE TABS */}
        <div className='mx-auto flex max-w-7xl overflow-x-auto border-t border-slate-200 lg:hidden'>
          {tabs.map((tab, index) => {
  const href =
    tab === 'Home'
      ? '/'
      : '/dashboard'

  return (
    <Link
      key={tab}
      href={href}
      className={`flex-1 whitespace-nowrap px-4 py-3 text-center text-sm font-semibold transition ${
        index === 1
          ? 'border-b-2 border-[#0284C7] text-[#0284C7]'
          : 'text-slate-500'
      }`}
    >
      {tab}
    </Link>
  )
})}
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <>
          {/* OVERLAY */}
          <div
            onClick={() =>
              setMobileMenuOpen(false)
            }
            className='fixed inset-0 z-40 bg-black/40 xl:hidden'
          />

          {/* DRAWER */}
          <div className='fixed left-0 top-0 z-50 flex h-screen w-[300px] flex-col border-r border-slate-200 bg-white xl:hidden'>
            {/* TOP */}
            <div className='flex h-16 items-center justify-between border-b border-slate-200 px-5'>
              <Link
                href='/'
                className='flex items-center gap-3'
              >
                <div className='h-8 w-8 rounded-sm bg-[#0EA5E9]' />

                <h1 className='text-2xl font-bold tracking-tight text-[#0F172A]'>
                  MedLink Pro
                </h1>
              </Link>

              <button
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className='flex h-10 w-10 items-center justify-center border border-slate-300'
              >
                <X className='h-5 w-5 text-slate-600' />
              </button>
            </div>

            {/* PROFILE */}
            <div className='border-b border-slate-200 p-5'>
              <div className='flex items-center gap-4'>
                <img
                  src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop'
                  alt='Doctor'
                  className='h-14 w-14 object-cover'
                />

                <div>
                  <h3 className='font-semibold text-[#0F172A]'>
                    Dr. Sarah Jenkins
                  </h3>

                  <p className='text-sm text-slate-500'>
                    Cardiologist
                  </p>
                </div>
              </div>
            </div>

            {/* NAVIGATION */}
            <div className='flex-1 p-5'>
              <nav className='space-y-2'>
                {tabs.map((tab, index) => {
  const href =
    tab === 'Home'
      ? '/'
      : '/dashboard'

  return (
    <Link
      key={tab}
      href={href}
      className={`flex h-12 w-full items-center px-4 text-sm font-semibold transition ${
        index === 1
          ? 'bg-[#0284C7] text-white'
          : 'text-slate-600 hover:bg-slate-100'
      }`}
    >
      {tab}
    </Link>
  )
})}
              </nav>

              {/* CTA */}
              <button className='mt-8 h-12 w-full bg-black text-sm font-semibold text-white'>
                Post a Job
              </button>
            </div>

            {/* FOOTER */}
            <div className='border-t border-slate-200 p-5 text-sm text-slate-500'>
              MedLink Pro Clinical Network
            </div>
          </div>
        </>
      )}
    </>
  )
}