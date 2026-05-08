import Image from 'next/image'

export default function ContactPage() {
  return (
    <main className='min-h-screen bg-[#F4F7FA]'>
      {/* HERO */}
      <section className='border-b border-slate-200 bg-white'>
        <div className='mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1fr_520px] lg:items-center'>
          {/* LEFT */}
          <div>
            <div className='inline-flex bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0284C7]'>
              Contact MedLink Pro
            </div>

            <h1 className='mt-8 text-6xl font-bold leading-[0.95] tracking-tight text-[#0F172A] md:text-7xl'>
              Let’s build the future of healthcare networking.
            </h1>

            <p className='mt-8 max-w-2xl text-[22px] leading-10 text-slate-600'>
              Reach out for institutional partnerships, healthcare recruitment,
              product support, or platform collaboration opportunities.
            </p>
          </div>

          {/* IMAGE */}
          <div className='overflow-hidden border border-slate-200'>
            <Image
              src='https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1600'
              alt='Contact'
              width={1200}
              height={1400}
              className='h-[700px] w-full object-cover'
            />
          </div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className='bg-[#F4F7FA]'>
        <div className='mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1fr_380px]'>
          {/* FORM */}
          <div className='border border-slate-200 bg-white p-10'>
            <h2 className='text-4xl font-bold tracking-tight text-[#0F172A]'>
              Send us a message
            </h2>

            <div className='mt-10 grid gap-6 md:grid-cols-2'>
              <div>
                <label className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>
                  First Name
                </label>

                <input className='mt-3 h-14 w-full border border-slate-200 px-4 outline-none' />
              </div>

              <div>
                <label className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>
                  Last Name
                </label>

                <input className='mt-3 h-14 w-full border border-slate-200 px-4 outline-none' />
              </div>

              <div className='md:col-span-2'>
                <label className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>
                  Email Address
                </label>

                <input className='mt-3 h-14 w-full border border-slate-200 px-4 outline-none' />
              </div>

              <div className='md:col-span-2'>
                <label className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>
                  Organization
                </label>

                <input className='mt-3 h-14 w-full border border-slate-200 px-4 outline-none' />
              </div>

              <div className='md:col-span-2'>
                <label className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>
                  Message
                </label>

                <textarea
                  rows={8}
                  className='mt-3 w-full border border-slate-200 p-4 outline-none'
                />
              </div>
            </div>

            <button className='mt-8 flex h-14 items-center justify-center bg-[#0284C7] px-8 text-sm font-semibold text-white'>
              Submit Inquiry
            </button>
          </div>

          {/* INFO */}
          <div className='space-y-6'>
            {[
              {
                title: 'General Support',
                value: 'support@medlinkpro.com',
              },
              {
                title: 'Institution Partnerships',
                value: 'partners@medlinkpro.com',
              },
              {
                title: 'Healthcare Recruitment',
                value: 'recruitment@medlinkpro.com',
              },
            ].map((item) => (
              <div
                key={item.title}
                className='border border-slate-200 bg-white p-8'
              >
                <p className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>
                  {item.title}
                </p>

                <h3 className='mt-5 text-2xl font-bold text-[#0F172A]'>
                  {item.value}
                </h3>
              </div>
            ))}

            <div className='border border-slate-200 bg-[#0F172A] p-8'>
              <div className='inline-flex bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300'>
                Enterprise Network
              </div>

              <h3 className='mt-8 text-4xl font-bold leading-tight text-white'>
                Supporting the global healthcare ecosystem.
              </h3>

              <p className='mt-6 text-[17px] leading-9 text-slate-300'>
                Designed for physicians, researchers, institutions, and medical
                organizations worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}