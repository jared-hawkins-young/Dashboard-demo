import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

/**
 * KnowledgeBasePage - Browse All Created SOPs
 * View, search, and manage all SOPs in the system
 */
export default function KnowledgeBasePage() {
  const sops = [
    {
      id: 1,
      title: "Customer Service Protocol",
      department: "Support",
      status: "Published",
      version: "v2.1",
      lastUpdated: "2024-10-05",
      createdBy: "Sarah Johnson",
      description: "Standard procedures for handling customer inquiries and support requests"
    },
    {
      id: 2,
      title: "Equipment Maintenance Checklist",
      department: "Operations",
      status: "Draft",
      version: "v1.0",
      lastUpdated: "2024-10-07",
      createdBy: "Mike Chen",
      description: "Daily and weekly maintenance procedures for production equipment"
    },
    {
      id: 3,
      title: "New Employee Onboarding",
      department: "HR",
      status: "In Review",
      version: "v3.2",
      lastUpdated: "2024-10-06",
      createdBy: "John Smith",
      description: "Complete guide for onboarding new team members including documentation and training"
    },
    {
      id: 4,
      title: "Safety Procedures",
      department: "Operations",
      status: "Published",
      version: "v4.1",
      lastUpdated: "2024-10-04",
      createdBy: "Lisa Wang",
      description: "Workplace safety protocols and emergency procedures"
    },
    {
      id: 5,
      title: "Quality Control Checklist",
      department: "Quality",
      status: "In Review",
      version: "v2.0",
      lastUpdated: "2024-10-03",
      createdBy: "David Brown",
      description: "Quality assurance procedures and testing protocols"
    },
    {
      id: 6,
      title: "Data Backup Procedures",
      department: "IT",
      status: "Published",
      version: "v1.5",
      lastUpdated: "2024-09-28",
      createdBy: "Alex Kim",
      description: "Regular backup procedures and data recovery processes"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-chart-5/20 text-chart-5 border-chart-5/30"
      case "Draft":
        return "bg-muted text-muted-foreground border-border"
      case "In Review":
        return "bg-chart-4/20 text-chart-4 border-chart-4/30"
      default:
        return "bg-muted text-muted-foreground border-border"
    }
  }

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
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent mb-2">Knowledge Base</h1>
                <p className="text-muted-foreground">Browse and manage all your organization's SOPs</p>
              </div>
              <Button className="bg-gradient-to-r from-primary to-chart-3 hover:from-primary/90 hover:to-chart-3/90 text-primary-foreground">Create New SOP</Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card className="border bg-card shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 bg-chart-1/5">
                  <div className="text-2xl font-bold text-chart-1">24</div>
                  <p className="text-sm text-muted-foreground">Total SOPs</p>
                </CardContent>
              </Card>
              <Card className="border bg-card shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 bg-chart-5/5">
                  <div className="text-2xl font-bold text-chart-5">18</div>
                  <p className="text-sm text-muted-foreground">Published</p>
                </CardContent>
              </Card>
              <Card className="border bg-card shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 bg-chart-4/5">
                  <div className="text-2xl font-bold text-chart-4">4</div>
                  <p className="text-sm text-muted-foreground">In Review</p>
                </CardContent>
              </Card>
              <Card className="border bg-card shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 bg-secondary/50">
                  <div className="text-2xl font-bold text-secondary-foreground">2</div>
                  <p className="text-sm text-muted-foreground">Drafts</p>
                </CardContent>
              </Card>
            </div>

            {/* Filters and Search */}
            <Card className="mb-6 border bg-card shadow-lg">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Search SOPs..."
                      className="w-full border border-border rounded-md px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
                    />
                  </div>
                  <select className="border border-border rounded-md px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground">
                    <option>All Departments</option>
                    <option>Support</option>
                    <option>Operations</option>
                    <option>HR</option>
                    <option>Quality</option>
                    <option>IT</option>
                  </select>
                  <select className="border border-blue-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>All Statuses</option>
                    <option>Published</option>
                    <option>In Review</option>
                    <option>Draft</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* SOPs Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {sops.map((sop) => (
                <Card key={sop.id} className="hover:shadow-md transition-shadow border-primary/20 hover:border-primary/30">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1 text-primary">{sop.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <span>{sop.department}</span>
                          <span>•</span>
                          <span>{sop.version}</span>
                          <span>•</span>
                          <span>Updated {sop.lastUpdated}</span>
                        </div>
                      </div>
                      <Badge className={getStatusColor(sop.status)}>
                        {sop.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm mb-4">{sop.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500">By {sop.createdBy}</span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/5">View</Button>
                        <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/5">Edit</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
