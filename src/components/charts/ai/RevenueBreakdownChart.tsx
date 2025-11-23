import { useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardAction,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const allChartData = [
  // Year data - Revenue by sales channel
  { channel: "Direct Sales", revenue: 1567000, timeframe: "year" },
  { channel: "Online", revenue: 2134000, timeframe: "year" },
  { channel: "Partners", revenue: 823000, timeframe: "year" },
  { channel: "Resellers", revenue: 456000, timeframe: "year" },
  { channel: "Enterprise", revenue: 789000, timeframe: "year" },
  // Quarter data
  { channel: "Direct Sales", revenue: 423000, timeframe: "quarter" },
  { channel: "Online", revenue: 578000, timeframe: "quarter" },
  { channel: "Partners", revenue: 234000, timeframe: "quarter" },
  { channel: "Resellers", revenue: 145000, timeframe: "quarter" },
  { channel: "Enterprise", revenue: 267000, timeframe: "quarter" },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#10b981", // Green
  },
}

export function RevenueBreakdownChart() {
  const [timeRange, setTimeRange] = useState("year")

  const chartData = allChartData.filter((item) => item.timeframe === timeRange)

  const getDescription = () => {
    switch (timeRange) {
      case "year":
        return "Annual revenue breakdown by sales channel"
      case "quarter":
        return "Current quarter revenue by channel"
      default:
        return "Revenue distribution analysis"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue by Sales Channel</CardTitle>
        <CardDescription>{getDescription()}</CardDescription>
        <CardAction>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-40" size="sm" aria-label="Select time range">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="quarter" className="rounded-lg">This Quarter</SelectItem>
              <SelectItem value="year" className="rounded-lg">This Year</SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.3} />
            <XAxis
              dataKey="channel"
              tickLine={false}
              tickMargin={10}
              axisLine={true}
              stroke="hsl(var(--muted-foreground))"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              tickLine={false} 
              axisLine={true}
              stroke="hsl(var(--muted-foreground))"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickFormatter={(value) => {
                if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`
                if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`
                return `$${value}`
              }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
