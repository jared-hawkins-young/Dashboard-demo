import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { stage: "Visitors", count: 15234, percentage: 100, timeframe: "current" },
  { stage: "Signups", count: 4567, percentage: 30.0, timeframe: "current" },
  { stage: "Trials", count: 2134, percentage: 14.0, timeframe: "current" },
  { stage: "Customers", count: 823, percentage: 5.4, timeframe: "current" },
  { stage: "Retained", count: 635, percentage: 4.2, timeframe: "current" },
]

const chartConfig = {
  count: {
    label: "Count",
    color: "#3b82f6", // Blue
  },
}

export function ConversionFunnelChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Conversion Funnel</CardTitle>
        <CardDescription>Current month conversion breakdown by stage</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData} layout="vertical">
            <CartesianGrid horizontal={false} strokeDasharray="3 3" opacity={0.3} />
            <XAxis 
              type="number"
              tickLine={false} 
              axisLine={true}
              stroke="hsl(var(--muted-foreground))"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickFormatter={(value) => {
                if (value >= 1000) return `${(value / 1000).toFixed(0)}K`
                return value.toString()
              }}
            />
            <YAxis 
              type="category"
              dataKey="stage"
              tickLine={false}
              tickMargin={10}
              axisLine={true}
              stroke="hsl(var(--muted-foreground))"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar dataKey="count" fill="var(--color-count)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
