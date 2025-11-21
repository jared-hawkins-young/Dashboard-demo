import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

/**
 * DashboardPage - SOPzilla Dashboard
 * Main dashboard for SOP management overview
 */
export default function DashboardPage() {
  const sopData = [
    {
      id: 1,
      header: "Customer Service Protocol",
      type: "SOP Document", 
      status: "Published",
      target: "Support",
      limit: "v2.1",
      reviewer: "Sarah Johnson"
    },
    {
      id: 2,
      header: "Equipment Maintenance", 
      type: "SOP Document",
      status: "Draft",
      target: "Operations", 
      limit: "v1.0",
      reviewer: "Mike Chen"
    },
    {
      id: 3,
      header: "New Employee Onboarding",
      type: "SOP Document",
      status: "In Review", 
      target: "HR",
      limit: "v3.2",
      reviewer: "John Smith"
    },
    {
      id: 4,
      header: "Safety Procedures",
      type: "SOP Document",
      status: "Published",
      target: "Operations",
      limit: "v4.1", 
      reviewer: "Lisa Wang"
    },
    {
      id: 5,
      header: "Quality Control SOP", 
      type: "SOP Document",
      status: "In Review",
      target: "Quality",
      limit: "v2.0",
      reviewer: "David Brown"
    }
  ]

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
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              
              {/* Widget Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-6">
                
                {/* Recent SOPs Widget */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Recent SOPs</CardTitle>
                      <Button variant="outline" size="sm">View All SOPs</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50">
                        <div>
                          <div className="font-medium">Customer Service Protocol</div>
                          <div className="text-sm text-muted-foreground">Support Department</div>
                        </div>
                        <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30">Published</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50">
                        <div>
                          <div className="font-medium">Equipment Maintenance</div>
                          <div className="text-sm text-muted-foreground">Operations Department</div>
                        </div>
                        <Badge className="bg-muted text-muted-foreground">Draft</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50">
                        <div>
                          <div className="font-medium">New Employee Onboarding</div>
                          <div className="text-sm text-muted-foreground">HR Department</div>
                        </div>
                        <Badge className="bg-chart-4/20 text-chart-4 border-chart-4/30">Review</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Right Column Widgets */}
                <div className="space-y-6">
                  
                  {/* Knowledge Gaps Alert */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Knowledge Gaps Alert</CardTitle>
                        <Button variant="outline" size="sm">Review Gaps</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-destructive">Critical</span>
                          <span className="text-2xl font-bold text-destructive">3</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-chart-4">Medium</span>
                          <span className="text-2xl font-bold text-chart-4">4</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-2">
                          Missing SOPs for new processes identified
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Team Activity */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Team Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-chart-3 rounded-full mt-2"></div>
                          <div>John updated Safety Procedures</div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-chart-2 rounded-full mt-2"></div>
                          <div>Sarah created New Hire Checklist</div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-chart-1 rounded-full mt-2"></div>
                          <div>Mike reviewed Quality Control SOP</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Button variant="outline" className="w-full justify-start text-sm">
                        Generate from Meeting Notes
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-sm">
                        Review Pending SOPs
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-sm">
                        Export Recent SOPs
                      </Button>
                    </CardContent>
                  </Card>

                </div>
              </div>

              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={sopData} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
