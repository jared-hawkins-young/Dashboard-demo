import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

/**
 * UploadPage - Simple Transcript to SOP Converter
 * Quick conversion of transcripts to SOPs
 */
export default function UploadPage() {
  const [transcript, setTranscript] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState("")

  const handleCreateSOP = async () => {
    if (!transcript.trim()) return
    
    setIsProcessing(true)
    // Simulate API call
    setTimeout(() => {
      setResult(`# Generated SOP: Meeting Process

## Overview
Based on the provided transcript, this SOP outlines the key procedures discussed.

## Steps
1. **Preparation Phase**
   - Review agenda items
   - Prepare necessary materials
   - Set up meeting space

2. **Execution Phase**
   - Follow structured discussion format
   - Document key decisions
   - Assign action items

3. **Follow-up Phase**
   - Distribute meeting notes
   - Track action item completion
   - Schedule follow-up sessions

## Requirements
- All participants must be present
- Meeting notes must be documented
- Action items must have clear owners

## Quality Checks
- Review transcript for accuracy
- Validate all action items
- Confirm next steps with stakeholders`)
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-6 py-6 px-4 lg:px-6">
            
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent mb-2">Quick Upload</h1>
              <p className="text-muted-foreground">Convert transcripts and text content into structured SOPs</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Input Section */}
              <Card className="border bg-card shadow-lg">
                <CardHeader className="bg-chart-1/10">
                  <CardTitle className="text-card-foreground">Transcript Input</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-card-foreground">
                      Paste your transcript, meeting notes, or process description:
                    </label>
                    <textarea
                      value={transcript}
                      onChange={(e) => setTranscript(e.target.value)}
                      placeholder="Example: Today we discussed the customer onboarding process. First, we collect customer information including name, email, and company details. Then we send a welcome email with next steps..."
                      className="w-full h-64 border border-border rounded-md px-3 py-2 text-sm resize-none focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
                    />
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Button 
                      onClick={handleCreateSOP}
                      disabled={!transcript.trim() || isProcessing}
                      className="flex-1 bg-gradient-to-r from-primary to-chart-1 hover:from-primary/90 hover:to-chart-1/90 text-primary-foreground"
                    >
                      {isProcessing ? "Creating SOP..." : "Create SOP"}
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setTranscript("")
                        setResult("")
                      }}
                      className="border-border text-card-foreground hover:bg-accent"
                    >
                      Clear
                    </Button>
                  </div>

                  {/* Quick Examples */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-medium mb-2 text-card-foreground">Quick Examples:</p>
                    <div className="space-y-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-xs text-left justify-start h-auto py-2 px-2 text-chart-2 hover:text-chart-2 hover:bg-chart-2/10"
                        onClick={() => setTranscript("Meeting notes from customer service training: First step is greeting the customer politely. Always ask how you can help them today. Listen carefully to their issue and take notes. If you can't solve it immediately, escalate to a supervisor. Always follow up within 24 hours.")}
                      >
                        Customer Service Training Example
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-xs text-left justify-start h-auto py-2 px-2 text-chart-3 hover:text-chart-3 hover:bg-chart-3/10"
                        onClick={() => setTranscript("Safety procedure discussion: Before operating any equipment, workers must wear proper PPE including safety glasses and gloves. Check that all guards are in place. Turn on the equipment and wait for it to reach operating speed. Only then begin work. If any unusual sounds occur, stop immediately and notify maintenance.")}
                      >
                        Safety Procedure Example
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Output Section */}
              <Card className="border bg-card shadow-lg">
                <CardHeader className="bg-chart-3/10">
                  <CardTitle className="text-card-foreground">Generated SOP</CardTitle>
                </CardHeader>
                <CardContent>
                  {result ? (
                    <div className="space-y-4">
                      <div className="bg-secondary rounded-md p-4 border border-border">
                        <pre className="whitespace-pre-wrap text-sm text-foreground font-mono">
                          {result}
                        </pre>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="border-border text-card-foreground hover:bg-accent">
                          Edit SOP
                        </Button>
                        <Button variant="outline" size="sm" className="border-border text-card-foreground hover:bg-accent">
                          Save to Knowledge Base
                        </Button>
                        <Button variant="outline" size="sm" className="border-border text-card-foreground hover:bg-accent">
                          Export PDF
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-muted/30">
                      <div className="text-chart-3 mb-4">
                        📝
                      </div>
                      <h3 className="text-lg font-medium text-card-foreground mb-2">Your SOP will appear here</h3>
                      <p className="text-muted-foreground">Enter your transcript and click "Create SOP" to generate a structured procedure document.</p>
                    </div>
                  )}
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
