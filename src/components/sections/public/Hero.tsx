import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeroProps {
  title?: string
  subtitle?: string
  description?: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  showDemo?: boolean
}

export function Hero({
  title = "Your Business Never Misses a Call with AI Voice Agents",
  subtitle = "Automate reservations, take orders, and handle customer service 24/7.",
  description = "Perfect for restaurants, salons, and service-based businesses. Get started in minutes.",
  primaryCta = { text: "Get Started", href: "/auth/signin" },
  secondaryCta = { text: "Learn More", href: "/contact" },
  showDemo = true
}: HeroProps) {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 mb-6">
            <span className="mr-2">🚀</span>
            Now serving 500+ businesses nationwide
          </div>

          {/* Main heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {title.split('AI Voice Agents')[0]}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Voice Agents
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            {subtitle}
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              <a href={primaryCta.href}>
                {primaryCta.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            {showDemo && (
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg font-medium border-2 hover:bg-muted"
              >
                <a href={secondaryCta.href}>
                  <Play className="mr-2 h-5 w-5" />
                  {secondaryCta.text}
                </a>
              </Button>
            )}
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>No contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Setup in 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animation keyframes using dangerouslySetInnerHTML */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob { animation: blob 7s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `
      }} />
    </section>
  )
}
