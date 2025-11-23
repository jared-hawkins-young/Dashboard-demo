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
  // Year data - Customer Acquisition Cost trends
  { period: "Jan", cac: 127, timeframe: "year" },
  { period: "Feb", cac: 132, timeframe: "year" },
  { period: "Mar", cac: 118, timeframe: "year" },
  { period: "Apr", cac: 145, timeframe: "year" },
  { period: "May", cac: 139, timeframe: "year" },
  { period: "Jun", cac: 152, timeframe: "year" },
  { period: "Jul", cac: 148, timeframe: "year" },
  { period: "Aug", cac: 134, timeframe: "year" },
  { period: "Sep", cac: 141, timeframe: "year" },
  { period: "Oct", cac: 156, timeframe: "year" },
  { period: "Nov", cac: 163, timeframe: "year" },
  { period: "Dec", cac: 149, timeframe: "year" },
  // 3 year data (quarterly)
  { period: "Q1 2023", cac: 115, timeframe: "3year" },
  { period: "Q2 2023", cac: 123, timeframe: "3year" },
  { period: "Q3 2023", cac: 128, timeframe: "3year" },
  { period: "Q4 2023", cac: 134, timeframe: "3year" },
  { period: "Q1 2024", cac: 129, timeframe: "3year" },
  { period: "Q2 2024", cac: 142, timeframe: "3year" },
  { period: "Q3 2024", cac: 137, timeframe: "3year" },
  { period: "Q4 2024", cac: 151, timeframe: "3year" },
  { period: "Q1 2025", cac: 146, timeframe: "3year" },
  { period: "Q2 2025", cac: 148, timeframe: "3year" },
  { period: "Q3 2025", cac: 141, timeframe: "3year" },
  { period: "Q4 2025", cac: 156, timeframe: "3year" },
  // All time data (yearly)
  { period: "2021", cac: 98, timeframe: "all" },
  { period: "2022", cac: 107, timeframe: "all" },
  { period: "2023", cac: 125, timeframe: "all" },
  { period: "2024", cac: 140, timeframe: "all" },
  { period: "2025", cac: 148, timeframe: "all" },
]

const chartConfig = {
  cac: {
    label: "CAC ($)",
    color: "#ef4444", // Red
  },
}

export function CACTrendChart() {
  const [timeRange, setTimeRange] = useState("year")

  const chartData = allChartData.filter((item) => item.timeframe === timeRange)

  const getDescription = () => {
    switch (timeRange) {
      case "year":
        return "Customer acquisition cost by month"
      case "3year":
        return "CAC trends over the past 3 years"
      case "all":
        return "Historical CAC trends since inception"
      default:
        return "Customer acquisition cost analysis"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Acquisition Cost (CAC) Trend</CardTitle>
        <CardDescription>{getDescription()}</CardDescription>
        <CardAction>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-40" size="sm" aria-label="Select time range">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="year" className="rounded-lg">Year</SelectItem>
              <SelectItem value="3year" className="rounded-lg">3 Years</SelectItem>
              <SelectItem value="all" className="rounded-lg">All Time</SelectItem>
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
              tickFormatter={(value) => `$${value}`}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="cac"
              type="monotone"
              stroke="var(--color-cac)"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
