'use client'

import Link from 'next/link'

import {
  Building2,
  Eye,
  EyeOff,
} from 'lucide-react'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { AuthService } from '@/services/auth/auth.service'

export default function LoginForm() {
  const router = useRouter()

  const [showPassword, setShowPassword] =
    useState(false)

  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
    useState('')

  const [loading, setLoading] =
    useState(false)

  const [error, setError] =
    useState('')

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault()

    setLoading(true)
    setError('')

    const response =
      await AuthService.login({
        email,
        password,
      })

    if (!response.success) {
      setError(
        response.error || 'Login failed.'
      )

      setLoading(false)
      return
    }

    router.push('/dashboard')
  }

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className='space-y-5'
      >
        {/* EMAIL */}
        <div>
          <label className='mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500'>
            Email Address
          </label>

          <input
            required
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            type='email'
            placeholder='practitioner@medlinkpro.com'
            className='h-12 w-full border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-[#0EA5E9]'
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label className='mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500'>
            Password
          </label>

          <div className='relative'>
            <input
              required
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              type={
                showPassword
                  ? 'text'
                  : 'password'
              }
              placeholder='••••••••'
              className='h-12 w-full border border-slate-300 bg-white px-4 pr-12 text-sm outline-none transition focus:border-[#0EA5E9]'
            />

            <button
              type='button'
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className='absolute right-4 top-1/2 -translate-y-1/2 text-slate-400'
            >
              {showPassword ? (
                <EyeOff className='h-5 w-5' />
              ) : (
                <Eye className='h-5 w-5' />
              )}
            </button>
          </div>
        </div>

        {/* ERROR */}
        {error && (
          <div className='border border-red-200 bg-red-50 p-4 text-sm text-red-600'>
            {error}
          </div>
        )}

        {/* OPTIONS */}
        <div className='flex items-center justify-between text-sm'>
          <label className='flex items-center gap-2 text-slate-500'>
            <input
              type='checkbox'
              className='h-4 w-4'
            />

            Remember me
          </label>

          <Link
            href='/forgot-password'
            className='font-medium text-[#0EA5E9]'
          >
            Forgot password?
          </Link>
        </div>

        {/* BUTTON */}
        <button className='h-12 w-full bg-black text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#0F172A]'>
          {loading
            ? 'Signing In...'
            : 'Sign In'}
        </button>
      </form>

      {/* DIVIDER */}
      <div className='my-8 flex items-center gap-4'>
        <div className='h-px flex-1 bg-slate-200' />

        <span className='text-xs font-semibold uppercase tracking-wide text-slate-400'>
          Institutional Login
        </span>

        <div className='h-px flex-1 bg-slate-200' />
      </div>

      {/* SSO */}
      <button className='flex h-12 w-full items-center justify-center gap-3 border border-slate-300 bg-white text-sm font-medium text-slate-700 transition hover:bg-slate-50'>
        <Building2 className='h-4 w-4' />

        SSO via Institution
      </button>

      {/* FOOTER */}
      <div className='mt-8 text-center text-sm text-slate-500'>
        Don&apos;t have an account?{' '}

        <Link
          href='/register'
          className='font-semibold text-[#0EA5E9]'
        >
          Register
        </Link>
      </div>
    </div>
  )
}