"use client"

import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Linux", value: 15000 },
  { name: "Mac", value: 20000 },
  { name: "iOS", value: 18000 },
  { name: "Windows", value: 22000 },
  { name: "Android", value: 10000 },
  { name: "Other", value: 19000 },
]

export function BarChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBarChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12 }}
          tickFormatter={(value) => `${value / 1000}M`}
        />
        <Tooltip />
        <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={30} />
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}
