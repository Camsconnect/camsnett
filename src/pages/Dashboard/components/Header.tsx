"use client";

import { useState } from "react";
import {
  Search,
  Home,
  Package,
  Users,
  LineChart,
  PanelLeft,
  FileText,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setIsSheetOpen(false);
  };

  const navItems = [
    { name: "Dashboard", icon: Home, tab: "overview" },
    { name: "Orders", icon: Package, tab: "orders", disabled: true },
    { name: "Invoices", icon: FileText, tab: "invoices" },
    { name: "Customers", icon: Users, tab: "customers" },
    { name: "Analytics", icon: LineChart, tab: "analytics", disabled: true },
  ];

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              to="/"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Package className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Camsnett</span>
            </Link>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => !item.disabled && handleTabChange(item.tab)}
                disabled={item.disabled}
                className={cn(
                  "flex items-center gap-4 px-2.5 hover:text-foreground",
                  activeTab === item.tab ? "text-foreground" : "text-muted-foreground",
                  item.disabled && "cursor-not-allowed opacity-50"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleTabChange("settings")}
              className={cn(
                "flex items-center gap-4 px-2.5 hover:text-foreground",
                activeTab === "settings" ? "text-foreground" : "text-muted-foreground"
              )}
            >
              <Settings className="h-5 w-5" />
              Settings
            </button>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                type="search"
                placeholder="Search..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
            </div>
        </div>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <Button
                variant="secondary"
                size="icon"
                className="rounded-full"
            >
                <img
                src="/placeholder.svg"
                width={36}
                height={36}
                alt="Avatar"
                className="rounded-full"
                />
                <span className="sr-only">Toggle user menu</span>
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setActiveTab('settings')}>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;