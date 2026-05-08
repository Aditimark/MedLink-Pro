export default function MedicalNewsCard() {
  return (
    <div className='border border-slate-200 bg-white p-5'>
      <div className='grid gap-5 md:grid-cols-[1fr_180px]'>
        {/* LEFT */}
        <div>
          <div className='flex items-center gap-2'>
            <span className='bg-sky-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[#0284C7]'>
              Medical News
            </span>
          </div>

          <h3 className='mt-4 text-[28px] font-bold leading-tight tracking-tight text-[#0F172A]'>
            FDA approves new immunotherapy treatment for
            advanced-stage lung cancer
          </h3>

          <p className='mt-4 text-[15px] leading-7 text-slate-600'>
            Landmark approval follows phase III trial
            demonstrating a 34% improvement in overall survival
            rates compared to standard chemotherapy.
          </p>

          <p className='mt-4 text-xs text-slate-400'>
            Source: New England Journal of Medicine • 2h ago
          </p>
        </div>

        {/* IMAGE */}
        <div className='overflow-hidden border border-slate-200'>
          <img
            src='https://images.unsplash.com/photo-1581092921461-eab10380d70f?q=80&w=1200&auto=format&fit=crop'
            alt='Medical'
            className='h-full w-full object-cover'
          />
        </div>
      </div>
    </div>
  )
}