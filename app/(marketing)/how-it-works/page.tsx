import Image from 'next/image'

import Link from 'next/link'

export default function HowItWorksPage() {
  return (
    <main className='min-h-screen bg-[#F4F7FA]'>
      {/* HERO */}
      <section className='border-b border-slate-200 bg-white'>
        <div className='mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1fr_520px] lg:items-center'>
          {/* LEFT */}
          <div>
            <div className='inline-flex bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0284C7]'>
              How It Works
            </div>

            <h1 className='mt-8 text-6xl font-bold leading-[0.95] tracking-tight text-[#0F172A] md:text-7xl'>
              Connecting healthcare professionals and institutions.
            </h1>

            <p className='mt-8 max-w-2xl text-[22px] leading-10 text-slate-600'>
              MedLink Pro streamlines healthcare networking, specialist
              discovery, institutional recruitment, and clinical collaboration
              through a secure professional ecosystem.
            </p>

            <div className='mt-10 flex flex-wrap gap-4'>
              <Link
                href='/register'
                className='flex h-14 items-center justify-center bg-[#0284C7] px-8 text-sm font-semibold text-white'
              >
                Join Platform
              </Link>

              <Link
                href='/'
                className='flex h-14 items-center justify-center border border-slate-300 px-8 text-sm font-semibold text-[#0F172A]'
              >
                Explore Platform
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className='overflow-hidden border border-slate-200'>
            <Image
              src='https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1600'
              alt='Healthcare Platform'
              width={1200}
              height={1400}
              className='h-[700px] w-full object-cover'
            />
          </div>
        </div>
      </section>

      {/* PROFESSIONAL FLOW */}
      <section className='border-b border-slate-200 bg-[#F4F7FA]'>
        <div className='mx-auto max-w-7xl px-6 py-24'>
          <div className='max-w-3xl'>
            <div className='inline-flex bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600'>
              Professional Workflow
            </div>

            <h2 className='mt-8 text-6xl font-bold leading-[1] tracking-tight text-[#0F172A]'>
              Designed for healthcare professionals.
            </h2>
          </div>

          <div className='mt-16 grid gap-6 lg:grid-cols-3'>
            {[
              {
                step: '01',
                title: 'Create Verified Profile',
                description:
                  'Build a clinical-first profile showcasing certifications, specialties, publications, and professional experience.',
              },
              {
                step: '02',
                title: 'Discover Opportunities',
                description:
                  'Explore verified healthcare institutions, research collaborations, and specialist career opportunities.',
              },
              {
                step: '03',
                title: 'Expand Clinical Network',
                description:
                  'Connect with physicians, institutions, and healthcare researchers across specialties worldwide.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className='border border-slate-200 bg-white p-8'
              >
                <div className='text-sm font-semibold text-[#0284C7]'>
                  {item.step}
                </div>

                <h3 className='mt-8 text-3xl font-bold leading-tight text-[#0F172A]'>
                  {item.title}
                </h3>

                <p className='mt-6 text-[17px] leading-9 text-slate-600'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTITUTION FLOW */}
      <section className='bg-white'>
        <div className='mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2'>
          {/* IMAGE */}
          <div className='overflow-hidden border border-slate-200'>
            <Image
              src='https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600'
              alt='Institution'
              width={1200}
              height={1400}
              className='h-full min-h-[700px] w-full object-cover'
            />
          </div>

          {/* CONTENT */}
          <div className='flex flex-col justify-center'>
            <div className='inline-flex w-fit bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0284C7]'>
              Institution Workflow
            </div>

            <h2 className='mt-8 text-6xl font-bold leading-[1] tracking-tight text-[#0F172A]'>
              Advanced healthcare recruitment infrastructure.
            </h2>

            <div className='mt-10 space-y-10'>
              {[
                {
                  title: 'Build Institutional Presence',
                  description:
                    'Showcase departments, clinical research facilities, institutional culture, and open opportunities.',
                },
                {
                  title: 'Discover Verified Specialists',
                  description:
                    'Search professionals through specialties, credentials, experience, and publication history.',
                },
                {
                  title: 'Streamline Recruitment',
                  description:
                    'Manage healthcare hiring pipelines, candidate discovery, and clinical recruitment workflows.',
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className='text-3xl font-bold text-[#0F172A]'>
                    {item.title}
                  </h3>

                  <p className='mt-5 text-[18px] leading-9 text-slate-600'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='border-t border-slate-200 bg-[#0F172A]'>
        <div className='mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 py-24 lg:flex-row lg:items-center'>
          <div className='max-w-3xl'>
            <div className='inline-flex bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300'>
              Join The Network
            </div>

            <h2 className='mt-8 text-6xl font-bold leading-[1] tracking-tight text-white'>
              Start building your healthcare network today.
            </h2>

            <p className='mt-6 text-[19px] leading-10 text-slate-300'>
              Connect with verified professionals, institutions, and global
              healthcare opportunities.
            </p>
          </div>

          <Link
            href='/register'
            className='flex h-14 items-center justify-center bg-[#0284C7] px-8 text-sm font-semibold text-white'
          >
            Create Account
          </Link>
        </div>
      </section>
    </main>
  )
}