import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function TemplatesPage() {
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
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-foreground mb-2">Templates</h1>
                <p className="text-muted-foreground">Pre-built SOP templates for common processes</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Onboarding Process", description: "Complete employee onboarding workflow", category: "HR" },
                  { name: "Safety Protocol", description: "Workplace safety and emergency procedures", category: "Operations" },
                  { name: "Quality Control", description: "Product quality assurance checklist", category: "Quality" },
                  { name: "Customer Service", description: "Customer interaction guidelines", category: "Support" },
                  { name: "Equipment Maintenance", description: "Regular maintenance procedures", category: "Operations" },
                  { name: "Training Procedure", description: "Employee training and certification", category: "HR" },
                  { name: "Data Backup", description: "IT data backup and recovery", category: "IT" },
                  { name: "Incident Response", description: "Emergency incident handling", category: "Security" },
                  { name: "Vendor Management", description: "Vendor onboarding and management", category: "Procurement" }
                ].map((template) => (
                  <Card key={template.name} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <div className="text-sm text-muted-foreground">{template.category}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Preview</Button>
                        <Button size="sm">Use Template</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Custom Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">Create your own custom SOP templates</p>
                    <Button>Create Custom Template</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
