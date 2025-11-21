import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Create a mock Supabase client for demo purposes when env vars are missing
const createMockSupabaseClient = (): any => {
  console.warn('⚠️ Running in demo mode without Supabase. Auth features will be simulated.')
  
  return {
    auth: {
      getSession: async () => ({ data: { session: null }, error: null }),
      onAuthStateChange: (_callback: any) => {
        // Return a subscription object with unsubscribe method
        return { 
          data: { 
            subscription: { 
              unsubscribe: () => {} 
            } 
          } 
        }
      },
      signInWithPassword: async ({ email, password: _password }: any) => {
        console.log('Mock sign in with:', email)
        return { 
          data: { 
            user: { id: 'demo-user', email }, 
            session: { access_token: 'demo-token', user: { id: 'demo-user', email } } 
          }, 
          error: null 
        }
      },
      signUp: async ({ email, password: _password, options: _options }: any) => {
        console.log('Mock sign up with:', email)
        return { 
          data: { 
            user: { id: 'demo-user', email }, 
            session: { access_token: 'demo-token', user: { id: 'demo-user', email } } 
          }, 
          error: null 
        }
      },
      signInWithOAuth: async ({ provider }: any) => {
        console.log('Mock OAuth sign in with:', provider)
        return { error: null }
      },
      signOut: async () => {
        console.log('Mock sign out')
        return { error: null }
      },
      resetPasswordForEmail: async (email: string) => {
        console.log('Mock password reset for:', email)
        return { error: null }
      }
    },
    from: (_table: string) => ({
      select: () => ({
        eq: () => ({ data: [], error: null }),
        single: () => ({ data: null, error: null })
      }),
      insert: () => ({ data: null, error: null }),
      update: () => ({ data: null, error: null }),
      delete: () => ({ data: null, error: null })
    })
  }
}

// Use real Supabase client if env vars are provided, otherwise use mock
export const supabase: SupabaseClient = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : createMockSupabaseClient()

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
