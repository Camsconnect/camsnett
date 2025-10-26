"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, FileSearch } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/contexts/SessionContext";
import { showError, showSuccess } from "@/utils/toast";
import type { Customer } from "./CustomersTab";
import type { Task } from "./TasksTab";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import camsnettLogo from "@/assets/camsnett-co-logo.png";

interface ReportData extends Task {
  onTime: boolean;
}

const ReportsTab = () => {
  const { user } = useSession();
  const [selectedCustomerId, setSelectedCustomerId] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [reportData, setReportData] = useState<ReportData[] | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const { data: customers, isLoading: isLoadingCustomers } = useQuery({
    queryKey: ["customers", user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase.from("customers").select("*").eq("user_id", user.id);
      if (error) throw new Error(error.message);
      return data as Customer[];
    },
    enabled: !!user,
  });

  const handleGenerateReport = async () => {
    if (!selectedCustomerId || !startDate || !endDate) {
      showError("Please select a customer and a date range.");
      return;
    }
    setIsGenerating(true);
    setReportData(null);

    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .eq("user_id", user!.id)
      .eq("customer_id", selectedCustomerId)
      .eq("status", "Done")
      .gte("completed_at", new Date(startDate).toISOString())
      .lte("completed_at", new Date(endDate).toISOString())
      .order("completed_at", { ascending: true });

    if (error) {
      showError(`Error fetching report data: ${error.message}`);
      setIsGenerating(false);
      return;
    }

    const processedData = data.map((task) => ({
      ...task,
      onTime: new Date(task.completed_at!) <= new Date(task.due_date),
    }));

    setReportData(processedData);
    setIsGenerating(false);
    showSuccess("Report generated successfully!");
  };

  const handleDownloadPdf = () => {
    if (!reportData || reportData.length === 0) {
      showError("No report data to download.");
      return;
    }

    const customer = customers?.find(c => c.id === selectedCustomerId);
    if (!customer) {
      showError("Customer not found.");
      return;
    }

    const doc = new jsPDF();
    const img = new Image();
    img.src = camsnettLogo;

    img.onload = () => {
      const logoWidth = 30;
      const logoAspectRatio = img.width / img.height;
      const logoHeight = logoWidth / logoAspectRatio;
      doc.addImage(img, 'PNG', 14, 15, logoWidth, logoHeight);

      doc.setFontSize(18);
      doc.text("Performance Report", 196, 22, { align: "right" });
      doc.setFontSize(10);
      doc.text(`For: ${customer.name}`, 196, 28, { align: "right" });
      doc.text(`Period: ${startDate} to ${endDate}`, 196, 34, { align: "right" });

      const tableColumn = ["Task Title", "Due Date", "Completed Date", "Status"];
      const tableRows: (string | number)[][] = [];

      reportData.forEach(task => {
        tableRows.push([
          task.title,
          new Date(task.due_date).toLocaleDateString(),
          new Date(task.completed_at!).toLocaleDateString(),
          task.onTime ? "On Time" : "Late",
        ]);
      });

      autoTable(doc, {
        head: [tableColumn],
        body: tableRows,
        startY: 50,
        theme: 'striped',
        headStyles: { fillColor: '#225751' },
      });

      const onTimeCount = reportData.filter(t => t.onTime).length;
      const onTimePercentage = (onTimeCount / reportData.length * 100).toFixed(1);
      const finalY = (doc as any).lastAutoTable.finalY;
      doc.setFontSize(12);
      doc.text(`Summary: ${onTimeCount} of ${reportData.length} tasks completed on time (${onTimePercentage}%).`, 14, finalY + 15);

      doc.save(`Report_${customer.name}_${startDate}_${endDate}.pdf`);
    };
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Generate Performance Report</CardTitle>
          <CardDescription>
            Select a client and date range to generate a report of completed tasks.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-4 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="customer">Customer</Label>
            <Select onValueChange={setSelectedCustomerId} value={selectedCustomerId} disabled={isLoadingCustomers}>
              <SelectTrigger>
                <SelectValue placeholder="Select a customer" />
              </SelectTrigger>
              <SelectContent>
                {customers?.map((c) => (
                  <SelectItem key={c.id} value={c.id}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="start-date">Start Date</Label>
            <Input id="start-date" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="end-date">End Date</Label>
            <Input id="end-date" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </div>
          <div className="flex items-end">
            <Button onClick={handleGenerateReport} className="w-full" disabled={isGenerating}>
              <FileSearch className="mr-2 h-4 w-4" />
              {isGenerating ? "Generating..." : "Generate Report"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {reportData && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Report Results</CardTitle>
              <CardDescription>
                Found {reportData.length} completed tasks for the selected period.
              </CardDescription>
            </div>
            <Button onClick={handleDownloadPdf} variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Task</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Completed Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reportData.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell className="font-medium">{task.title}</TableCell>
                    <TableCell>{new Date(task.due_date).toLocaleDateString()}</TableCell>
                    <TableCell>{new Date(task.completed_at!).toLocaleDateString()}</TableCell>
                    <TableCell>
                      {task.onTime ? (
                        <span className="text-green-600 font-semibold">On Time</span>
                      ) : (
                        <span className="text-red-600 font-semibold">Late</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ReportsTab;