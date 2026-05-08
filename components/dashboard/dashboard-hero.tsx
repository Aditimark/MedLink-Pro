export default function DashboardHero() {
  return (
    <div className='border border-slate-200 bg-white p-6'>
      <div className='grid gap-6 lg:grid-cols-[1fr_220px]'>
        {/* LEFT */}
        <div>
          <h1 className='text-[42px] font-bold leading-[1.05] tracking-tight text-[#0F172A]'>
            Welcome back,
            <br />
            Dr. Jenkins
          </h1>

          <p className='mt-4 max-w-2xl text-[15px] leading-7 text-slate-600'>
            Your clinical network is growing. 8 peers in
            Cardiology published new case studies today.
          </p>

          <div className='mt-6 flex flex-wrap gap-3'>
            <button className='h-11 bg-[#0284C7] px-5 text-sm font-semibold text-white'>
              Review New Cases
            </button>

            <button className='h-11 border border-slate-300 bg-white px-5 text-sm font-semibold text-[#0F172A]'>
              Update My Feed
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div className='overflow-hidden border border-slate-200'>
          <img
            src='https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop'
            alt='Medical'
            className='h-full w-full object-cover'
          />
        </div>
      </div>
    </div>
  )
}