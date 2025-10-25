"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import type { Customer } from "./CustomersTab";
import { services } from "@/lib/services";

interface OverviewCardsProps {
  customers: Customer[];
}

const servicePriceMap = new Map(services.map(s => [s.name, s.price]));

const OverviewCards = ({ customers }: OverviewCardsProps) => {
  const totalRevenue = customers
    .filter(c => c.status === 'Paid')
    .reduce((acc, c) => acc + (servicePriceMap.get(c.service) || 0), 0);

  const totalCustomers = customers.length;
  const completedSales = customers.filter(c => c.status === 'Paid').length;
  const pendingCustomers = customers.filter(c => c.status === 'Pending').length;

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalRevenue.toLocaleString('en-US')}</div>
          <p className="text-xs text-muted-foreground">
            From completed sales
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+{totalCustomers}</div>
          <p className="text-xs text-muted-foreground">
            All-time customer count
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Completed Sales</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+{completedSales}</div>
          <p className="text-xs text-muted-foreground">
            Customers with "Paid" status
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pending Customers</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+{pendingCustomers}</div>
          <p className="text-xs text-muted-foreground">
            Awaiting payment
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default OverviewCards;