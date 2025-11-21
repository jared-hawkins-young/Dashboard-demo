import * as React from "react"
import {
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconHelp,
  IconFileText,
  IconReport,
  IconSearch,
  IconSettings,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Erica Johnson",
    email: "demo@sopzilla.com",
    avatar: "/avatars/erica.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/app/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Engine", 
      url: "/app/engine",
      icon: IconFileAi,
    },
    {
      title: "Gaps",
      url: "/app/gaps",
      icon: IconReport,
    },
  ],
  navClouds: [],
  navSecondary: [
    {
      title: "Account",
      url: "/app/account",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Upload",
      url: "/app/upload",
      icon: IconFileText,
    },
    {
      name: "Knowledge Base",
      url: "/app/knowledge-base",
      icon: IconDatabase,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" className="border-r bg-primary/5" {...props}>
      <SidebarHeader className="border-b bg-primary text-primary-foreground">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5 hover:bg-white/10 text-white"
            >
              <a href="/app/dashboard" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <IconFileText className="!size-4 text-white" />
                </div>
                <span className="text-lg font-bold text-white">SOPzilla</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-primary/5">
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter className="border-t border-slate-200 bg-white">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
