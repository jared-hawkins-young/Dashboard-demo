import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Mail } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function SignInEmailPage() {
  const { signInWithEmail, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setIsSigningIn(true);
    setError(null);
    
    try {
      await signInWithEmail(email, password);
    } catch (error: any) {
      console.error('Error signing in:', error);
      setError(error.message || 'Failed to sign in. Please check your credentials.');
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign In - SOPzilla</title>
        <meta name="description" content="Sign in to your SOPzilla account to access your SOPs and team collaboration tools." />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/30 to-accent/20 p-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary to-chart-3 flex items-center justify-center shadow-lg border border-primary/20">
              <span className="text-primary-foreground font-bold text-xl">SOP</span>
            </div>
          </div>

          <Card className="shadow-xl border bg-card">
            <CardHeader className="text-center bg-chart-1/5">
              <CardTitle className="text-2xl text-card-foreground">Welcome back</CardTitle>
              <CardDescription className="text-muted-foreground">
                Sign in to your SOPzilla account
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleEmailSignIn} className="space-y-4">
                {error && (
                  <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg">
                    {error}
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-card-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading || isSigningIn}
                    className="border-border bg-background"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-card-foreground">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading || isSigningIn}
                    className="border-border bg-background"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <Link 
                    to="/auth/forgot-password" 
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" 
                  size="lg"
                  disabled={loading || isSigningIn}
                >
                  {isSigningIn ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Sign in with Email
                    </>
                  )}
                </Button>
              </form>
              
              <div className="mt-6 text-center text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/auth/signup-email" className="text-primary hover:underline font-medium">
                  Create account
                </Link>
              </div>

              <div className="mt-4 text-center">
                <Link to="/auth/signin" className="text-sm text-muted-foreground hover:text-primary">
                  ← Back to sign in options
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
