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
  DialogTrigger,
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
import { PlusCircle } from "lucide-react";
import type { Customer } from "./CustomersTab";
import { showError } from "@/utils/toast";

const services = [
  "Social Media Management - Basic",
  "Social Media Management - Standard",
  "Social Media Management - Premium",
  "Web Design - Starter Site",
  "Web Design - Business Site",
  "Web Design - E-commerce Store",
  "Branding - Logo & Brand Identity",
  "Branding - Corporate Kit",
  "Videography - Social Media Reels",
  "Videography - Corporate & Brand Video",
  "3D Modeling - Static 3D Model",
  "3D Modeling - Animated Scene",
];

interface AddCustomerDialogProps {
  onSave: (customer: Omit<Customer, "id" | "created_at">) => void;
}

const AddCustomerDialog: React.FC<AddCustomerDialogProps> = ({ onSave }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [status, setStatus] = useState<Customer["status"]>("Pending");

  const handleSave = () => {
    if (name && service && status) {
      onSave({ name, email, company, service, status });
      setIsOpen(false);
      // Reset form
      setName("");
      setEmail("");
      setCompany("");
      setService("");
      setStatus("Pending");
    } else {
      showError("Please fill in all required fields: Name, Service, and Status.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add Customer
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Customer</DialogTitle>
          <DialogDescription>
            Fill in the details for the new customer.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="company" className="text-right">
              Company
            </Label>
            <Input
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="service" className="text-right">
              Service
            </Label>
            <Select onValueChange={setService} value={service}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <Select
              onValueChange={(value: Customer["status"]) => setStatus(value)}
              value={status}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Paid">Paid</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave}>Save Customer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddCustomerDialog;