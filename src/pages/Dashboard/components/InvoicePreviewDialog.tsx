"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface InvoicePreviewDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  pdfUrl: string | null;
}

const InvoicePreviewDialog: React.FC<InvoicePreviewDialogProps> = ({
  isOpen,
  onOpenChange,
  pdfUrl,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Invoice Preview</DialogTitle>
          <DialogDescription>
            This is a preview of your generated invoice. You can download it from the main page.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow">
          {pdfUrl ? (
            <iframe
              src={pdfUrl}
              className="w-full h-full border rounded-md"
              title="Invoice Preview"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p>Generating preview...</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InvoicePreviewDialog;