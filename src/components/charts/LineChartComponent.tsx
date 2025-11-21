import { useState } from "react"
import { Line, LineChart, Bar, BarChart, Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
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
  // Week data (7 days) - showing engagement patterns
  { period: "Mon", customers: 2340, activeUsers: 1756, timeframe: "week" },
  { period: "Tue", customers: 2405, activeUsers: 1823, timeframe: "week" },
  { period: "Wed", customers: 2489, activeUsers: 1891, timeframe: "week" },
  { period: "Thu", customers: 2567, activeUsers: 1947, timeframe: "week" },
  { period: "Fri", customers: 2634, activeUsers: 1998, timeframe: "week" },
  { period: "Sat", customers: 2712, activeUsers: 1734, timeframe: "week" },
  { period: "Sun", customers: 2798, activeUsers: 1623, timeframe: "week" },
  // Month data (showing varied weekly performance)
  { period: "Week 1", customers: 1845, activeUsers: 1389, timeframe: "month" },
  { period: "Week 2", customers: 2134, activeUsers: 1623, timeframe: "month" },
  { period: "Week 3", customers: 1967, activeUsers: 1498, timeframe: "month" },
  { period: "Week 4", customers: 2289, activeUsers: 1734, timeframe: "month" },
  { period: "Week 5", customers: 2456, activeUsers: 1867, timeframe: "month" },
  { period: "Week 6", customers: 2798, activeUsers: 2134, timeframe: "month" },
  // Year data (12 months) - showing seasonal patterns with summer dip
  { period: "Jan", customers: 7845, activeUsers: 5456, timeframe: "year" },
  { period: "Feb", customers: 8234, activeUsers: 5789, timeframe: "year" },
  { period: "Mar", customers: 9123, activeUsers: 6523, timeframe: "year" },
  { period: "Apr", customers: 10456, activeUsers: 7534, timeframe: "year" },
  { period: "May", customers: 11234, activeUsers: 8123, timeframe: "year" },
  { period: "Jun", customers: 12456, activeUsers: 9012, timeframe: "year" },
  { period: "Jul", customers: 11789, activeUsers: 8456, timeframe: "year" },
  { period: "Aug", customers: 10923, activeUsers: 7823, timeframe: "year" },
  { period: "Sep", customers: 12345, activeUsers: 8934, timeframe: "year" },
  { period: "Oct", customers: 13678, activeUsers: 9956, timeframe: "year" },
  { period: "Nov", customers: 15234, activeUsers: 11123, timeframe: "year" },
  { period: "Dec", customers: 14567, activeUsers: 10645, timeframe: "year" },
  // 3 year data (quarterly) - showing growth with seasonal variations
  { period: "Q1 2023", customers: 23456, activeUsers: 16234, timeframe: "3year" },
  { period: "Q2 2023", customers: 32145, activeUsers: 23467, timeframe: "3year" },
  { period: "Q3 2023", customers: 28934, activeUsers: 21123, timeframe: "3year" },
  { period: "Q4 2023", customers: 35678, activeUsers: 26234, timeframe: "3year" },
  { period: "Q1 2024", customers: 41234, activeUsers: 30456, timeframe: "3year" },
  { period: "Q2 2024", customers: 47823, activeUsers: 35678, timeframe: "3year" },
  { period: "Q3 2024", customers: 43567, activeUsers: 32145, timeframe: "3year" },
  { period: "Q4 2024", customers: 52456, activeUsers: 39234, timeframe: "3year" },
  { period: "Q1 2025", customers: 58923, activeUsers: 44567, timeframe: "3year" },
  { period: "Q2 2025", customers: 67234, activeUsers: 51234, timeframe: "3year" },
  { period: "Q3 2025", customers: 61789, activeUsers: 47123, timeframe: "3year" },
  { period: "Q4 2025", customers: 73456, activeUsers: 56789, timeframe: "3year" },
  // 5 year data (yearly) - showing exponential growth with 2023 plateau
  { period: "2021", customers: 87234, activeUsers: 62456, timeframe: "5year" },
  { period: "2022", customers: 109876, activeUsers: 79234, timeframe: "5year" },
  { period: "2023", customers: 120213, activeUsers: 87658, timeframe: "5year" },
  { period: "2024", customers: 185080, activeUsers: 137513, timeframe: "5year" },
  { period: "2025", customers: 261402, activeUsers: 199713, timeframe: "5year" },
  // All time data (showing complete journey with early struggles)
  { period: "2020", customers: 67234, activeUsers: 48923, timeframe: "all" },
  { period: "2021", customers: 87234, activeUsers: 62456, timeframe: "all" },
  { period: "2022", customers: 109876, activeUsers: 79234, timeframe: "all" },
  { period: "2023", customers: 120213, activeUsers: 87658, timeframe: "all" },
  { period: "2024", customers: 185080, activeUsers: 137513, timeframe: "all" },
  { period: "2025", customers: 261402, activeUsers: 199713, timeframe: "all" },
]

const chartConfig = {
  customers: {
    label: "Total Customers",
    color: "#3b82f6", // Blue
  },
  activeUsers: {
    label: "Active Users",
    color: "#10b981", // Green
  },
}

export function LineChartComponent() {
  const [timeRange, setTimeRange] = useState("year")
  const [chartType, setChartType] = useState<"bar" | "line" | "area">("line")

  const chartData = allChartData.filter((item) => item.timeframe === timeRange)

  const getDescription = () => {
    switch (timeRange) {
      case "week":
        return "Daily customer acquisition this week"
      case "month":
        return "Weekly customer growth this month"
      case "year":
        return "Monthly customer growth this year"
      case "3year":
        return "Quarterly customer growth over 3 years"
      case "5year":
        return "Yearly customer growth over 5 years"
      case "all":
        return "Complete customer growth history"
      default:
        return "Customer acquisition and engagement"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Growth Trends</CardTitle>
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
                  if (value >= 1000) return `${(value / 1000).toFixed(0)}K`
                  return value.toString()
                }}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="customers"
                type="monotone"
                stroke="var(--color-customers)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="activeUsers"
                type="monotone"
                stroke="var(--color-activeUsers)"
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
                  if (value >= 1000) return `${(value / 1000).toFixed(0)}K`
                  return value.toString()
                }}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="customers" fill="var(--color-customers)" radius={4} />
              <Bar dataKey="activeUsers" fill="var(--color-activeUsers)" radius={4} />
            </BarChart>
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
                  if (value >= 1000) return `${(value / 1000).toFixed(0)}K`
                  return value.toString()
                }}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
              <Area
                dataKey="customers"
                type="natural"
                fill="var(--color-customers)"
                fillOpacity={0.4}
                stroke="var(--color-customers)"
                strokeWidth={2}
              />
              <Area
                dataKey="activeUsers"
                type="natural"
                fill="var(--color-activeUsers)"
                fillOpacity={0.2}
                stroke="var(--color-activeUsers)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  )
}
