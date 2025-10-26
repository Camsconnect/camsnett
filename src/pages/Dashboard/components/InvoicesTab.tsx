"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle, Trash2, Download, FilePlus, Eye } from "lucide-react";
import camsnettLogo from "@/assets/camsnett-co-logo.png";
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
import type { Customer } from "./CustomersTab";
import { services } from "@/lib/services";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/contexts/SessionContext";
import { Skeleton } from "@/components/ui/skeleton";
import { showError, showSuccess } from "@/utils/toast";
import InvoicePreviewDialog from "./InvoicePreviewDialog";

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
  serviceStartDate: string;
  renewalDate: string;
  lineItems: LineItem[];
  discount: number;
  notes: string;
  status: "Paid" | "Pending" | "Overdue";
}

interface InvoicesTabProps {
  customerToPreFill: Customer | null;
  clearCustomerToPreFill: () => void;
}

const InvoicesTab: React.FC<InvoicesTabProps> = ({ customerToPreFill, clearCustomerToPreFill }) => {
  const { user } = useSession();
  const queryClient = useQueryClient();

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
  const [serviceStartDate, setServiceStartDate] = useState("");
  const [renewalDate, setRenewalDate] = useState("");
  const [notes, setNotes] = useState("Thank you for your business!");
  const [status, setStatus] = useState<"Paid" | "Pending" | "Overdue">("Pending");
  const [currentDraftId, setCurrentDraftId] = useState<string | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const { data: drafts, isLoading: isLoadingDrafts } = useQuery({
    queryKey: ['invoice_drafts', user?.id],
    queryFn: async () => {
        if (!user) return [];
        const { data, error } = await supabase
            .from('invoices')
            .select('id, invoice_data')
            .eq('user_id', user.id)
            .eq('status', 'draft')
            .order('created_at', { ascending: false });
        if (error) throw new Error(error.message);
        return data.map(d => ({ id: d.id, ...d.invoice_data })) as Invoice[];
    },
    enabled: !!user,
  });

  const saveDraftMutation = useMutation({
    mutationFn: async (draftData: Omit<Invoice, 'id'> & { id?: string }) => {
        if (!user) throw new Error("User not authenticated");
        const { id, ...invoice_data } = draftData;
        if (id) {
            const { data, error } = await supabase.from('invoices').update({ invoice_data, updated_at: new Date().toISOString() }).eq('id', id).select();
            if (error) throw new Error(error.message);
            return data;
        } else {
            const { data, error } = await supabase.from('invoices').insert({ user_id: user.id, invoice_data, status: 'draft' }).select();
            if (error) throw new Error(error.message);
            return data;
        }
    },
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['invoice_drafts', user?.id] });
        showSuccess("Draft saved successfully!");
        resetForm();
    },
    onError: (error) => {
        showError(`Error saving draft: ${error.message}`);
    }
  });

  const deleteDraftMutation = useMutation({
    mutationFn: async (draftId: string) => {
        const { error } = await supabase.from('invoices').delete().eq('id', draftId);
        if (error) throw new Error(error.message);
    },
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['invoice_drafts', user?.id] });
        showSuccess("Draft deleted successfully!");
    },
    onError: (error) => {
        showError(`Error deleting draft: ${error.message}`);
    }
  });

  const resetForm = () => {
    const newInvoiceNum = `INV-${String((drafts?.length || 0) + 1).padStart(3, '0')}`;
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
    setServiceStartDate("");
    setRenewalDate("");
    setNotes("Thank you for your business!");
    setLineItems([{ id: Date.now(), description: "", quantity: 1, price: 0 }]);
    setStatus("Pending");
    setCurrentDraftId(null);
  };

  useEffect(() => {
    if (customerToPreFill) {
      resetForm();
      setClientName(customerToPreFill.name);
      setClientEmail(customerToPreFill.email);
      setClientCompany(customerToPreFill.company);
      setStatus(customerToPreFill.status || "Pending");
      const service = services.find(s => s.name === customerToPreFill.service);
      if (service) {
        setLineItems([{ id: Date.now(), description: service.name, quantity: 1, price: service.price }]);
      } else {
        setLineItems([{ id: Date.now(), description: customerToPreFill.service, quantity: 1, price: 0 }]);
      }
      clearCustomerToPreFill();
    }
  }, [customerToPreFill, clearCustomerToPreFill, drafts]);

  const handleSaveDraft = () => {
    const draftData = {
      id: currentDraftId || undefined,
      invoiceNumber, clientName, clientCompany, clientAddress, clientEmail,
      issueDate, dueDate, serviceStartDate, renewalDate, lineItems, discount, notes, status,
    };
    saveDraftMutation.mutate(draftData);
  };

  const handleLoadDraft = (id: string) => {
    const draftToLoad = drafts?.find(d => d.id === id);
    if (draftToLoad) {
      setInvoiceNumber(draftToLoad.invoiceNumber);
      setClientName(draftToLoad.clientName);
      setClientCompany(draftToLoad.clientCompany);
      setClientAddress(draftToLoad.clientAddress);
      setClientEmail(draftToLoad.clientEmail);
      setIssueDate(draftToLoad.issueDate);
      setDueDate(draftToLoad.dueDate);
      setServiceStartDate(draftToLoad.serviceStartDate || "");
      setRenewalDate(draftToLoad.renewalDate || "");
      setLineItems(draftToLoad.lineItems);
      setDiscount(draftToLoad.discount);
      setNotes(draftToLoad.notes || "Thank you for your business!");
      setStatus(draftToLoad.status || "Pending");
      setCurrentDraftId(draftToLoad.id);
    }
  };

  const handleDeleteDraft = (id: string) => {
    deleteDraftMutation.mutate(id);
    if (currentDraftId === id) {
      resetForm();
    }
  };

  const handleAddLineItem = () => {
    setLineItems([...lineItems, { id: Date.now(), description: "", quantity: 1, price: 0 }]);
  };

  const handleRemoveLineItem = (id: number) => {
    setLineItems(lineItems.filter((item) => item.id !== id));
  };

  const handleLineItemChange = (id: number, field: keyof Omit<LineItem, 'id'>, value: string) => {
    setLineItems(lineItems.map((item) => item.id === id ? { ...item, [field]: value } : item));
  };
  
  const handleServiceSelect = (id: number, serviceName: string) => {
      const selectedService = services.find(s => s.name === serviceName);
      if (selectedService) {
          setLineItems(lineItems.map((item) => item.id === id ? { ...item, description: selectedService.name, price: selectedService.price } : item));
      }
  }

  const subtotal = lineItems.reduce((acc, item) => acc + Number(item.quantity) * Number(item.price), 0);
  const total = subtotal - discount;

  const populatePdf = (doc: jsPDF, img: HTMLImageElement) => {
    const brandColor = '#225751';

    // Header
    const logoWidth = 30;
    const logoAspectRatio = img.width / img.height;
    const logoHeight = logoWidth / logoAspectRatio;
    doc.addImage(img, 'PNG', 14, 15, logoWidth, logoHeight);

    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(40);
    let headerY = 18;
    doc.text(`Invoice #: ${invoiceNumber}`, 196, headerY, { align: 'right' }); headerY += 6;

    if (status === 'Paid') {
        doc.setFont(undefined, 'bold');
        doc.setTextColor('#228B22'); // ForestGreen
        doc.text('PAID', 196, headerY, { align: 'right' });
    } else {
        doc.setFont(undefined, 'bold');
        doc.setTextColor('#DC143C'); // Crimson
        doc.text(`AMOUNT DUE`, 196, headerY, { align: 'right' });
        headerY += 5;
        doc.setFontSize(12);
        doc.text(`$${total.toFixed(2)}`, 196, headerY, { align: 'right' });
    }
    headerY += 6;
    doc.setTextColor(40);
    doc.setFont(undefined, 'normal');
    doc.setFontSize(10);

    if (serviceStartDate) {
        doc.text(`Service Start: ${serviceStartDate}`, 196, headerY, { align: 'right' }); headerY += 6;
    }
    if (renewalDate) {
        doc.text(`Renewal Date: ${renewalDate}`, 196, headerY, { align: 'right' });
    }

    // From / Bill To
    let fromToY = 60;
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text("From", 14, fromToY);
    doc.text("Bill to", 110, fromToY);
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    fromToY += 6;
    doc.text("Camsnett", 14, fromToY);
    doc.text(clientName, 110, fromToY);
    fromToY += 5;
    doc.text("83 Durban Road, Mowbray", 14, fromToY);
    doc.text(clientCompany, 110, fromToY);
    fromToY += 5;
    doc.text("Capetown, South Africa", 14, fromToY);
    doc.text(clientAddress, 110, fromToY);
    fromToY += 5;
    doc.text("info@camsnett.com", 14, fromToY);
    doc.text(clientEmail, 110, fromToY);

    // Line Items Table
    const tableColumn = ["DESCRIPTION", "QTY", "RATE", "AMOUNT"];
    const tableRows: (string | number)[][] = [];
    lineItems.forEach(item => {
        const itemTotal = (Number(item.quantity) * Number(item.price)).toFixed(2);
        tableRows.push([item.description, item.quantity, `$${Number(item.price).toFixed(2)}`, `$${itemTotal}`]);
    });
    autoTable(doc, {
        head: [tableColumn],
        body: tableRows,
        startY: fromToY + 15,
        theme: 'striped',
        headStyles: { fillColor: brandColor, textColor: 255, fontStyle: 'bold' },
        styles: { cellPadding: 3, fontSize: 10 },
        columnStyles: {
            0: { cellWidth: 90 },
            1: { cellWidth: 20, halign: 'center' },
            2: { cellWidth: 30, halign: 'right' },
            3: { cellWidth: 40, halign: 'right' },
        }
    });

    let finalY = (doc as any).lastAutoTable.finalY;
    let bottomY = finalY + 15;

    // Footer Section
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text("Payment Instructions", 14, bottomY);
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    bottomY += 6;
    doc.text("We accept payments via PayPal, Visa, and Mastercard.", 14, bottomY);
    bottomY += 10;
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.text("Notes", 14, bottomY);
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    bottomY += 6;
    const splitNotes = doc.splitTextToSize(notes, 80);
    doc.text(splitNotes, 14, bottomY);

    // Totals
    let totalsY = finalY + 15;
    const totalsX = 196;
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text(`Subtotal:`, totalsX - 30, totalsY, { align: 'left' });
    doc.text(`$${subtotal.toFixed(2)}`, totalsX, totalsY, { align: 'right' });
    totalsY += 7;
    if (discount > 0) {
        doc.text(`Discount:`, totalsX - 30, totalsY, { align: 'left' });
        doc.text(`-$${discount.toFixed(2)}`, totalsX, totalsY, { align: 'right' });
        totalsY += 7;
    }
    const balanceDueY = totalsY + 2;
    doc.setFillColor(brandColor);
    doc.rect(110, balanceDueY - 5, 88, 10, 'F');
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(255);
    doc.text(`Balance Due:`, 115, balanceDueY);
    doc.text(`$${total.toFixed(2)}`, totalsX, balanceDueY, { align: 'right' });
    doc.setTextColor(40);

    // Page Footer
    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.text("Thank you for your business! | www.camsnett.com", 105, 285, { align: 'center' });
  };

  const generatePdfDoc = () => {
    return new Promise<jsPDF>((resolve, reject) => {
      const img = new Image();
      img.src = camsnettLogo;
      img.onload = () => {
        const doc = new jsPDF();
        populatePdf(doc, img);
        resolve(doc);
      };
      img.onerror = (err) => {
        showError("Error: Could not load logo image for PDF.");
        reject(err);
      };
    });
  };

  const handleDownloadPdf = async () => {
    try {
      const doc = await generatePdfDoc();
      doc.save(`Invoice-${invoiceNumber}.pdf`);
    } catch (error) {
      console.error("Failed to generate PDF for download:", error);
    }
  };

  const handleViewPdf = async () => {
    try {
      const doc = await generatePdfDoc();
      const pdfBlob = doc.output('blob');
      const url = URL.createObjectURL(pdfBlob);
      setPreviewUrl(url);
      setIsPreviewOpen(true);
    } catch (error) {
      console.error("Failed to generate PDF for preview:", error);
    }
  };

  const handlePreviewClose = (isOpen: boolean) => {
    if (!isOpen) {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
        setPreviewUrl(null);
      }
    }
    setIsPreviewOpen(isOpen);
  };

  return (
    <div className="space-y-4">
      <InvoicePreviewDialog isOpen={isPreviewOpen} onOpenChange={handlePreviewClose} pdfUrl={previewUrl} />
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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="grid gap-2">
                    <Label>Issue Date</Label>
                    <Input type="date" value={issueDate} onChange={(e) => setIssueDate(e.target.value)} />
                </div>
                <div className="grid gap-2">
                    <Label>Due Date</Label>
                    <Input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                </div>
                <div className="grid gap-2">
                  <Label>Status</Label>
                  <Select onValueChange={(value: "Paid" | "Pending" | "Overdue") => setStatus(value)} value={status}>
                      <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectItem value="Paid">Paid</SelectItem>
                          <SelectItem value="Pending">Pending</SelectItem>
                          <SelectItem value="Overdue">Overdue</SelectItem>
                      </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                    <Label>Service Start Date</Label>
                    <Input type="date" value={serviceStartDate} onChange={(e) => setServiceStartDate(e.target.value)} />
                </div>
                <div className="grid gap-2">
                    <Label>Renewal Date</Label>
                    <Input type="date" value={renewalDate} onChange={(e) => setRenewalDate(e.target.value)} />
                </div>
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
                              {services.map(service => (<SelectItem key={service.name} value={service.name}>{service.name}</SelectItem>))}
                          </SelectContent>
                      </Select>
                      <Textarea placeholder="Enter or edit service description..." value={item.description} onChange={(e) => handleLineItemChange(item.id, "description", e.target.value)} />
                    </TableCell>
                    <TableCell><Input type="number" value={item.quantity} onChange={(e) => handleLineItemChange(item.id, "quantity", e.target.value)} className="w-16" min="1" /></TableCell>
                    <TableCell><Input type="number" value={item.price} onChange={(e) => handleLineItemChange(item.id, "price", e.target.value)} className="w-24" step="0.01" /></TableCell>
                    <TableCell className="text-right">${(Number(item.quantity) * Number(item.price)).toFixed(2)}</TableCell>
                    <TableCell><Button variant="ghost" size="icon" onClick={() => handleRemoveLineItem(item.id)}><Trash2 className="h-4 w-4" /></Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button variant="outline" size="sm" className="mt-4" onClick={handleAddLineItem}><PlusCircle className="mr-2 h-4 w-4" />Add Item</Button>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" placeholder="Add any notes, terms, or a thank you message..." value={notes} onChange={(e) => setNotes(e.target.value)} className="mt-2" />
            </div>
            <div className="flex justify-end items-end">
              <div className="w-full max-w-xs space-y-2">
                <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Discount</span>
                    <div className="flex items-center gap-1"><span>$</span><Input type="number" value={discount} onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)} className="w-24 h-8 text-right" /></div>
                </div>
                <div className="flex justify-between font-bold text-lg"><span>Total</span><span>${total.toFixed(2)}</span></div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={handleSaveDraft} disabled={saveDraftMutation.isPending}>
            {saveDraftMutation.isPending ? "Saving..." : (currentDraftId ? "Update Draft" : "Save Draft")}
          </Button>
          <Button variant="outline" onClick={handleViewPdf}><Eye className="mr-2 h-4 w-4" />View Invoice</Button>
          <Button onClick={handleDownloadPdf}><Download className="mr-2 h-4 w-4" />Download PDF</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader><CardTitle>Saved Drafts</CardTitle></CardHeader>
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
              {isLoadingDrafts ? (
                Array.from({ length: 3 }).map((_, i) => (<TableRow key={i}><TableCell colSpan={5}><Skeleton className="h-8 w-full" /></TableCell></TableRow>))
              ) : drafts && drafts.length > 0 ? (
                drafts.map(draft => {
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
                        <Button variant="destructive" size="sm" onClick={() => handleDeleteDraft(draft.id)} disabled={deleteDraftMutation.isPending}>Delete</Button>
                      </TableCell>
                    </TableRow>
                  )
                })
              ) : (
                <TableRow><TableCell colSpan={5} className="text-center">No saved drafts.</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvoicesTab;