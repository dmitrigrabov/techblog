import { z } from "zod";

export type InvoiceDunningStatus =
  | "SCHEDULED"
  | "OVERDUE_CHECK_SCHEDULED"
  | "COMPLETED"
  | "FAILED"
  | "NOT_REQUIRED";

export const invoiceDunningStatus = z.enum([
  "SCHEDULED",
  "OVERDUE_CHECK_SCHEDULED",
  "COMPLETED",
  "FAILED",
  "NOT_REQUIRED",
]);
