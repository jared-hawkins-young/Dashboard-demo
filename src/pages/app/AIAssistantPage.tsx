import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { ChatSidebar } from "@/components/ChatSidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IconSparkles, IconBulb } from "@tabler/icons-react"

// Import chart components for dynamic rendering
import { BarChartComponent } from "@/components/charts/BarChartComponent"
import { LineChartComponent } from "@/components/charts/LineChartComponent"
import { AreaChartComponent } from "@/components/charts/AreaChartComponent"
import { PieChartComponent } from "@/components/charts/PieChartComponent"

// Dynamic chart components based on analyst questions
import { CACTrendChart } from "@/components/charts/ai/CACTrendChart"
import { ProfitMarginChart } from "@/components/charts/ai/ProfitMarginChart"
import { MRRGrowthChart } from "@/components/charts/ai/MRRGrowthChart"
import { ChurnRateChart } from "@/components/charts/ai/ChurnRateChart"
import { ConversionFunnelChart } from "@/components/charts/ai/ConversionFunnelChart"
import { RevenueBreakdownChart } from "@/components/charts/ai/RevenueBreakdownChart"

type Message = {
  id: string
  text: string
  sender: "user" | "assistant"
  timestamp: Date
}

type ChartType = 
  | "revenue-orders"
  | "customer-growth" 
  | "sales-performance"
  | "sales-category"
  | "cac-trend"
  | "profit-margin"
  | "mrr-growth"
  | "churn-rate"
  | "conversion-funnel"
  | "revenue-breakdown"

const EXAMPLE_PROMPTS = [
  {
    id: 1,
    text: "What's our customer acquisition cost trend over the past year?",
    chart: "cac-trend" as ChartType,
  },
  {
    id: 2,
    text: "Show me profit margins by product category",
    chart: "profit-margin" as ChartType,
  },
  {
    id: 3,
    text: "Analyze our monthly recurring revenue growth",
    chart: "mrr-growth" as ChartType,
  },
  {
    id: 4,
    text: "What's our customer churn rate trend?",
    chart: "churn-rate" as ChartType,
  },
  {
    id: 5,
    text: "Display the sales conversion funnel breakdown",
    chart: "conversion-funnel" as ChartType,
  },
  {
    id: 6,
    text: "Break down revenue by sales channel",
    chart: "revenue-breakdown" as ChartType,
  },
  {
    id: 7,
    text: "Compare revenue vs orders performance",
    chart: "revenue-orders" as ChartType,
  },
  {
    id: 8,
    text: "Show customer growth and active user trends",
    chart: "customer-growth" as ChartType,
  },
]

const CHART_INSIGHTS: Record<ChartType, { summary: string; keyPoints: string[]; recommendation: string }> = {
  "revenue-orders": {
    summary: "Revenue and order volume show strong correlation with seasonal peaks in Q4. Average order value has increased 15% year-over-year.",
    keyPoints: [
      "Peak performance in November-December with 35% revenue increase",
      "Weekday orders consistently outperform weekends by 22%",
      "Average order value trend: $875 → $1,006 (+15% YoY)"
    ],
    recommendation: "Focus marketing spend on Q4 campaigns and weekday promotions. Consider weekend-specific incentives to balance demand."
  },
  "customer-growth": {
    summary: "Customer base growing at 12% monthly rate with strong retention. Active user engagement increased 18% this quarter.",
    keyPoints: [
      "Monthly customer growth accelerating from 8% to 12%",
      "Active user ratio improved from 75% to 82%",
      "Highest growth in enterprise segment (+25% MoM)"
    ],
    recommendation: "Maintain current acquisition strategy while investing in onboarding improvements to sustain high activation rates."
  },
  "sales-performance": {
    summary: "Sales show consistent upward trajectory with strong Q4 performance. Year-over-year growth at 28% with improving margins.",
    keyPoints: [
      "Consistent month-over-month growth averaging 8.5%",
      "Q4 represents 38% of annual revenue",
      "Sales velocity increased 15% since Q1"
    ],
    recommendation: "Scale inventory and support resources for Q4. Explore opportunities to smooth revenue across quarters."
  },
  "sales-category": {
    summary: "Product mix dominated by core offerings (Software 42%, Hardware 28%). Service revenue growing fastest at 45% YoY.",
    keyPoints: [
      "Software subscriptions provide most stable revenue stream",
      "Hardware sales show seasonal volatility but high margins",
      "Professional services growing 45% annually"
    ],
    recommendation: "Expand services team to meet demand. Consider bundling strategies to increase hardware attachment rates."
  },
  "cac-trend": {
    summary: "Customer Acquisition Cost trending up from $98 to $148 (+51% over 4 years). Increased competition in key channels driving costs higher.",
    keyPoints: [
      "CAC increased 51% from Jan 2021 to Dec 2024",
      "Paid search CPCs up 35%, display ads +28%",
      "Organic channels showing declining contribution"
    ],
    recommendation: "Critical priority: optimize acquisition funnel and improve conversion rates. Invest in content marketing and referral programs to reduce paid dependency."
  },
  "profit-margin": {
    summary: "Margin profile heavily weighted to software/digital (68-71%). Physical products and services averaging 38-43% margins.",
    keyPoints: [
      "Software & Subscriptions deliver 68-71% margins",
      "Hardware at 24% margin due to competitive pricing",
      "Services margins improving from 38% to 42%"
    ],
    recommendation: "Prioritize high-margin subscription growth. Evaluate hardware pricing strategy and supplier negotiations."
  },
  "mrr-growth": {
    summary: "Monthly Recurring Revenue growing steadily from $245K to $467K (+91% YoY). Expansion revenue contributing 35% of growth.",
    keyPoints: [
      "MRR compound growth rate: 5.8% monthly",
      "New customer MRR: 65% of growth",
      "Expansion MRR: 35% from upsells/cross-sells"
    ],
    recommendation: "Strong foundation. Focus on reducing early-stage churn and expanding customer success team to drive more expansion revenue."
  },
  "churn-rate": {
    summary: "Churn rate stable at 3.0-3.2% monthly, slightly elevated in Q1. Annual retention rate approximately 65-68%.",
    keyPoints: [
      "Churn peaks in January (3.2%) post-annual renewals",
      "Summer months show best retention (2.9-3.0%)",
      "Enterprise segment churn significantly lower at 1.8%"
    ],
    recommendation: "Implement proactive outreach program before renewal periods. Analyze Q1 churn cohorts to improve retention strategies."
  },
  "conversion-funnel": {
    summary: "Overall conversion rate from visitor to customer at 5.4%. Significant drop-off between trial start and paid conversion (39% conversion).",
    keyPoints: [
      "Visitor → Signup: 30% (industry benchmark: 25-35%)",
      "Signup → Trial: 46% (good performance)",
      "Trial → Customer: 39% (below 50% benchmark)"
    ],
    recommendation: "Priority: improve trial-to-paid conversion through better onboarding, feature education, and proactive customer success engagement during trial period."
  },
  "revenue-breakdown": {
    summary: "Online channel dominates at 36% of revenue ($2.13M). Direct sales strong at 27%. Partner channels underdeveloped at 22% combined.",
    keyPoints: [
      "Online channel: $2.13M (36% of total)",
      "Direct sales: $1.57M with highest margins",
      "Partner ecosystem: Only $1.28M combined (22%)"
    ],
    recommendation: "Significant opportunity in partner channel development. Consider channel partner program expansion and reseller enablement initiatives."
  },
}


/**
 * AIAssistantPage - Interactive AI Dashboard Assistant
 * Chat-driven analytics interface with dynamic chart generation
 */
export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hello! I'm your AI analytics assistant. Click any example prompt below or ask me a question to analyze your data.",
      sender: "assistant",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [activeChart, setActiveChart] = useState<ChartType>("revenue-orders")
  const [isChatOpen, setIsChatOpen] = useState(true)

  const handleExamplePrompt = (prompt: typeof EXAMPLE_PROMPTS[0]) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: prompt.text,
      sender: "user",
      timestamp: new Date(),
    }

    // Add assistant response
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: `I've updated the dashboard to show: ${prompt.text.toLowerCase()}`,
      sender: "assistant",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage, assistantMessage])
    setActiveChart(prompt.chart)
  }

  const handleCustomMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    // Add demo response
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: "Sorry, this is a demo, but if connected I would dynamically change the graphs on the left side based on your request.",
      sender: "assistant",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage, assistantMessage])
    setInputValue("")
  }

  const renderChart = () => {
    switch (activeChart) {
      case "revenue-orders":
        return <BarChartComponent />
      case "customer-growth":
        return <LineChartComponent />
      case "sales-performance":
        return <AreaChartComponent />
      case "sales-category":
        return <PieChartComponent />
      case "cac-trend":
        return <CACTrendChart />
      case "profit-margin":
        return <ProfitMarginChart />
      case "mrr-growth":
        return <MRRGrowthChart />
      case "churn-rate":
        return <ChurnRateChart />
      case "conversion-funnel":
        return <ConversionFunnelChart />
      case "revenue-breakdown":
        return <RevenueBreakdownChart />
      default:
        return <BarChartComponent />
    }
  }

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset className="flex flex-col h-screen overflow-hidden">
        <div className="flex-shrink-0">
          <SiteHeader />
        </div>
        <div className="flex-1 flex flex-col gap-4 p-4 overflow-y-auto">
          <div className="flex items-center gap-2 flex-shrink-0">
            <IconSparkles className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">AI Analytics Assistant</h1>
            <Badge variant="secondary" className="ml-2">Demo</Badge>
          </div>

          <div className="space-y-4">
            {renderChart()}
            
            {/* AI Insights */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <IconBulb className="h-5 w-5 text-amber-500" />
                  AI-Generated Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">SUMMARY</h4>
                  <p className="text-sm">{CHART_INSIGHTS[activeChart].summary}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">KEY FINDINGS</h4>
                  <ul className="space-y-1">
                    {CHART_INSIGHTS[activeChart].keyPoints.map((point, index) => (
                      <li key={index} className="text-sm flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                  <h4 className="font-semibold text-sm text-primary mb-2">RECOMMENDATION</h4>
                  <p className="text-sm">{CHART_INSIGHTS[activeChart].recommendation}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
      
      {/* Right Chat Sidebar - Independent scroll */}
      <ChatSidebar
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
        messages={messages}
        inputValue={inputValue}
        onInputChange={setInputValue}
        onSendMessage={handleCustomMessage}
        examplePrompts={EXAMPLE_PROMPTS}
        onExamplePromptClick={handleExamplePrompt}
      />
    </SidebarProvider>
  )
}
