import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import { ivServices, addOns, membershipTiers } from "@/data/ivServices";


export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>IV Therapy Services - Hydration and Health Carolina</title>
        <meta name="description" content="Complete menu of mobile IV therapy services in Charlotte, NC. From hydration to NAD+ anti-aging treatments. Licensed RNs, same-day appointments available." />
        <meta name="keywords" content="IV therapy services Charlotte, Myers Cocktail, NAD+ therapy, hangover IV, immunity boost, mobile IV menu Charlotte NC" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Mobile IV Therapy Services
            <span className="text-primary block">in Charlotte, NC</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Professional IV treatments delivered to your home, office, or hotel. 
            All services performed by licensed registered nurses with medical-grade equipment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link to="/book">
                Book Your IV Therapy Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-secondary-foreground">Membership Plans</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Save on regular treatments with our flexible membership options
            </p>
            <div className="mt-4 p-3 bg-primary/10 text-primary rounded-lg inline-block">
              <strong>Mobile visit fee: $99-$149</strong> (waived for members)
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <Card key={index} className="text-center border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
                {tier.name === "Gold" && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-2">{tier.icon}</div>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{tier.monthly_price}<span className="text-lg text-muted-foreground">/month</span></div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center justify-center">
                        <span>✓ {benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                    <Link to="/book">Choose {tier.name}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 text-sm text-muted-foreground">
            After-hours surcharge: $100 • All memberships month-to-month, cancel anytime
          </div>
        </div>
      </section>

      {/* Main IV Services */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">IV Therapy Menu</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each treatment includes professional assessment, sterile IV insertion, and monitoring by licensed RNs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {ivServices.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-40"
                     style={{ background: "conic-gradient(from 180deg, hsl(var(--primary)/.35), hsl(var(--accent)/.35))" }} />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{service.category}</Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {service.duration}
                    </div>
                  </div>
                  <CardTitle className="flex items-center gap-3 text-xl font-semibold">
                    <span className="text-2xl">{service.icon}</span>
                    {service.name}
                  </CardTitle>
                  <div className="text-lg font-bold text-primary">{service.price_range}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground italic">"{service.marketing.tagline}"</p>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Key Benefits:</div>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                      {service.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Includes:</div>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                      {service.ingredients.map((ingredient, i) => (
                        <li key={i}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                    <Link to="/book">{service.marketing.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-card-foreground">Boost Your IV with Add-Ons</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Customize your treatment with these powerful additions
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={index} className="text-center border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="text-3xl mb-2">{addon.icon}</div>
                  <CardTitle className="text-lg">{addon.name}</CardTitle>
                  <div className="text-xl font-bold text-primary">{addon.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {addon.benefits.map((benefit, i) => (
                      <li key={i}>• {benefit}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary">
        <div className="container mx-auto text-center text-primary-foreground">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Mobile IV?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Same-day appointments available. Licensed medical professionals. 
            Treatments in the comfort of your own space.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-lg px-8 py-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
              <Link to="/book">
                Book Your Treatment Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <p className="text-sm opacity-75">
            HSA/FSA eligible • Licensed RNs • Medical-grade equipment
          </p>
        </div>
      </section>

    </>
  );
}