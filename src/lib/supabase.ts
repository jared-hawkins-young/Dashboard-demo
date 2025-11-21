import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
})

export type Database = {
  public: {
    Tables: {
      organizations: {
        Row: {
          id: string
          name: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          created_at?: string
          updated_at?: string
        }
      }
      locations: {
        Row: {
          id: string
          organization_id: string
          name: string
          address: string
          phone: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          name: string
          address: string
          phone: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          organization_id?: string
          name?: string
          address?: string
          phone?: string
          created_at?: string
          updated_at?: string
        }
      }
      agents: {
        Row: {
          id: string
          location_id: string
          name: string
          status: 'active' | 'idle' | 'maintenance'
          calls_today: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          location_id: string
          name: string
          status?: 'active' | 'idle' | 'maintenance'
          calls_today?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          location_id?: string
          name?: string
          status?: 'active' | 'idle' | 'maintenance'
          calls_today?: number
          created_at?: string
          updated_at?: string
        }
      }
      calls: {
        Row: {
          id: string
          agent_id: string
          caller_number: string
          duration_seconds: number
          status: 'completed' | 'missed' | 'in_progress'
          recording_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          agent_id: string
          caller_number: string
          duration_seconds?: number
          status?: 'completed' | 'missed' | 'in_progress'
          recording_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          agent_id?: string
          caller_number?: string
          duration_seconds?: number
          status?: 'completed' | 'missed' | 'in_progress'
          recording_url?: string | null
          created_at?: string
        }
      }
      user_profiles: {
        Row: {
          id: string
          user_id: string
          organization_id: string
          role: 'admin' | 'manager' | 'viewer'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          organization_id: string
          role?: 'admin' | 'manager' | 'viewer'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          organization_id?: string
          role?: 'admin' | 'manager' | 'viewer'
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
