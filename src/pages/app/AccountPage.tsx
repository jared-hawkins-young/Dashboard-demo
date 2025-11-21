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
 * AccountPage - Account Management
 * Billing, usage, roles, and account settings
 */
export default function AccountPage() {
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
      <SidebarInset className="bg-gradient-to-br from-card via-background to-muted/50">
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-6 py-6 px-4 lg:px-6">
            
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground mb-2">Account</h1>
              <p className="text-muted-foreground">Manage your account, billing, and usage</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Account Overview */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Account Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Organization Name</label>
                      <input className="w-full border rounded px-3 py-2" defaultValue="Demo Organization" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Account Owner</label>
                      <input className="w-full border rounded px-3 py-2" defaultValue="Erica Johnson" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input className="w-full border rounded px-3 py-2" defaultValue="demo@sopzilla.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Industry</label>
                      <select className="w-full border rounded px-3 py-2">
                        <option>Technology</option>
                        <option>Manufacturing</option>
                        <option>Healthcare</option>
                        <option>Retail</option>
                        <option>Financial Services</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button>Save Changes</Button>
                    <Button variant="outline">Cancel</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Current Plan */}
              <Card>
                <CardHeader>
                  <CardTitle>Current Plan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">Demo Plan</div>
                    <p className="text-muted-foreground">Full access during demonstration</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>SOPs Created</span>
                      <span className="font-medium">24 / Unlimited</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Team Members</span>
                      <span className="font-medium">8 / Unlimited</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Storage Used</span>
                      <span className="font-medium">2.3 GB / Unlimited</span>
                    </div>
                  </div>
                  <Button className="w-full">Upgrade Plan</Button>
                </CardContent>
              </Card>

            </div>

            {/* Billing Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              <Card>
                <CardHeader>
                  <CardTitle>Billing Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Billing Email</label>
                      <input className="w-full border rounded px-3 py-2" defaultValue="billing@demo.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Tax ID</label>
                      <input className="w-full border rounded px-3 py-2" placeholder="Optional" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Billing Address</label>
                    <textarea className="w-full border rounded px-3 py-2 h-20" defaultValue="123 Demo Street&#10;San Francisco, CA 94105&#10;United States" />
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-3">Payment Method</h4>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-6 bg-primary rounded flex items-center justify-center text-primary-foreground text-xs font-bold">
                        VISA
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">**** **** **** 4242</div>
                        <div className="text-sm text-muted-foreground">Expires 12/26</div>
                      </div>
                      <Button variant="outline" size="sm">Update</Button>
                    </div>
                  </div>
                  
                  <Button>Update Billing Info</Button>
                </CardContent>
              </Card>

              {/* Usage Statistics */}
              <Card>
                <CardHeader>
                  <CardTitle>Usage Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-chart-1/10 rounded">
                      <div className="text-2xl font-bold text-chart-1">24</div>
                      <div className="text-sm text-muted-foreground">SOPs Created</div>
                    </div>
                    <div className="text-center p-3 bg-chart-2/10 rounded">
                      <div className="text-2xl font-bold text-chart-2">8</div>
                      <div className="text-sm text-muted-foreground">Team Members</div>
                    </div>
                    <div className="text-center p-3 bg-chart-3/10 rounded">
                      <div className="text-2xl font-bold text-chart-3">156</div>
                      <div className="text-sm text-muted-foreground">AI Generations</div>
                    </div>
                    <div className="text-center p-3 bg-chart-4/10 rounded">
                      <div className="text-2xl font-bold text-chart-4">2.3GB</div>
                      <div className="text-sm text-muted-foreground">Storage Used</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium">This Month's Activity</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>SOPs Generated</span>
                        <span className="font-medium">12</span>
                      </div>
                      <div className="flex justify-between">
                        <span>API Calls</span>
                        <span className="font-medium">1,247</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Upload Sessions</span>
                        <span className="font-medium">34</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Gap Analysis Runs</span>
                        <span className="font-medium">8</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Team & Roles */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Team & Roles</CardTitle>
                  <Button>Invite Member</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Erica Johnson", email: "erica@demo.com", role: "Admin", status: "Active", joined: "Owner" },
                    { name: "John Smith", email: "john@demo.com", role: "Editor", status: "Active", joined: "2024-10-01" },
                    { name: "Sarah Connor", email: "sarah@demo.com", role: "Editor", status: "Active", joined: "2024-09-28" },
                    { name: "Mike Wilson", email: "mike@demo.com", role: "Viewer", status: "Active", joined: "2024-09-25" },
                    { name: "Lisa Wang", email: "lisa@demo.com", role: "Editor", status: "Active", joined: "2024-09-20" },
                    { name: "David Brown", email: "david@demo.com", role: "Viewer", status: "Pending", joined: "Invited 2 days ago" }
                  ].map((member, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-primary">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium">{member.name}</div>
                          <div className="text-sm text-muted-foreground">{member.email}</div>
                          <div className="text-xs text-muted-foreground">{member.joined}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge 
                          variant="outline"
                          className={
                            member.role === 'Admin' ? 'border-chart-1/30 text-chart-1' : 
                            member.role === 'Editor' ? 'border-chart-3/30 text-chart-3' : 
                            'border-muted text-muted-foreground'
                          }
                        >
                          {member.role}
                        </Badge>
                        <Badge 
                          className={member.status === 'Active' ? 'bg-chart-2/20 text-chart-2 border-chart-2/30' : 'bg-chart-4/20 text-chart-4 border-chart-4/30'}
                        >
                          {member.status}
                        </Badge>
                        {member.role !== 'Admin' && (
                          <Button variant="outline" size="sm">
                            {member.status === 'Pending' ? 'Resend' : 'Edit'}
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Billing History */}
            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: "Oct 1, 2024", description: "SOPzilla Pro - Monthly", amount: "$49.00", status: "Paid", invoice: "INV-001" },
                    { date: "Sep 1, 2024", description: "SOPzilla Pro - Monthly", amount: "$49.00", status: "Paid", invoice: "INV-002" },
                    { date: "Aug 1, 2024", description: "SOPzilla Pro - Monthly", amount: "$49.00", status: "Paid", invoice: "INV-003" }
                  ].map((billing, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <div className="font-medium">{billing.description}</div>
                        <div className="text-sm text-muted-foreground">{billing.date} • {billing.invoice}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="font-medium">{billing.amount}</div>
                          <Badge className="bg-chart-2/20 text-chart-2 border-chart-2/30">{billing.status}</Badge>
                        </div>
                        <Button variant="outline" size="sm">Download</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
