"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", impressions: 120000, ctr: 2.8, conversion: 1.9 },
  { month: "Feb", impressions: 150000, ctr: 2.9, conversion: 2.0 },
  { month: "Mar", impressions: 180000, ctr: 3.0, conversion: 2.1 },
  { month: "Apr", impressions: 220000, ctr: 3.2, conversion: 2.3 },
  { month: "May", impressions: 250000, ctr: 3.1, conversion: 2.4 },
  { month: "Jun", impressions: 280000, ctr: 3.3, conversion: 2.5 },
  { month: "Jul", impressions: 310000, ctr: 3.2, conversion: 2.6 },
  { month: "Aug", impressions: 340000, ctr: 3.0, conversion: 2.5 },
  { month: "Sep", impressions: 370000, ctr: 3.1, conversion: 2.6 },
  { month: "Oct", impressions: 400000, ctr: 3.2, conversion: 2.7 },
  { month: "Nov", impressions: 430000, ctr: 3.1, conversion: 2.6 },
  { month: "Dec", impressions: 460000, ctr: 3.1, conversion: 2.6 },
]

export function MarketingChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
          <XAxis dataKey="month" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="impressions"
            name="Impressions"
            stroke="#3B82F6" // Blue
            activeDot={{ r: 8 }}
            strokeWidth={2}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="ctr"
            name="CTR (%)"
            stroke="#10B981" // Green
            strokeWidth={2}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="conversion"
            name="Conversion (%)"
            stroke="#F59E0B" // Orange
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
