"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { TopBar } from "@/components/top-bar"
import { Dashboard } from "@/components/dashboard"
import { NotificationPanel } from "@/components/notification-panel"

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [notificationPanelOpen, setNotificationPanelOpen] = useState(false)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          notificationPanelOpen={notificationPanelOpen}
          setNotificationPanelOpen={setNotificationPanelOpen}
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Dashboard />
        </main>
      </div>

      <NotificationPanel open={notificationPanelOpen} setOpen={setNotificationPanelOpen} />
    </div>
  )
}
