import {
  type InvoicePaymentStatus,
  invoicePaymentStatus,
} from "packages/models/src/invoicePaymentStatus.generated.ts";
import { z } from "zod";

export type UpdateInvoicePaymentStatusEndpointRequestModel = {
  paymentStatus: InvoicePaymentStatus;
};

export const updateInvoicePaymentStatusEndpointRequestModel = z.object({
  paymentStatus: invoicePaymentStatus,
});
