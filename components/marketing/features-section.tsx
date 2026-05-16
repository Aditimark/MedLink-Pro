import Image from 'next/image'

export default function FeaturesSection() {
  return (
    <section className='bg-[#F4F7FA] py-24'>
      <div className='mx-auto max-w-7xl px-6'>
        {/* HEADER */}
        <div className='mx-auto max-w-3xl text-center'>
          <div className='inline-flex bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0284C7]'>
            Platform Infrastructure
          </div>

          <h2 className='mt-8 text-6xl font-bold leading-[1] tracking-tight text-[#0F172A]'>
            Engineered for healthcare collaboration and research.
          </h2>

          <p className='mt-6 text-[19px] leading-9 text-slate-600'>
            MedLink Pro provides modern infrastructure for healthcare
            institutions, researchers, universities, and medical professionals.
          </p>
        </div>

        {/* GRID */}
        <div className='mt-16 grid gap-6 lg:grid-cols-3'>
          {/* CARD 1 */}
          <div className='border border-slate-200 bg-white p-8'>
            <div className='mb-6 h-11 w-11 rounded-sm bg-[#0F172A]' />

            <h3 className='text-3xl font-bold tracking-tight text-[#0F172A]'>
              Research Collaboration
            </h3>

            <p className='mt-5 text-[16px] leading-8 text-slate-600'>
              Support interdisciplinary collaboration, publication discovery,
              academic networking, and global clinical research initiatives.
            </p>
          </div>

          {/* IMAGE */}
          <div className='overflow-hidden border border-slate-200 bg-white'>
            <Image
              src='https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop'
              alt='Medical Technology'
              width={1200}
              height={1200}
              className='h-full w-full object-cover'
            />
          </div>

          {/* CARD 2 */}
          <div className='border border-slate-200 bg-white p-8'>
            <div className='mb-6 h-11 w-11 rounded-sm bg-[#0284C7]' />

            <h3 className='text-3xl font-bold tracking-tight text-[#0F172A]'>
              Institutional Network
            </h3>

            <p className='mt-5 text-[16px] leading-8 text-slate-600'>
              Connect healthcare institutions, universities, specialists, and
              researchers through a unified professional ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}