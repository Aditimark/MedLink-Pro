import { createClient } from '@/lib/supabase/client'

import type { RegisterInput } from '@/lib/validations/auth'

export class ProfileService {
  static async createProfile(
    userId: string,
    payload: RegisterInput
  ) {
    const supabase = createClient()

    /*
      USER ROLE
    */

    const roleInsert =
      await supabase
        .from('user_roles')
        .insert({
          id: userId,
          role: payload.role,
        })

    console.log(
      'ROLE INSERT:',
      roleInsert
    )

    /*
      PROFESSIONAL
    */

    if (
      payload.role ===
      'professional'
    ) {
      const professionalPayload =
        {
          id: userId,

          full_name:
            payload.full_name,

          email: payload.email,

          phone:
            payload.phone,

          specialization:
            payload.specialization,

          years_experience:
            payload.years_experience,

          current_institution:
            payload.current_institution,
        }

      console.log(
        'PROFESSIONAL PAYLOAD:',
        professionalPayload
      )

      const insert =
        await supabase
          .from('professionals')
          .insert(
            professionalPayload
          )

      console.log(
        'PROFESSIONAL INSERT:',
        insert
      )

      return insert
    }

    /*
      INSTITUTION
    */

    const institutionPayload =
      {
        id: userId,

        institution_name:
          payload.institution_name,

        email: payload.email,

        phone:
          payload.phone,

        institution_type:
          payload.institution_type,

        website:
          payload.website,

        location:
          payload.location,
      }

    console.log(
      'INSTITUTION PAYLOAD:',
      institutionPayload
    )

    const insert =
      await supabase
        .from('institutions')
        .insert(
          institutionPayload
        )

    console.log(
      'INSTITUTION INSERT:',
      insert
    )

    return insert
  }
}