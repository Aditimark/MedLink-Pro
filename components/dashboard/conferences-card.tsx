export default function ConferencesCard() {
  return (
    <div className='border border-slate-200 bg-white p-5'>
      <h3 className='text-lg font-bold text-[#0F172A]'>
        Upcoming Conferences
      </h3>

      <div className='mt-5 space-y-4'>
        <div className='border border-slate-200 p-4'>
          <div className='inline-flex bg-[#DCFCE7] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[#166534]'>
            Virtual
          </div>

          <h4 className='mt-3 font-bold text-[#0F172A]'>
            Global Oncology Summit 2024
          </h4>

          <p className='mt-2 text-sm text-slate-500'>
            CME Credits Available
          </p>
        </div>

        <div className='border border-slate-200 p-4'>
          <div className='inline-flex bg-[#DBEAFE] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[#1D4ED8]'>
            Chicago, IL
          </div>

          <h4 className='mt-3 font-bold text-[#0F172A]'>
            Emergency Medicine Expo
          </h4>

          <p className='mt-2 text-sm text-slate-500'>
            Clinical Research Forum
          </p>
        </div>
      </div>
    </div>
  )
}