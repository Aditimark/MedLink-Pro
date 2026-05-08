import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className='border-b border-slate-200 bg-white'>
      <div className='mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-2 lg:items-center'>
        {/* LEFT */}
        <div>
          <div className='inline-flex items-center rounded-full bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#0284C7]'>
            The Professional Standard
          </div>

          <h1 className='mt-8 max-w-xl text-6xl font-bold leading-[1.05] tracking-tight text-[#0F172A]'>
            Precision Placement for the Modern Clinician.
          </h1>

          <p className='mt-8 max-w-xl text-lg leading-8 text-slate-600'>
            A centralized ecosystem bridging the gap between elite
            medical talent and premier institutions through verified
            expertise and clinical data-driven matching.
          </p>

          {/* BUTTONS */}
          <div className='mt-10 flex flex-wrap gap-4'>
            <Link
              href='/register'
              className='flex h-12 items-center bg-black px-7 text-sm font-semibold text-white transition hover:bg-[#0F172A]'
            >
              Join as Professional
            </Link>

            <Link
              href='/register'
              className='flex h-12 items-center border border-slate-300 bg-white px-7 text-sm font-semibold text-[#0F172A] transition hover:bg-slate-50'
            >
              Register Institution
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className='relative'>
          <div className='overflow-hidden border border-slate-200 bg-white'>
            <img
              src='https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1600&auto=format&fit=crop'
              alt='Medical Facility'
              className='h-[520px] w-full object-cover'
            />
          </div>

          {/* FLOATING CARD */}
          <div className='absolute -bottom-8 left-8 border border-slate-200 bg-white p-5 shadow-xl'>
            <div className='flex items-start gap-4'>
              <div className='mt-1 h-3 w-3 rounded-full bg-[#14B8A6]' />

              <div>
                <p className='text-2xl font-bold text-[#0F172A]'>
                  98%
                </p>

                <p className='mt-1 max-w-[220px] text-sm leading-6 text-slate-500'>
                  Placement rate for verified medical professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}