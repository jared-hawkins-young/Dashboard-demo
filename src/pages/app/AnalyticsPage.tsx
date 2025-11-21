import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { BarChartComponent } from "@/components/charts/BarChartComponent"
import { PieChartComponent } from "@/components/charts/PieChartComponent"
import { LineChartComponent } from "@/components/charts/LineChartComponent"
import { AreaChartComponent } from "@/components/charts/AreaChartComponent"
import { Badge } from "@/components/ui/badge"
import { IconTrendingUp, IconTrendingDown } from "@tabler/icons-react"

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
      <SidebarInset className="bg-gradient-to-br from-secondary/20 via-background to-accent/10">
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
              
              {/* Page Header */}
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">Advanced Analytics</h1>
                  <p className="text-muted-foreground">Comprehensive business intelligence and performance metrics</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">Export Data</Button>
                  <Button>Generate Report</Button>
                </div>
              </div>
              
              {/* KPI Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Order Value</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$284</div>
                    <Badge variant="outline" className="mt-2 text-chart-2 border-chart-2/30">
                      <IconTrendingUp className="h-3 w-3 mr-1" />
                      +12.3%
                    </Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Customer Lifetime Value</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$1,847</div>
                    <Badge variant="outline" className="mt-2 text-chart-2 border-chart-2/30">
                      <IconTrendingUp className="h-3 w-3 mr-1" />
                      +8.7%
                    </Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Churn Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2.3%</div>
                    <Badge variant="outline" className="mt-2 text-destructive border-destructive/30">
                      <IconTrendingDown className="h-3 w-3 mr-1" />
                      +0.2%
                    </Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">ROI</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">287%</div>
                    <Badge variant="outline" className="mt-2 text-chart-2 border-chart-2/30">
                      <IconTrendingUp className="h-3 w-3 mr-1" />
                      +23.1%
                    </Badge>
                  </CardContent>
                </Card>
              </div>

              {/* Charts Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <BarChartComponent />
                <PieChartComponent />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <LineChartComponent />
                <AreaChartComponent />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Performing Regions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">North America</span>
                        <span className="font-bold text-chart-1">$847K</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Europe</span>
                        <span className="font-bold text-chart-2">$623K</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Asia Pacific</span>
                        <span className="font-bold text-chart-3">$512K</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Latin America</span>
                        <span className="font-bold text-chart-4">$289K</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Middle East</span>
                        <span className="font-bold text-chart-5">$173K</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Marketing Channel ROI</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Email Marketing</span>
                        <span className="font-bold text-chart-2">342%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Social Media</span>
                        <span className="font-bold text-chart-2">287%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Content Marketing</span>
                        <span className="font-bold text-chart-2">234%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Paid Search</span>
                        <span className="font-bold text-chart-4">198%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Display Ads</span>
                        <span className="font-bold text-chart-4">156%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Acquisition Cost</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Organic Search</span>
                        <span className="font-bold text-chart-2">$45</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Social Media</span>
                        <span className="font-bold text-chart-2">$67</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Email Campaign</span>
                        <span className="font-bold text-chart-4">$89</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Paid Search</span>
                        <span className="font-bold text-chart-4">$124</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Display Ads</span>
                        <span className="font-bold text-destructive">$178</span>
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
