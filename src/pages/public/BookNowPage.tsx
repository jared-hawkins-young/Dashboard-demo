import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { ArrowRight, ArrowLeft, Calendar as CalendarIcon, Clock } from "lucide-react";

export default function BookNowPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");

  const timeSlots = [
    "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
    "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"
  ];

  const isTimeSlotAvailable = (time: string) => {
    // Mock availability - in real app this would check against database
    const unavailableTimes = ["11:00 AM", "2:00 PM", "6:00 PM"];
    return !unavailableTimes.includes(time);
  };

  const canProceed = selectedDate && selectedTime;

  return (
    <>
      <Helmet>
        <title>Book Mobile IV Therapy - Schedule Appointment | Charlotte NC</title>
        <meta name="description" content="Book your mobile IV therapy appointment with Nick Patterson, RN. Choose your date and time for same-day or next-day service in Charlotte, NC." />
        <meta name="keywords" content="book IV therapy Charlotte, schedule mobile IV, IV appointment booking, Nick Patterson RN booking" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-secondary/30 via-accent/20 to-muted/40 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Step 1 of 4: Select Date & Time
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Book Your <span className="text-primary">Mobile IV</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred date and time. Nick Patterson, RN will come to your location in Charlotte, NC.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Calendar Selection */}
              <Card className="border shadow-xl">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center text-foreground">
                    <CalendarIcon className="h-5 w-5 mr-2 text-primary" />
                    Select Date
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="bg-white p-6 rounded-lg border min-h-[400px] flex items-start justify-center">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                      className="w-full max-w-sm mx-auto"
                    />
                  </div>
                  
                  <div className="my-6"></div>
                  
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="text-sm space-y-2">
                      <div className="font-semibold text-primary">✓ Same-day appointments available</div>
                      <div className="text-muted-foreground">Service hours: 7:00 AM - 10:00 PM</div>
                      <div className="text-muted-foreground">Emergency calls: Available 24/7</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Time Selection */}
              <Card className="border shadow-xl">
                <CardHeader className="bg-chart-2/5">
                  <CardTitle className="flex items-center text-foreground">
                    <Clock className="h-5 w-5 mr-2 text-chart-2" />
                    Select Time
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {selectedDate ? (
                    <div className="grid grid-cols-3 gap-3">
                      {timeSlots.map((time) => {
                        const available = isTimeSlotAvailable(time);
                        const isSelected = selectedTime === time;
                        
                        return (
                          <Button
                            key={time}
                            variant={isSelected ? "default" : "outline"}
                            size="sm"
                            disabled={!available}
                            onClick={() => setSelectedTime(available ? time : "")}
                            className={`
                              ${isSelected ? "bg-primary text-primary-foreground" : ""}
                              ${!available ? "opacity-50 cursor-not-allowed" : ""}
                            `}
                          >
                            {time}
                          </Button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      Please select a date first
                    </div>
                  )}
                  
                  {selectedDate && (
                    <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="text-sm">
                        <strong className="text-primary">Selected:</strong><br />
                        {selectedDate.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                        {selectedTime && (
                          <>
                            <br />
                            <strong className="text-primary">Time:</strong> {selectedTime}
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Service Info */}
            <Card className="mt-8 border shadow-xl">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-2">45-60 min</div>
                    <p className="text-muted-foreground">Treatment Duration</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-chart-2 mb-2">Licensed RN</div>
                    <p className="text-muted-foreground">Nick Patterson</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-chart-3 mb-2">Your Location</div>
                    <p className="text-muted-foreground">We Come to You</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <Button variant="outline" asChild>
                <Link to="/services">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Services
                </Link>
              </Button>

              {canProceed ? (
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <Link to="/book/services">
                    Select Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <Button 
                  size="lg" 
                  disabled
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Select Date & Time
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