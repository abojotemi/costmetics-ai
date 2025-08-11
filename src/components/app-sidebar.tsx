import {
  Calendar,
  Home,
  Inbox,
  User,
  Search,
  Activity,
  AudioWaveform,
  LogOut,
} from "lucide-react";

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
} from "@/components/ui/sidebar";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Skin Analysis",
    url: "/skin-analysis",
    icon: Inbox,
  },
  {
    title: "Result",
    url: "/result",
    icon: Calendar,
  },
  {
    title: "Product Discovery",
    url: "/product-discovery",
    icon: Search,
  },
  {
    title: "Progress Tracking",
    url: "/progress-tracking",
    icon: Activity,
  },

  {
    title: "Skin Profile",
    url: "/skin-profile",
    icon: AudioWaveform,
  },
  {
    title: "User Profile",
    url: "/profile",
    icon: User,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl my-3">
            GlowScan
          </SidebarGroupLabel>
          <hr />
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="p-3 hover:bg-white hover:text-primary rounded"
                >
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Link href="/login" className="ml-4 cursor-pointer">
          <div className="flex space-x-3">
            <LogOut />
            <p>Logout</p>
          </div>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
