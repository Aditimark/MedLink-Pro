'use client'

import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'

import Link from 'next/link'

import { AuthService } from '@/services/auth/auth.service'

import { ProfileService } from '@/services/profiles/profile.service'

import { createClient } from '@/lib/supabase/client'

function maskEmail(email: string) {
  const [name, domain] =
    email.split('@')

  if (!name || !domain)
    return email

  const visibleStart =
    name.slice(0, 2)

  const visibleEnd =
    name.slice(-2)

  return `${visibleStart}***${visibleEnd}@${domain}`
}

export default function VerifyPage() {
  const router = useRouter()

  const [email, setEmail] =
    useState('')

  const [otp, setOtp] =
    useState('')

  const [loading, setLoading] =
    useState(false)

  const [error, setError] =
    useState('')

  const [success, setSuccess] =
    useState('')

  useEffect(() => {
    const storedEmail =
      sessionStorage.getItem(
        'verify-email'
      )

    if (!storedEmail) {
      router.push('/register')
      return
    }

    setEmail(storedEmail)
  }, [router])

  async function handleVerify(
    e: React.FormEvent
  ) {
    e.preventDefault()

    setLoading(true)

    setError('')
    setSuccess('')

    const response =
      await AuthService.verifyOtp(
        email,
        otp
      )

    if (!response.success) {
      setError(
        response.error ||
          'Invalid verification code.'
      )

      setLoading(false)

      return
    }

    /*
      CREATE PROFILE AFTER VERIFIED SESSION EXISTS
    */

    try {
      const pendingRegistration =
        sessionStorage.getItem(
          'pending-registration'
        )

      if (pendingRegistration) {
        const parsed =
          JSON.parse(
            pendingRegistration
          )

        const supabase =
          createClient()

        const {
          data: { user },
        } =
          await supabase.auth.getUser()

        if (user) {
          await ProfileService.createProfile(
            user.id,
            parsed
          )
        }

        sessionStorage.removeItem(
          'pending-registration'
        )
      }
    } catch (err) {
      console.error(
        'PROFILE CREATION ERROR:',
        err
      )
    }

    setSuccess(
      'Verification successful. Redirecting...'
    )

    setTimeout(() => {
      router.push('/dashboard')
    }, 1200)
  }

  return (
    <main className='min-h-screen bg-[#F4F7FA]'>
      <div className='grid min-h-screen lg:grid-cols-2'>
        {/* LEFT PANEL */}
        <div className='relative hidden overflow-hidden bg-[#0F172A] lg:flex'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.15),transparent_45%)]' />

          <div className='relative flex h-full flex-col justify-between p-12'>
            {/* LOGO */}
            <Link
              href='/'
              className='flex items-center gap-3'
            >
              <div className='h-10 w-10 rounded-sm bg-[#0284C7]' />

              <div>
                <h1 className='text-[38px] font-bold tracking-tight text-white'>
                  MedLink Pro
                </h1>

                <p className='text-sm text-slate-300'>
                  Clinical Excellence Network
                </p>
              </div>
            </Link>

            {/* CONTENT */}
            <div className='max-w-xl'>
              <div className='inline-flex bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 backdrop-blur-xl'>
                Secure Verification
              </div>

              <h2 className='mt-6 text-6xl font-bold leading-[1.02] tracking-tight text-white'>
                Verify your healthcare identity.
              </h2>

              <p className='mt-6 text-xl leading-9 text-slate-300'>
                Your verification code was securely sent to your
                email address.
              </p>
            </div>

            {/* FOOTER */}
            <div className='text-sm text-slate-400'>
              HIPAA-aware authentication architecture.
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className='flex items-center justify-center px-6 py-16 lg:px-20'>
          <div className='w-full max-w-lg'>
            {/* MOBILE LOGO */}
            <Link
              href='/'
              className='mb-10 flex items-center gap-3 lg:hidden'
            >
              <div className='h-9 w-9 rounded-sm bg-[#0284C7]' />

              <div>
                <h1 className='text-3xl font-bold tracking-tight text-[#0F172A]'>
                  MedLink Pro
                </h1>

                <p className='text-sm text-slate-500'>
                  Clinical Excellence Network
                </p>
              </div>
            </Link>

            <div className='border border-slate-200 bg-white p-10 shadow-[0_20px_80px_-20px_rgba(15,23,42,0.08)]'>
              <div>
                <h2 className='text-5xl font-bold leading-[1.05] tracking-tight text-[#0F172A]'>
                  Verify Account
                </h2>

                <p className='mt-4 text-[17px] leading-8 text-slate-500'>
                  Enter the 6-digit verification code sent to:
                </p>

                <p className='mt-2 font-semibold text-[#0284C7]'>
                  {maskEmail(email)}
                </p>
              </div>

              {/* FORM */}
              <form
                onSubmit={handleVerify}
                className='mt-10 space-y-6'
              >
                {/* OTP */}
                <div>
                  <label className='mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500'>
                    Verification Code
                  </label>

                  <input
                    required
                    value={otp}
                    onChange={(e) =>
                      setOtp(
                        e.target.value
                      )
                    }
                    placeholder='123456'
                    maxLength={10}
                    className='h-14 w-full border border-slate-300 px-5 text-center text-3xl font-semibold tracking-[0.2em] outline-none transition focus:border-[#0284C7]'
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
                  className='h-14 w-full bg-black text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#0F172A]'
                >
                  {loading
                    ? 'Verifying...'
                    : 'Verify Account'}
                </button>
              </form>

              {/* FOOTER */}
              <div className='mt-8 border-t border-slate-100 pt-6 text-center'>
                <p className='text-sm text-slate-500'>
                  Already verified?{' '}
                  <Link
                    href='/login'
                    className='font-semibold text-[#0284C7]'
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}