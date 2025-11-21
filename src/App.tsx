import React from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'

// Layouts
import PublicLayout from '@/components/layout/PublicLayout'

// Public Pages
import LandingPage from '@/pages/public/LandingPage'
import AboutPage from '@/pages/public/AboutPage'
import ContactPage from '@/pages/public/ContactPage'
import TermsPage from '@/pages/public/TermsPage'
import PrivacyPage from '@/pages/public/PrivacyPage'
import FeaturesPage from '@/pages/public/FeaturesPage'
import UseCasesPage from '@/pages/public/UseCasesPage'

// Auth Pages
import SignInPage from '@/pages/auth/SignInPage'
import SignInEmailPage from '@/pages/auth/SignInEmailPage'
import SignUpEmailPage from '@/pages/auth/SignUpEmailPage'

// Public Demo Page
import DemoPage from '@/pages/public/DemoPage'
import ServicesPage from '@/pages/public/ServicesPage'

// Booking Flow Pages
import BookNowPage from '@/pages/public/BookNowPage'
import BookServicesPage from '@/pages/public/BookServicesPage'
import BookPaymentPage from '@/pages/public/BookPaymentPage'
import BookConfirmationPage from '@/pages/public/BookConfirmationPage'

// App Pages
import DashboardPage from '@/pages/app/DashboardPage'
import EnginePage from '@/pages/app/EnginePage'
import UploadPage from '@/pages/app/UploadPage'
import KnowledgeBasePage from '@/pages/app/KnowledgeBasePage'
import GapsPage from '@/pages/app/GapsPage'
import AccountPage from '@/pages/app/AccountPage'

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
)

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth()
  
  // Check for demo user in localStorage for backward compatibility
  const demoUser = localStorage.getItem('demo_user')

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Loading...</h2>
          <p className="text-gray-500">Authenticating your session</p>
        </div>
      </div>
    )
  }

  if (!user && !demoUser) {
    return <Navigate to="/auth/signin" replace />
  }

  return <>{children}</>
}

// Public Route Component (redirects authenticated users, but allows onboarding)
const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth()

  if (loading) {
    return <LoadingSpinner />
  }

  // Allow onboarding routes for authenticated users
  if (user && !window.location.pathname.startsWith('/onboarding')) {
    return <Navigate to="/app" replace />
  }

  return <>{children}</>
}

function App() {
  return (
    <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout><Outlet /></PublicLayout>}>
          <Route index element={<LandingPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="use-cases" element={<UseCasesPage />} />
          <Route path="resources" element={<AboutPage />} /> {/* Temporary - will create ResourcesPage */}
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="demo" element={<DemoPage />} />
          
          {/* Booking Flow Routes */}
          <Route path="book" element={<BookNowPage />} />
          <Route path="book/services" element={<BookServicesPage />} />
          <Route path="book/payment" element={<BookPaymentPage />} />
          <Route path="book/confirmation" element={<BookConfirmationPage />} />
        </Route>


        {/* Auth Routes */}
        <Route path="/auth">
          <Route path="signin" element={
            <PublicRoute>
              <SignInPage />
            </PublicRoute>
          } />
          <Route path="signin-email" element={
            <PublicRoute>
              <SignInEmailPage />
            </PublicRoute>
          } />
          <Route path="signup-email" element={
            <PublicRoute>
              <SignUpEmailPage />
            </PublicRoute>
          } />
        </Route>

        {/* Protected App Routes */}
        <Route path="/app" element={
          <ProtectedRoute>
            <Outlet />
          </ProtectedRoute>
        }>
          <Route index element={<Navigate to="/app/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="engine" element={<EnginePage />} />
          <Route path="upload" element={<UploadPage />} />
          <Route path="knowledge-base" element={<KnowledgeBasePage />} />
          <Route path="gaps" element={<GapsPage />} />
          <Route path="account" element={<AccountPage />} />
        </Route>

        {/* Catch all route */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
              <p className="text-gray-600 mb-4">Page not found</p>
              <a href="/" className="text-blue-600 hover:text-blue-800">
                Return to home
              </a>
            </div>
          </div>
        } />
      </Routes>
  )
}

export default App