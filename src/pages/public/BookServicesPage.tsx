import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, ArrowLeft, Clock, Plus } from "lucide-react";
import { ivServices, addOns } from "@/data/ivServices";

export default function BookServicesPage() {
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const handleAddOnToggle = (addOnName: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnName) 
        ? prev.filter(name => name !== addOnName)
        : [...prev, addOnName]
    );
  };

  const selectedServiceData = ivServices.find(service => service.name === selectedService);
  const selectedAddOnData = addOns.filter(addon => selectedAddOns.includes(addon.name));
  
  const basePrice = selectedServiceData ? parseInt(selectedServiceData.price_range.split(' - ')[0].replace('$', '')) : 0;
  const addOnPrice = selectedAddOnData.reduce((total, addon) => total + parseInt(addon.price.replace('$', '')), 0);
  const mobileServiceFee = 99; // Base mobile fee
  const totalPrice = basePrice + addOnPrice + mobileServiceFee;

  const canProceed = selectedService !== "";

  return (
    <>
      <Helmet>
        <title>Select IV Service - Mobile IV Therapy Booking | Charlotte NC</title>
        <meta name="description" content="Choose your IV therapy service and add-ons. From hydration to NAD+ therapy, customize your mobile IV treatment in Charlotte, NC." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-secondary/30 via-accent/20 to-muted/40 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-chart-2/10 text-chart-2 border-chart-2/20">
              Step 2 of 4: Select Service
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Choose Your <span className="text-primary">IV Treatment</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select your preferred IV therapy and customize with add-ons for the perfect treatment.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Main Services */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">IV Therapy Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ivServices.map((service) => (
                  <Card 
                    key={service.name}
                    className={`cursor-pointer border-2 transition-all duration-300 hover:shadow-xl ${
                      selectedService === service.name 
                        ? 'border-primary bg-primary/5 shadow-xl' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedService(service.name)}
                  >
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
                    <CardContent>
                      <p className="text-muted-foreground italic mb-4">"{service.marketing.tagline}"</p>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Benefits:</div>
                        <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                          {service.benefits.slice(0, 3).map((benefit, i) => (
                            <li key={i}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Add-Ons */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Enhance Your Treatment</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {addOns.map((addon) => (
                  <Card 
                    key={addon.name}
                    className={`cursor-pointer border transition-all duration-300 ${
                      selectedAddOns.includes(addon.name) 
                        ? 'border-chart-3 bg-chart-3/5' 
                        : 'border-border hover:border-chart-3/50'
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-2xl">{addon.icon}</div>
                        <Checkbox
                          checked={selectedAddOns.includes(addon.name)}
                          onCheckedChange={() => handleAddOnToggle(addon.name)}
                        />
                      </div>
                      <h3 className="font-semibold text-base mb-1">{addon.name}</h3>
                      <div className="text-lg font-bold text-chart-3 mb-2">{addon.price}</div>
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

            {/* Order Summary */}
            <Card className="mb-8 border shadow-xl">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-foreground">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {selectedServiceData && (
                    <div className="flex justify-between items-center">
                      <span>{selectedServiceData.name}</span>
                      <span className="font-medium">${basePrice}</span>
                    </div>
                  )}
                  
                  {selectedAddOnData.map((addon) => (
                    <div key={addon.name} className="flex justify-between items-center text-sm">
                      <span className="flex items-center gap-2">
                        <Plus className="h-3 w-3 text-chart-3" />
                        {addon.name}
                      </span>
                      <span>{addon.price}</span>
                    </div>
                  ))}
                  
                  <div className="flex justify-between items-center text-sm">
                    <span>Mobile Service Fee</span>
                    <span>${mobileServiceFee}</span>
                  </div>
                  
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">${totalPrice}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Button variant="outline" asChild>
                <Link to="/book">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Calendar
                </Link>
              </Button>

              {canProceed ? (
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <Link to="/book/payment">
                    Continue to Payment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <Button 
                  size="lg" 
                  disabled
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Select a Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}