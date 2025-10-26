"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
import { Home, Settings, Users, LineChart, Brain, FileText, ClipboardCheck, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const navItems = [
    { name: "Dashboard", icon: Home, tab: "overview" },
    { name: "Tasks", icon: ClipboardCheck, tab: "tasks" },
    { name: "Invoices", icon: FileText, tab: "invoices" },
    { name: "Customers", icon: Users, tab: "customers" },
    { name: "Reports", icon: BarChart3, tab: "reports" },
    { name: "Analytics", icon: LineChart, tab: "analytics", disabled: true },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          to="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Brain className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Camsnett</span>
        </Link>
        <TooltipProvider>
          {navItems.map((item) => (
            <Tooltip key={item.name}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => !item.disabled && setActiveTab(item.tab)}
                  disabled={item.disabled}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
                    activeTab === item.tab
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-50"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.name}</span>
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">{item.name}</TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setActiveTab("settings")}
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
                  activeTab === "settings"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                )}
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </button>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
};

export default Sidebar;