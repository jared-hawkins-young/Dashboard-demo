import { IconTrendingUp, IconTrendingDown, IconUsers, IconShoppingCart, IconArrowUpRight } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
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
      {/* Key Performance Indicators Grid */}
      <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
        
        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              $4.83M
            </CardTitle>
            <CardAction>
              <Badge variant="outline" className="text-chart-2 border-chart-2/30">
                <IconTrendingUp />
                +33.7%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium text-chart-2">
              Strong YoY growth <IconTrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">
              +$1.22M compared to last year
            </div>
          </CardFooter>
        </Card>

        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Total Customers</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              14,567
            </CardTitle>
            <CardAction>
              <Badge variant="outline" className="text-chart-5 border-chart-5/30">
                <IconTrendingDown />
                -4.4%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium text-muted-foreground">
              Seasonal dip expected <IconUsers className="size-4" />
            </div>
            <div className="text-muted-foreground">
              -667 from peak (typical Dec pattern)
            </div>
          </CardFooter>
        </Card>

        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Total Orders</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              9,629
            </CardTitle>
            <CardAction>
              <Badge variant="outline" className="text-chart-1 border-chart-1/30">
                <IconTrendingUp />
                +30.5%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium text-chart-1">
              Record high performance <IconShoppingCart className="size-4" />
            </div>
            <div className="text-muted-foreground">
              +2,249 orders vs last year
            </div>
          </CardFooter>
        </Card>

        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Conversion Rate</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              4.17%
            </CardTitle>
            <CardAction>
              <Badge variant="outline" className="text-chart-2 border-chart-2/30">
                <IconTrendingUp />
                +0.93%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium text-chart-2">
              Improved conversion <IconArrowUpRight className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Well above industry average of 2.8%
            </div>
          </CardFooter>
        </Card>

      </div>
    </>
  )
}
