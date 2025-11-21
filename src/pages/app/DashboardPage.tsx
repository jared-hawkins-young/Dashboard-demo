import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
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
 * DashboardPage - SOPzilla Dashboard Overview
 * Main dashboard showing stats, recent activity, and quick actions
 */
export default function DashboardPage() {

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
      <SidebarInset className="bg-gradient-to-br from-secondary/20 via-background to-accent/10">
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              
              {/* Widget Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-6">
                
                {/* Recent SOPs Widget */}
                <Card className="lg:col-span-2 border bg-card backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200">
                  <CardHeader className="pb-3 bg-gradient-to-r from-chart-1 to-chart-2 text-primary-foreground rounded-t-lg">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold text-primary-foreground">Recent SOPs</CardTitle>
                      <Button variant="outline" size="sm" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground bg-primary-foreground/10">View All SOPs</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 p-1">
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                        <div>
                          <div className="font-medium text-card-foreground">Customer Service Protocol</div>
                          <div className="text-sm text-muted-foreground">Support Department</div>
                        </div>
                        <Badge className="bg-chart-5/20 text-chart-5 border-chart-5/30">Published</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                        <div>
                          <div className="font-medium text-card-foreground">Equipment Maintenance</div>
                          <div className="text-sm text-muted-foreground">Operations Department</div>
                        </div>
                        <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30">Draft</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                        <div>
                          <div className="font-medium text-card-foreground">New Employee Onboarding</div>
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
                  <Card className="border bg-card backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200">
                    <CardHeader className="pb-3 bg-gradient-to-r from-destructive to-chart-4 text-primary-foreground rounded-t-lg">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-semibold text-primary-foreground">Knowledge Gaps Alert</CardTitle>
                        <Button variant="outline" size="sm" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground bg-primary-foreground/10">Review Gaps</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 p-1">
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
                  <Card className="border bg-card backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200">
                    <CardHeader className="pb-3 bg-gradient-to-r from-chart-3 to-chart-2 text-primary-foreground rounded-t-lg">
                      <CardTitle className="text-lg font-semibold text-primary-foreground">Team Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm p-1">
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-chart-2 rounded-full mt-2"></div>
                          <div className="text-card-foreground">John updated Safety Procedures</div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-chart-5 rounded-full mt-2"></div>
                          <div className="text-card-foreground">Sarah created New Hire Checklist</div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-chart-3 rounded-full mt-2"></div>
                          <div className="text-card-foreground">Mike reviewed Quality Control SOP</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card className="border bg-card backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200">
                    <CardHeader className="pb-3 bg-gradient-to-r from-chart-5 to-chart-1 text-primary-foreground rounded-t-lg">
                      <CardTitle className="text-lg font-semibold text-primary-foreground">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 p-3">
                      <Button variant="outline" className="w-full justify-start text-sm border-border text-card-foreground hover:bg-accent">
                        Generate from Meeting Notes
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-sm border-border text-card-foreground hover:bg-accent">
                        Review Pending SOPs
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-sm border-border text-card-foreground hover:bg-accent">
                        Export Recent SOPs
                      </Button>
                    </CardContent>
                  </Card>

                </div>
              </div>

              {/* Recent Activity Section */}
              <div className="px-4 lg:px-6">
                <Card className="border bg-card backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200">
                  <CardHeader className="pb-3 bg-gradient-to-r from-primary to-chart-1 text-primary-foreground rounded-t-lg">
                    <CardTitle className="text-lg font-semibold text-primary-foreground">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm p-1">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-chart-2 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <div className="font-medium text-card-foreground">New SOP created: Customer Service Protocol</div>
                          <div className="text-muted-foreground">Sarah Johnson • 2 hours ago</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-chart-5 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <div className="font-medium text-card-foreground">SOP published: Safety Procedures v4.1</div>
                          <div className="text-muted-foreground">Lisa Wang • 5 hours ago</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-chart-4 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <div className="font-medium text-card-foreground">Gap identified: Equipment Emergency Shutdown</div>
                          <div className="text-muted-foreground">System • 1 day ago</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-chart-3 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <div className="font-medium text-card-foreground">SOP updated: Quality Control Checklist</div>
                          <div className="text-muted-foreground">Mike Chen • 2 days ago</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
