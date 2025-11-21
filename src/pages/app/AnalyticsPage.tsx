import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function AnalyticsPage() {
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
                <h1 className="text-3xl font-bold text-foreground mb-2">Analytics</h1>
                <p className="text-muted-foreground">Track SOP usage and team performance</p>
              </div>
              
              <div className="mb-8">
                <ChartAreaInteractive />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Most Used SOPs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Customer Service Protocol</span>
                        <span className="font-bold text-chart-1">342 views</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Safety Procedures</span>
                        <span className="font-bold text-chart-1">287 views</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Onboarding Checklist</span>
                        <span className="font-bold text-blue-600">156 views</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Quality Control</span>
                        <span className="font-bold text-blue-600">134 views</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Equipment Maintenance</span>
                        <span className="font-bold text-blue-600">98 views</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Team Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">SOPs Created This Month</span>
                        <span className="font-bold text-green-600">12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Average Review Time</span>
                        <span className="font-bold text-orange-600">2.3 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Active Contributors</span>
                        <span className="font-bold text-blue-600">8</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Completion Rate</span>
                        <span className="font-bold text-green-600">94%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Updates This Week</span>
                        <span className="font-bold text-blue-600">23</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Knowledge Gaps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-red-700">Critical Gaps</span>
                        <span className="text-2xl font-bold text-red-700">3</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-orange-700">Medium Gaps</span>
                        <span className="text-2xl font-bold text-orange-700">7</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-yellow-700">Low Priority</span>
                        <span className="text-2xl font-bold text-yellow-700">12</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-2">
                        Missing SOPs for new processes identified through AI analysis
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Department Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { dept: "Operations", sops: 15, updates: 8, color: "blue" },
                        { dept: "HR", sops: 12, updates: 5, color: "green" },
                        { dept: "Quality", sops: 8, updates: 3, color: "purple" },
                        { dept: "Support", sops: 6, updates: 2, color: "orange" }
                      ].map((item) => (
                        <div key={item.dept} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full bg-${item.color}-500`}></div>
                            <span className="font-medium">{item.dept}</span>
                          </div>
                          <div className="text-sm text-gray-600">
                            {item.sops} SOPs • {item.updates} updates
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">Safety Protocol Updated</div>
                          <div className="text-gray-500">John Smith • 2 hours ago</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">New SOP Created</div>
                          <div className="text-gray-500">Sarah Johnson • 4 hours ago</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">Quality Control Reviewed</div>
                          <div className="text-gray-500">Mike Chen • 6 hours ago</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                        <div>
                          <div className="font-medium">Onboarding Template Used</div>
                          <div className="text-gray-500">Lisa Wang • 8 hours ago</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
