"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface NotificationPanelProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export function NotificationPanel({ open, setOpen }: NotificationPanelProps) {
  return (
    <>
      {/* Mobile overlay */}
      {open && <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setOpen(false)} />}

      <aside
        className={`fixed inset-y-0 right-0 z-50 w-80 flex-shrink-0 flex-col bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 transition-transform duration-200 ease-in-out md:z-20 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-200 dark:border-gray-800 px-4">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <Tabs defaultValue="notifications" className="flex-1">
          <TabsList className="grid w-full grid-cols-2 px-4 py-4">
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
          </TabsList>

          <TabsContent value="notifications" className="flex-1 overflow-y-auto p-0">
            <div className="space-y-1 p-4">
              <NotificationItem
                avatar="/placeholder.svg?height=40&width=40"
                title="You have a bug that needs"
                time="Just now"
              />
              <NotificationItem
                avatar="/placeholder.svg?height=40&width=40"
                title="New user registered"
                time="59 minutes ago"
              />
              <NotificationItem
                avatar="/placeholder.svg?height=40&width=40"
                title="You have a bug that needs..."
                time="12 hours ago"
              />
              <NotificationItem
                avatar="/placeholder.svg?height=40&width=40"
                title="Andi Lane subscribed to you"
                time="Today, 11:59 AM"
              />
            </div>
          </TabsContent>

          <TabsContent value="activities" className="flex-1 overflow-y-auto p-0">
            <div className="space-y-1 p-4">
              <NotificationItem
                avatar="/placeholder.svg?height=40&width=40"
                title="You have a bug that needs..."
                time="Just now"
              />
              <NotificationItem
                avatar="/placeholder.svg?height=40&width=40"
                title="Released a new version"
                time="59 minutes ago"
              />
              <NotificationItem
                avatar="/placeholder.svg?height=40&width=40"
                title="Submitted a bug"
                time="12 hours ago"
              />
              <NotificationItem
                avatar="/placeholder.svg?height=40&width=40"
                title="Modified A data in Page X"
                time="Today, 11:59 AM"
              />
              <NotificationItem
                avatar="/placeholder.svg?height=40&width=40"
                title="Deleted a page in Project X"
                time="Feb 2, 2023"
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="border-t border-gray-200 dark:border-gray-800 p-4">
          <h3 className="mb-3 text-sm font-semibold">Shortlisted Candidates</h3>
          <div className="space-y-3">
            <CandidateItem avatar="/placeholder.svg?height=40&width=40" name="Natali Craig" />
            <CandidateItem avatar="/placeholder.svg?height=40&width=40" name="Drew Cano" />
            <CandidateItem avatar="/placeholder.svg?height=40&width=40" name="Orlando Diggs" />
            <CandidateItem avatar="/placeholder.svg?height=40&width=40" name="Andi Lane" />
            <CandidateItem avatar="/placeholder.svg?height=40&width=40" name="Kate Morrison" />
            <CandidateItem avatar="/placeholder.svg?height=40&width=40" name="Koray Okumus" />
          </div>
        </div>
      </aside>
    </>
  )
}

interface NotificationItemProps {
  avatar: string
  title: string
  time: string
}

function NotificationItem({ avatar, title, time }: NotificationItemProps) {
  return (
    <div className="flex items-start gap-4 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
      <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800" />
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{time}</p>
      </div>
    </div>
  )
}

interface CandidateItemProps {
  avatar: string
  name: string
}

function CandidateItem({ avatar, name }: CandidateItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-800" />
      <span className="text-sm font-medium">{name}</span>
    </div>
  )
}
