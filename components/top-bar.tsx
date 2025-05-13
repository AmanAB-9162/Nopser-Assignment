"use client"

import { useState } from "react"
import { Search, Menu, Bell, Sun, Moon, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"

interface TopBarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  notificationPanelOpen: boolean
  setNotificationPanelOpen: (open: boolean) => void
}

export function TopBar({ sidebarOpen, setSidebarOpen, notificationPanelOpen, setNotificationPanelOpen }: TopBarProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  // After mounting, we can safely show the UI
  useState(() => {
    setMounted(true)
  })

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-gray-200 bg-white px-4 dark:border-gray-800 dark:bg-gray-900 md:px-6">
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle sidebar</span>
      </Button>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm font-medium">
        <span className="text-gray-500 dark:text-gray-400">Dashboards</span>
        <span className="text-gray-400 dark:text-gray-600">/</span>
        <span>Default</span>
      </div>

      <div className="ml-auto flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-64 rounded-md border border-gray-200 bg-white pl-8 dark:border-gray-800 dark:bg-gray-950"
          />
        </div>

        {/* Keyboard shortcut */}
        <div className="hidden items-center rounded-md border border-gray-200 px-1.5 text-xs font-medium text-gray-500 dark:border-gray-800 dark:text-gray-400 md:flex">
          ⌘/
        </div>

        {/* Theme toggle */}
        <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>

        {/* Notification button */}
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          onClick={() => setNotificationPanelOpen(!notificationPanelOpen)}
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          <span className="sr-only">Notifications</span>
        </Button>

        {/* User profile dropdown */}
        <div className="relative">
          <Button
            variant="ghost"
            className="flex items-center gap-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <img src="/placeholder.svg?height=32&width=32" alt="User" className="h-8 w-8 rounded-full object-cover" />
            <ChevronDown className="h-4 w-4" />
          </Button>

          {profileOpen && (
            <div className="absolute right-0 top-full mt-1 w-48 rounded-md border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-800 dark:bg-gray-900">
              <div className="border-b border-gray-200 px-4 py-2 dark:border-gray-800">
                <p className="font-medium">John Doe</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">john.doe@example.com</p>
              </div>
              <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                Profile
              </button>
              <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                Settings
              </button>
              <button className="flex w-full items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
