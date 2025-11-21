import { useState } from "react"
import { Bar, BarChart, Line, LineChart, Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
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
  // Week data (7 days) - showing weekday patterns with weekend dips
  { period: "Mon", revenue: 52000, orders: 142, timeframe: "week" },
  { period: "Tue", revenue: 48500, orders: 128, timeframe: "week" },
  { period: "Wed", revenue: 61000, orders: 165, timeframe: "week" },
  { period: "Thu", revenue: 58000, orders: 151, timeframe: "week" },
  { period: "Fri", revenue: 67500, orders: 178, timeframe: "week" },
  { period: "Sat", revenue: 31000, orders: 89, timeframe: "week" },
  { period: "Sun", revenue: 28000, orders: 76, timeframe: "week" },
  // Month data (showing growth with fluctuations)
  { period: "Week 1", revenue: 198000, orders: 512, timeframe: "month" },
  { period: "Week 2", revenue: 234000, orders: 587, timeframe: "month" },
  { period: "Week 3", revenue: 189000, orders: 478, timeframe: "month" },
  { period: "Week 4", revenue: 267000, orders: 621, timeframe: "month" },
  { period: "Week 5", revenue: 245000, orders: 568, timeframe: "month" },
  // Year data (12 months) - showing seasonal patterns with Q4 peak
  { period: "Jan", revenue: 165000, orders: 412, timeframe: "year" },
  { period: "Feb", revenue: 152000, orders: 389, timeframe: "year" },
  { period: "Mar", revenue: 198000, orders: 487, timeframe: "year" },
  { period: "Apr", revenue: 223000, orders: 534, timeframe: "year" },
  { period: "May", revenue: 267000, orders: 621, timeframe: "year" },
  { period: "Jun", revenue: 289000, orders: 678, timeframe: "year" },
  { period: "Jul", revenue: 245000, orders: 598, timeframe: "year" },
  { period: "Aug", revenue: 234000, orders: 567, timeframe: "year" },
  { period: "Sep", revenue: 278000, orders: 645, timeframe: "year" },
  { period: "Oct", revenue: 312000, orders: 723, timeframe: "year" },
  { period: "Nov", revenue: 398000, orders: 892, timeframe: "year" },
  { period: "Dec", revenue: 456000, orders: 1021, timeframe: "year" },
  // 3 year data (quarterly) - showing growth trajectory with dips
  { period: "Q1 2023", revenue: 485000, orders: 1203, timeframe: "3year" },
  { period: "Q2 2023", revenue: 612000, orders: 1456, timeframe: "3year" },
  { period: "Q3 2023", revenue: 578000, orders: 1389, timeframe: "3year" },
  { period: "Q4 2023", revenue: 734000, orders: 1678, timeframe: "3year" },
  { period: "Q1 2024", revenue: 689000, orders: 1534, timeframe: "3year" },
  { period: "Q2 2024", revenue: 823000, orders: 1821, timeframe: "3year" },
  { period: "Q3 2024", revenue: 757000, orders: 1689, timeframe: "3year" },
  { period: "Q4 2024", revenue: 1066000, orders: 2336, timeframe: "3year" },
  { period: "Q1 2025", revenue: 956000, orders: 2089, timeframe: "3year" },
  { period: "Q2 2025", revenue: 1134000, orders: 2453, timeframe: "3year" },
  { period: "Q3 2025", revenue: 1045000, orders: 2298, timeframe: "3year" },
  { period: "Q4 2025", revenue: 1289000, orders: 2789, timeframe: "3year" },
  // 5 year data (yearly) - showing dramatic growth with 2023 plateau
  { period: "2021", revenue: 1834000, orders: 4845, timeframe: "5year" },
  { period: "2022", revenue: 2156000, orders: 5634, timeframe: "5year" },
  { period: "2023", revenue: 2409000, orders: 5726, timeframe: "5year" },
  { period: "2024", revenue: 3335000, orders: 7380, timeframe: "5year" },
  { period: "2025", revenue: 4424000, orders: 9629, timeframe: "5year" },
  // All time data (showing complete growth story with setbacks)
  { period: "2020", revenue: 1523000, orders: 4178, timeframe: "all" },
  { period: "2021", revenue: 1834000, orders: 4845, timeframe: "all" },
  { period: "2022", revenue: 2156000, orders: 5634, timeframe: "all" },
  { period: "2023", revenue: 2409000, orders: 5726, timeframe: "all" },
  { period: "2024", revenue: 3335000, orders: 7380, timeframe: "all" },
  { period: "2025", revenue: 4424000, orders: 9629, timeframe: "all" },
]

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#3b82f6", // Blue
  },
  orders: {
    label: "Orders",
    color: "#10b981", // Green
  },
}

export function BarChartComponent() {
  const [timeRange, setTimeRange] = useState("year")
  const [chartType, setChartType] = useState<"bar" | "line" | "area">("bar")

  const chartData = allChartData.filter((item) => item.timeframe === timeRange)

  const getDescription = () => {
    switch (timeRange) {
      case "week":
        return "Daily revenue and orders this week"
      case "month":
        return "Weekly performance this month"
      case "year":
        return "Monthly performance this year"
      case "3year":
        return "Quarterly performance over 3 years"
      case "5year":
        return "Yearly performance over 5 years"
      case "all":
        return "Complete historical performance"
      default:
        return "Performance metrics"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue & Orders Overview</CardTitle>
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
              <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
              <Bar dataKey="orders" fill="var(--color-orders)" radius={4} />
            </BarChart>
          </ChartContainer>
        )}
        {chartType === "line" && (
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
                tickFormatter={(value) => {
                  if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`
                  if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`
                  return `$${value}`
                }}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="revenue"
                type="monotone"
                stroke="var(--color-revenue)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="orders"
                type="monotone"
                stroke="var(--color-orders)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        )}
        {chartType === "area" && (
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
                dataKey="revenue"
                type="natural"
                fill="var(--color-revenue)"
                fillOpacity={0.4}
                stroke="var(--color-revenue)"
                strokeWidth={2}
              />
              <Area
                dataKey="orders"
                type="natural"
                fill="var(--color-orders)"
                fillOpacity={0.2}
                stroke="var(--color-orders)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  )
}
