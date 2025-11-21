import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

interface PublicLayoutProps {
  children: ReactNode
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Public Header */}
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">💧</span>
            </div>
            <div>
              <div className="font-bold text-lg leading-tight">Hydration & Health</div>
              <div className="text-xs text-muted-foreground leading-tight">Carolina</div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link to="/book">
              <Button className="bg-primary hover:bg-primary/90">Book IV Today</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Public Footer */}
      <footer className="bg-muted/50 mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">💧</span>
                </div>
                <div>
                  <div className="font-bold leading-tight">Hydration & Health</div>
                  <div className="text-xs text-muted-foreground leading-tight">Carolina</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional mobile IV therapy services in Charlotte, NC. Licensed registered nurses delivering premium wellness treatments to your location.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-medium">Services</h4>
              <div className="space-y-2">
                <Link to="/services" className="block text-sm text-muted-foreground hover:text-foreground">
                  All IV Therapies
                </Link>
                <a href="tel:+17044837477" className="block text-sm text-muted-foreground hover:text-foreground">
                  (704) IV-DRIPS
                </a>
                <Link to="/book" className="block text-sm text-muted-foreground hover:text-foreground">
                  Book Appointment
                </Link>
              </div>
            </div>

            {/* Service Areas */}
            <div className="space-y-4">
              <h4 className="font-medium">Service Areas</h4>
              <div className="space-y-2">
                <span className="block text-sm text-muted-foreground">Charlotte, NC</span>
                <span className="block text-sm text-muted-foreground">Matthews</span>
                <span className="block text-sm text-muted-foreground">Ballantyne</span>
                <span className="block text-sm text-muted-foreground">SouthPark</span>
                <span className="block text-sm text-muted-foreground">Uptown Charlotte</span>
              </div>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="font-medium">Company</h4>
              <div className="space-y-2">
                <Link to="/about" className="block text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
                <Link to="/contact" className="block text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
                <Link to="/privacy" className="block text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="block text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © 2025 Hydration and Health Carolina. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
