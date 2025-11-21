import React, { useState } from 'react'
import { Building, MapPin, Phone, Users, ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'

export interface BusinessInfo {
  businessName: string
  businessType: string
  description: string
  website: string
  phoneNumber: string
  contactEmail: string
  contactName: string
  contactRole: string
  averageCallVolume: string
  busyHours: string[]
  painPoints: string[]
  currentSolution: string
  timeframe: string
  hearAboutUs: string
}

interface OnboardingWizardProps {
  onComplete: (businessInfo: BusinessInfo) => void
  onSkip?: () => void
  isSubmitting?: boolean
}

/**
 * OnboardingWizard - Comprehensive client information collection
 * Multi-step form to gather business details for lead qualification and account setup
 */
export function OnboardingWizard({ onComplete, onSkip, isSubmitting = false }: OnboardingWizardProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>({
    businessName: '',
    businessType: '',
    description: '',
    website: '',
    phoneNumber: '',
    contactEmail: '',
    contactName: '',
    contactRole: '',
    averageCallVolume: '',
    busyHours: [],
    painPoints: [],
    currentSolution: '',
    timeframe: '',
    hearAboutUs: ''
  })

  const steps = [
    {
      title: 'Business Information',
      description: 'Tell us about your business',
      icon: Building
    },
    {
      title: 'Contact Details',
      description: 'How can we reach you?',
      icon: Phone
    },
    {
      title: 'Call Volume & Patterns',
      description: 'Understanding your needs',
      icon: Users
    },
    {
      title: 'Current Challenges',
      description: 'What problems can we solve?',
      icon: MapPin
    }
  ]

  const businessTypes = [
    'Restaurant / Food Service',
    'Nail Salon / Beauty',
    'Hair Salon / Barbershop',
    'Spa / Wellness',
    'Medical / Dental Practice',
    'Auto Service / Repair',
    'Home Services (Plumbing, HVAC, etc.)',
    'Pet Services / Veterinary',
    'Retail Store',
    'Professional Services',
    'Other'
  ]

  const callVolumes = [
    '1-10 calls per day',
    '11-25 calls per day',
    '26-50 calls per day',
    '51-100 calls per day',
    '100+ calls per day'
  ]

  const timeframes = [
    'Immediately (within 1 week)',
    'Within 1 month',
    'Within 3 months',
    'Within 6 months',
    'Just exploring options'
  ]

  const painPointOptions = [
    'Missing calls during busy hours',
    'After-hours calls going to voicemail',
    'Staff too busy to answer phone',
    'Language barriers with customers',
    'Inconsistent customer service',
    'Taking orders/reservations manually',
    'Difficulty managing multiple locations',
    'High staff turnover affecting phone service',
    'Need 24/7 availability',
    'Want to reduce labor costs'
  ]

  const busyHourOptions = [
    'Early Morning (6-9 AM)',
    'Morning (9 AM-12 PM)',
    'Lunch (12-2 PM)',
    'Afternoon (2-5 PM)',
    'Dinner (5-8 PM)',
    'Evening (8-11 PM)',
    'Late Night (11 PM-6 AM)',
    'Weekends',
    'Holidays'
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete(businessInfo)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const updateBusinessInfo = (field: keyof BusinessInfo, value: any) => {
    setBusinessInfo(prev => ({ ...prev, [field]: value }))
  }

  const toggleArrayItem = (field: keyof BusinessInfo, item: string) => {
    const currentArray = businessInfo[field] as string[]
    const newArray = currentArray.includes(item)
      ? currentArray.filter(i => i !== item)
      : [...currentArray, item]
    updateBusinessInfo(field, newArray)
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return businessInfo.businessName && businessInfo.businessType
      case 1:
        return businessInfo.contactName && businessInfo.contactEmail && businessInfo.phoneNumber
      case 2:
        return businessInfo.averageCallVolume
      case 3:
        return businessInfo.painPoints.length > 0
      default:
        return true
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="businessName">Business Name *</Label>
              <Input
                id="businessName"
                value={businessInfo.businessName}
                onChange={(e) => updateBusinessInfo('businessName', e.target.value)}
                placeholder="Bella Vista Restaurant"
              />
            </div>

            <div>
              <Label htmlFor="businessType">Business Type *</Label>
              <Select 
                value={businessInfo.businessType} 
                onValueChange={(value) => updateBusinessInfo('businessType', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent>
                  {businessTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="description">Business Description</Label>
              <Textarea
                id="description"
                value={businessInfo.description}
                onChange={(e) => updateBusinessInfo('description', e.target.value)}
                placeholder="Brief description of your business and services..."
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                value={businessInfo.website}
                onChange={(e) => updateBusinessInfo('website', e.target.value)}
                placeholder="https://your-business.com"
              />
            </div>
          </div>
        )

      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="contactName">Contact Name *</Label>
              <Input
                id="contactName"
                value={businessInfo.contactName}
                onChange={(e) => updateBusinessInfo('contactName', e.target.value)}
                placeholder="John Smith"
              />
            </div>

            <div>
              <Label htmlFor="contactRole">Your Role</Label>
              <Select
                value={businessInfo.contactRole}
                onValueChange={(value) => updateBusinessInfo('contactRole', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Owner">Owner</SelectItem>
                  <SelectItem value="Manager">Manager</SelectItem>
                  <SelectItem value="Staff">Staff</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="contactEmail">Email Address *</Label>
              <Input
                id="contactEmail"
                type="email"
                value={businessInfo.contactEmail}
                onChange={(e) => updateBusinessInfo('contactEmail', e.target.value)}
                placeholder="john@bellavista.com"
              />
            </div>

            <div>
              <Label htmlFor="phoneNumber">Business Phone Number *</Label>
              <Input
                id="phoneNumber"
                value={businessInfo.phoneNumber}
                onChange={(e) => updateBusinessInfo('phoneNumber', e.target.value)}
                placeholder="(555) 123-4567"
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label>Average Daily Call Volume *</Label>
              <Select 
                value={businessInfo.averageCallVolume} 
                onValueChange={(value) => updateBusinessInfo('averageCallVolume', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your typical call volume" />
                </SelectTrigger>
                <SelectContent>
                  {callVolumes.map((volume) => (
                    <SelectItem key={volume} value={volume}>{volume}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>When are your busiest hours? (Select all that apply)</Label>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {busyHourOptions.map((hour) => (
                  <div key={hour} className="flex items-center space-x-2">
                    <Checkbox
                      id={hour}
                      checked={businessInfo.busyHours.includes(hour)}
                      onCheckedChange={() => toggleArrayItem('busyHours', hour)}
                    />
                    <Label htmlFor={hour} className="text-sm">{hour}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="currentSolution">How do you currently handle phone calls?</Label>
              <Select
                value={businessInfo.currentSolution}
                onValueChange={(value) => updateBusinessInfo('currentSolution', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select current solution" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Staff answers manually">Staff answers manually</SelectItem>
                  <SelectItem value="Voicemail system">Voicemail system</SelectItem>
                  <SelectItem value="Answering service">Answering service</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label>What challenges do you face with phone calls? *</Label>
              <div className="grid grid-cols-1 gap-3 mt-2">
                {painPointOptions.map((painPoint) => (
                  <div key={painPoint} className="flex items-center space-x-2">
                    <Checkbox
                      id={painPoint}
                      checked={businessInfo.painPoints.includes(painPoint)}
                      onCheckedChange={() => toggleArrayItem('painPoints', painPoint)}
                    />
                    <Label htmlFor={painPoint} className="text-sm">{painPoint}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label>When would you like to implement a solution?</Label>
              <Select 
                value={businessInfo.timeframe} 
                onValueChange={(value) => updateBusinessInfo('timeframe', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  {timeframes.map((timeframe) => (
                    <SelectItem key={timeframe} value={timeframe}>{timeframe}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
              <Select
                value={businessInfo.hearAboutUs}
                onValueChange={(value) => updateBusinessInfo('hearAboutUs', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Google search">Google search</SelectItem>
                  <SelectItem value="Referral">Referral</SelectItem>
                  <SelectItem value="Social media">Social media</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center space-x-2">
                {React.createElement(steps[currentStep].icon, { className: "h-5 w-5" })}
                <span>{steps[currentStep].title}</span>
              </CardTitle>
              <p className="text-muted-foreground">{steps[currentStep].description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Step {currentStep + 1} of {steps.length}</div>
              <div className="w-24 h-2 bg-muted rounded-full mt-1">
                <div 
                  className="h-full bg-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {renderStep()}

          <div className="flex justify-between pt-6 border-t">
            <div>
              {currentStep > 0 && (
                <Button variant="outline" onClick={handlePrev}>
                  Previous
                </Button>
              )}
              {currentStep === 0 && onSkip && (
                <Button variant="ghost" onClick={onSkip}>
                  Skip for now
                </Button>
              )}
            </div>

            <Button 
              onClick={handleNext} 
              disabled={!isStepValid() || isSubmitting}
              className="min-w-[120px]"
            >
              {currentStep === steps.length - 1 ? (
                <>
                  {isSubmitting ? 'Processing...' : 'Complete Setup'}
                  <Check className="h-4 w-4 ml-2" />
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
