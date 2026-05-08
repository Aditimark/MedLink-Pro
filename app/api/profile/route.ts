import { createClient } from '@/lib/supabase/server'

import { apiError, apiSuccess } from '@/app/api/response'

export async function GET() {
  try {
    const supabase =
      await createClient()

    const {
      data: { user },
    } =
      await supabase.auth.getUser()

    if (!user) {
      return apiError(
        'Unauthorized',
        401
      )
    }

    /*
      GET ROLE
    */

    const { data: roleData } =
      await supabase
        .from('user_roles')
        .select('role')
        .eq('id', user.id)
        .single()

    if (!roleData) {
      return apiError(
        'Role not found',
        404
      )
    }

    /*
      PROFESSIONAL PROFILE
    */

    if (
      roleData.role ===
      'professional'
    ) {
      const {
        data: profile,
      } =
        await supabase
          .from('professionals')
          .select('*')
          .eq('id', user.id)
          .single()

      return apiSuccess({
        role:
          roleData.role,

        profile,
      })
    }

    /*
      INSTITUTION PROFILE
    */

    const {
      data: profile,
    } =
      await supabase
        .from('institutions')
        .select('*')
        .eq('id', user.id)
        .single()

    return apiSuccess({
      role:
        roleData.role,

      profile,
    })
  } catch {
    return apiError(
      'Internal server error',
      500
    )
  }
}