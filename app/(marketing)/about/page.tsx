import Image from 'next/image'

import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className='min-h-screen bg-[#F4F7FA]'>
      {/* HERO */}
      <section className='relative overflow-hidden border-b border-slate-200 bg-[#0F172A]'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.22),transparent_30%)]' />

        <div className='relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1fr_500px] lg:items-center'>
          {/* LEFT */}
          <div>
            <div className='inline-flex bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 backdrop-blur-xl'>
              About MedLink Pro
            </div>

            <h1 className='mt-8 text-6xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl'>
              The professional ecosystem for modern healthcare.
            </h1>

            <p className='mt-8 max-w-2xl text-[22px] leading-10 text-slate-300'>
              Built for physicians, researchers, universities, hospitals, and
              institutions advancing global clinical excellence.
            </p>

            <div className='mt-10 flex flex-wrap gap-4'>
              <Link
                href='/register'
                className='flex h-14 items-center justify-center bg-[#0284C7] px-8 text-sm font-semibold text-white'
              >
                Join Platform
              </Link>

              <Link
                href='/how-it-works'
                className='flex h-14 items-center justify-center border border-white/20 px-8 text-sm font-semibold text-white backdrop-blur-xl'
              >
                Explore Platform
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className='overflow-hidden border border-white/10'>
            <Image
              src='https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600'
              alt='Healthcare'
              width={1000}
              height={1200}
              className='h-[700px] w-full object-cover'
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className='border-b border-slate-200 bg-white'>
        <div className='mx-auto grid max-w-7xl gap-px bg-slate-200 md:grid-cols-4'>
          {[
            ['12K+', 'Healthcare Professionals'],
            ['450+', 'Institutions'],
            ['38+', 'Medical Specialties'],
            ['92%', 'Verified Profiles'],
          ].map(([value, label]) => (
            <div
              key={label}
              className='bg-white p-10'
            >
              <h2 className='text-5xl font-bold tracking-tight text-[#0F172A]'>
                {value}
              </h2>

              <p className='mt-3 text-sm font-medium text-slate-500'>
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className='bg-[#F4F7FA]'>
        <div className='mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2'>
          {/* IMAGE */}
          <div className='overflow-hidden border border-slate-200'>
            <Image
              src='https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1400'
              alt='Medical Collaboration'
              width={1000}
              height={1200}
              className='h-full min-h-[700px] w-full object-cover'
            />
          </div>

          {/* CONTENT */}
          <div className='flex flex-col justify-center'>
            <div className='inline-flex w-fit bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0284C7]'>
              Our Mission
            </div>

            <h2 className='mt-8 text-6xl font-bold leading-[1] tracking-tight text-[#0F172A]'>
              Accelerating clinical collaboration worldwide.
            </h2>

            <div className='mt-10 space-y-8 text-[19px] leading-10 text-slate-600'>
              <p>
                Healthcare professionals deserve infrastructure purpose-built
                for medicine, research, and institutional collaboration rather
                than generic networking platforms.
              </p>

              <p>
                MedLink Pro enables specialists, researchers, and healthcare
                organizations to connect through verified expertise and
                opportunity-driven networking.
              </p>

              <p>
                From peer-reviewed publications to advanced recruitment
                workflows, the platform supports the future of healthcare
                innovation and talent discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className='border-t border-slate-200 bg-white'>
        <div className='mx-auto max-w-7xl px-6 py-24'>
          <div className='max-w-3xl'>
            <div className='inline-flex bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600'>
              Platform Principles
            </div>

            <h2 className='mt-8 text-6xl font-bold leading-[1] tracking-tight text-[#0F172A]'>
              Clinical precision meets modern networking.
            </h2>
          </div>

          <div className='mt-16 grid gap-6 lg:grid-cols-3'>
            {[
              {
                title: 'Verified Expertise',
                description:
                  'Professional identity, certifications, and institutional credibility remain core to platform trust.',
              },
              {
                title: 'Research Collaboration',
                description:
                  'Enable peer-reviewed publishing, interdisciplinary collaboration, and academic visibility.',
              },
              {
                title: 'Secure Infrastructure',
                description:
                  'Role-based architecture, protected APIs, and scalable healthcare-first SaaS infrastructure.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className='border border-slate-200 bg-[#F8FAFC] p-8'
              >
                <div className='h-14 w-14 bg-[#0284C7]/10' />

                <h3 className='mt-8 text-3xl font-bold tracking-tight text-[#0F172A]'>
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

      {/* CTA */}
      <section className='border-t border-slate-200 bg-[#0F172A]'>
        <div className='mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 py-24 lg:flex-row lg:items-center'>
          <div className='max-w-3xl'>
            <div className='inline-flex bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 backdrop-blur-xl'>
              Join The Network
            </div>

            <h2 className='mt-8 text-6xl font-bold leading-[1] tracking-tight text-white'>
              Connect with the future of healthcare.
            </h2>

            <p className='mt-6 text-[19px] leading-10 text-slate-300'>
              Join verified healthcare professionals, institutions, and
              researchers across the global medical ecosystem.
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