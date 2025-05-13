"use client"

import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { name: "Jan", current: 10000, previous: 12000 },
  { name: "Feb", current: 15000, previous: 13000 },
  { name: "Mar", current: 12000, previous: 15000 },
  { name: "Apr", current: 18000, previous: 16000 },
  { name: "May", current: 20000, previous: 17000 },
  { name: "Jun", current: 25000, previous: 22000 },
  { name: "Jul", current: 28000, previous: 24000 },
]

export function LineChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsLineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12 }}
          tickFormatter={(value) => `${value / 1000}M`}
        />
        <Tooltip />
        <Line type="monotone" dataKey="previous" stroke="#9CA3AF" strokeWidth={2} dot={false} strokeDasharray="5 5" />
        <Line type="monotone" dataKey="current" stroke="#3B82F6" strokeWidth={2} dot={false} activeDot={{ r: 8 }} />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}
