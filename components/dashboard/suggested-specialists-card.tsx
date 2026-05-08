const doctors = [
  {
    name: 'Dr. James Miller',
    hospital: 'Johns Hopkins',
  },
  {
    name: 'Dr. Elena Rodriguez',
    hospital: 'Cleveland Clinic',
  },
]

export default function SuggestedSpecialistsCard() {
  return (
    <div className='border border-slate-200 bg-white p-5'>
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-bold text-[#0F172A]'>
          Suggested Specialists
        </h3>

        <button className='text-xs font-semibold text-[#0284C7]'>
          View All
        </button>
      </div>

      <div className='mt-5 space-y-4'>
        {doctors.map((doctor) => (
          <div
            key={doctor.name}
            className='flex items-center gap-3'
          >
            <img
              src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop'
              alt='Doctor'
              className='h-11 w-11 object-cover'
            />

            <div className='flex-1'>
              <p className='text-sm font-semibold text-[#0F172A]'>
                {doctor.name}
              </p>

              <p className='text-xs text-slate-500'>
                {doctor.hospital}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}