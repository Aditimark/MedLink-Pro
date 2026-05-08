export type UserRole =
  | 'professional'
  | 'institution'
  | 'admin'

export interface ProfessionalProfile {
  id: string
  full_name: string
  email: string
  phone?: string
  specialization?: string
  years_experience?: number
  current_institution?: string
  metadata?: Record<string, any>
}

export interface InstitutionProfile {
  id: string
  institution_name: string
  email: string
  phone?: string
  institution_type?: string
  website?: string
  location?: string
  metadata?: Record<string, any>
}