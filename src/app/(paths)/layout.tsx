
import Navbar from "@/modules/components/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { RedirectToSignIn, SignedIn } from "@daveyplate/better-auth-ui";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <RedirectToSignIn/>
    <SignedIn>
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
    </SignedIn>
    </>
  );
}
