"use client";

import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import OverviewCards from "./components/OverviewCards";
import OverviewChart from "./components/OverviewChart";
import RecentSales from "./components/RecentSales";
import InvoicesTab from "./components/InvoicesTab";
import CustomersTab, { Customer } from "./components/CustomersTab";
import SettingsTab from "./components/SettingsTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/contexts/SessionContext";
import { Skeleton } from "@/components/ui/skeleton";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [customerForInvoice, setCustomerForInvoice] = useState<Customer | null>(null);
  const { user } = useSession();

  const { data: customers, isLoading: isLoadingCustomers } = useQuery({
    queryKey: ["customers", user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase
        .from("customers")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
      if (error) throw new Error(error.message);
      return data as Customer[];
    },
    enabled: !!user,
  });

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
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <div className="hidden md:flex items-center gap-2">
                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
            <TabsContent value="overview" className="space-y-4">
              {isLoadingCustomers ? (
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                  <Skeleton className="h-[125px]" />
                  <Skeleton className="h-[125px]" />
                  <Skeleton className="h-[125px]" />
                  <Skeleton className="h-[125px]" />
                </div>
              ) : (
                <OverviewCards customers={customers || []} />
              )}
              <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                <Card className="xl:col-span-2">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    {isLoadingCustomers ? (
                      <Skeleton className="h-[350px] w-full" />
                    ) : (
                      <OverviewChart customers={customers || []} />
                    )}
                  </CardContent>
                </Card>
                {isLoadingCustomers ? (
                  <Card>
                    <CardHeader>
                      <Skeleton className="h-6 w-1/2" />
                      <Skeleton className="h-4 w-3/4" />
                    </CardHeader>
                    <CardContent className="grid gap-8">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Skeleton key={i} className="h-10 w-full" />
                      ))}
                    </CardContent>
                  </Card>
                ) : (
                  <RecentSales customers={customers || []} />
                )}
              </div>
            </TabsContent>
            <TabsContent value="invoices" className="space-y-4">
              <InvoicesTab customerToPreFill={customerForInvoice} clearCustomerToPreFill={() => setCustomerForInvoice(null)} />
            </TabsContent>
            <TabsContent value="customers" className="space-y-4">
              <CustomersTab onGenerateInvoice={handleGenerateInvoice} />
            </TabsContent>
            <TabsContent value="settings" className="space-y-4">
              <SettingsTab />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;