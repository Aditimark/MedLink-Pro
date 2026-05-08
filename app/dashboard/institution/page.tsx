import {
  Bell,
  Briefcase,
  Search,
  Users,
} from 'lucide-react'

import { createClient } from '@/lib/supabase/server'

import { redirect } from 'next/navigation'

import Link from 'next/link'

export default async function InstitutionDashboardPage() {
  const supabase =
    await createClient()

  const {
    data: { user },
  } =
    await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const {
    data: profile,
  } =
    await supabase
      .from('institutions')
      .select('*')
      .eq('id', user.id)
      .single()

  return (
    <main className='min-h-screen bg-[#F4F7FA]'>
      {/* TOP NAV */}
      <header className='sticky top-0 z-50 border-b border-slate-200 bg-white'>
        <div className='mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6'>
          {/* LEFT */}
          <div className='flex items-center gap-14'>
            <Link
              href='/'
              className='flex items-center gap-4'
            >
              <div className='h-11 w-11 rounded-sm bg-[#0EA5E9]' />

              <div>
                <h1 className='text-[34px] font-bold tracking-tight text-[#0F172A]'>
                  MedLink Pro
                </h1>
              </div>
            </Link>

            {/* NAV */}
            <nav className='hidden items-center gap-10 lg:flex'>
              {[
                'Dashboard',
                'Candidates',
                'Recruitment',
                'Research',
                'Institutions',
              ].map((item) => (
                <button
                  key={item}
                  className={`text-[15px] font-semibold transition ${
                    item === 'Dashboard'
                      ? 'text-[#0284C7]'
                      : 'text-slate-500 hover:text-[#0F172A]'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* RIGHT */}
          <div className='flex items-center gap-4'>
            {/* SEARCH */}
            <div className='hidden h-12 w-[360px] items-center gap-3 border border-slate-200 px-4 lg:flex'>
              <Search className='h-5 w-5 text-slate-400' />

              <input
                placeholder='Search specialists, research...'
                className='w-full bg-transparent text-sm outline-none'
              />
            </div>

            <button className='flex h-12 w-12 items-center justify-center border border-slate-200'>
              <Bell className='h-5 w-5 text-slate-600' />
            </button>

            {/* PROFILE PLACEHOLDER */}
            <div className='flex h-12 w-12 items-center justify-center rounded-sm bg-[#0F172A] text-sm font-bold text-white'>
              {profile?.institution_name
                ?.slice(0, 2)
                ?.toUpperCase() || 'IN'}
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <div className='mx-auto max-w-[1600px] p-6'>
        {/* HERO */}
        <section className='border border-slate-200 bg-white p-8'>
          <div className='grid gap-8 lg:grid-cols-[1fr_280px]'>
            {/* LEFT */}
            <div>
              <h1 className='max-w-3xl text-6xl font-bold leading-[1] tracking-tight text-[#0F172A]'>
                {profile?.institution_name || 'Healthcare Institution'}
              </h1>

              <p className='mt-6 max-w-3xl text-[22px] leading-10 text-slate-600'>
                Manage specialist recruitment, institutional visibility,
                research opportunities, and healthcare hiring pipelines.
              </p>

              <div className='mt-10 flex flex-wrap gap-4'>
                <button className='h-14 bg-[#0284C7] px-8 text-sm font-semibold text-white'>
                  Post Opportunity
                </button>

                <button className='h-14 border border-slate-300 px-8 text-sm font-semibold text-[#0F172A]'>
                  View Candidates
                </button>
              </div>
            </div>

            {/* HERO PLACEHOLDER */}
            <div className='flex min-h-[280px] items-center justify-center border border-slate-200 bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0EA5E9]/20'>
              <div className='max-w-xs text-center'>
                <div className='mx-auto h-16 w-16 rounded-full border border-white/20 bg-white/10' />

                <h3 className='mt-6 text-2xl font-bold text-white'>
                  Institutional Growth
                </h3>

                <p className='mt-3 text-sm leading-7 text-slate-300'>
                  Recruitment management, institutional branding, and specialist
                  discovery tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GRID */}
        <div className='mt-6 grid gap-6 lg:grid-cols-[1fr_340px]'>
          {/* PIPELINE */}
          <div className='space-y-6'>
            <div className='flex items-center justify-between'>
              <h2 className='text-5xl font-bold tracking-tight text-[#0F172A]'>
                Recruitment Pipeline
              </h2>

              <button className='text-sm font-semibold text-[#0284C7]'>
                View All
              </button>
            </div>

            {/* PIPELINE CARD */}
            <div className='border border-slate-200 bg-white p-8'>
              <div className='flex items-center justify-between'>
                <div>
                  <h3 className='text-2xl font-bold text-[#0F172A]'>
                    Senior Cardiologist
                  </h3>

                  <p className='mt-1 text-sm text-slate-500'>
                    18 Applicants • Active Hiring
                  </p>
                </div>

                <div className='bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600'>
                  Active
                </div>
              </div>

              <p className='mt-6 text-[19px] leading-10 text-slate-600'>
                Hiring pipeline currently active with specialist screening and
                peer review evaluation underway.
              </p>

              {/* MEDIA PLACEHOLDER */}
              <div className='mt-8 flex h-[320px] items-center justify-center border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200'>
                <div className='text-center'>
                  <div className='mx-auto h-14 w-14 rounded-full bg-[#0284C7]/10' />

                  <p className='mt-5 text-sm font-medium text-slate-500'>
                    Recruitment analytics preview
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className='space-y-6'>
            {/* ANALYTICS */}
            <div className='border border-slate-200 bg-white p-6'>
              <h3 className='text-2xl font-bold text-[#0F172A]'>
                Institution Metrics
              </h3>

              <div className='mt-6 space-y-5'>
                {[
                  '24 Active Openings',
                  '312 Total Applicants',
                  '92% Hiring Completion',
                ].map((item) => (
                  <div
                    key={item}
                    className='flex items-center gap-3'
                  >
                    <div className='h-2.5 w-2.5 rounded-full bg-emerald-500' />

                    <p className='text-sm font-medium text-slate-600'>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* DISCOVERY */}
            <div className='border border-slate-200 bg-white p-6'>
              <div className='flex items-center justify-between'>
                <h3 className='text-2xl font-bold text-[#0F172A]'>
                  Talent Discovery
                </h3>

                <Users className='h-5 w-5 text-slate-400' />
              </div>

              <div className='mt-6 space-y-5'>
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className='flex items-center justify-between'
                  >
                    <div className='flex items-center gap-3'>
                      <div className='flex h-11 w-11 items-center justify-center rounded-full bg-[#0F172A] text-xs font-bold text-white'>
                        DR
                      </div>

                      <div>
                        <p className='text-sm font-semibold text-[#0F172A]'>
                          Dr. Sarah Jenkins
                        </p>

                        <p className='text-xs text-slate-500'>
                          Cardiology
                        </p>
                      </div>
                    </div>

                    <button className='border border-slate-300 px-3 py-2 text-xs font-semibold'>
                      Review
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* JOBS */}
            <div className='border border-slate-200 bg-white p-6'>
              <div className='flex items-center gap-3'>
                <Briefcase className='h-5 w-5 text-[#0284C7]' />

                <h3 className='text-2xl font-bold text-[#0F172A]'>
                  Open Roles
                </h3>
              </div>

              <div className='mt-6 border border-slate-200 p-5'>
                <p className='text-xl font-bold text-[#0F172A]'>
                  Research Fellow
                </p>

                <p className='mt-2 text-sm text-slate-500'>
                  Oncology Department
                </p>

                <div className='mt-4 inline-flex bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600'>
                  Hiring
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}