import Header from "@/components/commons/backdrop/header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { AppSidebar } from "./app-sidebar";

interface Props {
  children: ReactNode;
  pageHeaderData: { links?: { title: string; url: string }[]; title: string };
}
const Backdrop = ({ children, pageHeaderData }: Props) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header page={pageHeaderData} />
        <div className="flex flex-1 flex-col gap-4 p-2 pt-1">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Backdrop;
