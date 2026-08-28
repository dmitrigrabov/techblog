import { z } from "zod";

export type InvoiceStatus = "IN_PROGRESS" | "DRAFT" | "FINAL" | "SENT" | "VOIDED";

export const invoiceStatus = z.enum(["IN_PROGRESS", "DRAFT", "FINAL", "SENT", "VOIDED"]);
