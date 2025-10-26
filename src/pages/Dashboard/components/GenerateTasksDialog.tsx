"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { showError } from "@/utils/toast";
import type { Customer } from "./CustomersTab";
import type { Task } from "./TasksTab";
import { taskTemplates } from "@/lib/task-templates";

interface GenerateTasksDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onGenerate: (tasks: Omit<Task, "id" | "created_at" | "completed_at" | "user_id">[]) => void;
  customers: Customer[];
}

const GenerateTasksDialog: React.FC<GenerateTasksDialogProps> = ({
  isOpen,
  onOpenChange,
  onGenerate,
  customers,
}) => {
  const [selectedCustomerId, setSelectedCustomerId] = useState("");

  const handleGenerate = () => {
    if (!selectedCustomerId) {
      showError("Please select a customer.");
      return;
    }

    const customer = customers.find((c) => c.id === selectedCustomerId);
    if (!customer) {
      showError("Selected customer not found.");
      return;
    }

    const templates = taskTemplates[customer.service];
    if (!templates || templates.length === 0) {
      showError(
        `No task templates found for the service: "${customer.service}". You can add tasks manually.`
      );
      return;
    }

    const today = new Date();
    const newTasks = templates.map((template) => {
      const dueDate = new Date(today);
      // Set due date to the end of the corresponding week
      dueDate.setDate(today.getDate() + template.week * 7);

      return {
        title: template.title,
        description: template.description,
        customer_id: customer.id,
        due_date: dueDate.toISOString(),
        status: "To Do" as const,
      };
    });

    onGenerate(newTasks);
    onOpenChange(false);
    setSelectedCustomerId("");
  };

  const selectedCustomerService = customers.find(c => c.id === selectedCustomerId)?.service;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Generate Monthly Tasks</DialogTitle>
          <DialogDescription>
            Select a customer to automatically generate a list of tasks for the
            next month based on their service package.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="customer" className="text-right">
              Customer
            </Label>
            <Select onValueChange={setSelectedCustomerId} value={selectedCustomerId}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a customer" />
              </SelectTrigger>
              <SelectContent>
                {customers.map((c) => (
                  <SelectItem key={c.id} value={c.id}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {selectedCustomerService && (
            <div className="text-center text-sm text-muted-foreground col-span-4">
              Service: <strong>{selectedCustomerService}</strong>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button onClick={handleGenerate}>Generate Tasks</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GenerateTasksDialog;