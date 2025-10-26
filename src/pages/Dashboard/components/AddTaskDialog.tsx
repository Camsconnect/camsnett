"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { showError } from "@/utils/toast";
import type { Customer } from "./CustomersTab";
import type { Task } from "./TasksTab";

interface AddTaskDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onSave: (task: Omit<Task, "id" | "created_at" | "completed_at" | "user_id">) => void;
  customers: Customer[];
  taskToEdit?: Task | null;
}

const AddTaskDialog: React.FC<AddTaskDialogProps> = ({
  isOpen,
  onOpenChange,
  onSave,
  customers,
  taskToEdit,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState<Task["status"]>("To Do");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description || "");
      setCustomerId(taskToEdit.customer_id);
      setDueDate(taskToEdit.due_date ? new Date(taskToEdit.due_date).toISOString().split('T')[0] : "");
      setStatus(taskToEdit.status);
    } else {
      // Reset form for new task
      setTitle("");
      setDescription("");
      setCustomerId("");
      setDueDate("");
      setStatus("To Do");
    }
  }, [taskToEdit, isOpen]);

  const handleSave = () => {
    if (!title || !customerId || !dueDate) {
      showError("Please fill in Title, Customer, and Due Date.");
      return;
    }
    onSave({
      title,
      description,
      customer_id: customerId,
      due_date: new Date(dueDate).toISOString(),
      status,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{taskToEdit ? "Edit Task" : "Add New Task"}</DialogTitle>
          <DialogDescription>
            {taskToEdit ? "Update the details for this task." : "Fill in the details for the new task."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="customer" className="text-right">
              Customer
            </Label>
            <Select onValueChange={setCustomerId} value={customerId}>
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
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="due-date" className="text-right">
              Due Date
            </Label>
            <Input
              id="due-date"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <Select onValueChange={(value: Task["status"]) => setStatus(value)} value={status}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="To Do">To Do</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Done">Done</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave}>Save Task</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskDialog;