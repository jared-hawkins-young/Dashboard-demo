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
 * GapsPage - Knowledge Gaps Analysis
 * View and analyze gaps in SOP coverage across processes
 */
export default function GapsPage() {
  const gaps = [
    {
      id: 1,
      area: "Customer Complaint Resolution",
      department: "Support",
      severity: "Critical",
      description: "No documented process for handling escalated customer complaints",
      impact: "High customer dissatisfaction, inconsistent responses",
      suggestedActions: ["Create complaint escalation SOP", "Define response time standards", "Training for support team"],
      identifiedDate: "2024-10-07"
    },
    {
      id: 2,
      area: "Equipment Emergency Shutdown",
      department: "Operations",
      severity: "Critical", 
      description: "Missing emergency procedures for production line shutdown",
      impact: "Safety risks, potential equipment damage",
      suggestedActions: ["Develop emergency shutdown SOP", "Install emergency stop protocols", "Staff safety training"],
      identifiedDate: "2024-10-06"
    },
    {
      id: 3,
      area: "Data Privacy Compliance",
      department: "IT",
      severity: "High",
      description: "Incomplete procedures for handling customer data requests",
      impact: "Compliance risks, potential legal issues",
      suggestedActions: ["Update privacy policy SOP", "Create data request workflow", "Staff compliance training"],
      identifiedDate: "2024-10-05"
    },
    {
      id: 4,
      area: "Inventory Shortage Handling",
      department: "Operations",
      severity: "Medium",
      description: "No standard process for managing stock shortages",
      impact: "Delayed orders, customer dissatisfaction",
      suggestedActions: ["Create shortage notification SOP", "Define supplier escalation process"],
      identifiedDate: "2024-10-04"
    },
    {
      id: 5,
      area: "Remote Work Setup",
      department: "HR", 
      severity: "Medium",
      description: "Incomplete guidelines for remote employee setup",
      impact: "Inconsistent remote work experience, productivity issues",
      suggestedActions: ["Develop remote work SOP", "Create equipment checklist", "Update IT support procedures"],
      identifiedDate: "2024-10-03"
    },
    {
      id: 6,
      area: "Quality Control Documentation",
      department: "Quality",
      severity: "Low",
      description: "Missing documentation for certain quality checks",
      impact: "Minor inconsistencies in quality processes",
      suggestedActions: ["Document missing quality procedures", "Update QC checklist"],
      identifiedDate: "2024-10-01"
    }
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "bg-destructive/20 text-destructive border-destructive/30"
      case "High":
        return "bg-chart-4/20 text-chart-4 border-chart-4/30"
      case "Medium":
        return "bg-chart-5/20 text-chart-5 border-chart-5/30"
      case "Low":
        return "bg-chart-2/20 text-chart-2 border-chart-2/30"
      default:
        return "bg-muted text-muted-foreground border-border"
    }
  }

  const severityCounts = {
    Critical: gaps.filter(g => g.severity === "Critical").length,
    High: gaps.filter(g => g.severity === "High").length,
    Medium: gaps.filter(g => g.severity === "Medium").length,
    Low: gaps.filter(g => g.severity === "Low").length,
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
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent mb-2">Knowledge Gaps</h1>
                <p className="text-muted-foreground">Identify and address gaps in your SOP coverage</p>
              </div>
              <Button className="bg-gradient-to-r from-primary to-chart-1 hover:from-primary/90 hover:to-chart-1/90 text-primary-foreground">Generate Gap Analysis</Button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card className="border bg-card shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 bg-destructive/5">
                  <div className="text-2xl font-bold text-destructive">{severityCounts.Critical}</div>
                  <p className="text-sm text-muted-foreground">Critical Gaps</p>
                </CardContent>
              </Card>
              <Card className="border bg-card shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 bg-chart-4/5">
                  <div className="text-2xl font-bold text-chart-4">{severityCounts.High}</div>
                  <p className="text-sm text-muted-foreground">High Priority</p>
                </CardContent>
              </Card>
              <Card className="border bg-card shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 bg-chart-5/5">
                  <div className="text-2xl font-bold text-chart-5">{severityCounts.Medium}</div>
                  <p className="text-sm text-muted-foreground">Medium Priority</p>
                </CardContent>
              </Card>
              <Card className="border bg-card shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 bg-chart-2/5">
                  <div className="text-2xl font-bold text-chart-2">{severityCounts.Low}</div>
                  <p className="text-sm text-muted-foreground">Low Priority</p>
                </CardContent>
              </Card>
            </div>

            {/* Filters */}
            <Card className="mb-6 border bg-card shadow-lg">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <select className="border border-border rounded-md px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground">
                    <option>All Departments</option>
                    <option>Support</option>
                    <option>Operations</option>
                    <option>HR</option>
                    <option>Quality</option>
                    <option>IT</option>
                  </select>
                  <select className="border border-border rounded-md px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground">
                    <option>All Severities</option>
                    <option>Critical</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                  <Button variant="outline" className="border-border text-card-foreground hover:bg-accent">Export Gap Report</Button>
                </div>
              </CardContent>
            </Card>

            {/* Gaps List */}
            <div className="space-y-4">
              {gaps.map((gap) => (
                <Card key={gap.id} className="hover:shadow-md transition-shadow border bg-card shadow-lg hover:shadow-xl">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-lg text-card-foreground">{gap.area}</CardTitle>
                          <Badge className={getSeverityColor(gap.severity)}>
                            {gap.severity}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{gap.department} Department</span>
                          <span>•</span>
                          <span>Identified {gap.identifiedDate}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-card-foreground mb-1">Description</h4>
                        <p className="text-muted-foreground text-sm">{gap.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-card-foreground mb-1">Business Impact</h4>
                        <p className="text-muted-foreground text-sm">{gap.impact}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-card-foreground mb-2">Suggested Actions</h4>
                        <ul className="space-y-1">
                          {gap.suggestedActions.map((action, index) => (
                            <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex gap-2 pt-2 border-t border-border">
                        <Button variant="outline" size="sm" className="border-border text-card-foreground hover:bg-accent">Create SOP</Button>
                        <Button variant="outline" size="sm" className="border-border text-card-foreground hover:bg-accent">Assign Owner</Button>
                        <Button variant="outline" size="sm" className="border-border text-card-foreground hover:bg-accent">Mark Resolved</Button>
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
