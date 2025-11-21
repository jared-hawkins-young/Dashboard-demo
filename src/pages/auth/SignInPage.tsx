import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Loader2, Mail } from 'lucide-react'

export default function SignInPage() {
  const navigate = useNavigate()
  const { signInWithGoogle } = useAuth()
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGoogleSignIn = async () => {
    setIsSigningIn(true)
    setError(null)
    
    const { error } = await signInWithGoogle()
    
    if (error) {
      setError(error.message)
      setIsSigningIn(false)
    }
    // If successful, the auth state change will handle navigation
  }

  const handleDemoLogin = async () => {
    setIsSigningIn(true)
    // Set demo user in localStorage for auth
    const demoUser = {
      id: 'demo-user',
      email: 'demo@sopzilla.com',
      name: 'Demo User',
      avatar_url: null
    }
    localStorage.setItem('demo_user', JSON.stringify(demoUser))
    
    // Simulate a brief loading state then navigate
    setTimeout(() => {
      navigate('/app/dashboard')
    }, 1000)
  }

  return (
    <>
      <Helmet>
        <title>Sign In - SOPzilla</title>
        <meta name="description" content="Sign in to your SOPzilla dashboard to manage your Standard Operating Procedures." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/30 via-accent/20 to-muted/40 p-4">
        <Card className="w-full max-w-md bg-card border shadow-xl">
          <CardHeader className="space-y-1 text-center bg-chart-1/5">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-chart-3 flex items-center justify-center shadow-lg">
                <FileText className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            
            <CardTitle className="text-2xl font-bold text-card-foreground">Welcome to SOPzilla</CardTitle>
            <CardDescription className="text-muted-foreground">
              Sign in to access your SOP management dashboard
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md">
                {error}
              </div>
            )}
            
            <Button
              onClick={handleGoogleSignIn}
              disabled={isSigningIn}
              variant="outline"
              className="w-full border-chart-2/30 hover:bg-chart-2/10"
              size="lg"
            >
              {isSigningIn ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin text-chart-2" />
                  Signing in...
                </>
              ) : (
                <>
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </>
              )}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or</span>
              </div>
            </div>
            
            <Button
              onClick={() => navigate('/auth/signin-email')}
              disabled={isSigningIn}
              variant="outline"
              className="w-full border-chart-3/30 hover:bg-chart-3/10"
              size="lg"
            >
              <Mail className="mr-2 h-4 w-4 text-chart-3" />
              Sign in with Email
            </Button>

            <Button
              onClick={handleDemoLogin}
              disabled={isSigningIn}
              className="w-full bg-gradient-to-r from-chart-4 to-chart-5 hover:from-chart-4/90 hover:to-chart-5/90 text-primary-foreground"
              size="lg"
            >
              {isSigningIn ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <FileText className="mr-2 h-4 w-4" />
                  Demo Login
                </>
              )}
            </Button>
            
            <div className="text-center space-y-2">
              <p className="text-xs text-muted-foreground">
                This is a demo login for SOPzilla. Click above to explore the dashboard.
              </p>
              
              <div className="mt-4 space-y-2">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{' '}
                  <button 
                    onClick={() => navigate('/auth/signup-email')}
                    className="text-primary hover:underline font-medium"
                  >
                    Create account
                  </button>
                </p>
                <p className="text-sm text-muted-foreground">
                  Want to learn more?{' '}
                  <a href="/" className="text-primary hover:underline font-medium">
                    Back to homepage
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
