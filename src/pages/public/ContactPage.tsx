import { Helmet } from 'react-helmet'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Headphones } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'


/**
 * ContactPage - Contact form and sales information for Lost Star Technology AI Voice Agents
 */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    businessType: '',
    message: '',
    inquiryType: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactMethods = [
    {
      icon: Phone,
      title: 'Book by Phone',
      description: 'Call Nick Patterson, RN directly',
      value: '(704) IV-DRIPS',
      available: '24/7 Booking Available'
    },
    {
      icon: Mail,
      title: 'Email Booking',
      description: 'Send your appointment request',
      value: 'book@hydrationhealthcarolina.com',
      available: 'Response within 2 hours'
    },
    {
      icon: MessageSquare,
      title: 'Text Booking',
      description: 'Quick text appointment',
      value: 'Text (704) IV-DRIPS',
      available: 'Same-day confirmation'
    }
  ]

  const appointmentTypes = [
    'Pure Hydration',
    'Myers Cocktail',
    'Immunity Boost',
    'Hangover Rescue',
    'NAD+ Therapy',
    'Beauty Glow',
    'Performance Recovery',
    'Travel Reset',
    'Detox Cleanse'
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-secondary/30 via-accent/20 to-muted/40 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <Card className="bg-card border shadow-xl">
            <CardHeader>
              <div className="w-16 h-16 bg-chart-5/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-chart-5/30">
                <Send className="h-8 w-8 text-chart-5" />
              </div>
              <CardTitle className="text-2xl text-card-foreground">Thank You!</CardTitle>
              <CardDescription className="text-muted-foreground">
                Your message has been sent successfully. We'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    businessType: '',
                    message: '',
                    inquiryType: ''
                  })
                }}
                variant="outline"
                className="w-full"
              >
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>Book Mobile IV Therapy - Hydration and Health Carolina | Charlotte NC</title>
        <meta name="description" content="Book your mobile IV therapy appointment with Nick Patterson, RN in Charlotte, NC. Same-day appointments available. Professional IV treatments at your location." />
        <meta name="keywords" content="book IV therapy Charlotte, mobile IV appointment, Nick Patterson RN contact, Charlotte IV therapy booking" />
        <link rel="canonical" href="https://hydrationhealthcarolina.com/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Book Mobile IV Therapy - Hydration and Health Carolina" />
        <meta property="og:description" content="Professional mobile IV therapy in Charlotte, NC. Licensed RN Nick Patterson brings treatments to you." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hydrationhealthcarolina.com/contact" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-secondary/30 via-accent/20 to-muted/40">
      {/* Header */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-chart-2/10 text-chart-2 border-chart-2/20">
            💧 Book Your IV Today
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ready to Feel <span className="text-primary">Your Best?</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Schedule your mobile IV therapy appointment with Nick Patterson, RN. 
            Same-day appointments available throughout Charlotte, NC.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border shadow-xl">
              <CardHeader className="bg-chart-1/5">
                <CardTitle className="text-2xl text-card-foreground">Send us a message</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your Business Name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="businessType">Preferred Service</Label>
                      <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred IV service" />
                        </SelectTrigger>
                        <SelectContent>
                          {appointmentTypes.map((type) => (
                            <SelectItem key={type} value={type.toLowerCase()}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="What can we help with?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="booking">Book Appointment</SelectItem>
                          <SelectItem value="consultation">Free Consultation</SelectItem>
                          <SelectItem value="membership">Membership Plans</SelectItem>
                          <SelectItem value="group">Group Booking</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="pricing">Pricing Questions</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your wellness goals, preferred appointment time, and location in Charlotte..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card className="bg-card border shadow-xl">
              <CardHeader className="bg-chart-2/5">
                <CardTitle className="flex items-center text-card-foreground">
                  <Headphones className="h-5 w-5 mr-2 text-chart-2" />
                  Contact Methods
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => {
                  const chartColors = ['chart-1', 'chart-3', 'chart-5'];
                  const colorClass = chartColors[index % chartColors.length];
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-10 h-10 bg-${colorClass}/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-${colorClass}/30`}>
                        <method.icon className={`h-5 w-5 text-${colorClass}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground">{method.title}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                        <p className={`text-sm font-medium text-${colorClass}`}>{method.value}</p>
                        <p className="text-xs text-muted-foreground">{method.available}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Service Area Information */}
            <Card className="bg-card border shadow-xl">
              <CardHeader className="bg-chart-3/5">
                <CardTitle className="flex items-center text-card-foreground">
                  <MapPin className="h-5 w-5 mr-2 text-chart-3" />
                  Service Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium text-card-foreground">Hydration & Health Carolina</p>
                  <p className="text-muted-foreground">
                    Mobile Service Throughout:<br />
                    • Charlotte, NC<br />
                    • Matthews<br />
                    • Ballantyne<br />
                    • SouthPark<br />
                    • Uptown Charlotte
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mt-3">
                    <Clock className="h-4 w-4 mr-1 text-chart-3" />
                    24/7 Booking • Same-day appointments available
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-card border shadow-xl">
              <CardHeader className="bg-chart-4/5">
                <CardTitle className="flex items-center text-card-foreground">
                  <Users className="h-5 w-5 mr-2 text-chart-4" />
                  Why Choose Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Response Time</span>
                  <Badge className="bg-chart-1/10 text-chart-1 border-chart-1/20">&lt; 2 hours</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Arrival Time</span>
                  <Badge className="bg-chart-2/10 text-chart-2 border-chart-2/20">45-60 mins</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Client Rating</span>
                  <Badge className="bg-chart-5/10 text-chart-5 border-chart-5/20">4.9★</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Licensed RN</span>
                  <Badge className="bg-chart-4/10 text-chart-4 border-chart-4/20">Certified</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to questions you might have
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "How quickly can you arrive for treatment?",
                answer: "Same-day appointments are available. Nick typically arrives within 45-60 minutes of booking in the Charlotte area."
              },
              {
                question: "Do you offer free consultations?",
                answer: "Yes! Nick provides free consultations to discuss your wellness goals and recommend the best IV therapy for your needs."
              },
              {
                question: "What areas do you serve?",
                answer: "We provide mobile IV therapy throughout Charlotte, Matthews, Ballantyne, SouthPark, and Uptown Charlotte."
              },
              {
                question: "Are treatments covered by insurance?",
                answer: "Many IV therapy services are HSA/FSA eligible. We provide detailed receipts for reimbursement purposes."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      </div>
    </>
  )
}
