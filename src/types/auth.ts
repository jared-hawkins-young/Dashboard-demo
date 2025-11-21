// Mock User type for Phase 1 - will be replaced with actual Supabase User in later phases
export interface User {
  id: string;
  email?: string;
  user_metadata?: Record<string, any>;
  app_metadata?: Record<string, any>;
  created_at?: string;
  updated_at?: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  isNewUser: boolean;
}

export interface UserProfile {
  id: string;
  user_id: string;
  organization_id: string;
  role: 'admin' | 'manager' | 'viewer';
  created_at: string;
  updated_at: string;
}

export interface AuthError {
  message: string;
  status?: number;
}

export interface SignInOptions {
  redirectTo?: string;
}

export interface AuthCallbackData {
  access_token?: string;
  refresh_token?: string;
  expires_in?: number;
  token_type?: string;
  type?: string;
}
