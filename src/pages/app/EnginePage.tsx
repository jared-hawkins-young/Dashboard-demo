import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

/**
 * EnginePage - Main SOP Generation Interface
 * Advanced AI-powered SOP creation with multiple input methods
 */
export default function EnginePage() {
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
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent mb-2">SOP Engine</h1>
              <p className="text-muted-foreground">Generate comprehensive SOPs using AI-powered analysis of your content</p>
            </div>

            {/* Input Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              
              {/* Audio Input */}
              <Card className="hover:shadow-md transition-shadow border bg-card hover:shadow-xl">
                <CardHeader className="bg-chart-1/10">
                  <CardTitle className="flex items-center gap-2 text-card-foreground">
                    🎤 Audio Recording
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Record meetings, training sessions, or verbal instructions</p>
                  <Button className="w-full bg-gradient-to-r from-chart-1 to-chart-2 hover:from-chart-1/90 hover:to-chart-2/90 text-primary-foreground">Start Recording</Button>
                </CardContent>
              </Card>

              {/* Video Input */}
              <Card className="hover:shadow-md transition-shadow border bg-card hover:shadow-xl">
                <CardHeader className="bg-chart-3/10">
                  <CardTitle className="flex items-center gap-2 text-card-foreground">
                    🎥 Video Upload
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Upload training videos or demonstration recordings</p>
                  <Button variant="outline" className="w-full border-border text-card-foreground hover:bg-accent">Upload Video</Button>
                </CardContent>
              </Card>

              {/* Document Input */}
              <Card className="hover:shadow-md transition-shadow border bg-card hover:shadow-xl">
                <CardHeader className="bg-chart-5/10">
                  <CardTitle className="flex items-center gap-2 text-card-foreground">
                    📄 Document Input
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Import existing procedures, manuals, or documentation</p>
                  <Button variant="outline" className="w-full border-border text-card-foreground hover:bg-accent">Upload Document</Button>
                </CardContent>
              </Card>

            </div>

            {/* Processing Area */}
            <Card className="border bg-card shadow-lg">
              <CardHeader className="bg-chart-2/10">
                <CardTitle className="text-card-foreground">AI Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-muted/30">
                  <div className="text-chart-2 mb-4">
                    <svg className="mx-auto h-12 w-12 text-chart-2" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-card-foreground mb-2">Upload or record content to begin</h3>
                  <p className="text-muted-foreground">Our AI will analyze your input and generate a structured SOP with clear steps, requirements, and best practices.</p>
                </div>
              </CardContent>
            </Card>

            {/* Generation Settings */}
            <Card className="border bg-card shadow-lg">
              <CardHeader className="bg-chart-4/10">
                <CardTitle className="text-card-foreground">Generation Settings</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">Department</label>
                  <select className="w-full border border-border rounded px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground">
                    <option>Operations</option>
                    <option>HR</option>
                    <option>Quality</option>
                    <option>Support</option>
                    <option>Sales</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">SOP Type</label>
                  <select className="w-full border border-border rounded px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground">
                    <option>Process Procedure</option>
                    <option>Safety Protocol</option>
                    <option>Training Guide</option>
                    <option>Quality Standard</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">Priority Level</label>
                  <select className="w-full border border-border rounded px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground">
                    <option>Standard</option>
                    <option>High</option>
                    <option>Critical</option>
                  </select>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
