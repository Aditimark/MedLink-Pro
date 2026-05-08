export default function InstitutionUpdateCard() {
  return (
    <div className='border border-slate-200 bg-white p-5'>
      <div className='flex gap-4'>
        {/* ICON */}
        <div className='flex h-12 w-12 items-center justify-center bg-[#0F172A] text-white'>
          B
        </div>

        {/* CONTENT */}
        <div className='flex-1'>
          <span className='text-[10px] font-bold uppercase tracking-wide text-[#0284C7]'>
            Institutional Update
          </span>

          <h3 className='mt-3 text-2xl font-bold tracking-tight text-[#0F172A]'>
            Mayo Clinic announces Global Health Equity Initiative
          </h3>

          <p className='mt-3 text-[15px] leading-7 text-slate-600'>
            New grant opportunities now open for cardiovascular
            research in underserved regions.
          </p>
        </div>

        {/* CTA */}
        <button className='h-11 border border-slate-300 px-5 text-sm font-semibold text-[#0284C7]'>
          Apply
        </button>
      </div>
    </div>
  )
}