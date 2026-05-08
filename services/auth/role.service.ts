import { createClient } from '@/lib/supabase/client'

export class RoleService {
  static async getUserRole() {
    const supabase = createClient()

    const {
      data: { user },
    } =
      await supabase.auth.getUser()

    if (!user) {
      return null
    }

    const { data, error } =
      await supabase
        .from('user_roles')
        .select('role')
        .eq('id', user.id)
        .single()

    if (error || !data) {
      return null
    }

    return data.role
  }
}