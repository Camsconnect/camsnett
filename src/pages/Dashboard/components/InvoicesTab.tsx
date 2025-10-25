"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Trash2, Download } from "lucide-react";
import camsnettLogo from "@/assets/camsnett-co-logo.png";

const services = [
  { name: "Social Media Management - Basic", price: 100 },
  { name: "Social Media Management - Standard", price: 180 },
  { name: "Social Media Management - Premium", price: 300 },
  { name: "Web Design - Starter Site", price: 80 },
  { name: "Web Design - Business Site", price: 250 },
  { name: "Web Design - E-commerce Store", price: 500 },
  { name: "Branding - Logo & Brand Identity", price: 150 },
  { name: "Branding - Corporate Kit", price: 250 },
  { name: "Videography - Social Media Reels", price: 150 },
  { name: "Videography - Corporate & Brand Video", price: 400 },
  { name: "3D Modeling - Static 3D Model", price: 500 },
  { name: "3D Modeling - Animated Scene", price: 1500 },
];

interface LineItem {
  id: number;
  description: string;
  quantity: number;
  price: number;
}

const InvoicesTab = () => {
  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: 1, description: "", quantity: 1, price: 0 },
  ]);

  const handleAddLineItem = () => {
    setLineItems([
      ...lineItems,
      { id: Date.now(), description: "", quantity: 1, price: 0 },
    ]);
  };

  const handleRemoveLineItem = (id: number) => {
    setLineItems(lineItems.filter((item) => item.id !== id));
  };

  const handleLineItemChange = (id: number, field: keyof Omit<LineItem, 'id' | 'description'>, value: string) => {
    const numericValue = parseFloat(value) || 0;
    setLineItems(
      lineItems.map((item) =>
        item.id === id ? { ...item, [field]: numericValue } : item
      )
    );
  };
  
  const handleServiceSelect = (id: number, serviceName: string) => {
      const selectedService = services.find(s => s.name === serviceName);
      if (selectedService) {
          setLineItems(
              lineItems.map((item) =>
                item.id === id ? { ...item, description: selectedService.name, price: selectedService.price } : item
              )
          );
      }
  }

  const subtotal = lineItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const tax = subtotal * 0.15; // Assuming 15% tax
  const total = subtotal + tax;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Invoice</CardTitle>
        <CardDescription>Fill out the details below to create a new invoice.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <div>
            <img src={camsnettLogo} alt="Camsnett Logo" className="h-16 w-auto object-contain" />
            <div className="mt-2 text-sm text-muted-foreground">
              <p>Camsnett</p>
              <p>123 Creative Lane</p>
              <p>Harare, Zimbabwe</p>
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-bold">INVOICE</h2>
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
              <Label htmlFor="invoice-number">Invoice #</Label>
              <Input id="invoice-number" defaultValue="INV-001" />
            </div>
          </div>
        </div>

        {/* Client and Dates Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold">Bill To:</h3>
            <Input placeholder="Client Name" />
            <Input placeholder="Client Company" />
            <Input placeholder="Client Address" />
            <Input type="email" placeholder="Client Email" />
          </div>
          <div className="space-y-4">
             <div className="grid gap-2">
                <Label>Issue Date</Label>
                <Input type="date" />
             </div>
             <div className="grid gap-2">
                <Label>Due Date</Label>
                <Input type="date" />
             </div>
          </div>
        </div>

        {/* Line Items Table */}
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50%]">Service Description</TableHead>
                <TableHead>Qty</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lineItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Select onValueChange={(value) => handleServiceSelect(item.id, value)} defaultValue={item.description}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                            {services.map(service => (
                                <SelectItem key={service.name} value={service.name}>{service.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleLineItemChange(item.id, "quantity", e.target.value)}
                      className="w-16"
                      min="1"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={item.price}
                      onChange={(e) => handleLineItemChange(item.id, "price", e.target.value)}
                      className="w-24"
                      step="0.01"
                    />
                  </TableCell>
                  <TableCell className="text-right">
                    ${(item.quantity * item.price).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" onClick={() => handleRemoveLineItem(item.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button variant="outline" size="sm" className="mt-4" onClick={handleAddLineItem}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Item
          </Button>
        </div>

        {/* Totals Section */}
        <div className="flex justify-end">
          <div className="w-full max-w-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tax (15%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Save Draft</Button>
        <Button>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InvoicesTab;