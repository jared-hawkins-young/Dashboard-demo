import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users,
  Target, 
  Lightbulb,
  Heart,
  TrendingUp,
  Zap,
  Brain
} from "lucide-react";


export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Hydration and Health Carolina - Mobile IV Therapy Charlotte</title>
        <meta name="description" content="Meet Nick Patterson, RN and owner of Hydration and Health Carolina. Licensed mobile IV therapy services in Charlotte, NC with a focus on wellness and recovery." />
        <meta name="keywords" content="Nick Patterson RN, mobile IV therapy Charlotte, licensed nurse IV treatment, Hydration Health Carolina owner" />
        <link rel="canonical" href="https://hydrationhealthcarolina.com/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
            💧 Our Story
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Bringing Professional 
            <span className="text-primary block">IV Therapy to Your Door</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Founded by Nick Patterson, RN, Hydration and Health Carolina delivers premium mobile IV therapy 
            throughout Charlotte, NC. We believe wellness should be convenient, professional, and accessible.
          </p>
        </div>
      </section>

      {/* Meet Nick Patterson */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-card-foreground">Meet Nick Patterson, RN</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Nick Patterson is a licensed Registered Nurse and the founder of Hydration and Health Carolina. 
                With years of clinical experience and a passion for wellness, Nick brings medical expertise 
                and personalized care directly to your location throughout Charlotte, NC.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-chart-1/20 text-chart-1">Licensed RN</Badge>
                <Badge variant="secondary" className="bg-chart-2/20 text-chart-2">Clinical Excellence</Badge>
                <Badge variant="secondary" className="bg-chart-3/20 text-chart-3">Patient-Centered Care</Badge>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Nick Patterson, RN - Licensed Registered Nurse and Owner of Hydration and Health Carolina"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">RN</div>
                  <div className="text-sm opacity-90">Licensed</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border shadow-lg">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">Professional</h3>
                <p className="text-muted-foreground text-sm">Licensed, medical-grade care</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border shadow-lg">
              <CardContent className="pt-6">
                <div className="bg-chart-2/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-chart-2" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">Convenient</h3>
                <p className="text-muted-foreground text-sm">We come to you</p>
              </CardContent>
            </Card>

            <Card className="text-center border shadow-lg">
              <CardContent className="pt-6">
                <div className="bg-chart-3/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-chart-3" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">Personalized</h3>
                <p className="text-muted-foreground text-sm">Tailored to your needs</p>
              </CardContent>
            </Card>

            <Card className="text-center border shadow-lg">
              <CardContent className="pt-6">
                <div className="bg-chart-4/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-chart-4" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">Reliable</h3>
                <p className="text-muted-foreground text-sm">Same-day service available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>      {/* Our Approach */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-secondary-foreground">Our Approach</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our mobile IV therapy practice
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-chart-1/20 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-10 w-10 text-chart-1" />
                </div>
                <CardTitle className="text-xl">Evidence-Based Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  All our IV formulations are based on clinical research and proven therapeutic protocols. 
                  We use only pharmaceutical-grade ingredients and sterile techniques.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-chart-2/20 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-chart-2" />
                </div>
                <CardTitle className="text-xl">Patient-Centered</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Every treatment is personalized to your health goals and comfort level. 
                  We take the time to understand your needs and provide compassionate care.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-accent rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-10 w-10 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">Safety First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Your safety is our top priority. We follow strict medical protocols, 
                  maintain sterile environments, and carry comprehensive liability insurance.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Mobile IV Therapy */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose Mobile IV Therapy?</h2>
              <p className="text-xl text-muted-foreground">The science behind IV hydration and wellness treatments</p>
            </div>

            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-chart-4/20 rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-chart-4" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">Superior Absorption</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    IV therapy delivers nutrients directly into your bloodstream, bypassing the digestive system 
                    for 100% bioavailability. Oral supplements are only absorbed at 20-30% efficiency, 
                    making IV therapy significantly more effective for rapid results.
                  </p>
                </div>
                <Card className="bg-primary/10 border-primary/20">
                  <CardContent className="p-8">
                    <blockquote className="text-lg italic text-primary">
                      "IV vitamin therapy provides immediate cellular hydration and nutrient delivery, 
                      supporting optimal health and performance."
                    </blockquote>
                    <cite className="text-primary/80 text-sm mt-2 block">— Journal of Clinical Medicine</cite>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <Card className="bg-chart-2/10 border-chart-2/20 md:order-2">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-chart-2 mb-2">45-60</div>
                      <p className="text-chart-2/80">Minutes to feel the benefits</p>
                    </div>
                  </CardContent>
                </Card>
                <div className="md:order-1">
                  <div className="bg-chart-2/20 rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-chart-2" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">Convenience Matters</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Skip the clinic wait times and traffic. Nick brings professional IV therapy directly to your 
                    location in Charlotte, allowing you to relax in comfort while receiving treatment. 
                    Perfect for busy professionals, athletes, and wellness enthusiasts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Results */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Trusted by Charlotte</h2>
            <p className="text-xl text-muted-foreground">The results speak for themselves</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-chart-1 mb-2">500+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-chart-2 mb-2">10,000+</div>
              <p className="text-muted-foreground">IVs Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-chart-3 mb-2">4.9★</div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-chart-4 mb-2">24/7</div>
              <p className="text-muted-foreground">Service Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Today CTA */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-card-foreground">Experience the Difference</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ready to feel your best with professional mobile IV therapy? 
            Join hundreds of Charlotte residents who trust Nick Patterson, RN for their wellness needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link to="/book">Book Your IV Today</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-border" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
