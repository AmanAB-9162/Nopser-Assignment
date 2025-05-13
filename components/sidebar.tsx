"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  ShoppingCart,
  FolderKanban,
  GraduationCap,
  User,
  Settings,
  Building2,
  FileText,
  Users,
  Star,
  Menu,
} from "lucide-react"

interface SidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export function Sidebar({ open, setOpen }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    dashboards: true,
    pages: false,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    })
  }

  return (
    <>
      {/* Mobile overlay */}
      {open && <div className="fixed inset-0 z-20 bg-black/50 md:hidden" onClick={() => setOpen(false)} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-64 flex-shrink-0 flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-gray-200 dark:border-gray-800 px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
              B
            </div>
            <span className="text-lg font-semibold">ByeWind</span>
          </div>
          <button className="ml-auto md:hidden" onClick={() => setOpen(false)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Sidebar content */}
        <div className="flex-1 overflow-y-auto py-4">
          {/* Favorites section */}
          <div className="px-3 mb-6">
            <h3 className="mb-2 px-4 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">Favorites</h3>
            <div className="space-y-1">
              <h4 className="px-4 text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Recently</h4>
              <NavItem href="#" icon={<LayoutDashboard size={18} />} active={false}>
                Overview
              </NavItem>
              <NavItem href="#" icon={<FolderKanban size={18} />} active={false}>
                Projects
              </NavItem>
            </div>
          </div>

          {/* Dashboards section */}
          <div className="px-3 mb-6">
            <button
              className="flex w-full items-center justify-between px-4 py-2 text-sm font-medium"
              onClick={() => toggleSection("dashboards")}
            >
              <span className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">Dashboards</span>
              {expandedSections.dashboards ? (
                <ChevronDown size={16} className="text-gray-500" />
              ) : (
                <ChevronRight size={16} className="text-gray-500" />
              )}
            </button>

            {expandedSections.dashboards && (
              <div className="mt-1 space-y-1">
                <NavItem href="#" icon={<LayoutDashboard size={18} />} active={true}>
                  Default
                </NavItem>
                <NavItem href="#" icon={<ShoppingCart size={18} />} active={false}>
                  eCommerce
                </NavItem>
                <NavItem href="#" icon={<FolderKanban size={18} />} active={false}>
                  Projects
                </NavItem>
                <NavItem href="#" icon={<GraduationCap size={18} />} active={false}>
                  Online Courses
                </NavItem>
              </div>
            )}
          </div>

          {/* Pages section */}
          <div className="px-3">
            <button
              className="flex w-full items-center justify-between px-4 py-2 text-sm font-medium"
              onClick={() => toggleSection("pages")}
            >
              <span className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">Pages</span>
              {expandedSections.pages ? (
                <ChevronDown size={16} className="text-gray-500" />
              ) : (
                <ChevronRight size={16} className="text-gray-500" />
              )}
            </button>

            {expandedSections.pages && (
              <div className="mt-1 space-y-1">
                <NavItem href="#" icon={<User size={18} />} active={false} hasSubmenu>
                  User Profile
                </NavItem>
                {/* Submenu for User Profile */}
                <div className="ml-9 border-l border-gray-200 dark:border-gray-800 pl-3 space-y-1">
                  <NavItem href="#" icon={null} active={false} isSubmenu>
                    Overview
                  </NavItem>
                  <NavItem href="#" icon={null} active={false} isSubmenu>
                    Projects
                  </NavItem>
                  <NavItem href="#" icon={null} active={false} isSubmenu>
                    Campaigns
                  </NavItem>
                  <NavItem href="#" icon={null} active={false} isSubmenu>
                    Documents
                  </NavItem>
                  <NavItem href="#" icon={null} active={false} isSubmenu>
                    Followers
                  </NavItem>
                </div>
                <NavItem href="#" icon={<Settings size={18} />} active={false}>
                  Account
                </NavItem>
                <NavItem href="#" icon={<Building2 size={18} />} active={false}>
                  Corporate
                </NavItem>
                <NavItem href="#" icon={<FileText size={18} />} active={false}>
                  Blog
                </NavItem>
                <NavItem href="#" icon={<Users size={18} />} active={false}>
                  Social
                </NavItem>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 dark:border-gray-800 p-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
              <Star size={16} />
            </div>
            <div className="text-sm">
              <p className="font-medium">snowUI</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

interface NavItemProps {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
  active?: boolean
  hasSubmenu?: boolean
  isSubmenu?: boolean
}

function NavItem({ href, icon, children, active = false, hasSubmenu = false, isSubmenu = false }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
        active
          ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
          : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
        isSubmenu && "py-1.5 text-xs",
      )}
    >
      {icon && <span className="text-gray-500 dark:text-gray-400">{icon}</span>}
      <span>{children}</span>
      {hasSubmenu && <ChevronDown size={16} className="ml-auto text-gray-500" />}
    </Link>
  )
}
