import { z } from "zod";

export type ApiBillingScheduleStatus =
  | "DRAFT"
  | "PENDING"
  | "ACTIVE"
  | "SUSPENDED"
  | "CANCELLED"
  | "COMPLETED";

export const apiBillingScheduleStatus = z.enum([
  "DRAFT",
  "PENDING",
  "ACTIVE",
  "SUSPENDED",
  "CANCELLED",
  "COMPLETED",
]);
