import { AppSidebar } from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex h-screen w-full flex-col bg-background text-foreground">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <AppSidebar />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
