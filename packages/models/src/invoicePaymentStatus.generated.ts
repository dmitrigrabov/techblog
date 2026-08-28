import { z } from "zod";

export type InvoicePaymentStatus = "UNPAID" | "PARTIALLY_PAID" | "PAID" | "UNCOLLECTIBLE";

export const invoicePaymentStatus = z.enum(["UNPAID", "PARTIALLY_PAID", "PAID", "UNCOLLECTIBLE"]);
