import RegisterForm from '@/components/auth/register-form'
import RegisterLayout from '@/components/auth/register-layout'

export default function RegisterPage() {
  return (
    <RegisterLayout>
      <div>
        {/* HEADER */}
        <div className='mb-10 text-center'>
          <h1 className='text-5xl font-bold tracking-tight text-[#0F172A]'>
            Join the Network of Excellence
          </h1>

          <p className='mx-auto mt-4 max-w-2xl text-lg text-slate-500'>
            Select your path to professional growth or clinical
            recruitment.
          </p>
        </div>

        {/* FORM */}
        <RegisterForm />
      </div>
    </RegisterLayout>
  )
}