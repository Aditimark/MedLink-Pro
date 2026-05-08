'use client'

import Link from 'next/link'
import {
  Briefcase,
  Compass,
  Home,
  Hospital,
  Settings,
  User,
} from 'lucide-react'

const navItems = [
  {
    label: 'Home Feed',
    icon: Home,
    href: '/dashboard',
    active: true,
  },
  {
    label: 'Job Board',
    icon: Briefcase,
    href: '#',
  },
  {
    label: 'Candidates',
    icon: Compass,
    href: '#',
  },
  {
    label: 'Institutions',
    icon: Hospital,
    href: '#',
  },
  {
    label: 'My Profile',
    icon: User,
    href: '#',
  },
]

export default function Sidebar() {
  return (
    <aside className='hidden w-[240px] border-r border-slate-200 bg-[#F8FAFC] xl:flex xl:flex-col'>
      {/* LOGO */}
      <div className='border-b border-slate-200 px-6 py-5'>
        <Link href='/' className='flex items-center gap-3'>
          <div className='h-8 w-8 rounded-sm bg-[#0EA5E9]' />

          <div>
            <h1 className='text-[26px] font-bold tracking-tight text-[#0F172A]'>
              MedLink Pro
            </h1>
          </div>
        </Link>
      </div>

      {/* PLATFORM */}
      <div className='px-6 py-6'>
        <p className='text-xs font-bold uppercase tracking-[0.2em] text-[#0284C7]'>
          Medical Portal
        </p>

        <p className='mt-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400'>
          Professional Network
        </p>
      </div>

      {/* NAVIGATION */}
      <div className='flex-1 px-4'>
        <nav className='space-y-1'>
          {navItems.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex h-11 items-center gap-3 px-4 text-[13px] font-semibold uppercase tracking-wide transition ${
                  item.active
                    ? 'bg-[#0EA5E9] text-white'
                    : 'text-slate-500 hover:bg-slate-100 hover:text-[#0F172A]'
                }`}
              >
                <Icon className='h-4 w-4' />

                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <button className='mt-8 h-12 w-full bg-[#0284C7] text-sm font-semibold text-white'>
          Post a Job
        </button>
      </div>

      {/* FOOTER */}
      <div className='border-t border-slate-200 p-4'>
        <div className='space-y-2'>
          <button className='flex h-10 w-full items-center gap-3 px-3 text-sm text-slate-500 transition hover:bg-slate-100'>
            <Settings className='h-4 w-4' />

            Settings
          </button>

          <button className='flex h-10 w-full items-center gap-3 px-3 text-sm text-slate-500 transition hover:bg-slate-100'>
            <Settings className='h-4 w-4' />

            Support
          </button>
        </div>
      </div>
    </aside>
  )
}