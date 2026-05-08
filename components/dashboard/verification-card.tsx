export default function VerificationCard() {
  return (
    <div className='border border-slate-200 bg-[#0F172A] p-6 text-white'>
      <div className='inline-flex items-center gap-2 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-200'>
        Get Verified
      </div>

      <h3 className='mt-5 text-2xl font-bold leading-tight'>
        Unlock expert discussions and institutional badges.
      </h3>

      <button className='mt-6 h-11 w-full bg-[#0284C7] text-sm font-semibold text-white'>
        Start Verification
      </button>
    </div>
  )
}