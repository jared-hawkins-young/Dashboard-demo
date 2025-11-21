import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IconDownload, IconFilter, IconSearch } from "@tabler/icons-react"
import { Input } from "@/components/ui/input"

export default function TemplatesPage() {
  const customers = [
    { id: "CUS-001", name: "Sarah Johnson", email: "sarah.j@example.com", status: "Active", orders: 45, revenue: "$12,450", lastOrder: "2 days ago" },
    { id: "CUS-002", name: "Michael Chen", email: "m.chen@example.com", status: "Active", orders: 32, revenue: "$9,870", lastOrder: "5 days ago" },
    { id: "CUS-003", name: "Emma Wilson", email: "emma.w@example.com", status: "Active", orders: 28, revenue: "$8,240", lastOrder: "1 week ago" },
    { id: "CUS-004", name: "James Brown", email: "j.brown@example.com", status: "Inactive", orders: 12, revenue: "$3,890", lastOrder: "2 months ago" },
    { id: "CUS-005", name: "Lisa Anderson", email: "l.anderson@example.com", status: "Active", orders: 56, revenue: "$15,670", lastOrder: "1 day ago" },
    { id: "CUS-006", name: "David Martinez", email: "d.martinez@example.com", status: "Active", orders: 41, revenue: "$11,230", lastOrder: "3 days ago" },
    { id: "CUS-007", name: "Sophie Taylor", email: "sophie.t@example.com", status: "Active", orders: 23, revenue: "$6,780", lastOrder: "1 week ago" },
    { id: "CUS-008", name: "Tom Garcia", email: "t.garcia@example.com", status: "Pending", orders: 5, revenue: "$1,450", lastOrder: "2 weeks ago" },
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
      <SidebarInset className="bg-gradient-to-br from-secondary/20 via-background to-accent/10">
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
              
              {/* Page Header */}
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">Data Tables</h1>
                  <p className="text-muted-foreground">Comprehensive customer data and transaction history</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <IconFilter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button size="sm">
                    <IconDownload className="h-4 w-4 mr-2" />
                    Export CSV
                  </Button>
                </div>
              </div>
              
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Total Customers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{customers.length}</div>
                    <p className="text-xs text-muted-foreground mt-1">Active accounts</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$69,580</div>
                    <p className="text-xs text-muted-foreground mt-1">From {customers.reduce((sum, c) => sum + c.orders, 0)} orders</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Avg Order Value</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$284</div>
                    <p className="text-xs text-muted-foreground mt-1">Per transaction</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Active Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">75%</div>
                    <p className="text-xs text-muted-foreground mt-1">Customer engagement</p>
                  </CardContent>
                </Card>
              </div>

              {/* Customer Data Table */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Customer Database</CardTitle>
                      <CardDescription>Complete list of registered customers and their activity</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <div className="relative">
                        <IconSearch className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search customers..." className="pl-8 w-[250px]" />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Customer ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Orders</TableHead>
                        <TableHead className="text-right">Revenue</TableHead>
                        <TableHead>Last Order</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {customers.map((customer) => (
                        <TableRow key={customer.id} className="hover:bg-muted/50">
                          <TableCell className="font-medium">{customer.id}</TableCell>
                          <TableCell>{customer.name}</TableCell>
                          <TableCell className="text-muted-foreground">{customer.email}</TableCell>
                          <TableCell>
                            <Badge className={
                              customer.status === 'Active' ? 'bg-chart-2/20 text-chart-2 border-chart-2/30' :
                              customer.status === 'Pending' ? 'bg-chart-4/20 text-chart-4 border-chart-4/30' :
                              'bg-muted text-muted-foreground'
                            }>
                              {customer.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">{customer.orders}</TableCell>
                          <TableCell className="text-right font-medium">{customer.revenue}</TableCell>
                          <TableCell className="text-muted-foreground">{customer.lastOrder}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">View</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <div className="text-sm text-muted-foreground">
                      Showing 1-{customers.length} of {customers.length} customers
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" disabled>Previous</Button>
                      <Button variant="outline" size="sm" disabled>Next</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
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
