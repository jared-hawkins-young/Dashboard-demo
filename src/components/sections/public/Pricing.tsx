import { Check, ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface PricingTier {
  name: string
  price: number
  setupFee?: number
  period: string
  description: string
  features: string[]
  highlighted?: boolean
  ctaText?: string
  ctaHref?: string
  badge?: string
}

interface PricingProps {
  title?: string
  subtitle?: string
  tiers?: PricingTier[]
  showAnnualDiscount?: boolean
}

const defaultTiers: PricingTier[] = [
  {
    name: "Starter",
    price: 199,
    setupFee: 99,
    period: "/month",
    description: "Perfect for small businesses",
    features: [
      "Up to 200 calls/month",
      "Basic reservations & orders",
      "Email support",
      "Single location",
      "Standard reporting",
      "Basic integrations"
    ],
    highlighted: false,
    ctaText: "Get Started",
    ctaHref: "/contact"
  },
  {
    name: "Professional",
    price: 299,
    setupFee: 149,
    period: "/month",
    description: "Best value for growing businesses",
    features: [
      "Up to 500 calls/month",
      "Advanced AI capabilities",
      "Priority phone support",
      "Up to 3 locations",
      "Analytics dashboard",
      "POS system integration",
      "Calendar synchronization",
      "Custom voice training"
    ],
    highlighted: true,
    ctaText: "Get Started",
    ctaHref: "/contact",
    badge: "Most Popular"
  },
  {
    name: "Enterprise",
    price: 599,
    setupFee: 299,
    period: "/month",
    description: "For large operations",
    features: [
      "Unlimited calls",
      "Custom AI training",
      "24/7 dedicated support",
      "Unlimited locations",
      "Advanced integrations",
      "Multi-language support",
      "99.9% uptime guarantee",
      "Advanced reporting",
      "Priority onboarding"
    ],
    highlighted: false,
    ctaText: "Contact Sales",
    ctaHref: "/contact"
  }
]

export function Pricing({
  title = "Simple, Transparent Pricing",
  subtitle = "One plan that scales with your business. No hidden fees, no surprises.",
  tiers = defaultTiers,
  showAnnualDiscount = true
}: PricingProps) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
          
          {showAnnualDiscount && (
            <div className="mt-6 inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="h-4 w-4" />
              <span>Save 20% with annual billing</span>
            </div>
          )}
        </div>
        
        {/* Pricing Cards */}
        <div className="flex justify-center">
          <div className="grid gap-8 md:grid-cols-3 max-w-7xl w-full">
            {tiers.map((tier, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  tier.highlighted 
                    ? 'ring-2 ring-blue-500 shadow-lg scale-105' 
                    : 'hover:shadow-lg'
                }`}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 text-sm font-medium">
                    {tier.badge}
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-muted-foreground mb-4">{tier.description}</p>
                  
                  {/* Price */}
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-foreground">${tier.price}</span>
                      <span className="text-muted-foreground ml-1">{tier.period}</span>
                    </div>
                    
                    {tier.setupFee && (
                      <div className="inline-flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                        ${tier.setupFee} one-time setup fee
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features List */}
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <Button 
                    asChild 
                    className={`w-full py-6 text-lg font-medium transition-all ${
                      tier.highlighted
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                        : 'bg-background text-foreground border border-border hover:bg-muted'
                    }`}
                  >
                    <a href={tier.ctaHref || '/contact'}>
                      {tier.ctaText || 'Get Started'}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  
                  {/* Additional info */}
                  <div className="text-center text-xs text-muted-foreground space-y-1">
                    <p>✓ No long-term contracts</p>
                    <p>✓ Cancel anytime</p>
                    <p>✓ 30-day money-back guarantee</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-muted-foreground">
            Have a large organization? 
            <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium ml-1">
              Contact us for enterprise pricing
            </a>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>SOC 2 Type II Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>99.9% Uptime SLA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
