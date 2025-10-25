"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle, Trash2, Download, FilePlus } from "lucide-react";
import camsnettLogo from "@/assets/camsnett-co-logo.png";
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
import type { Customer } from "./CustomersTab";

const services = [
  { name: "Social Media Management - Basic", price: 100, brief: "Includes Facebook management, regular posting, and professionally designed graphics." },
  { name: "Social Media Management - Standard", price: 180, brief: "Includes Basic plan features plus Instagram & TikTok management, audience engagement, and a full branding kit design." },
  { name: "Social Media Management - Premium", price: 300, brief: "Includes Standard plan features plus management of up to 4 platforms and weekly strategy calls." },
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

interface Invoice {
  id: string;
  invoiceNumber: string;
  clientName: string;
  clientCompany: string;
  clientAddress: string;
  clientEmail: string;
  issueDate: string;
  dueDate: string;
  lineItems: LineItem[];
  discount: number;
}

interface InvoicesTabProps {
  customerToPreFill: Customer | null;
  clearCustomerToPreFill: () => void;
}

const InvoicesTab: React.FC<InvoicesTabProps> = ({ customerToPreFill, clearCustomerToPreFill }) => {
  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: 1, description: "", quantity: 1, price: 0 },
  ]);
  const [invoiceNumber, setInvoiceNumber] = useState("INV-001");
  const [clientName, setClientName] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [discount, setDiscount] = useState(0);
  const [issueDate, setIssueDate] = useState(new Date().toISOString().split('T')[0]);
  const [dueDate, setDueDate] = useState(() => {
      const date = new Date();
      date.setDate(date.getDate() + 30);
      return date.toISOString().split('T')[0];
  });
  const [drafts, setDrafts] = useState<Invoice[]>([]);
  const [currentDraftId, setCurrentDraftId] = useState<string | null>(null);

  const resetForm = () => {
    const newInvoiceNum = `INV-${String(drafts.length + 1).padStart(3, '0')}`;
    setInvoiceNumber(newInvoiceNum);
    setClientName("");
    setClientCompany("");
    setClientAddress("");
    setClientEmail("");
    setDiscount(0);
    setIssueDate(new Date().toISOString().split('T')[0]);
    setDueDate(() => {
      const date = new Date();
      date.setDate(date.getDate() + 30);
      return date.toISOString().split('T')[0];
    });
    setLineItems([{ id: Date.now(), description: "", quantity: 1, price: 0 }]);
    setCurrentDraftId(null);
  };

  useEffect(() => {
    if (customerToPreFill) {
      resetForm();
      setClientName(customerToPreFill.name);
      setClientEmail(customerToPreFill.email);
      setClientCompany(customerToPreFill.company);

      const service = services.find(s => s.name === customerToPreFill.service);
      if (service) {
        setLineItems([{
          id: Date.now(),
          description: service.name,
          quantity: 1,
          price: service.price,
        }]);
      } else {
        setLineItems([{
          id: Date.now(),
          description: customerToPreFill.service,
          quantity: 1,
          price: 0,
        }]);
      }
      
      clearCustomerToPreFill();
    }
  }, [customerToPreFill, clearCustomerToPreFill]);

  const handleSaveDraft = () => {
    const draftData: Invoice = {
      id: currentDraftId || Date.now().toString(),
      invoiceNumber, clientName, clientCompany, clientAddress, clientEmail,
      issueDate, dueDate, lineItems, discount,
    };

    if (currentDraftId) {
      setDrafts(drafts.map(d => d.id === currentDraftId ? draftData : d));
    } else {
      setDrafts([...drafts, draftData]);
    }
    resetForm();
  };

  const handleLoadDraft = (id: string) => {
    const draftToLoad = drafts.find(d => d.id === id);
    if (draftToLoad) {
      setInvoiceNumber(draftToLoad.invoiceNumber);
      setClientName(draftToLoad.clientName);
      setClientCompany(draftToLoad.clientCompany);
      setClientAddress(draftToLoad.clientAddress);
      setClientEmail(draftToLoad.clientEmail);
      setIssueDate(draftToLoad.issueDate);
      setDueDate(draftToLoad.dueDate);
      setLineItems(draftToLoad.lineItems);
      setDiscount(draftToLoad.discount);
      setCurrentDraftId(draftToLoad.id);
    }
  };

  const handleDeleteDraft = (id: string) => {
    setDrafts(drafts.filter(d => d.id !== id));
    if (currentDraftId === id) {
      resetForm();
    }
  };

  const handleAddLineItem = () => {
    setLineItems([
      ...lineItems,
      { id: Date.now(), description: "", quantity: 1, price: 0 },
    ]);
  };

  const handleRemoveLineItem = (id: number) => {
    setLineItems(lineItems.filter((item) => item.id !== id));
  };

  const handleLineItemChange = (id: number, field: keyof Omit<LineItem, 'id'>, value: string) => {
    setLineItems(
      lineItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
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

  const subtotal = lineItems.reduce((acc, item) => acc + Number(item.quantity) * Number(item.price), 0);
  const total = subtotal - discount;

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    const img = new Image();
    img.src = camsnettLogo;
    img.onload = () => {
        const logoWidth = 40;
        const logoAspectRatio = img.width / img.height;
        const logoHeight = logoWidth / logoAspectRatio;
        doc.addImage(img, 'PNG', 14, 15, logoWidth, logoHeight);

        doc.setFontSize(22);
        doc.setFont(undefined, 'bold');
        doc.text("INVOICE", 196, 22, { align: 'right' });

        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        doc.text(`Invoice #: ${invoiceNumber}`, 196, 30, { align: 'right' });
        doc.text(`Issue Date: ${issueDate}`, 196, 35, { align: 'right' });
        doc.text(`Due Date: ${dueDate}`, 196, 40, { align: 'right' });

        doc.setFontSize(10);
        doc.setFont(undefined, 'bold');
        doc.text("Camsnett", 14, 45);
        doc.setFont(undefined, 'normal');
        doc.text("83 Durban Road", 14, 50);
        doc.text("Mowbray, Capetown", 14, 55);

        doc.setFont(undefined, 'bold');
        doc.text("Bill To:", 14, 65);
        doc.setFont(undefined, 'normal');
        doc.text(clientName, 14, 70);
        doc.text(clientCompany, 14, 75);
        doc.text(clientAddress, 14, 80);
        doc.text(clientEmail, 14, 85);

        const tableColumn = ["Description", "Quantity", "Unit Price", "Total"];
        const tableRows: (string | number)[][] = [];
        lineItems.forEach(item => {
            tableRows.push([
                item.description,
                item.quantity,
                `$${Number(item.price).toFixed(2)}`,
                `$${(Number(item.quantity) * Number(item.price)).toFixed(2)}`
            ]);
        });

        autoTable(doc, {
            head: [tableColumn],
            body: tableRows,
            startY: 95,
            theme: 'grid',
            headStyles: { fillColor: [34, 87, 81] },
        });

        let finalY = (doc as any).lastAutoTable.finalY;

        const socialMediaBriefs = lineItems
            .map(item => {
                const service = services.find(s => s.name === item.description);
                return service && service.brief ? `* ${service.name}: ${service.brief}` : null;
            })
            .filter(brief => brief !== null)
            .join('\n');

        if (socialMediaBriefs) {
            finalY += 10;
            doc.setFontSize(10);
            doc.setFont(undefined, 'bold');
            doc.text("Package Details:", 14, finalY);
            finalY += 5;
            doc.setFont(undefined, 'normal');
            doc.setFontSize(9);
            const splitBriefs = doc.splitTextToSize(socialMediaBriefs, 180);
            doc.text(splitBriefs, 14, finalY);
            finalY += splitBriefs.length * 4;
        }

        let totalsY = finalY + 10;
        doc.setFontSize(10);
        doc.text(`Subtotal: $${subtotal.toFixed(2)}`, 196, totalsY, { align: 'right' });
        totalsY += 5;
        if (discount > 0) {
            doc.text(`Discount: -$${discount.toFixed(2)}`, 196, totalsY, { align: 'right' });
            totalsY += 7;
        } else {
            totalsY += 2;
        }
        
        doc.setFontSize(12);
        doc.setFont(undefined, 'bold');
        doc.text(`Total: $${total.toFixed(2)}`, 196, totalsY, { align: 'right' });

        doc.setFontSize(8);
        doc.setTextColor(150);
        doc.text("Explore our other services: Web Design, Branding, Videography, and 3D Modeling.", 105, 280, { align: 'center' });
        doc.text("www.camsnett.com", 105, 285, { align: 'center' });
        doc.text("Thank you for your business!", 105, 290, { align: 'center' });

        doc.save(`Invoice-${invoiceNumber}.pdf`);
    };
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Create Invoice</CardTitle>
            <CardDescription>Fill out the details below to create a new invoice.</CardDescription>
          </div>
          <Button variant="outline" onClick={resetForm}>
            <FilePlus className="mr-2 h-4 w-4" />
            New Invoice
          </Button>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <img src={camsnettLogo} alt="Camsnett Logo" className="h-16 w-auto object-contain" />
              <div className="mt-2 text-sm text-muted-foreground">
                <p>Camsnett</p>
                <p>83 Durban Road</p>
                <p>Mowbray, Capetown</p>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold">INVOICE</h2>
              <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
                <Label htmlFor="invoice-number">Invoice #</Label>
                <Input id="invoice-number" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold">Bill To:</h3>
              <Input placeholder="Client Name" value={clientName} onChange={(e) => setClientName(e.target.value)} />
              <Input placeholder="Client Company" value={clientCompany} onChange={(e) => setClientCompany(e.target.value)} />
              <Input placeholder="Client Address" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} />
              <Input type="email" placeholder="Client Email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />
            </div>
            <div className="space-y-4">
              <div className="grid gap-2">
                  <Label>Issue Date</Label>
                  <Input type="date" value={issueDate} onChange={(e) => setIssueDate(e.target.value)} />
              </div>
              <div className="grid gap-2">
                  <Label>Due Date</Label>
                  <Input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
              </div>
            </div>
          </div>

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
                      <Select onValueChange={(value) => handleServiceSelect(item.id, value)} value={item.description}>
                          <SelectTrigger className="mb-2">
                              <SelectValue placeholder="Select a service template" />
                          </SelectTrigger>
                          <SelectContent>
                              {services.map(service => (
                                  <SelectItem key={service.name} value={service.name}>{service.name}</SelectItem>
                              ))}
                          </SelectContent>
                      </Select>
                      <Textarea
                        placeholder="Enter or edit service description..."
                        value={item.description}
                        onChange={(e) => handleLineItemChange(item.id, "description", e.target.value)}
                      />
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
                      ${(Number(item.quantity) * Number(item.price)).toFixed(2)}
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

          <div className="flex justify-end">
            <div className="w-full max-w-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Discount</span>
                  <div className="flex items-center gap-1">
                      <span>$</span>
                      <Input
                          type="number"
                          value={discount}
                          onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
                          className="w-24 h-8 text-right"
                      />
                  </div>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={handleSaveDraft}>
            {currentDraftId ? "Update Draft" : "Save Draft"}
          </Button>
          <Button onClick={handleDownloadPdf}>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
          </Button>
        </CardFooter>
      </Card>

      {drafts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Saved Drafts</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice #</TableHead>
                  <TableHead>Client Name</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {drafts.map(draft => {
                  const draftSubtotal = draft.lineItems.reduce((acc, item) => acc + Number(item.quantity) * Number(item.price), 0);
                  const draftTotal = draftSubtotal - draft.discount;
                  return (
                    <TableRow key={draft.id}>
                      <TableCell>{draft.invoiceNumber}</TableCell>
                      <TableCell>{draft.clientName}</TableCell>
                      <TableCell>{draft.dueDate}</TableCell>
                      <TableCell className="text-right">${draftTotal.toFixed(2)}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm" onClick={() => handleLoadDraft(draft.id)} className="mr-2">Load</Button>
                        <Button variant="destructive" size="sm" onClick={() => handleDeleteDraft(draft.id)}>Delete</Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default InvoicesTab;