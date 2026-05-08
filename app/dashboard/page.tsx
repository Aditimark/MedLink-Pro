import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export default async function DashboardRouter() {
  const supabase =
    await createClient()

  const {
    data: { user },
  } =
    await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: roleData } =
    await supabase
      .from('user_roles')
      .select('role')
      .eq('id', user.id)
      .single()

  if (!roleData) {
    redirect('/login')
  }

  if (
    roleData.role ===
    'professional'
  ) {
    redirect(
      '/dashboard/professional'
    )
  }

  redirect(
    '/dashboard/institution'
  )
}