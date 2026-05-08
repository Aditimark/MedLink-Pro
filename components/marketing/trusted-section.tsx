export default function TrustedSection() {
  const institutions = [
    'ST. JUDE’S',
    'MAYO CLINIC',
    'CEDARS-SINAI',
    'JOHNS HOPKINS',
    'CLEVELAND CLINIC',
  ]

  return (
    <section className='border-b border-slate-200 bg-[#F8FAFC]'>
      <div className='mx-auto max-w-7xl px-6 py-10'>
        <p className='text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-400'>
          Trusted by Leading Medical Institutions
        </p>

        <div className='mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-6'>
          {institutions.map((institution) => (
            <div
              key={institution}
              className='text-2xl font-bold tracking-tight text-slate-400'
            >
              {institution}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}