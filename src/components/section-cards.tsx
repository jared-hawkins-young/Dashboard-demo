import { IconTrendingUp, IconAlertTriangle, IconUsers, IconFileText } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <>
      {/* Welcome Header */}
      <div className="px-4 lg:px-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Good morning, Erica</h1>
          <p className="text-muted-foreground">Here's what's happening with your SOPs today.</p>
        </div>
        
        {/* Hero Action Section */}
        <Card className="mb-6 bg-gradient-to-r from-muted/30 to-accent/20 border-border">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle className="text-xl mb-2">Ready to create your next SOP?</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  Last created: Customer Service Protocol - 2 days ago
                </CardDescription>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-primary hover:bg-primary/90">
                  <IconFileText className="w-4 h-4 mr-2" />
                  Create New SOP
                </Button>
                <Button variant="outline">
                  Upload Recording
                </Button>
                <Button variant="outline">
                  Import Document
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>

      {/* Quick Stats Grid */}
      <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
        
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Total SOPs</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              12
            </CardTitle>
            <CardAction>
              <Badge variant="outline">
                <IconTrendingUp />
                +3 this month
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Growing documentation <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Active SOPs across all departments
            </div>
          </CardFooter>
        </Card>

        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Pending Review</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              3
            </CardTitle>
            <CardAction>
              <Badge variant="outline" className="text-chart-4 border-chart-4/30">
                <IconAlertTriangle />
                Needs attention
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Awaiting approval <IconAlertTriangle className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Quality Control and HR documents
            </div>
          </CardFooter>
        </Card>

        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Knowledge Gaps</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              7
            </CardTitle>
            <CardAction>
              <Badge variant="outline" className="text-destructive border-destructive/30">
                <IconAlertTriangle />
                Critical: 3
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Gaps identified <IconAlertTriangle className="size-4" />
            </div>
            <div className="text-muted-foreground">
              4 medium priority gaps detected
            </div>
          </CardFooter>
        </Card>

        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Team Activity</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              4
            </CardTitle>
            <CardAction>
              <Badge variant="outline" className="text-chart-2 border-chart-2/30">
                <IconUsers />
                This week
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Active collaboration <IconUsers className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Updates from team members
            </div>
          </CardFooter>
        </Card>

      </div>
    </>
  )
}
