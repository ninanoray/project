"use client";

import * as React from "react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";

interface Props {
  header: {
    name: string;
    logo: React.ElementType;
    plan: string;
  };
}
export function NavHeader({ header }: Props) {
  const router = useRouter();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          tooltip="dashboard"
          onClick={() => router.push("/")}
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex-center aspect-square size-8 rounded-lg bg-destructive text-sidebar-primary-foreground">
            <header.logo className="size-4" />
          </div>
          <div className="grid flex-1">
            <span className="truncate font-semibold">{header.name}</span>
            <span className="truncate text-xs">{header.plan}</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
