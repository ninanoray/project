"use client";

import {
  Frame,
  GalleryVerticalEnd,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { DEFAULT_PROFILE_IMAGE } from "@/constants/general";
import { NavHeader } from "./nav-header";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

// This is sample data.
const data = {
  user: {
    name: "KMS",
    email: "mykms@owlsystems.com",
    // avatar: "http://localhost:3000/images/header_avatar.png",
    avatar: DEFAULT_PROFILE_IMAGE,
  },
  navheader: {
    name: "myKMS",
    logo: GalleryVerticalEnd,
    plan: "OWL systems",
    url: "/",
  },
  navMain: [
    {
      title: "Playground",
      url: "/playground",
      icon: SquareTerminal,
      // isActive: true,
      items: [
        {
          title: "History",
          url: "/playground/history",
        },
        {
          title: "Settings",
          url: "/playground/settings",
        },
      ],
    },
    {
      title: "Settings",
      icon: Settings2,
      url: "/settings/general",
      items: [
        {
          title: "General",
          url: "/settings/general",
        },
        {
          title: "Limits",
          url: "/settings/limits",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="select-none">
      <SidebarHeader>
        <NavHeader header={data.navheader} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      {/* <SidebarRail /> */}
    </Sidebar>
  );
}
