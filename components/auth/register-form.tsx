'use client'

import { useRouter } from 'next/navigation'

import { useState } from 'react'

import {
  Building2,
  CheckCircle2,
  Stethoscope,
} from 'lucide-react'

import { AuthService } from '@/services/auth/auth.service'

type Role =
  | 'professional'
  | 'institution'

export default function RegisterForm() {
  const router = useRouter()

  const [selectedRole, setSelectedRole] =
    useState<Role>('professional')

  const [formData, setFormData] =
    useState({
      // shared
      email: '',
      password: '',
      phone: '',

      // professional
      full_name: '',
      specialization: '',
      years_experience: '',
      current_institution: '',

      // institution
      institution_name: '',
      institution_type: '',
      website: '',
      location: '',
    })

  const [loading, setLoading] =
    useState(false)

  const [error, setError] =
    useState('')

  const [success, setSuccess] =
    useState('')

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault()

    setLoading(true)

    setError('')
    setSuccess('')

    const response =
      await AuthService.register({
        role: selectedRole,

        email: formData.email,

        password: formData.password,

        phone: formData.phone,

        ...(selectedRole ===
        'professional'
          ? {
              full_name:
                formData.full_name,

              specialization:
                formData.specialization,

              years_experience:
                formData
                  .years_experience
                  ? Number(
                      formData.years_experience
                    )
                  : undefined,

              current_institution:
                formData.current_institution,
            }
          : {
              institution_name:
                formData.institution_name,

              institution_type:
                formData.institution_type,

              website:
                formData.website,

              location:
                formData.location,
            }),
      } as any)

    if (!response.success) {
      setError(
        response.error ||
          'Registration failed.'
      )

      setLoading(false)

      return
    }

    sessionStorage.setItem(
  'verify-email',
  formData.email
)

sessionStorage.setItem(
  'pending-registration',
  JSON.stringify({
    role: selectedRole,
    ...formData,
  })
)

    setSuccess(
      `Verification code sent to ${formData.email}`
    )

    setLoading(false)

    setTimeout(() => {
      router.push('/verify')
    }, 1500)
  }

  return (
    <div className='space-y-10'>
      {/* ROLE CARDS */}
      <div className='mx-auto grid max-w-4xl gap-6 md:grid-cols-2'>
        {/* PROFESSIONAL */}
        <div
          role='button'
          tabIndex={0}
          onClick={() =>
            setSelectedRole('professional')
          }
          className={`cursor-pointer border bg-white p-7 transition ${
            selectedRole ===
            'professional'
              ? 'border-[#0284C7] ring-1 ring-[#0284C7]'
              : 'border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-sky-50'>
            <Stethoscope className='h-5 w-5 text-[#0284C7]' />
          </div>

          <h3 className='text-[30px] font-bold leading-[1.1] tracking-tight text-[#0F172A]'>
            I am a Medical Professional
          </h3>

          <p className='mt-4 text-[15px] leading-7 text-slate-600'>
            Elevate your career through peer-to-peer
            networking.
          </p>

          <div className='mt-6 space-y-3'>
            {[
              'Clinical job opportunities',
              'Specialist networking',
              'Research collaboration',
            ].map((item) => (
              <div
                key={item}
                className='flex items-start gap-3 text-sm text-slate-600'
              >
                <CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0 text-[#14B8A6]' />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* INSTITUTION */}
        <div
          role='button'
          tabIndex={0}
          onClick={() =>
            setSelectedRole('institution')
          }
          className={`cursor-pointer border bg-white p-7 transition ${
            selectedRole ===
            'institution'
              ? 'border-black ring-1 ring-black'
              : 'border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-sky-50'>
            <Building2 className='h-5 w-5 text-[#0284C7]' />
          </div>

          <h3 className='text-[30px] font-bold leading-[1.1] tracking-tight text-[#0F172A]'>
            We are a Medical Institution
          </h3>

          <p className='mt-4 text-[15px] leading-7 text-slate-600'>
            Recruit elite healthcare professionals globally.
          </p>

          <div className='mt-6 space-y-3'>
            {[
              'Talent discovery',
              'Recruitment workflows',
              'Institutional branding',
            ].map((item) => (
              <div
                key={item}
                className='flex items-start gap-3 text-sm text-slate-600'
              >
                <CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0 text-[#14B8A6]' />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FORM */}
      <div className='mx-auto max-w-4xl border border-slate-200 bg-white p-10'>
        <div className='mb-8 text-center'>
          <h2 className='text-4xl font-bold tracking-tight text-[#0F172A]'>
            Quick Registration
          </h2>

          <p className='mt-2 text-slate-500'>
            Start your journey with just a few details.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className='mx-auto max-w-2xl space-y-5'
        >
          {/* PROFESSIONAL FIELDS */}
          {selectedRole ===
            'professional' && (
            <>
              {/* FULL NAME */}
              <div>
                <label className='mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500'>
                  Full Name
                </label>

                <input
                  required
                  value={
                    formData.full_name
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      full_name:
                        e.target.value,
                    })
                  }
                  placeholder='Dr. Sarah Jenkins'
                  className='h-12 w-full border border-slate-300 px-4 outline-none transition focus:border-[#0284C7]'
                />
              </div>

              {/* SPECIALIZATION */}
              <div>
                <label className='mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500'>
                  Specialization
                </label>

                <input
                  value={
                    formData.specialization
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      specialization:
                        e.target.value,
                    })
                  }
                  placeholder='Cardiology'
                  className='h-12 w-full border border-slate-300 px-4 outline-none transition focus:border-[#0284C7]'
                />
              </div>

              {/* EXPERIENCE */}
              <div>
                <label className='mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500'>
                  Years of Experience
                </label>

                <input
                  type='number'
                  value={
                    formData.years_experience
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      years_experience:
                        e.target.value,
                    })
                  }
                  placeholder='10'
                  className='h-12 w-full border border-slate-300 px-4 outline-none transition focus:border-[#0284C7]'
                />
              </div>

              {/* CURRENT INSTITUTION */}
              <div>
                <label className='mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500'>
                  Current Institution
                </label>

                <input
                  value={
                    formData.current_institution
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      current_institution:
                        e.target.value,
                    })
                  }
                  placeholder='Mayo Clinic'
                  className='h-12 w-full border border-slate-300 px-4 outline-none transition focus:border-[#0284C7]'
                />
              </div>
            </>
          )}

          {/* INSTITUTION FIELDS */}
          {selectedRole ===
            'institution' && (
            <>
              {/* NAME */}
              <div>
                <label className='mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500'>
                  Institution Name
                </label>

                <input
                  required
                  value={
                    formData.institution_name
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      institution_name:
                        e.target.value,
                    })
                  }
                  placeholder='Massachusetts General Hospital'
                  className='h-12 w-full border border-slate-300 px-4 outline-none transition focus:border-[#0284C7]'
                />
              </div>

              {/* TYPE */}
              <div>
                <label className='mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500'>
                  Institution Type
                </label>

                <input
                  value={
                    formData.institution_type
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      institution_type:
                        e.target.value,
                    })
                  }
                  placeholder='Hospital'
                  className='h-12 w-full border border-slate-300 px-4 outline-none transition focus:border-[#0284C7]'
                />
              </div>

              {/* WEBSITE */}
              <div>
                <label className='mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500'>
                  Website
                </label>

                <input
                  value={
                    formData.website
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      website:
                        e.target.value,
                    })
                  }
                  placeholder='https://hospital.org'
                  className='h-12 w-full border border-slate-300 px-4 outline-none transition focus:border-[#0284C7]'
                />
              </div>

              {/* LOCATION */}
              <div>
                <label className='mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500'>
                  Location
                </label>

                <input
                  value={
                    formData.location
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      location:
                        e.target.value,
                    })
                  }
                  placeholder='Boston, Massachusetts'
                  className='h-12 w-full border border-slate-300 px-4 outline-none transition focus:border-[#0284C7]'
                />
              </div>
            </>
          )}

          {/* EMAIL */}
          <div>
            <label className='mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500'>
              Email Address
            </label>

            <input
              required
              type='email'
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email:
                    e.target.value,
                })
              }
              placeholder='you@hospital.org'
              className='h-12 w-full border border-slate-300 px-4 outline-none transition focus:border-[#0284C7]'
            />
          </div>

          {/* PHONE */}
          <div>
            <label className='mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500'>
              Phone Number
            </label>

            <input
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone:
                    e.target.value,
                })
              }
              placeholder='+1 (555) 000-0000'
              className='h-12 w-full border border-slate-300 px-4 outline-none transition focus:border-[#0284C7]'
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className='mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500'>
              Password
            </label>

            <input
              required
              type='password'
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password:
                    e.target.value,
                })
              }
              placeholder='••••••••'
              className='h-12 w-full border border-slate-300 px-4 outline-none transition focus:border-[#0284C7]'
            />
          </div>

          {/* ERROR */}
          {error && (
            <div className='border border-red-200 bg-red-50 p-4 text-sm text-red-600'>
              {error}
            </div>
          )}

          {/* SUCCESS */}
          {success && (
            <div className='border border-green-200 bg-green-50 p-4 text-sm text-green-700'>
              {success}
            </div>
          )}

          {/* BUTTON */}
          <button
            disabled={loading}
            className='h-12 w-full bg-black text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#0F172A]'
          >
            {loading
              ? 'Creating Account...'
              : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  )
}