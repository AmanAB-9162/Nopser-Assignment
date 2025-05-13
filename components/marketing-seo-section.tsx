"use client"

import { ArrowDown, ArrowUp, BarChart3 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MarketingChart } from "@/components/charts/marketing-chart"
import { CampaignsTable } from "@/components/campaigns-table"

export function MarketingSEOSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Marketing & SEO</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Campaign Impressions" value="1.2M" change={8.5} trend="up" />
        <StatCard title="CTR" value="3.1%" change={0.5} trend="down" />
        <StatCard title="Conversion Rate" value="2.6%" change={1.2} trend="up" />
        <StatCard title="SEO Score" value="92/100" change={4.0} trend="up" />
      </div>

      <Card>
        <CardHeader className="pb-2">
          <Tabs defaultValue="impressions">
            <div className="flex items-center justify-between">
              <CardTitle>Campaign Performance</CardTitle>
              <TabsList>
                <TabsTrigger value="impressions">Impressions</TabsTrigger>
                <TabsTrigger value="ctr">CTR</TabsTrigger>
                <TabsTrigger value="conversion">Conversion</TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
        </CardHeader>
        <CardContent>
          <MarketingChart />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top Performing Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <CampaignsTable />
        </CardContent>
      </Card>
    </div>
  )
}

interface StatCardProps {
  title: string
  value: string
  change: number
  trend: "up" | "down"
}

function StatCard({ title, value, change, trend }: StatCardProps) {
  return (
    <Card className="bg-gray-50 dark:bg-gray-900">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</div>
          <div className="rounded-full bg-gray-100 p-1.5 dark:bg-gray-800">
            <BarChart3 className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </div>
        </div>
        <div className="mt-2 flex items-baseline">
          <div className="text-3xl font-semibold">{value}</div>
          <div
            className={`ml-2 flex items-center text-sm font-medium ${
              trend === "up" ? "text-green-600 dark:text-green-500" : "text-red-600 dark:text-red-500"
            }`}
          >
            {trend === "up" ? <ArrowUp className="mr-1 h-3 w-3" /> : <ArrowDown className="mr-1 h-3 w-3" />}
            {change.toFixed(1)}%
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
