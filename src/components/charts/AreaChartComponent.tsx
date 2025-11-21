import { useState } from "react"
import { Area, AreaChart, Bar, BarChart, Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts"
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
  // Week data (7 days) - showing weekly sales patterns
  { period: "Mon", sales: 58000, timeframe: "week" },
  { period: "Tue", sales: 52000, timeframe: "week" },
  { period: "Wed", sales: 67000, timeframe: "week" },
  { period: "Thu", sales: 61000, timeframe: "week" },
  { period: "Fri", sales: 73000, timeframe: "week" },
  { period: "Sat", sales: 34000, timeframe: "week" },
  { period: "Sun", sales: 29000, timeframe: "week" },
  // Month data (weeks) - showing growth with dips
  { period: "Week 1", sales: 213000, timeframe: "month" },
  { period: "Week 2", sales: 257000, timeframe: "month" },
  { period: "Week 3", sales: 198000, timeframe: "month" },
  { period: "Week 4", sales: 289000, timeframe: "month" },
  { period: "Week 5", sales: 267000, timeframe: "month" },
  // Year data (12 months) - showing realistic seasonal business cycle
  { period: "Jan", sales: 178000, timeframe: "year" },
  { period: "Feb", sales: 162000, timeframe: "year" },
  { period: "Mar", sales: 215000, timeframe: "year" },
  { period: "Apr", sales: 243000, timeframe: "year" },
  { period: "May", sales: 289000, timeframe: "year" },
  { period: "Jun", sales: 312000, timeframe: "year" },
  { period: "Jul", sales: 267000, timeframe: "year" },
  { period: "Aug", sales: 245000, timeframe: "year" },
  { period: "Sep", sales: 298000, timeframe: "year" },
  { period: "Oct", sales: 334000, timeframe: "year" },
  { period: "Nov", sales: 423000, timeframe: "year" },
  { period: "Dec", sales: 487000, timeframe: "year" },
  // 3 year data (quarterly) - showing strategic growth with market corrections
  { period: "Q1 2023", sales: 523000, timeframe: "3year" },
  { period: "Q2 2023", sales: 687000, timeframe: "3year" },
  { period: "Q3 2023", sales: 612000, timeframe: "3year" },
  { period: "Q4 2023", sales: 798000, timeframe: "3year" },
  { period: "Q1 2024", sales: 745000, timeframe: "3year" },
  { period: "Q2 2024", sales: 923000, timeframe: "3year" },
  { period: "Q3 2024", sales: 812000, timeframe: "3year" },
  { period: "Q4 2024", sales: 1134000, timeframe: "3year" },
  { period: "Q1 2025", sales: 1023000, timeframe: "3year" },
  { period: "Q2 2025", sales: 1267000, timeframe: "3year" },
  { period: "Q3 2025", sales: 1145000, timeframe: "3year" },
  { period: "Q4 2025", sales: 1398000, timeframe: "3year" },
  // 5 year data (yearly) - showing breakthrough year in 2024
  { period: "2021", sales: 1923000, timeframe: "5year" },
  { period: "2022", sales: 2234000, timeframe: "5year" },
  { period: "2023", sales: 2620000, timeframe: "5year" },
  { period: "2024", sales: 3614000, timeframe: "5year" },
  { period: "2025", sales: 4833000, timeframe: "5year" },
  // All time data - showing complete business evolution
  { period: "2020", sales: 1634000, timeframe: "all" },
  { period: "2021", sales: 1923000, timeframe: "all" },
  { period: "2022", sales: 2234000, timeframe: "all" },
  { period: "2023", sales: 2620000, timeframe: "all" },
  { period: "2024", sales: 3614000, timeframe: "all" },
  { period: "2025", sales: 4833000, timeframe: "all" },
]

const chartConfig = {
  sales: {
    label: "Sales",
    color: "#8b5cf6", // Purple
  },
}

export function AreaChartComponent() {
  const [timeRange, setTimeRange] = useState("year")
  const [chartType, setChartType] = useState<"bar" | "line" | "area">("area")

  const chartData = allChartData.filter((item) => item.timeframe === timeRange)

  const getDescription = () => {
    switch (timeRange) {
      case "week":
        return "Daily sales trends this week"
      case "month":
        return "Weekly sales performance this month"
      case "year":
        return "Monthly sales trends showing steady growth"
      case "3year":
        return "Quarterly sales performance over 3 years"
      case "5year":
        return "Yearly sales performance over 5 years"
      case "all":
        return "Complete sales history"
      default:
        return "Sales trends"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Performance</CardTitle>
        <CardDescription>{getDescription()}</CardDescription>
        <CardAction className="flex gap-2">
          <Select value={chartType} onValueChange={(value) => setChartType(value as "bar" | "line" | "area")}>
            <SelectTrigger
              className="w-32"
              size="sm"
              aria-label="Select chart type"
            >
              <SelectValue placeholder="Chart type" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="bar" className="rounded-lg">
                Bar Chart
              </SelectItem>
              <SelectItem value="line" className="rounded-lg">
                Line Chart
              </SelectItem>
              <SelectItem value="area" className="rounded-lg">
                Area Chart
              </SelectItem>
            </SelectContent>
          </Select>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="w-40"
              size="sm"
              aria-label="Select time range"
            >
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="week" className="rounded-lg">
                Week
              </SelectItem>
              <SelectItem value="month" className="rounded-lg">
                Month
              </SelectItem>
              <SelectItem value="year" className="rounded-lg">
                Year
              </SelectItem>
              <SelectItem value="3year" className="rounded-lg">
                3 Years
              </SelectItem>
              <SelectItem value="5year" className="rounded-lg">
                5 Years
              </SelectItem>
              <SelectItem value="all" className="rounded-lg">
                All Time
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent>
        {chartType === "area" && (
          <ChartContainer config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
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
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Area
                dataKey="sales"
                type="natural"
                fill="var(--color-sales)"
                fillOpacity={0.4}
                stroke="var(--color-sales)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        )}
        {chartType === "line" && (
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
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
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="sales"
                type="monotone"
                stroke="var(--color-sales)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        )}
        {chartType === "bar" && (
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.3} />
              <XAxis
                dataKey="period"
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
              <Bar dataKey="sales" fill="var(--color-sales)" radius={4} />
            </BarChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  )
}
