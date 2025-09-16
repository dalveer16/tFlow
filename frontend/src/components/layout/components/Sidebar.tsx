"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { Home, Folder, Users, Settings } from "lucide-react";
import { Link, matchPath, useLocation } from "react-router-dom";

export function AppSidebar({ className }: { className?: string }) {
  const location = useLocation();

  const links = [
    { name: "Dashboard", to: "/dashboard", icon: Home },
    { name: "Projects", to: "/projects", icon: Folder },
    { name: "Users", to: "/users", icon: Users },
    { name: "Settings", to: "/settings", icon: Settings },
  ];

  return (
    <Sidebar className={`h-full relative ${className ?? ""}`}>
      <SidebarHeader />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {links.map(({ name, to, icon: Icon }) => {
                const isActive = !!matchPath(
                  { path: to, end: false },
                  location.pathname
                );

                return (
                  <SidebarMenuItem key={to}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link
                        to={to}
                        className="flex items-center px-2 py-1 rounded-md"
                      >
                        <Icon className="mr-2 h-4 w-4" />
                        {name}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <p className="text-xs text-muted-foreground">v1.0.0</p>
      </SidebarFooter>
    </Sidebar>
  );
}
