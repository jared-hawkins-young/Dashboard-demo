import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, ArrowLeft, CreditCard, MapPin, User, Shield } from "lucide-react";

export default function BookPaymentPage() {
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    
    // Location Info
    address: "",
    city: "Charlotte",
    state: "NC",
    zipCode: "",
    locationNotes: "",
    
    // Payment Info
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
    
    // Health Info
    medicalHistory: "",
    allergies: "",
    medications: ""
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    // Redirect to confirmation
    window.location.href = "/book/confirmation";
  };

  const mockOrderSummary = {
    service: "Myers Cocktail",
    addOns: ["B12 Injection"],
    servicePrice: 249,
    addOnPrice: 30,
    mobileServiceFee: 99,
    total: 378
  };

  const requiredFields = [
    formData.firstName, formData.lastName, formData.email, formData.phone,
    formData.address, formData.zipCode, formData.cardNumber, 
    formData.expiryDate, formData.cvv, formData.nameOnCard
  ];
  
  const canProceed = requiredFields.every(field => field.trim() !== "") && !isProcessing;

  return (
    <>
      <Helmet>
        <title>Payment & Details - Mobile IV Therapy Booking | Charlotte NC</title>
        <meta name="description" content="Complete your mobile IV therapy booking. Secure payment and location details for your Charlotte, NC appointment." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-secondary/30 via-accent/20 to-muted/40 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-chart-3/10 text-chart-3 border-chart-3/20">
              Step 3 of 4: Payment & Details
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Complete Your <span className="text-primary">Booking</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Secure payment and location details for your mobile IV therapy appointment.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Personal Information */}
                <Card className="border shadow-xl">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="flex items-center text-foreground">
                      <User className="h-5 w-5 mr-2 text-primary" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          placeholder="Smith"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
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
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="(704) 555-0123"
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location Details */}
                <Card className="border shadow-xl">
                  <CardHeader className="bg-chart-2/5">
                    <CardTitle className="flex items-center text-foreground">
                      <MapPin className="h-5 w-5 mr-2 text-chart-2" />
                      Service Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="123 Main Street, Apt 4B"
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Select value={formData.city} onValueChange={(value) => handleInputChange('city', value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Charlotte">Charlotte</SelectItem>
                            <SelectItem value="Matthews">Matthews</SelectItem>
                            <SelectItem value="Ballantyne">Ballantyne</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input id="state" value="NC" disabled />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code *</Label>
                        <Input
                          id="zipCode"
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange('zipCode', e.target.value)}
                          placeholder="28202"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="locationNotes">Location Notes</Label>
                      <Textarea
                        id="locationNotes"
                        value={formData.locationNotes}
                        onChange={(e) => handleInputChange('locationNotes', e.target.value)}
                        placeholder="Parking instructions, gate codes, or other helpful details..."
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Information */}
                <Card className="border shadow-xl">
                  <CardHeader className="bg-chart-3/5">
                    <CardTitle className="flex items-center text-foreground">
                      <CreditCard className="h-5 w-5 mr-2 text-chart-3" />
                      Payment Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <Label htmlFor="nameOnCard">Name on Card *</Label>
                      <Input
                        id="nameOnCard"
                        value={formData.nameOnCard}
                        onChange={(e) => handleInputChange('nameOnCard', e.target.value)}
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input
                        id="cardNumber"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date *</Label>
                        <Input
                          id="expiryDate"
                          value={formData.expiryDate}
                          onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV *</Label>
                        <Input
                          id="cvv"
                          value={formData.cvv}
                          onChange={(e) => handleInputChange('cvv', e.target.value)}
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                      <Shield className="h-4 w-4 text-chart-3" />
                      <span className="text-sm text-muted-foreground">
                        Your payment information is encrypted and secure
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Health Information */}
                <Card className="border shadow-xl">
                  <CardHeader className="bg-chart-4/5">
                    <CardTitle className="text-foreground">Health Information</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <Label htmlFor="allergies">Known Allergies</Label>
                      <Input
                        id="allergies"
                        value={formData.allergies}
                        onChange={(e) => handleInputChange('allergies', e.target.value)}
                        placeholder="None, or list any relevant allergies"
                      />
                    </div>
                    <div>
                      <Label htmlFor="medications">Current Medications</Label>
                      <Input
                        id="medications"
                        value={formData.medications}
                        onChange={(e) => handleInputChange('medications', e.target.value)}
                        placeholder="None, or list current medications"
                      />
                    </div>
                    <div>
                      <Label htmlFor="medicalHistory">Relevant Medical History</Label>
                      <Textarea
                        id="medicalHistory"
                        value={formData.medicalHistory}
                        onChange={(e) => handleInputChange('medicalHistory', e.target.value)}
                        placeholder="Any medical conditions Nick should be aware of..."
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary Sidebar */}
              <div>
                <Card className="border shadow-xl sticky top-8">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="text-foreground">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <div className="font-medium text-foreground mb-2">Service Details:</div>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div>Date: January 15, 2025</div>
                          <div>Time: 2:00 PM</div>
                          <div>Duration: 45-60 minutes</div>
                        </div>
                      </div>
                      
                      <div className="border-t pt-4">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span>{mockOrderSummary.service}</span>
                            <span>${mockOrderSummary.servicePrice}</span>
                          </div>
                          {mockOrderSummary.addOns.map((addon) => (
                            <div key={addon} className="flex justify-between text-sm">
                              <span>+ {addon}</span>
                              <span>${mockOrderSummary.addOnPrice}</span>
                            </div>
                          ))}
                          <div className="flex justify-between text-sm">
                            <span>Mobile Service Fee</span>
                            <span>${mockOrderSummary.mobileServiceFee}</span>
                          </div>
                          <div className="border-t pt-3">
                            <div className="flex justify-between text-lg font-bold">
                              <span>Total</span>
                              <span className="text-primary">${mockOrderSummary.total}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-4 text-xs text-muted-foreground">
                        <div className="space-y-1">
                          <div>✓ HSA/FSA Eligible</div>
                          <div>✓ Licensed RN Service</div>
                          <div>✓ Same-day Cancellation OK</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <Button variant="outline" asChild>
                <Link to="/book/services">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Services
                </Link>
              </Button>

              <Button 
                size="lg" 
                disabled={!canProceed}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={handleSubmit}
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Processing Payment...
                  </>
                ) : (
                  <>
                    Complete Booking
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}