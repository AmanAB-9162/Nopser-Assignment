"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDown, ArrowUp } from "lucide-react"
import { LineChart } from "@/components/charts/line-chart"
import { BarChart } from "@/components/charts/bar-chart"
import { DonutChart } from "@/components/charts/donut-chart"
import { WebsiteTraffic } from "@/components/website-traffic"
import { MarketingSEOSection } from "@/components/marketing-seo-section"

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Date filter */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Today</h2>
      </div>

      {/* Stats cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Studies" value="721K" change={11.01} trend="up" />
        <StatCard title="Total applies" value="367K" change={0.03} trend="down" />
        <StatCard title="New Users" value="1,156" change={15.03} trend="up" />
        <StatCard title="Active Users" value="239K" change={6.08} trend="up" />
      </div>

      {/* Charts section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Total Users Chart */}
        <Card>
          <CardHeader className="pb-2">
            <Tabs defaultValue="total-users">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="total-users">Total Users</TabsTrigger>
                  <TabsTrigger value="total-projects">Total Projects</TabsTrigger>
                  <TabsTrigger value="operating-status">Operating Status</TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-blue-500" />
                  <span className="text-sm">Current Week</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-700" />
                  <span className="text-sm">Previous Week</span>
                </div>
              </div>
              <div className="text-sm font-medium">3,256,598</div>
            </div>
            <LineChart />
          </CardContent>
        </Card>

        {/* Website Traffic */}
        <Card>
          <CardHeader>
            <CardTitle>Traffic by Website</CardTitle>
          </CardHeader>
          <CardContent>
            <WebsiteTraffic />
          </CardContent>
        </Card>
      </div>

      {/* Second row of charts */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Traffic by Device */}
        <Card>
          <CardHeader>
            <CardTitle>Traffic by Device</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart />
          </CardContent>
        </Card>

        {/* Traffic by Location */}
        <Card>
          <CardHeader>
            <CardTitle>Traffic by Location</CardTitle>
          </CardHeader>
          <CardContent>
            <DonutChart />
          </CardContent>
        </Card>
      </div>

      {/* Marketing & SEO section */}
      <MarketingSEOSection />
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
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</div>
        <div className="mt-2 flex items-baseline">
          <div className="text-3xl font-semibold">{value}</div>
          <div
            className={`ml-2 flex items-center text-sm font-medium ${
              trend === "up" ? "text-green-600 dark:text-green-500" : "text-red-600 dark:text-red-500"
            }`}
          >
            {trend === "up" ? <ArrowUp className="mr-1 h-3 w-3" /> : <ArrowDown className="mr-1 h-3 w-3" />}
            {change.toFixed(2)}%
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
