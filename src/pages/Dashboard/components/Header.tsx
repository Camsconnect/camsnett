"use client";

import {
  Search,
  Home,
  Package,
  Users,
  LineChart,
  PanelLeft,
  FileText,
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
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              to="#"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Package className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Camsnett</span>
            </Link>
            <Link
              to="/dashboard"
              className="flex items-center gap-4 px-2.5 text-foreground"
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              to="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Package className="h-5 w-5" />
              Orders
            </Link>
            <Link
              to="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <FileText className="h-5 w-5" />
              Invoices
            </Link>
            <Link
              to="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Users className="h-5 w-5" />
              Customers
            </Link>
            <Link
              to="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <LineChart className="h-5 w-5" />
              Settings
            </Link>
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
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;