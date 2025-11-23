import { useState } from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
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
  // Year data - Monthly Recurring Revenue
  { period: "Jan", mrr: 245000, growth: 0, timeframe: "year" },
  { period: "Feb", mrr: 256000, growth: 4.5, timeframe: "year" },
  { period: "Mar", mrr: 273000, growth: 6.6, timeframe: "year" },
  { period: "Apr", mrr: 289000, growth: 5.9, timeframe: "year" },
  { period: "May", mrr: 312000, growth: 8.0, timeframe: "year" },
  { period: "Jun", mrr: 334000, growth: 7.1, timeframe: "year" },
  { period: "Jul", mrr: 356000, growth: 6.6, timeframe: "year" },
  { period: "Aug", mrr: 378000, growth: 6.2, timeframe: "year" },
  { period: "Sep", mrr: 398000, growth: 5.3, timeframe: "year" },
  { period: "Oct", mrr: 423000, growth: 6.3, timeframe: "year" },
  { period: "Nov", mrr: 445000, growth: 5.2, timeframe: "year" },
  { period: "Dec", mrr: 467000, growth: 4.9, timeframe: "year" },
  // 3 year data (quarterly)
  { period: "Q1 2023", mrr: 189000, growth: 0, timeframe: "3year" },
  { period: "Q2 2023", mrr: 217000, growth: 14.8, timeframe: "3year" },
  { period: "Q3 2023", mrr: 234000, growth: 7.8, timeframe: "3year" },
  { period: "Q4 2023", mrr: 256000, growth: 9.4, timeframe: "3year" },
  { period: "Q1 2024", mrr: 278000, growth: 8.6, timeframe: "3year" },
  { period: "Q2 2024", mrr: 305000, growth: 9.7, timeframe: "3year" },
  { period: "Q3 2024", mrr: 334000, growth: 9.5, timeframe: "3year" },
  { period: "Q4 2024", mrr: 367000, growth: 9.9, timeframe: "3year" },
  { period: "Q1 2025", mrr: 398000, growth: 8.4, timeframe: "3year" },
  { period: "Q2 2025", mrr: 434000, growth: 9.0, timeframe: "3year" },
  { period: "Q3 2025", mrr: 467000, growth: 7.6, timeframe: "3year" },
  { period: "Q4 2025", mrr: 501000, growth: 7.3, timeframe: "3year" },
]

const chartConfig = {
  mrr: {
    label: "MRR",
    color: "#8b5cf6", // Purple
  },
}

export function MRRGrowthChart() {
  const [timeRange, setTimeRange] = useState("year")

  const chartData = allChartData.filter((item) => item.timeframe === timeRange)

  const getDescription = () => {
    switch (timeRange) {
      case "year":
        return "Monthly recurring revenue growth this year"
      case "3year":
        return "MRR growth trajectory over 3 years"
      default:
        return "Monthly recurring revenue analysis"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Recurring Revenue (MRR) Growth</CardTitle>
        <CardDescription>{getDescription()}</CardDescription>
        <CardAction>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-40" size="sm" aria-label="Select time range">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="year" className="rounded-lg">Year</SelectItem>
              <SelectItem value="3year" className="rounded-lg">3 Years</SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart accessibilityLayer data={chartData} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.3} />
            <XAxis
              dataKey="period"
              tickLine={false}
              axisLine={true}
              tickMargin={8}
              stroke="hsl(var(--muted-foreground))"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
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
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <Area
              dataKey="mrr"
              type="natural"
              fill="var(--color-mrr)"
              fillOpacity={0.4}
              stroke="var(--color-mrr)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
