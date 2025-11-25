import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  IconChecklist, 
  IconAlertTriangle, 
  IconClock, 
  IconUsers,
  IconTrendingUp,
  IconSparkles,
  IconChartBar,
  IconCalendarEvent,
  IconArrowRight,
  IconCircleCheck,
  IconAlertCircle,
  IconRefresh
} from "@tabler/icons-react"

type TaskStatus = "on-track" | "at-risk" | "delayed" | "completed"
type TaskPriority = "critical" | "high" | "medium" | "low"

type Task = {
  id: string
  title: string
  owner: string
  department: string
  deadline: string
  status: TaskStatus
  priority: TaskPriority
  progress: number
  dependencies: string[]
  source: string
  aiInsights?: string
}

const MOCK_TASKS: Task[] = [
  {
    id: "1",
    title: "Q1 Product Launch - Feature Complete",
    owner: "Sarah Chen",
    department: "Engineering",
    deadline: "2025-12-15",
    status: "at-risk",
    priority: "critical",
    progress: 72,
    dependencies: ["Design approval", "QA resources"],
    source: "Weekly standup meeting",
    aiInsights: "3-day slip detected. Will impact CS training schedule and Sales kickoff."
  },
  {
    id: "2",
    title: "Customer Success Training Materials",
    owner: "Mike Rodriguez",
    department: "Customer Success",
    deadline: "2025-12-18",
    status: "on-track",
    priority: "high",
    progress: 45,
    dependencies: ["Task #1 completion"],
    source: "Email from CS Director",
    aiInsights: "Dependent on Eng delivery. Buffer time sufficient if completed by Dec 16."
  },
  {
    id: "3",
    title: "Sales Kickoff Presentation",
    owner: "Jennifer Wu",
    department: "Sales",
    deadline: "2025-12-20",
    status: "on-track",
    priority: "critical",
    progress: 60,
    dependencies: ["Task #2 completion", "Marketing collateral"],
    source: "Slack #sales-ops",
    aiInsights: "On schedule. Awaiting final product screenshots from Eng."
  },
  {
    id: "4",
    title: "Q4 Board Report Draft",
    owner: "David Park",
    department: "Finance",
    deadline: "2025-12-10",
    status: "delayed",
    priority: "critical",
    progress: 35,
    dependencies: [],
    source: "CEO calendar invite",
    aiInsights: "⚠️ URGENT: 2 days overdue. CEO review scheduled Dec 12. Escalation recommended."
  },
  {
    id: "5",
    title: "Partner Integration Documentation",
    owner: "Alex Kumar",
    department: "Engineering",
    deadline: "2025-12-22",
    status: "on-track",
    priority: "medium",
    progress: 80,
    dependencies: [],
    source: "Jira ticket DOCS-445",
    aiInsights: "Ahead of schedule. Can be delivered early if needed."
  },
  {
    id: "6",
    title: "Marketing Campaign Assets",
    owner: "Lisa Zhang",
    department: "Marketing",
    deadline: "2025-12-17",
    status: "completed",
    priority: "high",
    progress: 100,
    dependencies: [],
    source: "Monday.com sync",
    aiInsights: "Completed 2 days early. Unblocks Sales and CS teams."
  },
]

const STATUS_CONFIG = {
  "on-track": { label: "On Track", color: "bg-green-500", textColor: "text-green-700", bgColor: "bg-green-50" },
  "at-risk": { label: "At Risk", color: "bg-amber-500", textColor: "text-amber-700", bgColor: "bg-amber-50" },
  "delayed": { label: "Delayed", color: "bg-red-500", textColor: "text-red-700", bgColor: "bg-red-50" },
  "completed": { label: "Completed", color: "bg-blue-500", textColor: "text-blue-700", bgColor: "bg-blue-50" },
}

const PRIORITY_CONFIG = {
  "critical": { label: "Critical", color: "destructive" },
  "high": { label: "High", color: "default" },
  "medium": { label: "Medium", color: "secondary" },
  "low": { label: "Low", color: "outline" },
}

/**
 * OpenItemsPage - AI-Powered Task Management & On-Time Delivery System
 * Tracks tasks from capture to completion with AI automation and escalation
 */
export default function OpenItemsPage() {
  const [tasks] = useState<Task[]>(MOCK_TASKS)
  const [selectedFilter, setSelectedFilter] = useState<TaskStatus | "all">("all")

  const filteredTasks = selectedFilter === "all" 
    ? tasks 
    : tasks.filter(t => t.status === selectedFilter)

  const stats = {
    total: tasks.length,
    onTrack: tasks.filter(t => t.status === "on-track").length,
    atRisk: tasks.filter(t => t.status === "at-risk").length,
    delayed: tasks.filter(t => t.status === "delayed").length,
    completed: tasks.filter(t => t.status === "completed").length,
  }

  const getDaysUntilDeadline = (deadline: string) => {
    const days = Math.ceil((new Date(deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    if (days < 0) return `${Math.abs(days)} days overdue`
    if (days === 0) return "Due today"
    return `${days} days left`
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset className="flex flex-col h-screen overflow-hidden">
        <div className="flex-shrink-0">
          <SiteHeader />
        </div>
        <div className="flex-1 flex flex-col gap-6 p-6 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <IconChecklist className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-3xl font-bold">Open Item Management</h1>
                <p className="text-muted-foreground">AI-powered task tracking and on-time delivery system</p>
              </div>
            </div>
            <Button className="gap-2">
              <IconRefresh className="h-4 w-4" />
              Sync All Sources
            </Button>
          </div>

          {/* Stats Overview */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setSelectedFilter("all")}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
                <IconChartBar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.total}</div>
                <p className="text-xs text-muted-foreground">Active items tracked</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setSelectedFilter("on-track")}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">On Track</CardTitle>
                <IconCircleCheck className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{stats.onTrack}</div>
                <p className="text-xs text-muted-foreground">Meeting deadlines</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setSelectedFilter("at-risk")}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">At Risk</CardTitle>
                <IconAlertCircle className="h-4 w-4 text-amber-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-amber-600">{stats.atRisk}</div>
                <p className="text-xs text-muted-foreground">Needs attention</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setSelectedFilter("delayed")}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Delayed</CardTitle>
                <IconAlertTriangle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">{stats.delayed}</div>
                <p className="text-xs text-muted-foreground">Requires escalation</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setSelectedFilter("completed")}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
                <IconTrendingUp className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{stats.completed}</div>
                <p className="text-xs text-muted-foreground">This period</p>
              </CardContent>
            </Card>
          </div>

          {/* AI System Overview */}
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <IconSparkles className="h-5 w-5 text-primary" />
                AI Automation Active
              </CardTitle>
              <CardDescription>Real-time monitoring and intelligent escalation</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <IconChecklist className="h-4 w-4 text-primary" />
                  Task Capture
                </div>
                <p className="text-xs text-muted-foreground">
                  AI extracts tasks from meetings, emails, Slack, CRM, and docs. Auto-assigns owners and deadlines.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <IconUsers className="h-4 w-4 text-primary" />
                  Dependency Mapping
                </div>
                <p className="text-xs text-muted-foreground">
                  Tracks dependencies across teams. Identifies conflicts and bottlenecks. Suggests optimal sequencing.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <IconClock className="h-4 w-4 text-primary" />
                  Proactive Monitoring
                </div>
                <p className="text-xs text-muted-foreground">
                  Daily progress checks. Recalculates timelines. Flags downstream impacts before they cascade.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Task List */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  Active Tasks
                  {selectedFilter !== "all" && (
                    <Badge variant="outline" className="ml-2">
                      {STATUS_CONFIG[selectedFilter].label}
                    </Badge>
                  )}
                </CardTitle>
                <Button variant="outline" size="sm" onClick={() => setSelectedFilter("all")}>
                  Show All
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {filteredTasks.map((task) => (
                <Card key={task.id} className={`${STATUS_CONFIG[task.status].bgColor} border-l-4 ${STATUS_CONFIG[task.status].color.replace('bg-', 'border-')}`}>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {/* Task Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-lg">{task.title}</h3>
                            <Badge variant={PRIORITY_CONFIG[task.priority].color as any}>
                              {PRIORITY_CONFIG[task.priority].label}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <IconUsers className="h-4 w-4" />
                              <span>{task.owner}</span>
                              <span className="text-xs">({task.department})</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <IconCalendarEvent className="h-4 w-4" />
                              <span>{new Date(task.deadline).toLocaleDateString()}</span>
                              <span className={`text-xs font-medium ${
                                task.status === 'delayed' ? 'text-red-600' : 
                                task.status === 'at-risk' ? 'text-amber-600' : 
                                'text-green-600'
                              }`}>
                                ({getDaysUntilDeadline(task.deadline)})
                              </span>
                            </div>
                          </div>
                        </div>
                        <Badge className={`${STATUS_CONFIG[task.status].color} text-white`}>
                          {STATUS_CONFIG[task.status].label}
                        </Badge>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{task.progress}%</span>
                        </div>
                        <Progress value={task.progress} className="h-2" />
                      </div>

                      {/* Dependencies */}
                      {task.dependencies.length > 0 && (
                        <div className="flex items-start gap-2">
                          <IconArrowRight className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <div className="flex-1">
                            <span className="text-xs font-medium text-muted-foreground">Dependencies:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {task.dependencies.map((dep, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {dep}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* AI Insights */}
                      {task.aiInsights && (
                        <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 flex gap-2">
                          <IconSparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-xs font-medium text-primary mb-1">AI Analysis</p>
                            <p className="text-sm">{task.aiInsights}</p>
                          </div>
                        </div>
                      )}

                      {/* Source */}
                      <div className="flex items-center justify-between pt-2 border-t">
                        <span className="text-xs text-muted-foreground">
                          Captured from: <span className="font-medium">{task.source}</span>
                        </span>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>

          {/* AI Capabilities Detail */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <IconSparkles className="h-5 w-5 text-primary" />
                How AI Ensures On-Time Delivery
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    Task Entry & Extraction
                  </h4>
                  <ul className="space-y-2 ml-10 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>AI monitors meetings, emails, Slack, CRM, and documents</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Extracts: task → owner → deadline → dependencies → commitments</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>I validate accuracy and assign or escalate as needed</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    Complex Planning & Dependencies
                  </h4>
                  <ul className="space-y-2 ml-10 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Maps dependencies across teams (Eng → CS → Sales)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Identifies timeline conflicts and bottlenecks</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Suggests realistic sequencing based on bandwidth + velocity</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    Impact Analysis & Scenarios
                  </h4>
                  <ul className="space-y-2 ml-10 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Detects when a small slip will impact large deliverables</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Creates "what-if" scenarios: "If Eng slips 3 days, what moves?"</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Recommends mitigation strategies before deadlines drift</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">4</span>
                    </div>
                    Proactive Monitoring & Escalation
                  </h4>
                  <ul className="space-y-2 ml-10 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Monitors progress daily, recalculates timelines automatically</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Flags tasks that will cause downstream delays</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Alerts me before deadlines drift, updates CEO only when critical</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
