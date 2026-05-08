export default function FeedCard() {
  return (
    <div className='border border-slate-200 bg-white p-5'>
      {/* USER */}
      <div className='flex items-start gap-4'>
        <img
          src='https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop'
          alt='Doctor'
          className='h-12 w-12 object-cover'
        />

        <div className='flex-1'>
          <div className='flex flex-wrap items-center gap-3'>
            <h3 className='font-bold text-[#0F172A]'>
              Dr. Sarah Chen
            </h3>

            <span className='text-xs text-slate-500'>
              Cardiology Specialist
            </span>

            <span className='text-xs text-slate-400'>
              • 15m ago
            </span>
          </div>

          {/* TITLE */}
          <h2 className='mt-4 text-[30px] font-bold leading-[1.15] tracking-tight text-[#0F172A]'>
            Atypical presentation of Mitral Valve Prolapse in a
            24-year-old athlete
          </h2>

          {/* BODY */}
          <p className='mt-4 text-[15px] leading-7 text-slate-600'>
            Initial ECG presented normal sinus rhythm, however
            patient reported intermittent syncope during peak
            physical exertion. Seeking multidisciplinary perspectives
            on the echocardiography results below.
          </p>

          {/* IMAGE */}
          <div className='mt-6 overflow-hidden border border-slate-200'>
            <img
              src='https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1400&auto=format&fit=crop'
              alt='Medical'
              className='h-[320px] w-full object-cover'
            />
          </div>

          {/* TAGS */}
          <div className='mt-4 flex flex-wrap gap-2'>
            {[
              '#Cardiology',
              '#CaseStudy',
              '#SportsMedicine',
            ].map((tag) => (
              <div
                key={tag}
                className='bg-sky-50 px-3 py-1 text-xs font-semibold text-[#0284C7]'
              >
                {tag}
              </div>
            ))}
          </div>

          {/* FOOTER */}
          <div className='mt-6 flex items-center gap-6 border-t border-slate-200 pt-4 text-sm text-slate-500'>
            <button>42 Likes</button>
            <button>18 Comments</button>
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  )
}