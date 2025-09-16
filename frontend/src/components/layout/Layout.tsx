import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-full flex-col bg-background text-foreground">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
