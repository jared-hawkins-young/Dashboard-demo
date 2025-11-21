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
 * DashboardPage - Biz Demo Dashboard
 * Professional business dashboard with KPIs, charts, and analytics
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
              
              {/* Page Header */}
              <div className="px-4 lg:px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
                    <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening with your business today.</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">Download Report</Button>
                    <Button>Refresh Data</Button>
                  </div>
                </div>
              </div>

              <SectionCards />
              
              {/* Widget Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-6">
                
                {/* Recent Transactions Widget */}
                <Card className="lg:col-span-2 border bg-card backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200">
                  <CardHeader className="pb-3 bg-gradient-to-r from-chart-1 to-chart-2 text-primary-foreground rounded-t-lg">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold text-primary-foreground">Recent Transactions</CardTitle>
                      <Button variant="outline" size="sm" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground bg-primary-foreground/10">View All</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 p-1">
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                        <div>
                          <div className="font-medium text-card-foreground">Order #12849</div>
                          <div className="text-sm text-muted-foreground">Sarah Johnson • Premium Package</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-chart-2">+$2,499</div>
                          <Badge className="bg-chart-5/20 text-chart-5 border-chart-5/30">Completed</Badge>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                        <div>
                          <div className="font-medium text-card-foreground">Order #12848</div>
                          <div className="text-sm text-muted-foreground">Michael Chen • Standard Package</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-chart-2">+$899</div>
                          <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30">Processing</Badge>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                        <div>
                          <div className="font-medium text-card-foreground">Order #12847</div>
                          <div className="text-sm text-muted-foreground">Emma Wilson • Basic Package</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-chart-2">+$399</div>
                          <Badge className="bg-chart-5/20 text-chart-5 border-chart-5/30">Completed</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Right Column Widgets */}
                <div className="space-y-6">
                  
                  {/* Top Products */}
                  <Card className="border bg-card backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200">
                    <CardHeader className="pb-3 bg-gradient-to-r from-chart-3 to-chart-5 text-primary-foreground rounded-t-lg">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-semibold text-primary-foreground">Top Products</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 p-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-sm">Premium Widget</div>
                            <div className="text-xs text-muted-foreground">1,234 sold</div>
                          </div>
                          <span className="text-sm font-bold text-chart-2">$124K</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-sm">Pro Service</div>
                            <div className="text-xs text-muted-foreground">892 sold</div>
                          </div>
                          <span className="text-sm font-bold text-chart-2">$89K</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-sm">Basic Package</div>
                            <div className="text-xs text-muted-foreground">2,156 sold</div>
                          </div>
                          <span className="text-sm font-bold text-chart-2">$86K</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Customer Satisfaction */}
                  <Card className="border bg-card backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200">
                    <CardHeader className="pb-3 bg-gradient-to-r from-chart-5 to-chart-1 text-primary-foreground rounded-t-lg">
                      <CardTitle className="text-lg font-semibold text-primary-foreground">Customer Satisfaction</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 p-1">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-chart-2">4.8</div>
                          <div className="text-sm text-muted-foreground">Average Rating</div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>5 Stars</span>
                            <span className="font-medium">78%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>4 Stars</span>
                            <span className="font-medium">15%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>3 Stars</span>
                            <span className="font-medium">5%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card className="border bg-card backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200">
                    <CardHeader className="pb-3 bg-gradient-to-r from-primary to-chart-4 text-primary-foreground rounded-t-lg">
                      <CardTitle className="text-lg font-semibold text-primary-foreground">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 p-3">
                      <Button variant="outline" className="w-full justify-start text-sm border-border text-card-foreground hover:bg-accent">
                        Generate Report
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-sm border-border text-card-foreground hover:bg-accent">
                        Export Data
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-sm border-border text-card-foreground hover:bg-accent">
                        View Analytics
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
                          <div className="font-medium text-card-foreground">New customer registered</div>
                          <div className="text-muted-foreground">Emma Thompson • 2 hours ago</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-chart-5 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <div className="font-medium text-card-foreground">Order #12849 completed</div>
                          <div className="text-muted-foreground">Premium Package • 3 hours ago</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-chart-4 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <div className="font-medium text-card-foreground">Payment received: $2,499</div>
                          <div className="text-muted-foreground">Sarah Johnson • 5 hours ago</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-chart-3 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <div className="font-medium text-card-foreground">New product review (5 stars)</div>
                          <div className="text-muted-foreground">Michael Chen • 1 day ago</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-chart-1 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <div className="font-medium text-card-foreground">Monthly report generated</div>
                          <div className="text-muted-foreground">System • 2 days ago</div>
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
