import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Droplets, 
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Star,
  Stethoscope,
  Home,
  Phone,
  Award
} from "lucide-react";


export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Hydration and Health Carolina - Mobile IV Therapy in Charlotte, NC</title>
        <meta name="description" content="Licensed RNs delivering mobile IV therapy to your home, office, or hotel in Charlotte, NC. Same-day service available. HSA/FSA eligible wellness treatments." />
        <meta name="keywords" content="mobile IV therapy Charlotte, IV hydration near me, hangover IV Charlotte, NAD IV Charlotte, immunity IV Charlotte, mobile IV drip" />
        <link rel="canonical" href="https://hydrationhealthcarolina.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Hydration and Health Carolina - Mobile IV Therapy Charlotte" />
        <meta property="og:description" content="Licensed RNs. Same-Day Mobile IV Therapy in Charlotte, NC. 45–60 minute treatments at home, office, or hotel." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hydrationhealthcarolina.com/" />
        <meta property="og:image" content="https://hydrationhealthcarolina.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile IV Therapy Charlotte - Hydration & Health Carolina" />
        <meta name="twitter:description" content="Licensed RNs delivering IV therapy to your location. Same-day service available." />
        <meta name="twitter:image" content="https://hydrationhealthcarolina.com/twitter-image.jpg" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Hydration and Health Carolina",
            "url": "https://hydrationhealthcarolina.com",
            "logo": "https://hydrationhealthcarolina.com/logo.png",
            "description": "Mobile IV therapy services in Charlotte, NC with licensed registered nurses",
            "areaServed": "Charlotte, NC",
            "medicalSpecialty": "IV Therapy",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-704-IV-DRIPS",
              "contactType": "Bookings",
              "availableLanguage": "English"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
            � First mobile IV drip $50 off!
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Licensed RNs. Same-Day 
            <span className="text-primary block">Mobile IV Therapy in Charlotte, NC.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            45–60 minute treatments at home, office, or hotel. HSA/FSA eligible wellness services 
            with certified medical staff and sterile technique.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link to="/auth/signup-email">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-border" asChild>
              <Link to="/auth/signin">
                Sign In
              </Link>
            </Button>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-chart-1/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-chart-1" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">45–60 minutes</h3>
              <p className="text-muted-foreground">treatments at home</p>
            </div>
            <div className="text-center">
              <div className="bg-chart-3/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-chart-3" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">HSA/FSA eligible</h3>
              <p className="text-muted-foreground">wellness services</p>
            </div>
            <div className="text-center">
              <div className="bg-chart-5/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Stethoscope className="h-8 w-8 text-chart-5" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Certified medical staff</h3>
              <p className="text-muted-foreground">and sterile technique</p>
            </div>
            <div className="text-center">
              <div className="bg-chart-2/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-chart-2" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Flexible memberships</h3>
              <p className="text-muted-foreground">and group discounts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-card-foreground">Trusted by Charlotte Wellness Community</h2>
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="font-semibold text-lg">4.9★ average from 500+ clients</span>
              </div>
              <div className="text-lg font-semibold text-primary">
                10,000+ IVs delivered
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center p-4 rounded-lg bg-background hover:bg-accent transition-colors border border-border">
              <Award className="h-8 w-8 text-chart-1 mr-2" />
              <span className="font-semibold text-card-foreground">Healthline</span>
            </div>
            <div className="flex items-center justify-center p-4 rounded-lg bg-background hover:bg-accent transition-colors border border-border">
              <Heart className="h-8 w-8 text-chart-2 mr-2" />
              <span className="font-semibold text-card-foreground">Wellness Charlotte</span>
            </div>
            <div className="flex items-center justify-center p-4 rounded-lg bg-background hover:bg-accent transition-colors border border-border">
              <Droplets className="h-8 w-8 text-chart-3 mr-2" />
              <span className="font-semibold text-card-foreground">Runner's Weekly</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-secondary-foreground">How Mobile IV Therapy Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional IV therapy delivered to your location in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <Card className="text-center border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card">
              <CardHeader>
                <div className="bg-chart-1/20 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-chart-1/30">
                  <Phone className="h-10 w-10 text-chart-1" />
                </div>
                <CardTitle className="text-2xl text-card-foreground">1. Book Your Session</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-muted-foreground">
                  Schedule online or call us. Choose from 9 specialized IV formulas. 
                  Same-day appointments available throughout Charlotte, NC.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card">
              <CardHeader>
                <div className="bg-chart-3/20 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-chart-3/30">
                  <Home className="h-10 w-10 text-chart-3" />
                </div>
                <CardTitle className="text-2xl text-card-foreground">2. We Come to You</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-muted-foreground">
                  Licensed RN arrives at your home, office, or hotel with medical-grade 
                  equipment and sterile supplies for your safety and comfort.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card">
              <CardHeader>
                <div className="bg-chart-5/20 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-chart-5/30">
                  <CheckCircle className="h-10 w-10 text-chart-5" />
                </div>
                <CardTitle className="text-2xl text-card-foreground">3. Feel Better Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-muted-foreground">
                  Relax during your 45-60 minute treatment. Feel immediate hydration, 
                  energy, and wellness benefits that can last for days.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* IV Services Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our IV Therapy Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from 9 specialized IV formulas designed to help you feel your best. 
              All treatments performed by licensed RNs in the comfort of your location.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {/* Pure Hydration */}
            <Card className="group relative overflow-hidden rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-40"
                   style={{ background: "conic-gradient(from 180deg, hsl(var(--primary)/.35), hsl(var(--accent)/.35))" }} />
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-semibold">
                  <span className="text-2xl">💧</span>
                  Pure Hydration
                </CardTitle>
                <div className="text-lg font-bold text-primary">$149 - $199</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Bounce back fast with our core hydration drip.</p>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Benefits:</div>
                  <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                    <li>Rapid rehydration</li>
                    <li>Fatigue relief</li>
                    <li>Post-workout restoration</li>
                  </ul>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link to="/auth/signup-email">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Myers Cocktail */}
            <Card className="group relative overflow-hidden rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-40"
                   style={{ background: "conic-gradient(from 180deg, hsl(var(--primary)/.35), hsl(var(--accent)/.35))" }} />
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-semibold">
                  <span className="text-2xl">⚡</span>
                  Myers Cocktail
                </CardTitle>
                <div className="text-lg font-bold text-primary">$249 - $299</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Classic vitamin drip trusted by athletes and professionals.</p>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Benefits:</div>
                  <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                    <li>Energy boost</li>
                    <li>Immune support</li>
                    <li>Stress reduction</li>
                  </ul>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link to="/auth/signup-email">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Immunity Boost */}
            <Card className="group relative overflow-hidden rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-40"
                   style={{ background: "conic-gradient(from 180deg, hsl(var(--primary)/.35), hsl(var(--accent)/.35))" }} />
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-semibold">
                  <span className="text-2xl">🛡️</span>
                  Immunity Boost
                </CardTitle>
                <div className="text-lg font-bold text-primary">$249 - $349</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Shield your immune system — one drip at a time.</p>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Benefits:</div>
                  <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                    <li>Strengthens immune system</li>
                    <li>Cold & flu defense</li>
                    <li>Reduces inflammation</li>
                  </ul>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link to="/auth/signup-email">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Hangover Rescue */}
            <Card className="group relative overflow-hidden rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-40"
                   style={{ background: "conic-gradient(from 180deg, hsl(var(--primary)/.35), hsl(var(--accent)/.35))" }} />
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-semibold">
                  <span className="text-2xl">🍸</span>
                  Hangover Rescue
                </CardTitle>
                <div className="text-lg font-bold text-primary">$249 - $349</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Bounce back from a big night — feel better in an hour.</p>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Benefits:</div>
                  <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                    <li>Relieves nausea & headache</li>
                    <li>Restores electrolytes</li>
                    <li>Boosts energy</li>
                  </ul>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link to="/auth/signup-email">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* NAD+ */}
            <Card className="group relative overflow-hidden rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-40"
                   style={{ background: "conic-gradient(from 180deg, hsl(var(--primary)/.35), hsl(var(--accent)/.35))" }} />
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-semibold">
                  <span className="text-2xl">🧬</span>
                  NAD+ Cellular Rejuvenation
                </CardTitle>
                <div className="text-lg font-bold text-primary">$399 - $799</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Renew your cells — unlock peak performance.</p>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Benefits:</div>
                  <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                    <li>Boosts metabolism</li>
                    <li>Supports brain function</li>
                    <li>Anti-aging benefits</li>
                  </ul>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link to="/auth/signup-email">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Beauty Glow */}
            <Card className="group relative overflow-hidden rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-40"
                   style={{ background: "conic-gradient(from 180deg, hsl(var(--primary)/.35), hsl(var(--accent)/.35))" }} />
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl font-semibold">
                  <span className="text-2xl">✨</span>
                  Beauty Glow
                </CardTitle>
                <div className="text-lg font-bold text-primary">$249 - $329</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">Glow from the inside out.</p>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Benefits:</div>
                  <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                    <li>Supports skin, hair, nails</li>
                    <li>Promotes collagen production</li>
                    <li>Brightens complexion</li>
                  </ul>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link to="/auth/signup-email">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/auth/signup-email">View All Features</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary">
        <div className="container mx-auto text-center text-primary-foreground">
          <h2 className="text-4xl font-bold mb-6">Ready to Feel Your Best?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of Charlotte residents who trust Hydration and Health Carolina 
            for premium mobile IV therapy delivered to their door.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-lg px-8 py-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
              <Link to="/auth/signup-email">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/auth/signin">
                Sign In
              </Link>
            </Button>
          </div>
          
          <p className="text-sm opacity-75">
            Same-day appointments • HSA/FSA eligible • Licensed medical professionals
          </p>
        </div>
      </section>
    </>
  );
}