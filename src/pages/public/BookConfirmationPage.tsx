import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, MapPin, Phone, Mail, Download, Home } from "lucide-react";

export default function BookConfirmationPage() {
  const mockBookingDetails = {
    confirmationNumber: "IV-" + Math.random().toString(36).substring(2, 8).toUpperCase(),
    service: "Myers Cocktail",
    addOns: ["B12 Injection"],
    date: "January 15, 2025",
    time: "2:00 PM - 3:00 PM",
    total: 378,
    customerName: "John Smith",
    location: "123 Main Street, Apt 4B, Charlotte, NC 28202",
    phone: "(704) 555-0123",
    email: "john@example.com"
  };

  return (
    <>
      <Helmet>
        <title>Booking Confirmed - Mobile IV Therapy | Charlotte NC</title>
        <meta name="description" content="Your mobile IV therapy appointment is confirmed. Check your email for details and prepare for your wellness session." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-chart-2/30 via-primary/20 to-accent/40 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-chart-2/10 text-chart-2 border-chart-2/20">
              Step 4 of 4: Confirmation
            </Badge>
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-chart-2" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Booking <span className="text-primary">Confirmed!</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your mobile IV therapy appointment is confirmed. Nick will arrive at your location at the scheduled time.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Confirmation Details */}
              <Card className="border shadow-xl">
                <CardHeader className="bg-chart-2/5">
                  <CardTitle className="text-foreground">Booking Details</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {/* Confirmation Number */}
                  <div className="text-center p-4 bg-primary/5 rounded-lg border">
                    <div className="text-sm text-muted-foreground mb-1">Confirmation Number</div>
                    <div className="text-2xl font-bold text-primary">{mockBookingDetails.confirmationNumber}</div>
                  </div>

                  {/* Service Details */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      Service Information
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Service:</span>
                        <span className="font-medium">{mockBookingDetails.service}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Add-ons:</span>
                        <span className="font-medium">{mockBookingDetails.addOns.join(", ")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Date:</span>
                        <span className="font-medium">{mockBookingDetails.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Time:</span>
                        <span className="font-medium">{mockBookingDetails.time}</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t">
                        <span className="text-muted-foreground">Total Paid:</span>
                        <span className="font-bold text-primary">${mockBookingDetails.total}</span>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-chart-3" />
                      Service Location
                    </h3>
                    <div className="text-sm">
                      <div className="text-muted-foreground">{mockBookingDetails.location}</div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Contact Information</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-chart-4" />
                        <span className="text-muted-foreground">{mockBookingDetails.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-chart-4" />
                        <span className="text-muted-foreground">{mockBookingDetails.email}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <div className="space-y-6">
                <Card className="border shadow-xl">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="text-foreground">What Happens Next?</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-chart-2 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                        <div>
                          <div className="font-medium text-foreground">Confirmation Email</div>
                          <div className="text-sm text-muted-foreground">You'll receive a detailed confirmation email within 5 minutes</div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-chart-3 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                        <div>
                          <div className="font-medium text-foreground">Pre-Appointment Call</div>
                          <div className="text-sm text-muted-foreground">Nick will call 30 minutes before arrival to confirm timing</div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-chart-4 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                        <div>
                          <div className="font-medium text-foreground">Professional Service</div>
                          <div className="text-sm text-muted-foreground">Enjoy your IV therapy in the comfort of your location</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border shadow-xl">
                  <CardHeader className="bg-chart-4/5">
                    <CardTitle className="text-foreground">Preparation Tips</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span>Stay hydrated - drink water before your appointment</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span>Eat a light meal or snack 1-2 hours prior</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span>Wear comfortable, loose-fitting clothing</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span>Have your ID ready for verification</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span>Prepare a comfortable seating area</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border shadow-xl">
                  <CardHeader className="bg-accent/20">
                    <CardTitle className="text-foreground">Need to Make Changes?</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4 text-sm">
                      <div className="text-muted-foreground">
                        Need to reschedule or have questions? Contact us directly:
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-primary" />
                          <span className="font-medium">(704) 500-4590</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2 text-primary" />
                          <span className="font-medium">nick@hydrationhealthcarolina.com</span>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground mt-3 p-2 bg-muted/50 rounded">
                        Same-day cancellations are accepted. We recommend 2+ hours notice when possible.
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
              <Button variant="outline" className="w-full sm:w-auto">
                <Download className="mr-2 h-4 w-4" />
                Download Receipt
              </Button>
              <Button asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Return to Homepage
                </Link>
              </Button>
            </div>

            {/* Footer Note */}
            <div className="text-center mt-8 p-6 bg-muted/30 rounded-lg border">
              <div className="text-sm text-muted-foreground">
                <div className="font-medium mb-2">Questions? We're Here to Help!</div>
                <div>
                  Our team is available to ensure you have the best possible experience with your mobile IV therapy.
                  Don't hesitate to reach out if you need anything before your appointment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}