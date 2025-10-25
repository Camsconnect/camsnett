"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { Customer } from "./CustomersTab";
import { services } from "@/lib/services";

interface RecentSalesProps {
  customers: Customer[];
}

const servicePriceMap = new Map(services.map(s => [s.name, s.price]));

const RecentSales = ({ customers }: RecentSalesProps) => {
  const recentCustomers = customers.slice(0, 5);
  const totalSales = customers.filter(c => c.status === 'Paid').length;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>You have {totalSales} completed sales in total.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-8">
        {recentCustomers.map(customer => (
          <div key={customer.id} className="flex items-center gap-4">
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src="/placeholder.svg" alt="Avatar" />
              <AvatarFallback>
                {customer.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">{customer.name}</p>
              <p className="text-sm text-muted-foreground">
                {customer.email}
              </p>
            </div>
            <div className="ml-auto font-medium">
              +${(servicePriceMap.get(customer.service) || 0).toFixed(2)}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentSales;