"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUp, ArrowDown } from "lucide-react"

const campaigns = [
  {
    id: 1,
    name: "Summer Sale 2023",
    clicks: 45892,
    conversions: 1245,
    roi: 324,
    trend: "up",
  },
  {
    id: 2,
    name: "Black Friday",
    clicks: 38721,
    conversions: 982,
    roi: 289,
    trend: "up",
  },
  {
    id: 3,
    name: "Holiday Special",
    clicks: 32456,
    conversions: 876,
    roi: 256,
    trend: "down",
  },
  {
    id: 4,
    name: "Spring Collection",
    clicks: 28934,
    conversions: 723,
    roi: 215,
    trend: "down",
  },
  {
    id: 5,
    name: "Back to School",
    clicks: 25678,
    conversions: 645,
    roi: 198,
    trend: "down",
  },
]

export function CampaignsTable() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Campaign Name</TableHead>
            <TableHead className="text-right">Clicks</TableHead>
            <TableHead className="text-right">Conversions</TableHead>
            <TableHead className="text-right">ROI %</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaigns.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell className="font-medium">{campaign.name}</TableCell>
              <TableCell className="text-right">{campaign.clicks.toLocaleString()}</TableCell>
              <TableCell className="text-right">{campaign.conversions.toLocaleString()}</TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end">
                  <span className="mr-2">{campaign.roi}%</span>
                  {campaign.trend === "up" ? (
                    <ArrowUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDown className="h-4 w-4 text-red-500" />
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
