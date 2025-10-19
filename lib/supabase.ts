import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Project = {
  id: string
  title: string
  description: string
  date: string
  status: string
  image_url: string | null
  order_index: number
  created_at: string
  updated_at: string
}

export type Admin = {
  id: string
  email: string
  full_name: string
  created_at: string
}
