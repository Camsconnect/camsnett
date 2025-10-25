"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, FileText } from "lucide-react";
import AddCustomerDialog from "./AddCustomerDialog";

export interface Customer {
  id: string;
  name: string;
  email: string;
  company: string;
  service: string;
  status: "Paid" | "Pending" | "Overdue";
}

const CustomersTab = () => {
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: "1",
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      company: "Tech Solutions Inc.",
      service: "Social Media Management - Standard",
      status: "Paid",
    },
    {
      id: "2",
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      company: "Innovate Co.",
      service: "Web Design - Business Site",
      status: "Pending",
    },
    {
      id: "3",
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      company: "Marketing Gurus",
      service: "Branding - Corporate Kit",
      status: "Overdue",
    },
    {
      id: "4",
      name: "William Kim",
      email: "will@email.com",
      company: "Startup Hub",
      service: "Web Design - Starter Site",
      status: "Paid",
    },
  ]);

  const handleAddCustomer = (newCustomer: Omit<Customer, "id">) => {
    setCustomers([
      ...customers,
      { id: Date.now().toString(), ...newCustomer },
    ]);
  };

  const getStatusVariant = (status: Customer["status"]) => {
    switch (status) {
      case "Paid":
        return "default";
      case "Pending":
        return "secondary";
      case "Overdue":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Customers</CardTitle>
          <CardDescription>
            Manage your customers and their payment statuses.
          </CardDescription>
        </div>
        <AddCustomerDialog onSave={handleAddCustomer} />
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead className="hidden md:table-cell">Company</TableHead>
              <TableHead className="hidden md:table-cell">Service</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>
                  <div className="font-medium">{customer.name}</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    {customer.email}
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {customer.company}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {customer.service}
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(customer.status)}>
                    {customer.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <FileText className="mr-2 h-4 w-4" />
                        Generate Invoice
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CustomersTab;