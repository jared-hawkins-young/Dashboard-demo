import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function SOPsPage() {
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
                <h1 className="text-3xl font-bold text-foreground mb-2">SOPs</h1>
                <p className="text-muted-foreground">Manage your Standard Operating Procedures</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Published SOPs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-chart-2 mb-2">8</div>
                    <p className="text-sm text-muted-foreground">Active and approved</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Drafts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-chart-3 mb-2">3</div>
                    <p className="text-sm text-muted-foreground">In progress</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Under Review</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-chart-4 mb-2">2</div>
                    <p className="text-sm text-muted-foreground">Awaiting approval</p>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>All SOPs</CardTitle>
                    <Button>Create New SOP</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Customer Service Protocol", dept: "Support", status: "Published", version: "v2.1" },
                      { name: "Equipment Maintenance", dept: "Operations", status: "Draft", version: "v1.0" },
                      { name: "New Employee Onboarding", dept: "HR", status: "Review", version: "v3.2" },
                      { name: "Safety Procedures", dept: "Operations", status: "Published", version: "v4.1" },
                      { name: "Quality Control SOP", dept: "Quality", status: "Review", version: "v2.0" }
                    ].map((sop) => (
                      <div key={sop.name} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                        <div className="flex-1">
                          <div className="font-medium">{sop.name}</div>
                          <div className="text-sm text-muted-foreground">{sop.dept} Department • {sop.version}</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge 
                            className={
                              sop.status === 'Published' ? 'bg-chart-2/20 text-chart-2 border-chart-2/30' :
                              sop.status === 'Draft' ? 'bg-muted text-muted-foreground' :
                              'bg-chart-4/20 text-chart-4 border-chart-4/30'
                            }
                          >
                            {sop.status}
                          </Badge>
                          <Button variant="outline" size="sm">Edit</Button>
                        </div>
                      </div>
                    ))}
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
