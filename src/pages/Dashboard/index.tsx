"use client";

import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import OverviewCards from "./components/OverviewCards";
import OverviewChart from "./components/OverviewChart";
import RecentSales from "./components/RecentSales";
import InvoicesTab from "./components/InvoicesTab";
import CustomersTab, { Customer } from "./components/CustomersTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [customerForInvoice, setCustomerForInvoice] = useState<Customer | null>(null);

  const handleGenerateInvoice = (customer: Customer) => {
    setCustomerForInvoice(customer);
    setActiveTab("invoices");
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex flex-col sm:pl-14">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="invoices">Invoices</TabsTrigger>
                <TabsTrigger value="customers">Customers</TabsTrigger>
                <TabsTrigger value="analytics" disabled>
                  Analytics
                </TabsTrigger>
                <TabsTrigger value="reports" disabled>
                  Reports
                </TabsTrigger>
                <TabsTrigger value="notifications" disabled>
                  Notifications
                </TabsTrigger>
              </TabsList>
              <div className="hidden md:flex items-center gap-2">
                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
            <TabsContent value="overview" className="space-y-4">
              <OverviewCards />
              <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                <Card className="xl:col-span-2">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <OverviewChart />
                  </CardContent>
                </Card>
                <RecentSales />
              </div>
            </TabsContent>
            <TabsContent value="invoices" className="space-y-4">
              <InvoicesTab customerToPreFill={customerForInvoice} clearCustomerToPreFill={() => setCustomerForInvoice(null)} />
            </TabsContent>
            <TabsContent value="customers" className="space-y-4">
              <CustomersTab onGenerateInvoice={handleGenerateInvoice} />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;