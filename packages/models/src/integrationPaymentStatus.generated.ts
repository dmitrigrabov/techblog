import { z } from "zod";

export type IntegrationPaymentStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "PAID"
  | "FAILED"
  | "CANCELLED"
  | "REFUNDED";

export const integrationPaymentStatus = z.enum([
  "PENDING",
  "IN_PROGRESS",
  "PAID",
  "FAILED",
  "CANCELLED",
  "REFUNDED",
]);
