import { Phone, Calendar, ShoppingCart, BarChart3, Clock, Users, Zap, Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  highlight?: boolean
}

interface FeaturesProps {
  title?: string
  subtitle?: string
  features?: Feature[]
}

const defaultFeatures: Feature[] = [
  {
    icon: Phone,
    title: "Never Miss a Call",
    description: "AI agents answer every call 24/7, ensuring your customers always reach a professional representative.",
    highlight: true
  },
  {
    icon: Calendar,
    title: "Smart Reservations",
    description: "Automatically book appointments and reservations with real-time calendar integration and conflict prevention."
  },
  {
    icon: ShoppingCart,
    title: "Order Processing",
    description: "Take orders accurately with menu integration and seamless POS system connectivity."
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Monitor call volume, conversion rates, and customer satisfaction with detailed reporting."
  },
  {
    icon: Users,
    title: "Multi-Location Support",
    description: "Manage voice agents across multiple business locations from a single dashboard."
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Get your AI voice agent up and running in under 24 hours with our guided setup process."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Your AI agents work around the clock, handling calls even when your business is closed."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and security protocols protect all customer data and conversations."
  }
]

export function Features({
  title = "Everything Your Business Needs",
  subtitle = "Our AI voice agents integrate seamlessly with your existing systems and provide comprehensive call management solutions.",
  features = defaultFeatures
}: FeaturesProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            
            // Define color schemes for each feature
            const getColorScheme = (index: number, isHighlight: boolean) => {
              if (isHighlight) {
                return {
                  cardClass: 'ring-2 ring-blue-200 bg-gradient-to-br from-blue-50 via-white to-purple-50 border-blue-200',
                  iconClass: 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg',
                  titleClass: 'text-blue-700',
                  badgeClass: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                }
              }
              
              const colorSchemes = [
                {
                  cardClass: 'bg-gradient-to-br from-green-50 via-white to-emerald-50 border-green-200',
                  iconClass: 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg',
                  titleClass: 'text-green-700',
                  badgeClass: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                },
                {
                  cardClass: 'bg-gradient-to-br from-orange-50 via-white to-amber-50 border-orange-200',
                  iconClass: 'bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-lg',
                  titleClass: 'text-orange-700',
                  badgeClass: 'bg-gradient-to-r from-orange-500 to-amber-600 text-white'
                },
                {
                  cardClass: 'bg-gradient-to-br from-purple-50 via-white to-violet-50 border-purple-200',
                  iconClass: 'bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-lg',
                  titleClass: 'text-purple-700',
                  badgeClass: 'bg-gradient-to-r from-purple-500 to-violet-600 text-white'
                },
                {
                  cardClass: 'bg-gradient-to-br from-cyan-50 via-white to-teal-50 border-cyan-200',
                  iconClass: 'bg-gradient-to-br from-cyan-500 to-teal-600 text-white shadow-lg',
                  titleClass: 'text-cyan-700',
                  badgeClass: 'bg-gradient-to-r from-cyan-500 to-teal-600 text-white'
                },
                {
                  cardClass: 'bg-gradient-to-br from-rose-50 via-white to-pink-50 border-rose-200',
                  iconClass: 'bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-lg',
                  titleClass: 'text-rose-700',
                  badgeClass: 'bg-gradient-to-r from-rose-500 to-pink-600 text-white'
                },
                {
                  cardClass: 'bg-gradient-to-br from-indigo-50 via-white to-blue-50 border-indigo-200',
                  iconClass: 'bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-lg',
                  titleClass: 'text-indigo-700',
                  badgeClass: 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white'
                },
                {
                  cardClass: 'bg-gradient-to-br from-emerald-50 via-white to-teal-50 border-emerald-200',
                  iconClass: 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg',
                  titleClass: 'text-emerald-700',
                  badgeClass: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white'
                }
              ]
              
              return colorSchemes[index % colorSchemes.length]
            }
            
            const colors = getColorScheme(index, feature.highlight || false)
            
            return (
              <Card 
                key={index} 
                className={`group h-full transition-all duration-300 hover:shadow-xl hover:scale-105 ${colors.cardClass}`}
              >
                <CardContent className="p-6 text-center h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${colors.iconClass}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className={`text-xl font-semibold mb-3 transition-colors ${colors.titleClass || 'group-hover:text-blue-600'}`}>
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Highlight badge */}
                  {feature.highlight && (
                    <div className="mt-4">
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold animate-pulse ${colors.badgeClass || 'bg-blue-100 text-blue-800'}`}>
                        Most Popular
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="text-green-500">✓</span>
            <span>All features included in every plan</span>
          </div>
          <p className="text-muted-foreground">
            Want to see how it works?{' '}
            <a href="/demo" className="text-blue-600 hover:text-blue-700 font-medium underline">
              Try our interactive demo
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
