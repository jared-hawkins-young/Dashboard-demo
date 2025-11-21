import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Progress } from "@/components/ui/progress"
import { IconDownload, IconShare, IconPrinter } from "@tabler/icons-react"

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
              
              {/* Page Header */}
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">Business Reports</h1>
                  <p className="text-muted-foreground">Comprehensive performance metrics and business intelligence reports</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <IconPrinter className="h-4 w-4 mr-2" />
                    Print
                  </Button>
                  <Button variant="outline" size="sm">
                    <IconShare className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button size="sm">
                    <IconDownload className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
              
              {/* Report Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Quarterly Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$724K</div>
                    <Progress value={75} className="mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">75% of target</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Growth</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+15.3%</div>
                    <Progress value={85} className="mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">Above target</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Customer Retention</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">94.2%</div>
                    <Progress value={94} className="mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">Excellent performance</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Net Promoter Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">72</div>
                    <Progress value={72} className="mt-2" />
                    <p className="text-xs text-muted-foreground mt-2">Industry leading</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Business Reports Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Sales Performance Report</CardTitle>
                    <CardDescription>Q4 2024 comprehensive analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Total Revenue</span>
                        <span className="font-bold">$2.4M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">YoY Growth</span>
                        <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30">+24.5%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Top Product Line</span>
                        <span className="font-bold">Enterprise Solutions</span>
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        <IconDownload className="h-4 w-4 mr-2" />
                        Download Full Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Customer Analytics Report</CardTitle>
                    <CardDescription>Behavioral insights and segmentation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Active Customers</span>
                        <span className="font-bold">12,543</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Churn Rate</span>
                        <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30">2.3%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Avg. Lifetime Value</span>
                        <span className="font-bold">$1,847</span>
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        <IconDownload className="h-4 w-4 mr-2" />
                        Download Full Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Marketing Performance Report</CardTitle>
                    <CardDescription>Campaign effectiveness and ROI</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Total Campaigns</span>
                        <span className="font-bold">47</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Average ROI</span>
                        <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30">287%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Best Channel</span>
                        <span className="font-bold">Email Marketing</span>
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        <IconDownload className="h-4 w-4 mr-2" />
                        Download Full Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Financial Summary Report</CardTitle>
                    <CardDescription>Key financial metrics and trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Net Profit Margin</span>
                        <span className="font-bold">18.4%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Operating Expenses</span>
                        <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30">-3.2%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Cash Flow Status</span>
                        <span className="font-bold text-chart-2">Positive</span>
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        <IconDownload className="h-4 w-4 mr-2" />
                        Download Full Report
                      </Button>
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
