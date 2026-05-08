export default function FeaturesSection() {
  return (
    <section className='bg-[#F4F7FA] py-24'>
      <div className='mx-auto max-w-7xl px-6'>
        {/* HEADER */}
        <div className='text-center'>
          <h2 className='text-5xl font-bold tracking-tight text-[#0F172A]'>
            Engineered for Excellence
          </h2>

          <p className='mt-4 text-lg text-slate-500'>
            Advanced infrastructure for the global medical community.
          </p>
        </div>

        {/* GRID */}
        <div className='mt-16 grid gap-6 lg:grid-cols-3'>
          {/* CARD 1 */}
          <div className='border border-slate-200 bg-white p-8'>
            <div className='mb-6 h-11 w-11 rounded-sm bg-[#0F172A]' />

            <h3 className='text-3xl font-bold tracking-tight text-[#0F172A]'>
              Verified Credentials
            </h3>

            <p className='mt-5 text-[15px] leading-7 text-slate-600'>
              Proprietary verification engines authenticate board
              certifications, clinical history, and specialized
              training in real time.
            </p>
          </div>

          {/* IMAGE */}
          <div className='overflow-hidden border border-slate-200 bg-white'>
            <img
              src='https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop'
              alt='Medical Technology'
              className='h-full w-full object-cover'
            />
          </div>

          {/* CARD 2 */}
          <div className='border border-slate-200 bg-white p-8'>
            <div className='mb-6 h-11 w-11 rounded-sm bg-[#0284C7]' />

            <h3 className='text-3xl font-bold tracking-tight text-[#0F172A]'>
              Global Network
            </h3>

            <p className='mt-5 text-[15px] leading-7 text-slate-600'>
              Connect with specialists, institutions, and research
              leaders across the international medical ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}