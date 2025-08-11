
import Navbar from "@/modules/components/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <SidebarProvider>
        <AppSidebar />
        
          <div className="z-50">
            <Navbar />
          </div>
          <div className="!z-0">
            <div className="h-16"></div>
            {children}
            </div>
        
      </SidebarProvider>
  );
}
