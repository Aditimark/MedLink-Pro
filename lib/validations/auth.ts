import { z } from 'zod'

export const professionalSchema =
  z.object({
    role: z.literal(
      'professional'
    ),

    email: z.email(),

    password: z
      .string()
      .min(8)
      .max(100),

    full_name: z
      .string()
      .min(2),

    phone: z.string().optional(),

    specialization:
      z.string().optional(),

    years_experience:
      z.number().optional(),

    current_institution:
      z.string().optional(),
  })

export const institutionSchema =
  z.object({
    role: z.literal(
      'institution'
    ),

    email: z.email(),

    password: z
      .string()
      .min(8)
      .max(100),

    institution_name:
      z.string().min(2),

    phone: z.string().optional(),

    institution_type:
      z.string().optional(),

    website:
      z.string().optional(),

    location:
      z.string().optional(),
  })

export const registerSchema =
  z.union([
    professionalSchema,
    institutionSchema,
  ])

export type RegisterInput =
  z.infer<typeof registerSchema>