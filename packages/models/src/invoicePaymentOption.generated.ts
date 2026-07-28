import { z } from "zod";

export type InvoicePaymentOption = "BANK_TRANSFER" | "LINK";

export const invoicePaymentOption = z.enum(["BANK_TRANSFER", "LINK"]);
