interface Props {
  profile: any
}

export default function InstitutionDashboard({
  profile,
}: Props) {
  return (
    <main className='min-h-screen bg-[#F4F7FA] p-6'>
      <div className='mx-auto max-w-7xl space-y-6'>
        {/* HERO */}
        <div className='border border-slate-200 bg-white p-8'>
          <div className='flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between'>
            <div>
              <div className='inline-flex bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0284C7]'>
                Institution Dashboard
              </div>

              <h1 className='mt-5 text-5xl font-bold tracking-tight text-[#0F172A]'>
                {profile?.institution_name}
              </h1>

              <p className='mt-4 text-lg text-slate-600'>
                {profile?.institution_type ||
                  'Healthcare Institution'}
              </p>
            </div>

            <div className='grid w-full max-w-md grid-cols-2 gap-4'>
              <div className='border border-slate-200 p-5'>
                <p className='text-sm font-semibold text-slate-500'>
                  Open Roles
                </p>

                <h3 className='mt-3 text-4xl font-bold text-[#0F172A]'>
                  24
                </h3>
              </div>

              <div className='border border-slate-200 p-5'>
                <p className='text-sm font-semibold text-slate-500'>
                  Applicants
                </p>

                <h3 className='mt-3 text-4xl font-bold text-[#0F172A]'>
                  312
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className='grid gap-6 lg:grid-cols-3'>
          {/* PROFILE */}
          <div className='border border-slate-200 bg-white p-6'>
            <h2 className='text-lg font-bold text-[#0F172A]'>
              Institution Profile
            </h2>

            <div className='mt-6 space-y-4 text-sm'>
              <div>
                <p className='font-semibold text-slate-500'>
                  Website
                </p>

                <p className='mt-1 text-[#0F172A]'>
                  {profile?.website ||
                    'Not added'}
                </p>
              </div>

              <div>
                <p className='font-semibold text-slate-500'>
                  Location
                </p>

                <p className='mt-1 text-[#0F172A]'>
                  {profile?.location ||
                    'Not added'}
                </p>
              </div>

              <div>
                <p className='font-semibold text-slate-500'>
                  Type
                </p>

                <p className='mt-1 text-[#0F172A]'>
                  {profile?.institution_type ||
                    'Not added'}
                </p>
              </div>
            </div>
          </div>

          {/* RECRUITMENT */}
          <div className='border border-slate-200 bg-white p-6 lg:col-span-2'>
            <div className='flex items-center justify-between'>
              <h2 className='text-lg font-bold text-[#0F172A]'>
                Recruitment Pipeline
              </h2>

              <button className='text-sm font-semibold text-[#0284C7]'>
                Manage
              </button>
            </div>

            <div className='mt-6 space-y-5'>
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className='border border-slate-200 p-5'
                >
                  <div className='flex items-center justify-between'>
                    <div>
                      <p className='font-semibold text-[#0F172A]'>
                        Senior Cardiologist
                      </p>

                      <p className='mt-1 text-sm text-slate-500'>
                        18 Applicants
                      </p>
                    </div>

                    <div className='bg-sky-50 px-3 py-1 text-xs font-semibold text-[#0284C7]'>
                      Active
                    </div>
                  </div>

                  <p className='mt-4 text-sm leading-7 text-slate-600'>
                    Hiring pipeline currently active with specialist screening
                    and peer review evaluation underway.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}