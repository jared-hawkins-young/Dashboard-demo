import { useState } from "react"
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts"
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
  // Year data - Customer churn rate
  { period: "Jan", churnRate: 3.2, timeframe: "year" },
  { period: "Feb", churnRate: 3.5, timeframe: "year" },
  { period: "Mar", churnRate: 2.8, timeframe: "year" },
  { period: "Apr", churnRate: 3.1, timeframe: "year" },
  { period: "May", churnRate: 2.9, timeframe: "year" },
  { period: "Jun", churnRate: 3.4, timeframe: "year" },
  { period: "Jul", churnRate: 3.7, timeframe: "year" },
  { period: "Aug", churnRate: 3.3, timeframe: "year" },
  { period: "Sep", churnRate: 2.6, timeframe: "year" },
  { period: "Oct", churnRate: 2.9, timeframe: "year" },
  { period: "Nov", churnRate: 3.1, timeframe: "year" },
  { period: "Dec", churnRate: 3.8, timeframe: "year" },
  // 3 year data (quarterly)
  { period: "Q1 2023", churnRate: 4.2, timeframe: "3year" },
  { period: "Q2 2023", churnRate: 4.5, timeframe: "3year" },
  { period: "Q3 2023", churnRate: 4.1, timeframe: "3year" },
  { period: "Q4 2023", churnRate: 3.9, timeframe: "3year" },
  { period: "Q1 2024", churnRate: 3.7, timeframe: "3year" },
  { period: "Q2 2024", churnRate: 3.4, timeframe: "3year" },
  { period: "Q3 2024", churnRate: 3.2, timeframe: "3year" },
  { period: "Q4 2024", churnRate: 3.0, timeframe: "3year" },
  { period: "Q1 2025", churnRate: 2.9, timeframe: "3year" },
  { period: "Q2 2025", churnRate: 3.1, timeframe: "3year" },
  { period: "Q3 2025", churnRate: 2.9, timeframe: "3year" },
  { period: "Q4 2025", churnRate: 3.2, timeframe: "3year" },
]

const chartConfig = {
  churnRate: {
    label: "Churn Rate %",
    color: "#f59e0b", // Amber/Orange
  },
}

export function ChurnRateChart() {
  const [timeRange, setTimeRange] = useState("year")

  const chartData = allChartData.filter((item) => item.timeframe === timeRange)

  const getDescription = () => {
    switch (timeRange) {
      case "year":
        return "Monthly customer churn rate trends"
      case "3year":
        return "Quarterly churn rate over 3 years"
      default:
        return "Customer retention analysis"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Churn Rate Trend</CardTitle>
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
          <LineChart accessibilityLayer data={chartData} margin={{ left: 12, right: 12 }}>
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
              tickFormatter={(value) => `${value}%`}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="churnRate"
              type="monotone"
              stroke="var(--color-churnRate)"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
