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
  // Year data - Profit margins by category
  { category: "Software", margin: 68.5, timeframe: "year" },
  { category: "Hardware", margin: 24.3, timeframe: "year" },
  { category: "Services", margin: 42.7, timeframe: "year" },
  { category: "Subscriptions", margin: 71.2, timeframe: "year" },
  { category: "Training", margin: 55.8, timeframe: "year" },
  { category: "Support", margin: 38.9, timeframe: "year" },
  // Quarter data
  { category: "Software", margin: 69.2, timeframe: "quarter" },
  { category: "Hardware", margin: 22.8, timeframe: "quarter" },
  { category: "Services", margin: 44.1, timeframe: "quarter" },
  { category: "Subscriptions", margin: 72.5, timeframe: "quarter" },
  { category: "Training", margin: 57.3, timeframe: "quarter" },
  { category: "Support", margin: 40.2, timeframe: "quarter" },
]

const chartConfig = {
  margin: {
    label: "Profit Margin %",
    color: "#10b981", // Green
  },
}

export function ProfitMarginChart() {
  const [timeRange, setTimeRange] = useState("year")

  const chartData = allChartData.filter((item) => item.timeframe === timeRange)

  const getDescription = () => {
    switch (timeRange) {
      case "year":
        return "Annual profit margins across product categories"
      case "quarter":
        return "Current quarter profit margin analysis"
      default:
        return "Profit margin by category"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profit Margin by Product Category</CardTitle>
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
              dataKey="category"
              tickLine={false}
              tickMargin={10}
              axisLine={true}
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
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="margin" fill="var(--color-margin)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
