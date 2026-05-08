import { createClient } from '@/lib/supabase/client'


import type { ApiResponse } from '@/types/api'

import type { RegisterInput } from '@/lib/validations/auth'
import type { LoginInput } from '@/lib/validations/login'

export class AuthService {
  static async register(
    payload: RegisterInput
  ): Promise<ApiResponse<any>> {
    try {
      const supabase = createClient()

      const { data, error } =
        await supabase.auth.signUp({
          email: payload.email,
          password: payload.password,

          options: {
            data: {
              role: payload.role,
            },
          },
        })

      /*
        Supabase edge case:
        Existing users can still return partial success.
      */

      const identities =
        data?.user?.identities || []

      const userExists =
        identities.length === 0

      if (error || userExists) {
        return {
          success: false,
          error:
            'An account with this email already exists. Please sign in instead.',
        }
      }

      /*
        EXTRA SAFETY:
        Ensure user exists before profile creation.
      */

      if (!data.user) {
        return {
          success: false,
          error:
            'Unable to create account.',
        }
      }

      /*
        CREATE ROLE + PROFILE
      */

      
      return {
        success: true,
        data,
      }
    } catch {
      return {
        success: false,
        error:
          'Unexpected registration error.',
      }
    }
  }

  static async verifyOtp(
    email: string,
    token: string
  ): Promise<ApiResponse<any>> {
    try {
      const supabase = createClient()

      const { data, error } =
        await supabase.auth.verifyOtp({
          email,
          token,
          type: 'signup',
        })

      if (error) {
        return {
          success: false,
          error: error.message,
        }
      }

      return {
        success: true,
        data,
      }
    } catch {
      return {
        success: false,
        error:
          'OTP verification failed.',
      }
    }
  }

  static async login(
    payload: LoginInput
  ): Promise<ApiResponse<any>> {
    try {
      const supabase = createClient()

      const { data, error } =
        await supabase.auth.signInWithPassword({
          email: payload.email,
          password: payload.password,
        })

      if (error) {
        return {
          success: false,
          error: error.message,
        }
      }

      return {
        success: true,
        data,
      }
    } catch {
      return {
        success: false,
        error:
          'Unexpected login error.',
      }
    }
  }

  static async logout() {
    const supabase = createClient()

    await supabase.auth.signOut()
  }
}