import { useState } from "react"
import { Pie, PieChart, Cell, Legend, Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts"
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

const allChartData = {
  week: [
    { category: "Electronics", value: 42, fill: "#3b82f6" },
    { category: "Clothing", value: 28, fill: "#10b981" },
    { category: "Home & Garden", value: 15, fill: "#f59e0b" },
    { category: "Sports", value: 9, fill: "#8b5cf6" },
    { category: "Books", value: 6, fill: "#ef4444" },
  ],
  month: [
    { category: "Electronics", value: 38, fill: "#3b82f6" },
    { category: "Clothing", value: 24, fill: "#10b981" },
    { category: "Home & Garden", value: 19, fill: "#f59e0b" },
    { category: "Sports", value: 12, fill: "#8b5cf6" },
    { category: "Books", value: 7, fill: "#ef4444" },
  ],
  year: [
    { category: "Electronics", value: 31, fill: "#3b82f6" },
    { category: "Clothing", value: 26, fill: "#10b981" },
    { category: "Home & Garden", value: 23, fill: "#f59e0b" },
    { category: "Sports", value: 13, fill: "#8b5cf6" },
    { category: "Books", value: 7, fill: "#ef4444" },
  ],
  "3year": [
    { category: "Electronics", value: 29, fill: "#3b82f6" },
    { category: "Clothing", value: 28, fill: "#10b981" },
    { category: "Home & Garden", value: 24, fill: "#f59e0b" },
    { category: "Sports", value: 12, fill: "#8b5cf6" },
    { category: "Books", value: 7, fill: "#ef4444" },
  ],
  "5year": [
    { category: "Electronics", value: 27, fill: "#3b82f6" },
    { category: "Clothing", value: 32, fill: "#10b981" },
    { category: "Home & Garden", value: 21, fill: "#f59e0b" },
    { category: "Sports", value: 14, fill: "#8b5cf6" },
    { category: "Books", value: 6, fill: "#ef4444" },
  ],
  all: [
    { category: "Electronics", value: 25, fill: "#3b82f6" },
    { category: "Clothing", value: 33, fill: "#10b981" },
    { category: "Home & Garden", value: 22, fill: "#f59e0b" },
    { category: "Sports", value: 13, fill: "#8b5cf6" },
    { category: "Books", value: 7, fill: "#ef4444" },
  ],
}

const chartConfig = {
  value: {
    label: "Sales %",
  },
  electronics: {
    label: "Electronics",
    color: "#3b82f6",
  },
  clothing: {
    label: "Clothing",
    color: "#10b981",
  },
  home: {
    label: "Home & Garden",
    color: "#f59e0b",
  },
  sports: {
    label: "Sports",
    color: "#8b5cf6",
  },
  books: {
    label: "Books",
    color: "#ef4444",
  },
}

export function PieChartComponent() {
  const [timeRange, setTimeRange] = useState<keyof typeof allChartData>("year")
  const [chartType, setChartType] = useState<"pie" | "donut" | "bar">("pie")

  const chartData = allChartData[timeRange]

  const getDescription = () => {
    switch (timeRange) {
      case "week":
        return "Sales distribution this week"
      case "month":
        return "Sales distribution this month"
      case "year":
        return "Sales distribution this year"
      case "3year":
        return "Sales distribution over 3 years"
      case "5year":
        return "Sales distribution over 5 years"
      case "all":
        return "All-time sales distribution"
      default:
        return "Distribution of sales across product categories"
    }
  }

  const renderChart = () => {
    switch (chartType) {
      case "donut":
        return (
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="category"
              cx="50%"
              cy="45%"
              innerRadius={60}
              outerRadius={110}
              fill="#8884d8"
              paddingAngle={2}
              label={({ value }: { value: number }) => `${value}%`}
              labelLine={true}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value) => <span className="text-sm">{value}</span>}
            />
          </PieChart>
        )
      case "bar":
        return (
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="category"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis tickLine={false} axisLine={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="value" radius={4}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        )
      default:
        return (
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="category"
              cx="50%"
              cy="45%"
              innerRadius={0}
              outerRadius={110}
              fill="#8884d8"
              paddingAngle={2}
              label={({ value }: { value: number }) => `${value}%`}
              labelLine={true}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value) => <span className="text-sm">{value}</span>}
            />
          </PieChart>
        )
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales by Category</CardTitle>
        <CardDescription>{getDescription()}</CardDescription>
        <CardAction>
          <div className="flex gap-2">
            <Select value={chartType} onValueChange={(value) => setChartType(value as "pie" | "donut" | "bar")}>
              <SelectTrigger
                className="w-32"
                size="sm"
                aria-label="Select chart type"
              >
                <SelectValue placeholder="Chart type" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="pie" className="rounded-lg">
                  Pie Chart
                </SelectItem>
                <SelectItem value="donut" className="rounded-lg">
                  Donut Chart
                </SelectItem>
                <SelectItem value="bar" className="rounded-lg">
                  Bar Chart
                </SelectItem>
              </SelectContent>
            </Select>
            <Select value={timeRange} onValueChange={(value) => setTimeRange(value as keyof typeof allChartData)}>
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
          </div>
        </CardAction>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[400px]"
        >
          {renderChart()}
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
